import Head from 'next/head'
import Header from './Header'
import '../styles/Style.css'
import { AppProvider } from './context/AppContext'

export default function Layout(props) {
    return(
      <AppProvider>
        <div>
            <Head>
                <title>WooCommerce React Theme</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <Header />
            { props.children }
        </div>
      </AppProvider>
    )
}