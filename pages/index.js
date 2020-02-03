import Layout from '../components/Layout'
// import fetch from 'isomorphic-unfetch'
// import clientConfig from '../wooConfig'
import client from '../components/ApolloClient'
import Product from '../components/Product'
import gql from 'graphql-tag'

import '../styles/Style.css'

const PRODUCTS_QUERY = gql`query{
    products(first: 20) {
    nodes {
      productId
      averageRating
      slug
      description
      name
      image {
        uri
        sourceUrl
      }
      ... on SimpleProduct {
        id
        name
        price
      }
    }
  }
}`
const Index = (props) => {
  console.warn(props)
  const { products } = props
  console.log(products.length)
  return (
    <Layout>
      <div className="product-container">
        {products.length > 0 ? (products.map(product => <Product product={product} key={product.id} />)) : ''}
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  // GRAPHQL METHOD
  const result = await client.query({ query: PRODUCTS_QUERY })

  return {
    products: result.data.products.nodes
  }
  // REST API METHOD
  // const res = await fetch(`${clientConfig.siteUrl}/getProducts`)
  // const ProductData = await res.json()
  // return {
  //   products: JSON.parse(ProductData)
  // }
}

export default Index