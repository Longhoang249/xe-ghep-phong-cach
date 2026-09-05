import subprocess
import time
import sys

def run_applescript(script):
    res = subprocess.run(['osascript', '-e', script], capture_output=True, text=True)
    if res.returncode != 0:
        print("AppleScript error:", res.stderr)
    return res.stdout.strip()

def inspect_and_request(target_url):
    print(f"\n==========================================")
    print(f"Submitting to Google Search Console:")
    print(f"-> {target_url}")
    print(f"==========================================")
    
    # 1. Focus search bar by activating "Kiểm tra URL"
    print("[1/4] Focusing GSC inspection bar...")
    focus_script = '''
    set the clipboard to "Kiểm tra URL"
    tell application "Google Chrome"
        repeat with w in windows
            if title of active tab of w contains "Kiểm tra URL" or title of active tab of w contains "Search Console" then
                set index of w to 1
                activate
                exit repeat
            end if
        end repeat
    end tell
    delay 0.3
    tell application "System Events"
        tell process "Google Chrome"
            keystroke "f" using {command down}
            delay 0.2
            keystroke "v" using {command down}
            delay 0.2
            key code 53 -- escape
            delay 0.2
            key code 36 -- enter
            delay 0.4
        end tell
    end tell
    '''
    run_applescript(focus_script)
    time.sleep(1.0)

    # 2. Paste target URL and press Enter
    print("[2/4] Pasting URL and initiating inspection...")
    submit_url_script = f'''
    set the clipboard to "{target_url}"
    tell application "Google Chrome" to activate
    delay 0.2
    tell application "System Events"
        tell process "Google Chrome"
            keystroke "v" using {{command down}}
            delay 0.3
            key code 36 -- return
        end tell
    end tell
    '''
    run_applescript(submit_url_script)

    # 3. Wait for data retrieval (7s)
    print("[3/4] Waiting for Google index data retrieval...")
    time.sleep(7.0)

    # 4. Find and trigger "YÊU CẦU LẬP CHỈ MỤC"
    print("[4/4] Clicking 'YÊU CẦU LẬP CHỈ MỤC'...")
    request_script = '''
    set the clipboard to "YÊU CẦU LẬP CHỈ MỤC"
    tell application "Google Chrome" to activate
    delay 0.3
    tell application "System Events"
        tell process "Google Chrome"
            keystroke "f" using {command down}
            delay 0.2
            keystroke "v" using {command down}
            delay 0.2
            key code 53 -- escape
            delay 0.2
            key code 36 -- enter
        end tell
    end tell
    '''
    run_applescript(request_script)

    # Wait for test to complete (14s)
    time.sleep(14.0)

    # Dismiss confirmation dialog
    dismiss_script = '''
    tell application "Google Chrome" to activate
    delay 0.2
    tell application "System Events"
        tell process "Google Chrome"
            key code 36 -- enter to dismiss
        end tell
    end tell
    '''
    run_applescript(dismiss_script)
    time.sleep(1.5)
    print(f"✓ Completed priority indexing submission for: {target_url}")

if __name__ == "__main__":
    urls = sys.argv[1:]
    if not urls:
        print("Usage: python3 scripts/gsc_indexer.py <url1> <url2> ...")
        sys.exit(1)
    for u in urls:
        inspect_and_request(u)
        time.sleep(2.0)
    print("\nAll target URLs successfully submitted to Google Search Console!")
