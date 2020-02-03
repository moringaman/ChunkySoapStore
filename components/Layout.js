import Head from 'next/head'
import Header from './Header'
import '../styles/Style.css'
export default function Layout(props) {
    return(
        <div>
            <Head>
                <title>WooCommerce React Theme</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.css"/>
            </Head>
            <Header />
            { props.children }
        </div>
    )
}