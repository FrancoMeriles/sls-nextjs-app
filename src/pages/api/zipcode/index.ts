import ZipCodeService from '@base/service/zipcode.service'

export default async (req, res) => {
  const zipCodeService = new ZipCodeService()
  const zipCode = await zipCodeService.getZipCode()
  res.status(200).json(zipCode)
}
