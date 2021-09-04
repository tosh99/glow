import styles from './styles/products.module.scss'
import {Fragment, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import NextBack from "../shared/components/nextback/nextback";
import PageHeader from "../shared/components/page-header/page-header";
import Head from "next/head";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper/core';
import Footer from "../shared/components/footer/footer";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Products() {
    // Body Settings
    const [current_body_slide, set_current_body_slide] = useState(0);
    const [body_swiper, set_body_swiper] = useState({});
    const body_content = [
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

    // Favorite Settings
    const [favorite_swiper, set_favorite_swiper] = useState({});
    const [current_favorite_slide, set_current_favorite_slide] = useState(0);
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

    // Alternate Settings
    const [products_alternate_swiper, set_products_alternate_swiper] = useState({});
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


    return (<Fragment>
        <Head>
            <title>Products</title>
        </Head>
        <PageHeader title={'Products'}/>
        <div className={"outer " + styles.bodyOuter}>
            <div className={"inner " + styles.body}>
                <div className={styles.bLeft}>
                    <div>
                        <h1 dangerouslySetInnerHTML={{__html: body_content[current_body_slide].title}}/>
                        <p>{body_content[current_body_slide].desc}</p>
                    </div>
                    <header>Shop {body_content[current_body_slide].shop}</header>
                </div>
                <div className={styles.bRight}>
                    <Swiper slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                            }}
                            loop={true}
                            onInit={(ev) => {
                                set_body_swiper(ev)
                            }}
                            onSlideChange={(ev) => {
                                if (ev.activeIndex - 1 === 5) {
                                    set_current_body_slide(0)
                                } else {
                                    set_current_body_slide(ev.activeIndex - 1)
                                }
                            }}>
                        {
                            body_content.map((item, index) => {
                                return (<SwiperSlide>
                                        <div className={styles.slide}>
                                            <img src={'/images/products/top/' + (index) + '.png'}/>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div>
                        <NextBack onBack={() => {
                            body_swiper.slidePrev()
                        }} onNext={() => {
                            body_swiper.slideNext()
                        }}/>
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
                        <NextBack onBack={() => {
                            favorite_swiper.slidePrev()
                        }} onNext={() => {
                            favorite_swiper.slideNext()
                        }}/>
                    </div>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    loop={true}
                    onInit={(ev) => {
                        set_favorite_swiper(ev)
                    }}
                    onSlideChange={(ev) => {
                        if (ev.activeIndex - 1 === 5) {
                            set_current_favorite_slide(0)
                        } else {
                            set_current_favorite_slide(ev.activeIndex - 1)
                        }
                    }}>
                    {
                        favorite_products.map((item, index) => {
                            return (<SwiperSlide>
                                    <div className={styles.cfSlide}>
                                        <img src={'/images/products/fav/' + (index) + '.png'}/>
                                        <header>{item.title}</header>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
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
                <Swiper slidesPerView={'auto'}
                        autoplay={{
                            delay: 250000,
                        }}
                        centeredSlides={true}
                        loop={true}
                        onSlideChange={(ev) => {
                            if (ev.activeIndex - 7 === 7) {
                                set_current_products_alternate_slide(0)
                            } else {
                                set_current_products_alternate_slide(ev.activeIndex - 7)
                            }

                        }}>
                    {
                        products_alternate_content.map((item, index) => {
                            return (<SwiperSlide>
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
                                        <img className={"grayscale " + (current_products_alternate_slide === index ? styles.banner : '')} src={'/images/products/alternate-products/' + (index) + '.png'}/>
                                        <div>
                                            {/*<h3>0{index + 1} / <span>0{products_alternate_content.length}</span></h3>*/}
                                            {/*<p>{item.content}</p>*/}
                                            <InView threshold={0}>
                                                {
                                                    ({ref, inView}) => (
                                                        <motion.div className={styles.titleM}
                                                                    ref={ref}
                                                                    initial={{opacity: 0}}
                                                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                                                    transition={{duration: 0.7}}>
                                                            {item.title}
                                                        </motion.div>)
                                                }
                                            </InView>
                                            <header>ENQUIRE</header>
                                            <NextBack theme={'light'}/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>


        <Footer/>

    </Fragment>)
}