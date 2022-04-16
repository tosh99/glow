import {Fragment, useEffect, useState} from "react";
import styles from "./about.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import Ourclinic from "../../shared/sections/ourclinic/ourclinic";
import PageHeader from "../../shared/components/page-header/page-header";
import Footer from "../../shared/components/footer/footer";
import NextBack from "../../shared/components/nextback/nextback";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';
import ReadMoreReact from "read-more-react";
import BackToTop from "../../shared/components/back-to-top";
import BookNow from "../../shared/components/book-now";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

export default function BRFacials() {
    const [testimonial_swiper, set_testimonial_swiper] = useState({});
    const [current_slide, set_current_slide] = useState(0);
    const [showMore, set_showMore] = useState(false);

    const [device, set_device] = useState(2);
    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0)
        }

        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    return (<Fragment>
            <PageHeader title={'Services'}/>
            <div className={"outer " + styles.advocacyOuter}>
                <div className={"inner " + styles.advocacy}>
                    <header>Our Skincare Advocacy</header>
                    <p>Glow is a comprehensive skincare experience centre backed by the medical knowledge of Dr. Varshini Reddy,
                        your skincare specialist. Her advocacy is based on utilising the best of clinical knowledge along with skin
                        therapies for a holistic rejuvenation. </p>
                    <p>
                        At Glow, we offer a range of clinically proven products and hyper-personalised procedures for an indulgent
                        experience that delivers immediate and lasting results for your skin, beauty and total wellness.
                    </p>
                </div>
            </div>

            <Ourclinic/>

            <BookNow/>
            <BackToTop/>
            <Footer/>

        </Fragment>
    )
}