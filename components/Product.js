const Product = (props) => {
  const { product } = props
  console.log('Product', product)
  return (
      <div className="card mb-3" >
        <h3 className="card-header">{product.name}</h3>
        <img 
          style={{height: '300px', width: '100%', display: 'block', margin: 'auto auto'}}
          src={product.image ? product.image.sourceUrl: ''}
          // src={product.images.length ? product.images[0].src : ''}
          alt="Card image" 
        />
        <div className="card-body">
          <h6 className="card-subtitle text-muted">{ product.price }</h6>
        </div>
        <a href="" className="btn btn-secondary text-center">View</a>
      </div>
  )
}

export default Product