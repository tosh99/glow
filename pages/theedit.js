import {Fragment, useEffect, useState} from "react";
import styles from "./styles/theedit.module.scss";
import PageHeader from "../shared/components/page-header/page-header";
import Head from "next/head";
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from 'swiper/core';
import Footer from "../shared/components/footer/footer";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import NextBack from "../shared/components/nextback/nextback";
import BackToTop from "../shared/components/back-to-top";
import Dots from "../shared/components/dots";

SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);


export default function TheEdit() {
    const [body_swiper, set_body_swiper] = useState({});
    const [posts, set_posts] = useState([]);
    const [render, set_render] = useState(1);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    useEffect(() => {
        // axios.get('https://public-api.wordpress.com/rest/v1.1/sites/example.wordpress.com/posts')
        //     .then(function (response) {
        //         // handle success
        //         const dt = response.data;
        //         const posts = dt.posts;
        //         set_posts(posts)
        //
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //     });
        set_posts([
            {
                title: 'Back <br>' + 'to Basics',
                desc_1: 'AM Routine',
                desc_2: 'PM Routine',
                desc_1_images: ['AM Routine/AM-06.png', 'AM Routine/AM-07.png', 'AM Routine/AM-08.png', 'AM Routine/AM-09.png', 'AM Routine/AM-10.png', 'AM Routine/AM-11.png'],
                desc_2_images: ['Pm Routine/Frame 1.png', 'Pm Routine/Frame 2.png', 'Pm Routine/Frame 3.png', 'Pm Routine/Frame 4.png', 'Pm Routine/Frame 5.png', 'Pm Routine/Frame 6.png', 'Pm Routine/Frame 7.png', 'Pm Routine/Frame 8.png'],
                selected: 1,
                currentslide: 0
            },
            {
                title: 'Goof for <br>' + 'glow',
                desc_1: '4 Breathing Exercises',
                desc_2: 'cleanse beliefs',
                desc_1_images: ['4 Breathing Exercises/ezgif 1.png', '4 Breathing Exercises/Breathing technique-57.png', '4 Breathing Exercises/Breathing technique-58.png', '4 Breathing Exercises/Breathing technique-59.png', '4 Breathing Exercises/Breathing technique-60.png'],
                desc_2_images: ['cleanse beliefs/Artboard 40 copy 2 1.png', 'cleanse beliefs/ways to cleanse belief-45.png', 'cleanse beliefs/ways to cleanse belief-47.png', 'cleanse beliefs/ways to cleanse belief-48.png', 'cleanse beliefs/ways to cleanse belief-49.png'],
                selected: 1,
                currentslide: 0
            },
            {
                title: 'Glow <br>' + 'Glossary',
                desc_1: 'Niacinamide',
                desc_2: 'Azelaic Acid',
                desc_1_images: ['Niacinamide/Niacinamide-01.png', 'Niacinamide/Niacinamide-02.png', 'Niacinamide/Niacinamide-03.png', 'Niacinamide/Niacinamide-04.png', 'Niacinamide/Niacinamide-05.png'],
                desc_2_images: ['Azelaic Acid/Group 717.png', 'Azelaic Acid/Artboard 2 copy.png', 'Azelaic Acid/Artboard 3 copy.png', 'Azelaic Acid/Artboard 4 copy.png', 'Azelaic Acid/Group 718.png'],
                selected: 1,
                currentslide: 0
            },
            {
                title: 'In the <br>' + 'Spotlight',
                desc_1: 'Sunscreens Part I',
                desc_2: 'Sunscreens Part II',
                desc_1_images: ['Sunscreens1/Sunscreen1-42.png', 'Sunscreens1/Sunscreens-26.png', 'Sunscreens1/Sunscreens-27.png', 'Sunscreens1/Sunscreens-28.png', 'Sunscreens1/Sunscreens-29.png', 'Sunscreens1/Sunscreens-30.png', 'Sunscreens1/Sunscreens-31.png', 'Sunscreens1/Sunscreens-32.png', 'Sunscreens1/Sunscreens-33.png'],
                desc_2_images: ['Sunscreen2/sunscreens2-43.png', 'Sunscreen2/sunscreens2-34.png', 'Sunscreen2/Artboard 6 copy 29.png', 'Sunscreen2/Artboard 6 copy 28.png', 'Sunscreen2/Artboard 6 copy 27.png', 'Sunscreen2/Artboard 6 copy 26.png', 'Sunscreen2/sunscreens2-35.png', 'Sunscreen2/sunscreens2-36.png', 'Sunscreen2/sunscreens2-37.png', 'Sunscreen2/Artboard 6 copy 31.png'],
                selected: 1,
                currentslide: 0
            }


        ])
    }, [])


    return (<Fragment>
        <Head>
            <title>The Edit</title>
        </Head>
        <PageHeader title={'The Edit'}/>

        <div className={"outer " + styles.editBannerOuter}>
            <div className={"inner " + styles.editBanner}>
                <h1>Glow <br/>Glossary - Niacinamide</h1>
                <div className={styles.imgContainer}>
                    <div className={styles.imgLeft}>
                        <p>Niacinamide is a powerhouse ingredient for brightening and hydration that often gets overlooked a lot in relation to vitamin C. In fact, vitamin B3 (Niacinamide) might be the secret to glowing skin! If you want to
                            reap the brightening benefits of nicotinamide, it needs to be applied topically</p>
                    </div>
                    <div className={styles.imgRight}>
                        <div>
                            <img src={'/images/theedit/Niacinamide/Niacinamide-01.png'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            posts.map((post, postindex) => {
                return <div className={"outer " + styles.postOuter}>
                    <div className={"inner " + styles.post}>
                        <div className={styles.postLeft}>
                            <header className={styles.plTitle} dangerouslySetInnerHTML={{__html: post.title}}>

                            </header>
                            <div className={styles.plDesc}>
                                <header className={(post.selected === 1 ? styles.selected : '')} onClick={() => {
                                    post.selected = 1;
                                    post.currentslide = 0;
                                    if (post.swiper) {
                                        post.swiper.slideTo(0)
                                        set_render(prev => prev + 1)
                                    }
                                    set_render(prev => prev + 1)
                                }}> {post.desc_1}</header>
                                <header className={(post.selected === 2 ? styles.selected : '')} onClick={() => {
                                    post.selected = 2;
                                    post.currentslide = 0;

                                    if (post.swiper) {
                                        post.swiper.slideTo(0)
                                        set_render(prev => prev + 1)
                                    }

                                    set_render(prev => prev + 1)
                                }}>{post.desc_2}</header>
                            </div>
                        </div>
                        <div className={styles.postRight}>
                            <Swiper slidesPerView={1}
                                    speed={1800}
                                    onInit={(ev) => {
                                        post.swiper = ev;
                                        set_render(prev => prev + 1)
                                    }}
                                    onSlideChange={(ev) => {
                                        console.log(ev.activeIndex)
                                        console.log(post.desc_1_images.length)

                                        post.currentslide = ev.activeIndex;
                                        set_render(prev => prev + 1)
                                    }}>
                                {
                                    (post.selected === 1 ? post.desc_1_images : post.desc_2_images).map((imgurl, index) => {
                                        return (<SwiperSlide>
                                                <div className={styles.prSlide}>
                                                    <img src={'/images/theedit/' + imgurl}/>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <div className={styles.nav}>
                                <Dots count={post.desc_1_images.length} selected={post.currentslide}/>
                                <NextBack
                                    prevDisabled={post.currentslide === 0}
                                    nextDisabled={post.currentslide === (post.selected === 1 ? post.desc_1_images.length - 1 : post.desc_2_images.length - 1)}
                                    onBack={() => {
                                        if (post.swiper) {
                                            post.swiper.slidePrev()
                                            set_render(prev => prev + 1)
                                        }
                                    }}
                                    onNext={() => {
                                        if (post.swiper) {
                                            post.swiper.slideNext()
                                            set_render(prev => prev + 1)
                                        }
                                    }}/>
                            </div>


                        </div>
                    </div>
                </div>
            })
        }

        <BackToTop/>
        <Footer/>

    </Fragment>)
}