export function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, duration));
}
export function round(num: number, precision: number = 2): number {
  const p = Math.pow(10, precision);
  return Math.round(num * p) / p;
}
