import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const { id, page } = req.query
  const meliService = new MeliService()
  const [categorie, products] = await Promise.all([
    meliService.getCategorie(id),
    meliService.getProductsByCategory(id, page),
  ])
  res.status(200).json({
    categorie: {
      id: categorie.id,
      name: categorie.name,
      picture: categorie.picture,
    },
    products: products.results,
    paging: {
      ...products.paging,
      currentPage: page,
    },
  })
}
