export const getFloatValue = (string) => {
  let floatVal = string.match(/[+-]?\d+(\.\d+)?/g)[0]
  console.warn(floatVal)
  return (null !== floatVal) ? parseFloat( parseFloat(floatVal).toFixed(2)): ''
} 
/**
 * @param  {} product
 * @param  {} =>{letproductPrice=getFloatValue(product.price
 * @param  {[]} letnewCart={products
 * @param  {1} totalProductsNumber
 * @param  {productPrice}constnewProduct=createNewProduct(product} totalProductsPrice
 * @param  {} productPrice
 * @param  {} 1
 * @param  {} newCart.products.push(newProduct
 * @param  {} localStorage.setItem('soap-cart'
 * @param  {} JSON.stringify(newCart
 */
export const addFirstProduct = (product) => {
  let productPrice = getFloatValue(product.price)
  
  let newCart = {
    products: [],
    totalProductsNumber: 1,
    totalProductsPrice: productPrice
  }

  const newProduct = createNewProduct(product, productPrice, 1)
  newCart.products.push(newProduct)
  localStorage.setItem('soap-cart', JSON.stringify(newCart))
  return newCart
}
/**
 * @param  {} product
 * @param  {} productPrice
 * @param  {} qty
 * @param  {product.productId} =>{return{productID
 * @param  {product.image.sourceUrl} image
 * @param  {product.name} name
 * @param  {productPrice} price
 * @param  {qty} qty
 * @param  {parseFloat((productPrice*qty} totalPrice
 */
export const createNewProduct = (product, productPrice, qty) => {
  return {
    productID: product.productId,
    image: product.image,
    name: product.name,
    price: productPrice,
    qty: qty,
    totalPrice: parseFloat((productPrice * qty).toFixed(2))
  }
}