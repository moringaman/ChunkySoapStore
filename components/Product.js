const Product = (props) => {
  const { product } = props
  console.log('Product', product)
  return (
      <div className="card mb-3" >
        <h3 className="card-header">{product.name}</h3>
        <img 
          style={{height: '500px', width: '500px', display: 'block', margin: 'auto auto'}}
          src={product.images.length ? product.images[0].src : ''}
          alt="Card image" 
        />
        <div className="card-body">
          <h6 className="card-subtitle text-muted">&pound;{ product.price }</h6>
        </div>
        <a href="" className="btn btn-secondary text-center">View</a>
      </div>
  )
}

export default Product