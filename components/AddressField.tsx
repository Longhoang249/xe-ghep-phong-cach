"use client";

import { useEffect, useRef, useState } from "react";

export type AddressSuggestion = { id: string; label: string; primary: string; secondary: string; city: string; lat: number; lng: number };

type Props = {
  label: string;
  value: string;
  placeholder: string;
  tone: "pickup" | "dropoff";
  error?: string;
  onChange: (value: string) => void;
  onSelect: (suggestion: AddressSuggestion) => void;
};

export default function AddressField({ label, value, placeholder, tone, error, onChange, onSelect }: Props) {
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AddressSuggestion[]>([]);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!focused || value.trim().length < 3) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/geocode?q=${encodeURIComponent(value.trim())}`, { signal: controller.signal });
        const data = await response.json() as { results?: AddressSuggestion[] };
        setResults(data.results || []);
      } catch (error) {
        if ((error as Error).name !== "AbortError") setResults([]);
      } finally { setLoading(false); }
    }, 320);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [focused, value]);

  return (
    <div className={`address-field ${tone} ${focused ? "is-focused" : ""}`}>
      <span className="address-dot" />
      <label>
        <span>{label}</span>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => { if (blurTimer.current) clearTimeout(blurTimer.current); setFocused(true); }}
          onBlur={() => { blurTimer.current = setTimeout(() => setFocused(false), 180); }}
          placeholder={placeholder}
          autoComplete="off"
          aria-invalid={!!error}
        />
      </label>
      {loading && <span className="address-loading" aria-label="Đang tìm địa chỉ" />}
      {focused && value.trim().length >= 3 && results.length > 0 && <div className="address-suggestions" role="listbox">
        {results.map((result) => <button type="button" key={result.id} onMouseDown={(event) => event.preventDefault()} onClick={() => { onSelect(result); setFocused(false); setResults([]); }}>
          <span>⌖</span><span><strong>{result.primary}</strong><small>{result.secondary}</small></span>
        </button>)}
        <p>Dữ liệu địa chỉ © OpenStreetMap</p>
      </div>}
      {error && <small className="address-error">{error}</small>}
    </div>
  );
}
