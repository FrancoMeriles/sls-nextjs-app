import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const { id } = req.query
  const meliService = new MeliService()
  const [categorie, products] = await Promise.all([
    meliService.getCategorie(id),
    meliService.getProductsByCategory(id),
  ])
  res.status(200).json({
    id: categorie.id,
    name: categorie.name,
    products: products.results,
  })
}
