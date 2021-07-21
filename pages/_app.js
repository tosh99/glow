import '../styles/globals.scss'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <title>Products</title>
            <script src={`https://code.jquery.com/jquery-3.2.1.slim.min.js`}/>
            <script src={`https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js`}/>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
