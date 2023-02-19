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
        desc: 'It would be an understatement if I said that Dr. Varshini has changed my life. I was always always worried about my skin and even after trying so many high brand stuff and spending loads of money, I never got the results I was after. After online consultation with Dr. Varshini and starting with all the products and routine suggested, I have the skin of my dreams!! All my major concerns : acne, acne scars, uneven and dull skin tone; everything was taken care of by the products recommended. The best part about Glow Clinic is one can have online consultations and Dr. Varshini patiently listens to all your worries and explains everything. Makes you understand why a product is to be used. Thank you doctor for being so patient and kind and helping me have the skin I have always longed for. So lucky to have you!!'
    },
    {
        title: 'Komal agarwal',
        date: 'APR 26, 2021',
        desc: 'So, for me skin care was only about a good night cream!! Thank you to Glow for changing my entire perspective. I learnt to layer all my products make a proper skin care regime and this has really really changed my skin for much better and everything online (which is so amazing) .Thank you Dr. Varshini for being the most patient doctor. You always made sure to clear all my doubts and suggesting the best!! I am looking forward to seeing you in person and literally waiting to start with your treatments. Lots of love'
    },
    {
        title: 'Madhuri Reddy',
        date: 'SEP 09, 2021',
        desc: 'My experience with Glow Clinic was very unique and wonderful. The ambience of the clinic and is very relaxing and soothing. Dr Varshini is very patient and listened and examined all of my issues before recommending the required treatment which has completely changed my skin.'
    },
    {
        title: 'Akila Raju',
        date: 'SEP 09, 2021',
        desc: 'I’ve been going to Dr. Varshini for my skincare needs from before she opened Glow. There’s no better ambassador for what a solid and consistent skincare routine can do for you than Dr. Varshini herself :blush:.Before I started on my BR journey with Glow - I used to hide under layers of makeup. I would change my skincare routine every few weeks based on a random Instagram post by some beauty editor, influencer or magazine list. It was when my skin had a bad reaction to one of my these experiments that I decided I needed to completely overhaul my approach.I now own a drawer full of foundations that I barely use. Today my skin is at a place where I don’t feel the need to use makeup on a daily basis. It’s even, glowy and hydrated.I see Dr. Varshini regularly and she takes the time to listen to my concerns and gives me a simple skincare regimen that’s easy to follow. She patiently takes me through how to use each product.I’m glad Hyderabad has a state of the art full service skincare clinic and I’m excited to try the many treatments Glow has to offer.'
    },
    {
        title: 'Srishti Tokas',
        date: 'Jun 09, 2022',
        desc: 'Dear doctor Varshini, \n' +
            'The last few years of consulting you has been such a lovely journey. Firstly a big thankyou for brining my most loved Biologique Recherche to India. You’ve been a true guiding light when it comes to helping me sort out my skin woes with your patience, skill and expertise. I love how the team at Glow clinic reflect your very humble nature and attend to their clients with so much care. Thankyou doc for helping me achieve healthy skin one routine at a time. You the best! \n' +
            'Srishti'
    }
]

export default function About() {
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
            <PageHeader title={'About Glow'}/>
            <div className={"outer " + styles.advocacyOuter}>
                <div className={"inner " + styles.advocacy}>
                    <header>Our Skincare Advocacy</header>
                    <p>Glow is a comprehensive skincare experience centre backed by the medical knowledge of Dr.
                        Varshini Reddy,
                        your skincare specialist. Her advocacy is based on utilising the best of clinical knowledge
                        along with skin
                        therapies for a holistic rejuvenation. </p>
                    <p>
                        At Glow, we offer a range of clinically proven products and hyper-personalised procedures for an
                        indulgent
                        experience that delivers immediate and lasting results for your skin, beauty and total wellness.
                    </p>
                </div>
            </div>


            <div className={"outer " + styles.journeyOuter} id={"varshini"}>
                <div className={"inner " + styles.journey}>
                    <div className={styles.joTop}>
                        <div className={styles.jotLeft}>
                            {/*<Swiper*/}
                            {/*    slidesPerView={1}*/}
                            {/*    autoplay={{*/}
                            {/*        delay: 2000,*/}
                            {/*    }}*/}
                            {/*    speed={2000}*/}
                            {/*    loop={true}*/}
                            {/*    effect={'fade'}*/}
                            {/*    spaceBetween={100}*/}
                            {/*    fadeEffect={{*/}
                            {/*        crossFade: true*/}
                            {/*    }}*/}
                            {/*    onInit={(ev) => {*/}

                            {/*    }}*/}
                            {/*    onSlideChange={(ev) => {*/}

                            {/*    }}>*/}
                            {/*    <SwiperSlide>*/}
                            {/*        <h2 className={styles.s1}>Your skin is <br/> ever-evolving, so <br/> should your skincare <br/> routine.</h2>*/}
                            {/*    </SwiperSlide>*/}
                            {/*    <SwiperSlide>*/}
                            {/*        <h2 className={styles.s2}>Offering <br/>revolutionary<br/> products and<br/> services tailored<br/> to your specific<br/> needs.</h2>*/}
                            {/*    </SwiperSlide>*/}
                            {/*    <SwiperSlide>*/}
                            {/*        <h2 className={styles.s3}>Welcome to<br/> the luxurious <br/>skincare <br/>experience <br/>centre</h2>*/}
                            {/*    </SwiperSlide>*/}
                            {/*    <SwiperSlide>*/}
                            {/*        <h2 className={styles.s4}>Active ingredients <br/>for Targeted <br/>results<br/> that are <br/>immediate and<br/> lasting.</h2>*/}
                            {/*    </SwiperSlide>*/}
                            {/*</Swiper>*/}
                            <img src={'/images/about/aboutext.gif'}/>
                        </div>


                        <img src={'/images/home/varshini.JPG'} width={'30%'}/>
                    </div>
                    <div className={styles.joBottom}>
                        <div className={styles.jobTitle}>
                            <header className={styles.name}>dr. Varshini reddy</header>
                            <header className={styles.desig}>MD Dermatology</header>
                        </div>
                        <div className={styles.jobContent}>
                            <p> At Glow, we wanted to promote skin, beauty and wellness as ideologies that go
                                hand-in-hand. Having studied MD
                                Dermatology and been around the globe to learn about new-age technologies in the world
                                of skincare, Dr.
                                Varshini Reddy wanted to bring the best of those to India. Her journey has been exciting
                                and full of new
                                learnings which took her from being a skincare enthusiast to a practicing dermatologist.
                                <br/><br/>
                                She has consulted with many people over the course of years and has distinguished
                                herself as an advocate for wholesome rejuvenation. With an established and ever-growing
                                clientbase she has
                                extended her
                                platform to a larger audience and opened doors to Glow, a contemporary space for skin
                                indulgence.
                                <br/><br/>
                                {
                                    showMore && <>
                                        With our boutique studios set up in Hyderabad and Chennai, Dr. Varshini specialises
                                        in prescriptive treatments that are hyper-personalised. Providing opportunities to
                                        enhance your
                                        beauty regime by
                                        making
                                        available, globally revered brands and technologies. Featuring some of the most
                                        sought-after facials to some of the best technologically assisted services, Glow is
                                        your one stop
                                        shop for all things
                                        skincare,
                                        beauty and wellness.
                                        <br/><br/>
                                        May it be the services we offer or the products we have curated, everything caters
                                        to your total well-being.
                                    </>
                                }
                            </p>
                            {
                                !showMore && <header onClick={() => {
                                    set_showMore(true)
                                }}>read more</header>
                            }

                        </div>
                    </div>
                </div>
            </div>


            <div className={"outer " + styles.bannerOuter}>
            </div>

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
                                    <NextBack
                                        prevDisabled={current_slide === 0}
                                        nextDisabled={current_slide === testimonials.length - 2}
                                        onNext={() => {
                                            testimonial_swiper.slideNext()
                                        }}
                                        onBack={() => {
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
                                    onInit={(ev) => {
                                        set_testimonial_swiper(ev)
                                    }}
                                    onSlideChange={(ev) => {
                                        set_current_slide(ev.activeIndex)
                                    }}>
                                {
                                    testimonials.map((item, index) => {
                                        return (<SwiperSlide>
                                                <div className={styles.ctContent}>
                                                    <header>{item.title}</header>
                                                    {/*<p className={styles.date}>{item.date}</p>*/}

                                                    <div className={styles.desc}>
                                                        {
                                                            device === 0 &&
                                                            <ReadMoreReact min={125} ideal={405} max={655}
                                                                           text={item.desc}/>
                                                        }
                                                        {
                                                            device !== 0 && item.desc
                                                        }
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

            <Ourclinic/>

            <BookNow/>
            <BackToTop background={'black'}/>
            <Footer/>

        </Fragment>
    )
}
