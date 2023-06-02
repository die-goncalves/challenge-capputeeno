const collections = ['', 't-shirts', 'mugs'] as const
type Collection = (typeof collections)[number]
enum CollectionPTBR {
  '' = 'Todas as categorias',
  't-shirts' = 'Camisetas',
  'mugs' = 'Canecas'
}

export { type Collection, CollectionPTBR, collections }
