export default function getPriceWithTax(price) {
  if (!price) {
    return ""
  }

  // const withTax = price * 1.16
  const withTax = (price / 84) * 100

  const roundTen = Math.ceil(withTax / 10) * 10

  // console.log(`Preis: ${price}/ mitMwSt: ${withTax}/ gerundet: ${roundTen}`)

  return roundTen
}
