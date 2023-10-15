export function getCurrency(price: number | undefined): string {
  // eslint-disable-next-line no-console

  return `${Number(price) || '-'} $`;
}
