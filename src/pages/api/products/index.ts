import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const { query, page } = req.query
  const meliService = new MeliService()
  const products = await meliService.getProductsByQuery(query, page)
  res.status(200).json(products)
}
