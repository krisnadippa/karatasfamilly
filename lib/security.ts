/**
 * Security utilities for input sanitization, safe URL validation, and XSS defense.
 */

const ALLOWED_PROTOCOLS = new Set(["https:", "http:"]);
const TRUSTED_IMAGE_HOSTS = new Set([
  "lh3.googleusercontent.com",
  "images.unsplash.com",
]);

/**
 * Sanitizes plain user input strings to prevent injection, strip HTML/script tags,
 * and remove dangerous characters.
 */
export function sanitizeInput(input: string, maxLength: number = 100): string {
  if (typeof input !== "string") return "";

  return input
    .slice(0, maxLength)
    .replace(/[<>'"&]/g, (char) => {
      switch (char) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "'":
          return "&#39;";
        case '"':
          return "&quot;";
        case "&":
          return "&amp;";
        default:
          return char;
      }
    })
    .trim();
}

/**
 * Validates external URLs to prevent SSRF and malicious protocol execution
 * (e.g. javascript:, data:, blob:, file:).
 */
export function isSafeExternalUrl(urlString: string): boolean {
  if (!urlString || typeof urlString !== "string") return false;

  const trimmed = urlString.trim();

  // Allow safe relative paths
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) {
    return true;
  }

  try {
    const parsed = new URL(trimmed);
    if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
      return false;
    }

    // Ensure hostname is present and not an internal network address (IP / localhost SSRF protection)
    if (
      parsed.hostname === "localhost" ||
      parsed.hostname === "127.0.0.1" ||
      parsed.hostname.startsWith("192.168.") ||
      parsed.hostname.startsWith("10.") ||
      parsed.hostname.endsWith(".local")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Verifies if an image host is trusted.
 */
export function isTrustedImageSource(url: string): boolean {
  if (!isSafeExternalUrl(url)) return false;
  if (url.startsWith("/")) return true;

  try {
    const parsed = new URL(url);
    return TRUSTED_IMAGE_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
}

