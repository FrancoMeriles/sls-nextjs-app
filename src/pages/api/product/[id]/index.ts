import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const { id } = req.query
  const meliService = new MeliService()
  const [product, productRated, productDescription] = await Promise.all([
    meliService.getProductById(id),
    meliService.getRatedProductById(id),
    meliService.getDescriptionByProductId(id),
  ])
  res.status(200).json({ product, productRated, productDescription })
}
