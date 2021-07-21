import styles from './styles/products.module.scss'
import {Fragment, useEffect, useState} from "react";
import Slider from "react-slick";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import NextBack from "../shared/components/nextback/nextback";
import PageHeader from "../shared/components/page-header/page-header";
import Head from "next/head";

export default function Products() {
    const body_slider_settings = {
        dots: false,
        speed: 1250,
        arrows: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        adaptiveHeight: true,
        beforeChange: (current, next) => {
            set_current_body_slide(next)
        },
    };
    const [current_body_slide, set_current_body_slide] = useState(0);
    const [body_slider, set_body_slider] = useState({});

    // const favorite_slider_settings = {
    //     dots: false,
    //     speed: 1250,
    //     centerMode: true,
    //     adaptiveHeight: true,
    //     variableWidth: true,
    //     arrows: false,
    //     // autoplay: true,
    //     autoplaySpeed: 2000,
    // };

    const favorite_slider_settings = {
        loop: true,
        center: true,
        autoplay: true,
        nav: false,
        autoplayTimeout: 2500,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
        }
    }
    const [favorite_slider, set_favorite_slider] = useState({});
    const favorite_products = [
        {
            title: 'Lotion P50 BR',
        },
        {
            title: 'Warming Honey Cleanser',
        },
        {
            title: 'Mitti raw face mask pureearth',
        },
        {
            title: 'Pro heal serum is clinical',
        },
        {
            title: 'Oligo proteins marines serum',
        },
        {
            title: 'Lait vip 02',
        },
        {
            title: 'Heliocare mineral tolerance fluid',
        },
        {
            title: 'Biokiss lip balm',
        },
        {
            title: 'Creme aux acid de fruits',
        },
        {
            title: 'Masque vip 02',
        },
    ];

    const products_alternate_settings = {
        dots: true,
        speed: 2250,
        centerMode: true,
        adaptiveHeight: true,
        variableWidth: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 4000,
        beforeChange: (current, next) => {
            console.log(current)
            console.log(next)
            set_current_products_alternate_slide(next)
        },
    };
    const [products_alternate_slider, set_products_alternate_slider] = useState({});
    const [current_products_alternate_slide, set_current_products_alternate_slide] = useState(0);
    const products_alternate_content = [
        {
            title: 'Sesderma Azelac Ru Liposomal Serum',
            content: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.'
        },
        {
            title: 'Cleansing complex',
            content: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.'
        },
        {
            title: 'Mask vivant',
            content: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have acquired a cult status for their new-age formulations and are targeted towards lasting skincare benefits. A healthy glow awaits you.'
        },
        {
            title: 'Lait vip 02',
            content: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.'
        },
        {
            title: 'P50 pigm400',
            content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
        },
        {
            title: 'Isdin fotoprotector fusion water',
            content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
        },
        {
            title: 'Dubai lips',
            content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
        }
    ];

    const rtl = [
        {
            title: 'Good for <br/>' + 'Glow',
            desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            shop: 'Body',
        },
        {
            title: 'Get set <br/>' + 'Glow',
            desc: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.',
            shop: 'Body',
        },
        {
            title: 'You <br/>' + 'Glow',
            desc: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have been praised and given a cult status for their new-age formulations, therapies and lasting skincare benefits. A healthy glow awaits you.',
            shop: 'Body',
        },
        {
            title: 'Glow From <br/>' + 'Within',
            desc: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.',
            shop: 'Body',
        },
        {
            title: 'At home <br/>' + 'Glow',
            desc: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.',
            shop: 'Body',
        },
    ];

    useEffect(() => {
        const owl = $('.owl-carousel');
        owl.owlCarousel(favorite_slider_settings);

        $('#cfPrevId').click(function () {
            owl.trigger('prev.owl.carousel');
        })

        $('#cfNextId').click(function () {
            owl.trigger('next.owl.carousel');
        })
    }, [])

    return (<Fragment>
        <Head>
            <title>Products</title>
            {/*<script src={`https://code.jquery.com/jquery-3.2.1.slim.min.js`}/>*/}
            {/*<script src={`https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js`}/>*/}
            {/*<script dangerouslySetInnerHTML={{*/}
            {/*    __html: `*/}
            {/*        $(document).ready(function(){*/}
            {/*            var owl = $('.owl-carousel');*/}
            {/*            const settings = {*/}
            {/*                loop: true,*/}
            {/*                center: true,*/}
            {/*                autoplay: true,*/}
            {/*                nav: false,*/}
            {/*                autoplayTimeout: 2500,*/}
            {/*                autoplaySpeed: 1000,*/}
            {/*                responsive: {*/}
            {/*                    0: {*/}
            {/*                        items: 1,*/}
            {/*                    },*/}
            {/*                    600: {*/}
            {/*                        items: 3,*/}
            {/*                    },*/}
            {/*                    1000: {*/}
            {/*                        items: 5,*/}
            {/*                    }*/}
            {/*                }*/}
            {/*            }*/}
            {/*            */}
            {/*            owl.owlCarousel(settings);*/}
            {/*            */}
            {/*            $('#cfPrevId').click(function() {*/}
            {/*                owl.trigger('prev.owl.carousel');*/}
            {/*            })*/}
            {/*            */}
            {/*            $('#cfNextId').click(function() {*/}
            {/*                owl.trigger('next.owl.carousel');*/}
            {/*            })*/}
            {/*            */}
            {/*        });*/}
            {/*        */}
            {/*    `,*/}
            {/*}}>*/}
            {/*</script>*/}
        </Head>
        <PageHeader title={'Products'}/>
        <div className={"outer " + styles.bodyOuter}>
            <div className={"inner " + styles.body}>
                <div className={styles.bLeft}>
                    <div>
                        <h1 dangerouslySetInnerHTML={{__html: rtl[current_body_slide].title}}/>
                        <p>{rtl[current_body_slide].desc}</p>
                    </div>
                    <header>Shop {rtl[current_body_slide].shop}</header>
                </div>
                <div className={styles.bRight}>
                    <Slider ref={slider => {
                        set_body_slider(slider)
                    }} {...body_slider_settings}>
                        {
                            rtl.map((item, index) => {
                                return (<Fragment>
                                    <div className={styles.slide}>
                                        <img src={'/images/products/top/' + (index) + '.png'}/>
                                    </div>
                                </Fragment>)
                            })
                        }
                    </Slider>
                    <div>
                        <NextBack onBack={body_slider.slickPrev} onNext={body_slider.slickNext}/>
                    </div>

                </div>

            </div>
        </div>

        <div className={"outer " + styles.productDescOuter}>
            <div className={"inner " + styles.productDesc}>
                <p>After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7 on our
                    online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or
                    even place an order for curbside pick-up. These products are tried and tested cult favourites and made with
                    innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness
                    journey
                </p>
            </div>
        </div>

        <div className={"outer " + styles.currentFavouritesOuter}>
            <div className={"inner " + styles.currentFavourites}>
                <div className={styles.cfHeader}>
                    <h2>Varshini's Current Favourites</h2>
                    <div>
                        <NextBack prevId={'cfPrevId'} nextId={'cfNextId'}/>
                    </div>
                </div>

                <div className={"owl-carousel"}>
                    {
                        favorite_products.map((item, index) => {
                            return (<Fragment>
                                <div className={styles.cfSlide}>
                                    <img src={'/images/products/fav/' + (index) + '.png'}/>
                                    <header>{item.title}</header>
                                </div>
                            </Fragment>)
                        })
                    }
                </div>
                {/*<Slider ref={slider => {*/}
                {/*    set_favorite_slider(slider)*/}
                {/*}} {...favorite_slider_settings}>*/}
                {/*    {*/}
                {/*        favorite_products.map((item, index) => {*/}
                {/*            return (<Fragment>*/}
                {/*                <div className={styles.cfSlide}>*/}
                {/*                    <img src={'/images/products/fav/' + (index) + '.png'}/>*/}
                {/*                    <header>{item.title}</header>*/}
                {/*                </div>*/}
                {/*            </Fragment>)*/}
                {/*        })*/}
                {/*    }*/}
                {/*</Slider>*/}
            </div>
        </div>

        <div className={"outer " + styles.shopMyShelfieOuter}>
            <div className={"inner " + styles.shopMyShelfie}>
                <div className={styles.smLeft}>
                    <h2>Shop my shelfie</h2>
                </div>
                <div className={styles.smRight}>
                    <p> Being a skincare enthusiast myself, I am always on the lookout for new products to add to my repertoire.
                        These are a few of my current favourites, some of which are staples in my routine and some new ones you would
                        be happy to discover. Shop these curated products and refresh your skincare shelf.
                    </p>
                    <header>glow.shop</header>
                </div>

            </div>
        </div>

        <div className={styles.slidersOuter}>
            <div className={styles.sliders}>
                <Slider ref={slider => {
                    set_products_alternate_slider(slider)
                }} {...products_alternate_settings}>
                    {
                        products_alternate_content.map((item, index) => {
                            return (<Fragment>
                                <div className={styles.slide}>
                                    {
                                        current_products_alternate_slide === index &&
                                        <InView threshold={0}>
                                            {
                                                ({ref, inView}) => (
                                                    <motion.div className={styles.title}
                                                                ref={ref}
                                                                initial={{opacity: 0}}
                                                                animate={inView ? {opacity: 1} : {opacity: 0}}
                                                                transition={{duration: 0.7}}>
                                                        {item.title}
                                                    </motion.div>)
                                            }
                                        </InView>

                                    }
                                    <img className={"gr " + (current_products_alternate_slide === index ? styles.banner : '')} src={'/images/products/alternate-products/' + index + '.png'}/>
                                    <div className={styles.shopNow}>
                                        {/*<h3>0{index + 1} / <span>0{products_alternate_content.length}</span></h3>*/}
                                        <p>SHOP NOW</p>
                                        <NextBack theme={'light'} onBack={products_alternate_slider.slickPrev} onNext={products_alternate_slider.slickNext}/>
                                    </div>
                                </div>

                            </Fragment>)
                        })
                    }
                </Slider>
            </div>
        </div>

    </Fragment>)
}