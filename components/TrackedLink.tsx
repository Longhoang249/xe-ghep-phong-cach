"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  eventName: string;
  eventData?: Record<string, string | number | boolean | null>;
};

export default function TrackedLink({ href, children, eventName, eventData, onClick, ...props }: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventData || {});
    onClick?.(event);
  };
  return <a href={href} {...props} onClick={handleClick}>{children}</a>;
}
