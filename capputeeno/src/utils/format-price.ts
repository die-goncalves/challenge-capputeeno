export function formatPrice(priceInCents: number) {
  const price = priceInCents / 100
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
