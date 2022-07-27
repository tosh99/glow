import styles from './styles/products.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import NextBack from "../shared/components/nextback/nextback";
import PageHeader from "../shared/components/page-header/page-header";
import Head from "next/head";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';
import Footer from "../shared/components/footer/footer";
import Strip from "../shared/sections/strip/strip";
import BackToTop from "../shared/components/back-to-top";
import BookNow from "../shared/components/book-now";
import Dots from "../shared/components/dots";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
const strip_items = [
    {
        title: 'Body'
    },
    {
        title: 'Hair'
    },
    {
        title: 'Wellness'
    },
    {
        title: 'Beauty'
    }
]

export default function Products() {
    // Body Settings
    const [current_body_slide, set_current_body_slide] = useState(0);
    const [body_swiper, set_body_swiper] = useState({});
    const body_content = [
        {
            title: 'Good for <br/>' + 'Glow',
            desc: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            shop: 'Body',
            strip_items: [
                {
                    title: 'Lotion'
                },
                {
                    title: 'Wash'
                },
                {
                    title: 'Serums'
                },
                {
                    title: 'Sunscreens'
                }
            ]
        },
        {
            title: 'Get set <br/>' + 'Glow',
            desc: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.',
            shop: 'Hair',
            strip_items: [
                {
                    title: 'Shampoo'
                },
                {
                    title: 'Conditioners'
                },
                {
                    title: 'Serums'
                },
                {
                    title: 'Masks'
                }
            ]
        },
        {
            title: 'You <br/>' + 'Glow',
            desc: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have been praised and given a cult status for their new-age formulations, therapies and lasting skincare benefits. A healthy glow awaits you.',
            shop: 'Skincare ',
            strip_items: [
                {
                    title: 'Cleansers'
                },
                {
                    title: 'Toners'
                },
                {
                    title: 'Moisturizer'
                },
                {
                    title: 'Exfoliatior'
                }
            ]
        },
        {
            title: 'Glow From <br/>' + 'Within',
            desc: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.',
            shop: 'Supplements',
            strip_items: [
                {
                    title: 'Vitamin C'
                },
                {
                    title: 'Biotin'
                },
                {
                    title: 'Collagen'
                },
                {
                    title: 'Oral Sunscreen'
                }
            ]
        },
        {
            title: 'At home <br/>' + 'Glow',
            desc: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.',
            shop: 'Tools',
            strip_items: [
                {
                    title: 'LED light'
                },
                {
                    title: 'Gua Sha'
                },
                {
                    title: 'Cryosticks'
                },
                {
                    title: 'Microcurrent'
                }
            ]
        },
        {
            title: 'Glow-ry <br/>' + 'Days',
            desc: 'Start your journey towards self-care with a few of our picks to unwind, sit back and relax. These are small additions to your personal spaces that will elevate your moods and cleanse your energy. We all need some pampering and pick-me-ups along the way.',
            shop: 'Wellness',
            strip_items: []
        },
    ];

    // Favorite Settings
    const [favorite_swiper, set_favorite_swiper] = useState({});
    const [current_favorite_slide, set_current_favorite_slide] = useState(0);
    const favorite_products = [
        {
            title: 'Creme aux acides de fruits',
        },
        {
            title: 'Warming Honey Cleanser',
        },
        {
            title: 'Mitti Raw Honey Face Masque',
        },
        {
            title: 'Pro-Heal Serum Advance Plus',
        },
        {
            title: 'Sérum Oligo-Protéines Marines',
        },
        {
            title: 'Lait VIP O<span>2</span>',
        },
        {
            title: 'Mineral Tolerance Fluid',
        },
        {
            title: 'Biokiss',
        },
        {
            title: 'Lotion P50',
        },
        {
            title: 'Masque VIP O<span>2</span>',
        },
        {
            title: 'Azelac RU Serum',
        },
        {
            title: 'Nyumi Gummies',
        },
    ];

    // Alternate Settings
    const [products_alternate_swiper, set_products_alternate_swiper] = useState({});
    const [current_products_alternate_slide, set_current_products_alternate_slide] = useState(0);
    const products_alternate_content = [
        {
            title: 'Azelac \n' +
                'Ru Liposomal \n' +
                'Serum',
        },
        {
            title: 'Cleansing \n' +
                'Complex',
        },
        {
            title: 'Serum \n' +
                'Placenta',
        },
        {
            title: 'Lait vip 02'
        },
        {
            title: 'Lotion P50\n' +
                'PIGM 400'
        },
        {
            title: 'fotoprotector \n' +
                'fusion water ',
        },
        {
            title: 'MASQUE VIVANT'
        },
        {
            title: 'Crème \n' +
                'Dermopurifiante'
        },
        {
            title: 'C Vit \n' +
                'Serum'
        },
        {
            title: 'Complexe \n' +
                'Iribiol'
        },
        {
            title: 'Crème \n' +
                'Iso Placenta'
        },
        {
            title: 'Sensibio H20  \n' +
                'Micellar Water'
        },
        {
            title: 'What women \n' +
                'want'
        }
    ];

    useEffect(() => {
        if (body_swiper && body_swiper.height) {
            let hash = window.location.hash;
            if (hash) {
                hash = hash.replace('#', '');
                if (hash === 'body') {
                    set_current_body_slide(0)
                    body_swiper.slideTo(1);
                }
                if (hash === 'hair') {
                    set_current_body_slide(1)
                    body_swiper.slideTo(2);
                }
                if (hash === 'skincare') {
                    set_current_body_slide(2)
                    body_swiper.slideTo(3);
                }
                if (hash === 'supplements') {
                    set_current_body_slide(3)
                    body_swiper.slideTo(4);
                }
                if (hash === 'tools') {
                    set_current_body_slide(4)
                    body_swiper.slideTo(5);
                }
                window.scrollTo(0, 0)
            }
        }
    }, [body_swiper])


    const [device, set_device] = useState(2);
    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0)
        }
    }, [])

    useEffect(() => {

    }, [current_favorite_slide])


    return (<Fragment>
        <Head>
            <title>Products</title>
        </Head>
        <PageHeader title={'Products'}/>
        <div className={"outer " + styles.bodyOuter} id={'yourcare'}>
            <div className={"inner " + styles.body}>
                <div className={styles.bLeft}>
                    <div className={styles.bodyContent}>
                        <h1 dangerouslySetInnerHTML={{__html: body_content[current_body_slide].title}}/>
                        <p>{body_content[current_body_slide].desc}</p>
                    </div>
                    <a href="https://wa.me/9951355555" target="_blank">
                        <header className={styles.shopBody}>ENQUIRE</header>
                    </a>
                </div>
                <div className={styles.bRight}>
                    <header className={styles.sectionTitle}>{body_content[current_body_slide].shop}</header>
                    <Swiper slidesPerView={1}
                            loop={true}
                            effect={'fade'}
                            speed={1500}
                            onInit={(ev) => {
                                set_body_swiper(ev)
                            }}
                            onSlideChange={(ev) => {
                                window.scrollTo(0, 0);
                                set_current_body_slide(ev.activeIndex)
                                if (ev.activeIndex === 7) {
                                    set_current_body_slide(0)
                                } else if (ev.activeIndex - 1 === -1) {
                                    set_current_body_slide(5)
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
                    <div className={styles.nextBack}>
                        <Dots count={body_content.length} selected={current_body_slide}/>
                        <NextBack
                            onBack={() => {
                                body_swiper.slidePrev()
                            }}
                            onNext={() => {
                                body_swiper.slideNext()
                            }}/>
                    </div>
                    <div className={styles.bodyContent}>
                        <p>{body_content[current_body_slide].desc}</p>
                    </div>
                    <header className={styles.shopBody}>Shop {body_content[current_body_slide].shop}</header>
                </div>
            </div>
        </div>

        <Strip items={body_content[current_body_slide].strip_items}/>

        <div className={"outer " + styles.productDescOuter}>
            <div className={"inner " + styles.productDesc}>
                <p>After a lot of deliberation we have curated a wide range of products that are available to you 24 x 7
                    on our
                    online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare
                    experts or
                    even place an order for curbside pick-up. These products are tried and tested cult favourites and
                    made with
                    innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and
                    wellness
                    journey
                </p>
            </div>
        </div>

        <div className={"outer " + styles.shopMyShelfieOuter}>
            <div className={"inner " + styles.shopMyShelfie}>
                <div className={styles.smLeft}>
                    <h2>Shop {device === 0 && <br/>} my shelfie</h2>
                </div>
                <div className={styles.smRight}>
                    <p> Being a skincare enthusiast myself, I am always on the lookout for new products to add to my
                        repertoire.
                        These are a few of my current favourites, some of which are staples in my routine and some new
                        ones you would
                        be happy to discover. Shop these curated products and refresh your skincare shelf.
                    </p>
                    <header>xoxo</header>
                </div>
            </div>
        </div>

        <div className={"outer " + styles.currentFavouritesOuter}>
            <div className={"inner " + styles.currentFavourites}>
                <div className={styles.cfHeader}>
                    <h2>Varshini's Current Favourites</h2>
                    <div>
                        <NextBack
                            prevDisabled={current_favorite_slide === 0}
                            nextDisabled={current_favorite_slide === (favorite_products.length - 2)}
                            onBack={() => {
                                favorite_swiper.slidePrev()
                            }}
                            onNext={() => {
                                favorite_swiper.slideNext()
                            }}/>
                    </div>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    onInit={(ev) => {
                        set_favorite_swiper(ev)
                    }}
                    onSlideChange={(ev) => {
                        set_current_favorite_slide(ev.activeIndex)
                    }}>
                    {
                        favorite_products.map((item, index) => {
                            return (<SwiperSlide>
                                    <div className={styles.cfSlide}>
                                        <img src={'/images/products/fav/' + (index) + '.png'}/>
                                        <header dangerouslySetInnerHTML={{__html: item.title}}></header>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <a href="https://wa.me/9951355555" target="_blank">
                    <header className={styles.enquire}>ENQUIRE</header>
                </a>
            </div>
        </div>


        <div className={styles.slidersOuter}>
            <div className={styles.sliders}>
                <h3 className={styles.sliderTitle}>
                    BESTSELLERS
                </h3>

                <Swiper slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        onInit={(ev) => {
                            set_products_alternate_swiper(ev)
                        }}
                        speed={1800}
                        spaceBetween={60}
                        onSlideChange={(ev) => {
                            if (ev.activeIndex === 26) {
                                set_current_products_alternate_slide(0)
                            } else if (ev.activeIndex - 13 === -1) {
                                set_current_products_alternate_slide(12)
                            } else {
                                set_current_products_alternate_slide(ev.activeIndex - 13)
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
                                                        <motion.pre className={styles.title}
                                                                    ref={ref}
                                                                    initial={{opacity: 0}}
                                                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                                                    transition={{duration: 0.7}}>
                                                            {item.title}
                                                        </motion.pre>)
                                                }
                                            </InView>
                                        }
                                        <img
                                            className={
                                                "grayscale " + styles.bannerImg + ' '
                                                + (current_products_alternate_slide === index ? styles.banner : '') + ' '
                                                + (
                                                    ((current_products_alternate_slide > 0 && index >= current_products_alternate_slide) || (current_products_alternate_slide === 0 && index !== products_alternate_content.length - 1) || (current_products_alternate_slide === products_alternate_content.length - 1 && index === 0)) ?
                                                        '' : styles.prevImg)
                                            }
                                            src={'/images/products/alternate-products/' + (index) + '.png'}
                                        />
                                        {/*<img className={"grayscale " + (current_products_alternate_slide === index ? styles.banner : '')} src={'/images/products/alternate-products/' + (index) + '.png'}/>*/}
                                        {
                                            ((current_products_alternate_slide > 0 && index >= current_products_alternate_slide) || (current_products_alternate_slide === 0 && index !== products_alternate_content.length - 1) || (current_products_alternate_slide === products_alternate_content.length - 1 && index === 0)) ?
                                                <div className={styles.content}>
                                                    <section>
                                                        {
                                                            device === 0 && <NextBack
                                                                theme={'light'}
                                                                onNext={() => {
                                                                    products_alternate_swiper.slideNext()
                                                                }}
                                                                onBack={() => {
                                                                    products_alternate_swiper.slidePrev()
                                                                }}/>
                                                        }
                                                    </section>
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
                                                    <a href="https://wa.me/9951355555" target="_blank">
                                                        <header>ENQUIRE</header>
                                                    </a>
                                                    {
                                                        device !== 0 && <NextBack
                                                            theme={'light'}
                                                            onNext={() => {
                                                                products_alternate_swiper.slideNext()
                                                            }}
                                                            onBack={() => {
                                                                products_alternate_swiper.slidePrev()
                                                            }}/>
                                                    }
                                                </div> : <div></div>
                                        }
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>

        <BookNow/>
        <BackToTop background={'black'}/>
        <Footer/>

    </Fragment>)
}
