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

/** Create a new product object
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

export const updateCart = (existingCart, product, qty, newQuantity = false) => {
  const updatedProducts = getUpdatedProducts(existingCart.products, product, qty, newQuantity) 
  const addTotal = (total, item) => {
    total.totalPrice += item.totalPrice
    total.qty += item.qty

    return total
  }

  let total = updatedProducts.reduce(addTotal, {totalPrice: 0, qty: 0})

  const updatedCart = {
    products: updatedProducts,
    totalProductsNumber: parseInt(total.qty),
    totalProductsPrice: parseInt(total.totalPrice)
  }

  localStorage.setItem('soap-cart', JSON.stringify(updatedCart))
  return updatedCart
}

/** Get updated cart array
 * Update product if it exists
 * add the new product to existing cart
 * @param  {} existingCartProducts
 * @param  {} newProduct
 * @param  {} qty
 * @param  {} newQuantity=false
 * @param  {} =>{constproductExistsIndex=isProductInCart(existingCartProducts
 * @param  {} newProduct.productID
 * @param  {} if(productExistsIndex>-1
 * @param  {} {letupdatedProducts=existingCartProductsletupdatedProduct=updatedProducts[productExistsIndex];updatedProduct.qty=(newQuantity?parseInt(newQuantity
 */
export const getUpdatedProducts = (existingCartProducts, product, qty, newQuantity = false) => {
  // Check if product is already in cart
  const productExistsIndex = isProductInCart(existingCartProducts, product.productID)
  // if in cart update quantity by qty and recalculate total price
  if (productExistsIndex > -1) {
    let updatedProducts = existingCartProducts
    let updatedProduct = updatedProducts[productExistsIndex];

    updatedProduct.qty = (newQuantity ? parseInt(newQuantity) : parseInt(updatedProduct.qty +  qty))  
    updatedProduct.totalPrice = parseFloat(updatedProduct.price * updatedProduct.qty).toFixed(2)
    return updatedProduct
  } else {
  // if not create new product and push onto array of products
    let productPrice = getFloatValue(product.price)
    let newProduct = createNewProduct(product, productPrice, qty)
    existingCartProducts.push(newProduct)
    return existingCartProducts
  }
}

/** Return index of product is it exists in the cart
 * @param  {} existingCartProducts
 * @param  {} newProductId
 * @param  {} =>{returnItemThatExists=(item
 * @param  {} index
 * @param  {} =>{if(item.productID===newProductId
 * @param  {} {returnitem}}constnewArray=existingCartProducts.filter(returnItemThatExists
 * @param  {} returnexistingCartProducts.indexOf(newArray[0]
 */
export const isProductInCart = (existingCartProducts, newProductId) => {
    const returnItemThatExists = (item, index) => {
      if (item.productID === newProductId) {
        return item
      }
    }

    const newArray = existingCartProducts.filter(returnItemThatExists)

    return existingCartProducts.indexOf(newArray[0])
}