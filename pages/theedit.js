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
                desc_1_images: ['am_routine/AM-06.png', 'am_routine/AM-07.png', 'am_routine/AM-08.png', 'am_routine/AM-09.png', 'am_routine/AM-10.png', 'am_routine/AM-11.png'],
                desc_2_images: ['pm_routine/pm_1.png', 'pm_routine/pm_2.png', 'pm_routine/pm_3.png', 'pm_routine/pm_4.png', 'pm_routine/pm_5.png'],
                selected: 1
            },
            {
                title: 'Back <br>' + 'to Basics',
                desc_1: 'AM Routine',
                desc_2: 'PM Routine',
                desc_1_images: ['am_routine/AM-06.png', 'am_routine/AM-07.png', 'am_routine/AM-08.png', 'am_routine/AM-09.png', 'am_routine/AM-10.png', 'am_routine/AM-11.png'],
                desc_2_images: ['pm_routine/pm_1.png', 'pm_routine/pm_2.png', 'pm_routine/pm_3.png', 'pm_routine/pm_4.png', 'pm_routine/pm_5.png'],
                selected: 1
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
                <h1>From its medieval origins to the digital era</h1>
                <div className={styles.imgContainer}>
                    <div className={styles.imgLeft}>
                        <p>A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and result-driven.
                            Selfacere sundays will never be the same again. </p>
                    </div>
                    <div className={styles.imgRight}>
                        <div>
                            <img src={'/images/theedit/banner.png'}/>
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
                                    post.swiper.slideTo(1);
                                    set_render(prev => prev + 1)
                                }}> {post.desc_1}</header>
                                <header className={(post.selected === 2 ? styles.selected : '')} onClick={() => {
                                    post.selected = 2;
                                    post.swiper.slideTo(1);
                                    set_render(prev => prev + 1)
                                }}>{post.desc_2}</header>
                            </div>
                        </div>
                        <div className={styles.postRight}>
                            <Swiper slidesPerView={1}
                                    loop={true}
                                    speed={1800}
                                    onInit={(ev) => {
                                        post.swiper = ev;
                                        set_render(prev => prev + 1)
                                    }}
                                    onSlideChange={(ev) => {

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
                            <NextBack
                                onBack={() => {
                                    console.log(post.swiper)
                                    post.swiper.slidePrev()
                                    set_render(prev => prev + 1)
                                }}
                                onNext={() => {
                                    post.swiper.slideNext()
                                    set_render(prev => prev + 1)
                                }}/>
                        </div>
                    </div>
                </div>
            })
        }

        <BackToTop/>
        <Footer/>

    </Fragment>)
}