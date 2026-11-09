"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

/**
 * Validates URLs to prevent XSS (e.g. javascript:, data: image vectors).
 * Only allows trusted https or local relative paths.
 */
function isSafeUrl(url: string | unknown): boolean {
  if (typeof url !== "string") return false;
  const trimmed = url.trim();
  if (trimmed.startsWith("/") || trimmed.startsWith("https://")) {
    return true;
  }
  return false;
}

export function SafeImage({
  src,
  alt,
  fallbackSrc = "/fallback-book.png",
  className,
  ...rest
}: SafeImageProps) {
  const [error, setError] = useState(false);

  const safeSrc =
    !error && isSafeUrl(src) ? (src as string) : fallbackSrc;

  // If the provided URL is completely unsafe (e.g. javascript: injection), fail safe
  if (!isSafeUrl(safeSrc)) {
    return (
      <div
        className={`bg-slate-200 flex items-center justify-center text-slate-400 text-xs ${className || ""}`}
        role="img"
        aria-label={alt || "Image unavailable"}
      >
        <span>No image</span>
      </div>
    );
  }

  return (
    <Image
      src={safeSrc}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...rest}
    />
  );
}

