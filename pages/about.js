import {Fragment, useEffect, useState} from "react";
import styles from "./styles/about.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import Ourclinic from "../shared/sections/ourclinic/ourclinic";
import PageHeader from "../shared/components/page-header/page-header";
import Footer from "../shared/components/footer/footer";
import NextBack from "../shared/components/nextback/nextback";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Controller, EffectFade, Navigation, Pagination} from 'swiper/core';
import ReadMoreReact from "read-more-react";

SwiperCore.use([Autoplay, Pagination, Navigation, Controller, EffectFade]);

const testimonials = [
    {
        title: 'Sandhya Shekar',
        date: 'APR 26, 2021',
        desc: 'I reached out to Varshini when I was on of my life’s worst acne phase ever. I was a month away from getting married and my skin didn’t show signs of settling anytime soon. She instantly recommended me a list of Biologique Research Products. I was apprehensive at first as I couldn’t believe that any product could change  my skin texture changed within a matter of 20 days. My acne marks lightened and I had a smooth even texture on my big day. I have seen a visible reduction in my pore size and wrinkles. I can’t be more thankful to her. Varshini is super patient and really listens to you. She also has eye to understand your aesthetic and personality before she is recommending products and procedures to you by giving you the space to choose rather than hard selling. Thank you for the new skin revelation at age of 36. Absolutely love it 💓🤗'
    },
    {
        title: 'Aarti Ravi',
        date: 'APR 29, 2021',
        desc: 'For me, a good dermatologist is one who listens patiently to your concerns, explains in detail the solution and reliable when needed. Varshini Reddy of Glow Edit is all this and more. Her calm, composed nature combined with her ethical ways is her strong point and the key to her future success. She’s got me hooked on to some amazing products and I give her a warm welcome to Chennai.'
    },
    {
        title: 'Shilpa nagral',
        date: 'APR 26, 2021',
        desc: 'It would be an understatement if I said that dr. Varshini has changed my life. I was always always worried about my skin and even after trying so many high brand stuff and spending loads of money, I never got the results I was after. After online consultation with dr. Varshini and starting with all the products and routine suggested, I have the skin of my dreams!! All my major concerns: acne, acne scars, uneven and dull skin tone: everything was taken care of by the products recommended.\n' +
            'The best part about glow clinic is one can have online consultations and dr. Varshini patiently listens to all your worries and explains everything. Makes you understand why a product is to be used. \n' +
            'Thank you doctor for being so patient and kind and helping me have the skin I have always longed for. So lucky to have you!!'
    }
]

export default function About() {
    const [testimonial_swiper, set_testimonial_swiper] = useState({});
    const [current_slide, set_current_slide] = useState(0);


    return (<Fragment>
            <PageHeader title={'About Glow'}/>
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


            <div className={"outer " + styles.journeyOuter} id={"varshini"}>
                <div className={"inner " + styles.journey}>
                    <div className={styles.joTop}>
                        <h2>Your skin is <br/> ever-evolving, so <br/> should your skincare routine.</h2>
                        <img src={'/images/home/varshini.png'}/>
                    </div>
                    <div className={styles.joBottom}>
                        <div className={styles.jobTitle}>
                            <header className={styles.name}>dr. Varshini reddy</header>
                            <header className={styles.desig}>MD Dermatology</header>
                        </div>
                        <div className={styles.jobContent}>
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
                </div>
            </div>

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
                                    <NextBack onNext={() => {
                                        testimonial_swiper.slideNext()
                                    }} onBack={() => {
                                        testimonial_swiper.slidePrev()
                                    }}/>
                                </div>
                            </div>

                            <Swiper slidesPerView={2}
                                    breakpoints={{
                                        200: {
                                            slidesPerView: 1,
                                        },
                                        648: {
                                            slidesPerView: 2,
                                        }
                                    }}
                                    speed={1800}
                                    loop={true}
                                    onInit={(ev) => {
                                        set_testimonial_swiper(ev)
                                    }}
                                    onSlideChange={(ev) => {
                                        if (ev.activeIndex - 1 === 5) {
                                            // set_current_body_slide(0)
                                        } else {
                                            // set_current_body_slide(ev.activeIndex - 1)
                                        }
                                    }}>
                                {
                                    testimonials.map((item, index) => {
                                        return (<SwiperSlide>
                                                <div className={styles.ctContent}>
                                                    <header>{item.title}</header>
                                                    <p className={styles.date}>{item.date}</p>

                                                    <div className={styles.desc}>
                                                        <ReadMoreReact min={125} ideal={405} max={655} text={item.desc}/>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </motion.div>)
                }
            </InView>


            <Footer/>

        </Fragment>
    )
}