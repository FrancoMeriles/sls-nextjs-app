import MeliService from '@base/service/meli.service'

export default async (req, res) => {
  const { id } = req.query
  const meliService = new MeliService()
  const categorie = await meliService.getCategorie(id)
  res.status(200).json(categorie)
}
