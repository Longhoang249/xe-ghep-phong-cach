type LogLevel = "info" | "warning" | "error";

export function getRequestId(request: Request) {
  return request.headers.get("x-vercel-id") || request.headers.get("x-request-id") || crypto.randomUUID();
}

export function logServerEvent(level: LogLevel, message: string, data: Record<string, unknown>) {
  const payload = JSON.stringify({ level, message, timestamp: new Date().toISOString(), ...data });
  if (level === "error") console.error(payload);
  else if (level === "warning") console.warn(payload);
  else console.log(payload);
}
