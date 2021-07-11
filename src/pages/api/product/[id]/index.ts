import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const { id } = req.query
  const meliService = new MeliService()
  const product = await meliService.getProductById(id)
  res.status(200).json(product)
}
