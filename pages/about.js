import {Fragment} from "react";
import styles from "./styles/about.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import Ourclinic from "../shared/sections/ourclinic/ourclinic";
import PageHeader from "../shared/components/page-header/page-header";
import Footer from "../shared/components/footer/footer";

export default function About() {


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

        <Footer />

    </Fragment>)
}