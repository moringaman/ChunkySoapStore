import Link from 'next/link'
import AddToCartButton from './cart/AddToCartButton'

const Product = (props) => {
  const { product } = props
  console.log('Product', product)
  return (
      <div className="card mb-3" >
        <h3 className="card-header">{product.name}</h3>
        <Link 
          as={`/product/${product.slug}-${product.productId}`} 
          href={`/product?slug=${product.slug}-${product.productId}`}
        >
          <a>
            <img 
              style={{height: '300px', width: '100%', display: 'block', margin: 'auto auto'}}
              src={product.image ? product.image.sourceUrl: ''}
              alt="Card image" 
            />
          </a>
        </Link>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">{ product.price }</h6>
        </div>
        <div className="product-buttons">
          <AddToCartButton product={product}/>
          <a href="" className="btn btn-primary text-center">View Cart</a> 
        </div>
      </div>
  )
}

export default Product