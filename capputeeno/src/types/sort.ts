const sorts = ['news', 'desc', 'asc', 'sales'] as const
type Sort = (typeof sorts)[number]
enum SortPTBR {
  'news' = 'Novidades',
  'desc' = 'Preço: Maior - menor',
  'asc' = 'Preço: Menor - maior',
  'sales' = 'Mais vendidos'
}

export { type Sort, sorts, SortPTBR }
