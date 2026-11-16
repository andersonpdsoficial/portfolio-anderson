export function getCircularIndex(
  currentIndex: number,
  delta: number,
  total: number,
): number {
  if (
    total <= 0 ||
    !Number.isInteger(currentIndex) ||
    !Number.isInteger(delta)
  ) {
    return 0;
  }

  return ((currentIndex + delta) % total + total) % total;
}