/**
 * Esta funcion cálcula el total del precio en una orden de compra
 * @param {Array} products cartProduct: Array de objetos
 * @returns {number} La sumatoria total de precios
 */
export const totalPrice = (products) => {
  const total = products.reduce((acumulador, product) => acumulador + product.price, 0)
  return total
}
