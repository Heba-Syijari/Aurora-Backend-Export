export function formatDate(d: Date | string): string {
  const [, month, day, year] = new Date(d).toDateString().split(' ');

  return `${day} ${month}, ${year}`;
}
