const next = require('next')
const express = require('express')
const WooCommerceRestApi = require('woocommerce-api')
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const WooCommerce = new WooCommerceRestApi({
  url: 'http://localhost', // Your store URL
  consumerKey: 'ck_d5174ae9e479ac1b5c1c656be5a4f4374bf98b46', // Your consumer key
  consumerSecret: 'cs_dbc30766ae9e37348c155f78b2714fc48ad635b7', // Your consumer secret
  version: 'wc/v3', // WooCommerce WP REST API version
  verifySsl: false,
  wpAPI: true
});


app.prepare()
    .then(() => {
        const server = express()

        server.get('/getProducts', (req, response) => {
            WooCommerce.getAsync('products').then(function(result) {
              // console.log(result)
              response.json(result.body);
        })
        .catch(err => {
            console.log(err)
        });
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) {
                throw err
            }
            console.log(`Server ready on port: ${port}`)
        })
            // .catch(ex => {
            //     console.log(ex.stack)
            //     process.exit(1)
            // })
    })