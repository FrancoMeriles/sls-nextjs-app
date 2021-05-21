import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const meliService = new MeliService()
  const categories = await meliService.getCategories()
  res.status(200).json(categories)
}
