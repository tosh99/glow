import {Fragment, useEffect, useState} from "react";
import styles from "./styles/theedit.module.scss";
import PageHeader from "../shared/components/page-header/page-header";
import Head from "next/head";
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from 'swiper/core';
import Footer from "../shared/components/footer/footer";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import NextBack from "../shared/components/nextback/nextback";

SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);


export default function TheEdit() {
    const [body_swiper, set_body_swiper] = useState({});
    const [posts, set_posts] = useState([]);
    const [render, set_render] = useState(1);


    useEffect(() => {
        axios.get('https://public-api.wordpress.com/rest/v1.1/sites/example.wordpress.com/posts')
            .then(function (response) {
                // handle success
                const dt = response.data;
                const posts = dt.posts;
                set_posts(posts)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
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
                            <header className={styles.plTitle}>
                                Back to Basics
                            </header>
                            <div className={styles.plDesc}>
                                <header>AM Routine</header>
                                <header>PM Routine</header>
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
                                        if (ev.activeIndex - 1 === 5) {
                                            // set_current_body_slide(0)
                                        } else {
                                            // set_current_body_slide(ev.activeIndex - 1)
                                        }
                                    }}>
                                {
                                    posts.map((item, index) => {
                                        return (<SwiperSlide>
                                                <div className={styles.prSlide}>
                                                    <img src={'/images/home/sliders/' + index + '.png'}/>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <NextBack onBack={() => {
                                post.swiper.slidePrev()
                            }} onNext={() => {
                                post.swiper.slideNext()
                            }}/>
                        </div>
                    </div>
                </div>
            })
        }


        <Footer/>

    </Fragment>)
}