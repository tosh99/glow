import styles from './styles/index.module.scss'
import Link from 'next/link'
import {Fragment, useEffect, useState} from "react";
import Slider from "react-slick";
import {motion} from "framer-motion"
import {InView, useInView} from 'react-intersection-observer';
import Ourclinic from "../shared/sections/ourclinic/ourclinic";
import HomePageHeader from "../shared/components/home-page-header/home-page-header";
import {constants} from "../styles/constants";
import NextBack from "../shared/components/nextback/nextback";
import Footer from "../shared/components/footer/footer";

export default function Home() {
    const favorite_slider_settings = {
        loop: true,
        center: true,
        autoplay: true,
        nav: false,
        autoplayTimeout: 4500,
        autoplaySpeed: 1000,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false
            },
            768: {
                autoWidth: true
            },
        },
    }


    const [current_slide, set_current_slide] = useState(0);


    const [slider, setslider] = useState({});
    const carousel_content = [
        {
            title: 'Body',
            content: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.'
        },
        {
            title: 'Hair',
            content: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.'
        },
        {
            title: 'Skincare',
            content: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have acquired a cult status for their new-age formulations and are targeted towards lasting skincare benefits. A healthy glow awaits you.'
        },
        {
            title: 'Supplements',
            content: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.'
        },
        {
            title: 'Tools',
            content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.'
        }
    ];

    useEffect(() => {
        const owl = $('.owl-carousel');
        owl.owlCarousel(favorite_slider_settings);

        for (let i = 0; i < carousel_content.length; i++) {
            $('#cfPrevId' + i).click(function () {
                owl.trigger('prev.owl.carousel');
            })

            $('#cfNextId' + i).click(function () {
                owl.trigger('next.owl.carousel');
            })
        }

        owl.on('changed.owl.carousel', function (event) {
            set_current_slide(event.item.index - 3);
        })
    }, [])

    return (
        <Fragment>
            <HomePageHeader/>
            <div className={"outer " + styles.skinCareOuter}>
                <div className={"inner " + styles.skinCare}>
                    <h1>Experience a new <br/> kind of skincare <br/> indulgence</h1>
                    <div className={styles.img}>
                        <div>&nbsp;</div>
                        <div className={styles.imgRight}>
                            <div>
                                <img src={'/images/home/banner.png'}/>
                            </div>
                            <p>Your skin changes with age, diet, weather, lifestyle choices and your state of mind. At every turning point, you need to check in with your skin.
                                At Glow, we don’t categorise you into a skin type. We consult with you to get to know your skin and then proceed with a personalised service.
                            </p>
                            <p className={styles.reju}>
                                Welcome to Glow, the skincare wonderland. Step in and tell us what you’d like to do today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.strip}>

            </div>
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer"}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>
                            <div className={"inner " + styles.skinCarePhil}>
                                <div className={styles.scLeft}>
                                    <img src={'/images/home/skincare.png'}/>
                                </div>
                                <div className={styles.scRight}>
                                    <div>
                                        <h2>Our <br/> skincare philosophy</h2>
                                        <p>Bringing forth a new concept of fusing clinical beauty with skin therapy, Dr. Varshini Reddy has
                                            distinguished herself as a skincare specialist. Her belief is that the foundation of your beauty lies at the heart
                                            of healthy skin and hair. Fostering healthy habits, checking in regularly with your dermatologist,
                                            upkeep and indulgence are the pillars of Glow’s skincare philosophy. </p>
                                        <p className={styles.identity}>The identity you’re building.
                                            The choices you’re making. The confidence you’re exuding. The love you’re sharing. It’s contagious.
                                            At Glow, we help you shine that spell-binding light.
                                        </p>
                                    </div>

                                    <header>read more</header>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*<InView threshold={0.25}>*/}
            {/*    {*/}
            {/*        ({ref, inView}) => (*/}
            {/*            <motion.div className={"outer"}*/}
            {/*                        ref={ref}*/}
            {/*                        initial={{opacity: 0}}*/}
            {/*                        animate={inView ? {opacity: 1} : {opacity: 0}}*/}
            {/*                        transition={{duration: 0.8}}>*/}


            {/*            </motion.div>)*/}
            {/*    }*/}
            {/*</InView>*/}

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.sayHelloOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>
                            <div className={"inner " + styles.sayHello}>
                                <div className={styles.shTop}>
                                    <h2>Say hello to Glow</h2>
                                    <div>
                                        <p>With our boutique skin studios set up in Hyderabad and Chennai,
                                            we have fostered an ever-growing client list of skincare enthusiasts from around the globe.
                                            Taking private consultations in our studio set-ups and
                                            virtually, we are happy to provide result-oriented products, world-class
                                            facilities and the latest in aesthetic technologies. Make an appointment to get your skin update
                                            and to understand your skin health with
                                            Dr. Varshini Reddy.</p>
                                        <header className={styles.selfcare}>Afterall selfcare is an expression of self-love.</header>
                                    </div>
                                </div>
                                <div className={styles.scBottom}>
                                    <img src={'/images/home/sayhello.png'}/>
                                    <header>make AN appointment</header>
                                </div>
                            </div>
                        </motion.div>)
                }
            </InView>


            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + ' ' + styles.servicesOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>
                            <div className={"inner " + styles.skinCarePhil + ' ' + styles.services}>
                                <div className={styles.scLeft}>
                                    <img src={'/images/home/services.png'}/>
                                </div>
                                <div className={styles.scRight}>
                                    <div>
                                        <h2>Services at Glow</h2>
                                        <p>Our approach to skincare is oriented towards immediate and lasting results using technologically advanced therapies for
                                            better skin health. We have curated a menu of exclusive services that are recommended
                                            upon doing a thorough clinical analysis of your skin instant and tailored to provide you an everlasting and healthy glow.
                                        </p>
                                        <p className={styles.identity}>
                                            Both the services and space are designed to transport you to a state of tranquility.
                                        </p>
                                    </div>

                                    <header>discover more</header>
                                </div>
                            </div>
                        </motion.div>)
                }
            </InView>


            <div className={styles.slidersOuter}>
                <div className={styles.sliders}>
                    <p className={styles.desc}>
                        After a lot of deliberation we have curated a
                        wide range of products that are available to you 24 x 7 on our online boutique glow.shop. You can also purchase them in-store with the assistance of our skincare experts or
                        even place an order for curbside pick-up. These products are tried and tested cult favourites and made
                        with innovative formulations to offer you an everlasting glow and help you on your skincare, beauty and wellness
                        journey.
                    </p>

                    <div className={"owl-carousel"}>
                        {
                            carousel_content.map((item, index) => {
                                return (<Fragment>
                                    <div className={styles.slide} id={'slide_' + index}>
                                        {
                                            current_slide === index &&
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
                                        <img className={"gr " + (current_slide === index ? styles.banner : '')} src={'/images/home/slider-' + (index + 1) + '.png'}/>
                                        <div>
                                            <h3>0{index + 1} / <span>0{carousel_content.length}</span></h3>
                                            <p>{item.content}</p>
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
                                            <NextBack theme={'light'} prevId={'cfPrevId' + index} nextId={'cfNextId' + index}/>
                                        </div>
                                    </div>

                                </Fragment>)
                            })
                        }
                    </div>


                    {/*<Slider ref={slider => {*/}
                    {/*    setslider(slider)*/}
                    {/*}} {...settings}>*/}
                    {/*    {*/}
                    {/*        carousel_content.map((item, index) => {*/}
                    {/*            return (<Fragment>*/}
                    {/*                <div className={styles.slide}>*/}
                    {/*                    {*/}
                    {/*                        current_slide === index &&*/}
                    {/*                        <InView threshold={0}>*/}
                    {/*                            {*/}
                    {/*                                ({ref, inView}) => (*/}
                    {/*                                    <motion.div className={styles.title}*/}
                    {/*                                                ref={ref}*/}
                    {/*                                                initial={{opacity: 0}}*/}
                    {/*                                                animate={inView ? {opacity: 1} : {opacity: 0}}*/}
                    {/*                                                transition={{duration: 0.7}}>*/}
                    {/*                                        {item.title}*/}
                    {/*                                    </motion.div>)*/}
                    {/*                            }*/}
                    {/*                        </InView>*/}
                    {/*                    }*/}
                    {/*                    <img className={"gr " + (current_slide === index ? styles.banner : '')} src={'/images/home/slider-' + (index + 1) + '.png'}/>*/}
                    {/*                    <div>*/}
                    {/*                        <h3>0{index + 1} / <span>0{carousel_content.length}</span></h3>*/}
                    {/*                        <p>{item.content}</p>*/}
                    {/*                        <InView threshold={0}>*/}
                    {/*                            {*/}
                    {/*                                ({ref, inView}) => (*/}
                    {/*                                    <motion.div className={styles.titleM}*/}
                    {/*                                                ref={ref}*/}
                    {/*                                                initial={{opacity: 0}}*/}
                    {/*                                                animate={inView ? {opacity: 1} : {opacity: 0}}*/}
                    {/*                                                transition={{duration: 0.7}}>*/}
                    {/*                                        {item.title}*/}
                    {/*                                    </motion.div>)*/}
                    {/*                            }*/}
                    {/*                        </InView>*/}
                    {/*                        <NextBack theme={'light'} onBack={slider.slickPrev} onNext={slider.slickNext}/>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*            </Fragment>)*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</Slider>*/}
                </div>
            </div>


            {/*<div className={"outer " + styles.welcomeToGlowOuter}>*/}
            {/*    <div className={"inner " + styles.welcomeToGlow}>*/}
            {/*        <video controls>*/}
            {/*            <source src="movie.mp4" type="video/mp4"/>*/}
            {/*            <source src="movie.ogg" type="video/ogg"/>*/}
            {/*            Your browser does not support the video tag.*/}
            {/*        </video>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + ' ' + styles.glowEditOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>
                            <div className={"inner " + styles.skinCarePhil + ' ' + styles.glowEdit}>
                                <div className={styles.scLeft}>
                                    <img src={'/images/home/glowedit.png'}/>
                                </div>
                                <div className={styles.scRight}>
                                    <div>
                                        <h2>The <br/>Glow Edit</h2>
                                        <p>Dr. Varshini Reddy started Glow as a skincare destination that could serve as a clinic, medispa and a rest stop for you to
                                            indulge in some self-care. Apart from being a dermatologist, she is also a skincare
                                            enthusiast who is here to share all her clinical know-how and experience.
                                            Let's cover our bases with all the basic information everyone just assumes you know. At Glow, we want to enlighten you so
                                            you can make an informed decision. A Holy-Glow-Grail to guide you on your journey to
                                            clinical skincare, beauty and wellness.
                                        </p>

                                    </div>

                                    <header>find articles</header>
                                </div>
                            </div>
                        </motion.div>)
                }
            </InView>

            <Ourclinic/>

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
                                    <h2>Shedding Light on Dr.Varshini’s Journey</h2>

                                    <div>
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

            <Footer/>
        </Fragment>
    )
}
