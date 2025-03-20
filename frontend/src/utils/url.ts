export function getURLHostname(url: string): string {
  return new URL(url).hostname;
}
