import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const { zip_code, id } = req.query
  const meliService = new MeliService()
  const shippingOptions = await meliService.getShippingOptionsByProductId(id, zip_code)
  res.status(200).json(shippingOptions)
}
