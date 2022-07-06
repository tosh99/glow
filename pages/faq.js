import { Fragment, useEffect, useState } from "react";
import styles from "./styles/faq.module.scss";
import PageHeader from "../shared/components/page-header/page-header";
import Footer from "../shared/components/footer/footer";
import SwiperCore, { Autoplay, Controller, Navigation, Pagination } from "swiper/core";
import BackToTop from "../shared/components/back-to-top";
import BookNow from "../shared/components/book-now";

SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);

export default function About() {
    const [faqs, set_faqs] = useState([
        {
            title: "How do I make an appointment ?",
            desc: "You can make an appointment through our website for both Hyderabad & Chennai or you can call us on the respective numbers for Hyderabad – 9951355555 & Chennai – 9160655555 to make an appointment over the phone.",
        },
        {
            title: "Do you have virtual or video consultation?",
            desc:
                "Yes we do have virtual consultation with Dr. Varshini Reddy, MD Dermatology which you can book  through \n" +
                "make an appointment  on our website or on the respective numbers for Hyderabad – 9951355555 & Chennai – 9160655555. We also have a questionnaire based product consultation which you can book online as well.",
        },
        {
            title: "How often do I need to follow up?",
            desc: "Follow up is based on your treatment protocol. For product consultation it is 2 months and for in-clinic services it is once a month or as prescribed by Dr. Varshini Reddy.\n",
        },
        {
            title: "Where are you located?",
            desc: "We currently have our experience centres in Hyderabad & Chennai.\n",
        },
        {
            title: "What are your clinic timings and days of operation?",
            desc: "Our experience centres are currently open in Hyderabad and Chennai. The operation timings are 11:00 AM to 08:00 PM, Monday to Saturday. ",
        },
        {
            title: "What if I can't make my appointment and I need to reschedule?",
            desc: "You can contact the clinic and reschedule your appointment 3 hours prior to your appointment slot. But, there is no cancellation of your appointments.",
        },
        {
            title: "When do I arrive for my appointment? ",
            desc: "We recommended that you come to the clinic 15 minutes prior to our appointment to fill out your medical history before the consultation.",
        },
        {
            title: "How do I make payment?",
            desc: "We accept cash, UPI payments (GPay), bank transfer, debit cards, and all major domestic and international credit cards such as MasterCard, Visa and American Express.",
        },
        {
            title: "What kind of services do you offer?",
            desc: "We offer a range of services for your skin, beauty and wellness. You can discover all our exclusive services  here. ",
        },
        {
            title: "Where can I find the products you prescribe?",
            desc: "Once you consult with us, we will ship all the products to your address. You can also visit our website glow.shop and find all the products there. We have a curated range of brands and products that you can discover newer products to add to your routine.",
        },
        {
            title: "How many days will the product take to reach me?",
            desc: "Once you have successfully placed an order with us, a tracking ID will be sent to your email address. It may take 2 to 5 working days for your package to get delivered based on your location.",
        },
        {
            title: "How do you deliver your products? ",
            desc: "We work closely with our logistic partners to safely deliver your products. ",
        },
        {
            title: "Do you ship internationally?",
            desc: "We currently provide  pan-India delivery and are working on making international shipping available soon. Keep checking back to see if we ship to your location.",
        },
        {
            title: "What kind of packaging do you use for your products? Can I opt for less waste packaging?",
            desc:
                "As a brand we are mindful of the environmental impact we have on our planet. To do our part, we have partnered with an eco-friendly company that makes our packaging using biodegradable and recyclable materials." +
                " The ink used for printing is soot ink, derived from air pollution. Our thank you cards are made using seed paper which you can plant and enjoy the fruits of your labour.",
        },
    ]);
    const [render, set_render] = useState(1);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <Fragment>
            <PageHeader title={"FAQs"} />
            <div className={"outer " + styles.faqBanner}>
                <div className={"inner " + styles.banner}>
                    <header>Frequently Asked Questions</header>
                    <img src={"/images/faq/banner.png"} />
                </div>
            </div>

            <div className={"outer " + styles.faqList}>
                <div className={"inner " + styles.faqItem}>
                    {faqs.map((item, index) => {
                        return (
                            <div className={styles.faq}>
                                <div className={styles.faqContent}>
                                    <header>{item.title}</header>
                                    <img
                                        src={"/icons/common/down.svg"}
                                        onClick={() => {
                                            item.isVisible = !item.isVisible;
                                            set_render((prev) => prev + 1);
                                        }}
                                    />
                                </div>
                                {item.isVisible && (
                                    <div className={styles.faqContentExpanded}>
                                        <header>{item.desc}</header>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <BookNow />
            <BackToTop />
            <Footer />
        </Fragment>
    );
}
