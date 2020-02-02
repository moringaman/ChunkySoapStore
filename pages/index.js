import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import clientConfig from '../wooConfig'
import Product from '../components/Product'
import '../styles/style.css'
const Index = (props) => {
  console.log(props)
  const { products } = props
  console.log(products.length)
    return (
        <Layout>
          <div className="product-container">
            { products.length > 0 ? ( products.map(product => <Product product={product} key={product.id}/> )) : ''}
          </div>
        </Layout>
    )
}

Index.getInitialProps = async() => {
  const res = await fetch(`${clientConfig.siteUrl}/getProducts`)
  const ProductData = await res.json()
  return {
    products: JSON.parse(ProductData)
  }
}

export default Index