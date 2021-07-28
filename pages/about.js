import {Fragment, useEffect, useState} from "react";
import styles from "./styles/about.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import Ourclinic from "../shared/sections/ourclinic/ourclinic";
import PageHeader from "../shared/components/page-header/page-header";
import Footer from "../shared/components/footer/footer";
import NextBack from "../shared/components/nextback/nextback";

export default function About() {
    const testimonial_settings = {
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayTimeout: 4500,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
        },
    }

    const [current_slide, set_current_slide] = useState(0);


    useEffect(() => {
        const owl = $('.testimonials-carousel');
        owl.owlCarousel(testimonial_settings);

        $('#ctPrevId').click(function () {
            owl.trigger('prev.owl.carousel');
        })

        $('#ctNextId').click(function () {
            owl.trigger('next.owl.carousel');
        })

        owl.on('changed.owl.carousel', function (event) {
            set_current_slide(event.item.index - 3);
        })
    }, [])


    return (<Fragment>
        <PageHeader title={'About'}/>
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


        <InView threshold={0.25} triggerOnce={true}>
            {
                ({ref, inView}) => (
                    <motion.div className={"outer " + ' ' + styles.journeyOuter}
                                ref={ref}
                                initial={{opacity: 0}}
                                animate={inView ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.8}}>
                        <div className={"inner " + styles.journey}>
                            <div className={styles.joLeft}>
                                <h2>Your skin is <br/> ever-evolving, so <br/> should your skincare routine.</h2>

                                <div>
                                    {/* Font Specification */}
                                    <p>dr. Varshini reddy</p>
                                    <header>MD Dermatology</header>
                                </div>
                            </div>
                            <div className={styles.joRight}>
                                <img src={'/images/home/varshini.png'}/>
                                <p>At Glow, we wanted to promote skin, beauty and wellness as ideologies that go hand-in-hand. Having studied MD
                                    Dermatology and been around the globe to learn about new-age technologies in the world of skincare, Dr.
                                    Varshini Reddy wanted to bring the best of those to India. Her journey has been exciting and full of new
                                    learnings which took her from being a skincare enthusiast to a practicing dermatologist.</p>
                                <p>She has consulted with many people over the course of years and has distinguished herself as an advocate for wholesome rejuvenation.
                                    With an established and ever-growing
                                    clientbase she has extended her platform to a larger audience and opened doors to Glow, a contemporary space for skin indulgence.</p>
                                <header>read more</header>
                            </div>

                        </div>
                    </motion.div>)
            }
        </InView>

        <Ourclinic/>

        <InView threshold={0.25} triggerOnce={true}>
            {
                ({ref, inView}) => (
                    <motion.div className={"outer " + ' ' + styles.clientTestimonialsOuter}
                                ref={ref}
                                initial={{opacity: 0}}
                                animate={inView ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.8}}>
                        <div className={"inner " + styles.clientTestimonials}>
                            <div className={styles.ctHeader}>
                                <h2>Client Testimonials</h2>
                                <NextBack prevId={'ctPrevId'} nextId={'ctNextId'}/>
                            </div>
                        </div>

                        <div className={"owl-carousel owl-theme testimonials-carousel"}>
                            {
                                [1, 3, 4, 5, 6, 6].map((item, index) => {
                                    return <div className={styles.ctContent}>
                                        <header>sandhya Shekar</header>
                                        <span>APR 26, 2021</span>
                                        <p>I reached out to Varshini when I was on of my life’s worst acne phase ever.
                                            I was a month away from getting married and my skin didn’t show signs of settling
                                            anytime soon. She instantly recommended me a list of Biologique Research Products.
                                            I was apprehensive at first as I couldn’t believe that any product could change
                                            my skin texture changed within a matter of 20 days. My acne marks lightened and I
                                            had a smooth even texture on my big day. I have seen a visible reduction in my pore
                                            size and wrinkles. I can’t be more thankful to her. Varshini is super patient and really listens
                                            to you. She also has eye to understand your aesthetic and personality before she is recommending
                                            products and procedures to you by giving you the space to choose rather than hard selling. Thank
                                            you for the new skin revelation at age of 36. Absolutely love it 💓🤗</p>
                                    </div>
                                })
                            }
                        </div>
                    </motion.div>)
            }
        </InView>


        <Footer/>

    </Fragment>)
}