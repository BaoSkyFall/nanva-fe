import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import store from "@/store/store";
import NextNProgress from 'nextjs-progressbar';
import { ConfigProvider } from 'antd';
import theme from './theme/themeConfig';

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextNProgress color='linear-gradient(90deg, #000000, #ed1e24)' height={6} />
            <Head>
                <title>Nava Farm Shop</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    cont
                    ent="width=device-width, initial-scale=1"
                />
                {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}

                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@200;300;400;500;600;700&family=Amatic+SC:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
                <meta name="msapplication-TileImage" content="/assets/img/favicons/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/favicons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/assets/img/favicons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/favicons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/favicons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/favicons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/favicons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/favicons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/assets/img/favicons/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/assets/img/favicons/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
                <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
                <link rel="stylesheet" href="/assets/css/layerslider.min.css" />
                <link rel="stylesheet" href="/assets/css/jquery.datetimepicker.min.css" />
                <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
                <link rel="stylesheet" href="/assets/css/slick.min.css" />
                <link rel="stylesheet" href="/assets/css/animate.min.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />

            </Head>
            <Provider store={store}>
                <Header />
                <ConfigProvider theme={theme}>

                    <Component {...pageProps} />
                </ConfigProvider>
                <Footer />
                <script src="/assets/js/vendor/jquery-3.6.0.min.js"></script>

                <script src="/assets/js/slick.min.js"></script>


                <script src="/assets/js/layerslider.utils.js"></script>
                <script src="/assets/js/layerslider.transitions.js"></script>
                <script src="/assets/js/layerslider.kreaturamedia.jquery.js"></script>

                <script src="/assets/js/bootstrap.bundle.min.js"></script>

                <script src="/assets/js/jquery.datetimepicker.min.js"></script>

                <script src="/assets/js/imagesloaded.pkgd.min.js"></script>
                <script src="/assets/js/isotope.pkgd.min.js"></script>

                <script src="/assets/js/jquery.magnific-popup.min.js"></script>

                <script src="/assets/js/jquery-ui.min.js"></script>

                <script src="/assets/js/wow.min.js"></script>

                <script src="/assets/js/vscustom-carousel.min.js"></script>

                <script src="/assets/js/vsmenu.min.js"></script>

                <script src="/assets/js/ajax-mail.js"></script>

                <script src="/assets/js/main.js"></script>
            </Provider>
        </>
    );
}
