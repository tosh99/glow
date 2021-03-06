import {Fragment, useEffect, useState} from "react";
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from "swiper/core";
import BackToTop from "../../shared/components/back-to-top";
import BookNow from "../../shared/components/book-now";
import Footer from "../../shared/components/footer/footer";
import ServicesComponent from "../../shared/components/pages/services/services";
import Services from "./index";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

export default function GlowTech() {
    const [device, set_device] = useState(2);
    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0);
        }
    }, []);

    return (
        <Fragment>
            <Services title={"Services"}/>
            <ServicesComponent
                titleElement={"IV Infusions"}
                id={"hydraCleanse"}
                srTitle={"HYDRA CLEANSE <p>Rs 4000</p>"}
                bannerUrl={`/images/services/iv-infusions/banner.png`}
                content={
                    "Whether it’s air quality, poor diet or even a fast-paced lifestyle, your body is constantly bombarded by environmental stressors. Hydra Cleanse is our signature drip that boosts hydration levels and cleanses the system by re-hydrating cells, and is great for when you’re feeling fatigue or your skin is feeling dull or dehydrated. " +
                    "<br><br><h6>Purpose : Hydration</h6>"
                }
            />
            <ServicesComponent
                srTitle={"HELLO HEALTH"}
                id={"helloHealth"}
                content={
                    "Our highly recommended drip for sickness and recovery, Hello Health is perfect for those who need a quick turnaround or boost to their immune defences. It is our signature drip that reduces the intensity and duration of viruses / flu, helps the body’s natural defences to fight inflammation and infection and is also great for a depleted immune system and pre-travel boost. <br><br><h6>Purpose : Immunity</h6>"
                }
            />
            <ServicesComponent
                srTitle={"BYE HANGOVER"}
                id={"byeHangover"}
                content={
                    "Even after the alcohol clears your system, it can stick around from 8 to 24 hours, depending on your consumption. Get your body and mind on the right path to feeling healthier with our Bye Hangover infusion. Our signature vitamin blend that replenishes electrolytes and dehydration levels, vitality and liver function. Also great for gut health, dehydration, jet lag, and detox. <br><br><h6>Purpose : Hangover Cure</h6>"
                }
            />
            <ServicesComponent
                srTitle={"GET SET GLOW"}
                id={"getSetGlow"}
                content={
                    "Get Set Glow is your go-to choice for cleansing and detoxifying the liver to reveal a healthy, glowing skin and enhanced skin tone. Great for combating inflammation and flushes out toxins to rejuvenate your skin from within. Also good for when you’re feeling fatigued. <br><br><h6>Purpose : Detox</h6>"
                }
            />
            <ServicesComponent
                srTitle={"GLUTA GLOW"}
                id={"glutaGlow"}
                content={
                    "Rehydrate, replenish and restore with our Gluta Glow drip, packed with glutathione, multivitamins and antioxidants to combat dullness and inflammation. Glutathione is a powerful antioxidant that removes free radicals and toxins that lead to hyperpigmentation, age spots, sun spots, wrinkles, acne and even melasma. Gluta Glow removes skin imperfections to reveal a radiant complexion and is a pre-event favourite to help you achieve healthy, glowing skin. <br><br><h6>Purpose : Brightening</h6>"
                }
            />
            <ServicesComponent
                srTitle={"QUICK BOOST"}
                id={"quickBoost"}
                content={
                    "Cool your body’s inflammation from a night out or fight fatigue with our Quick Boost infusion. Electrolyte hydration combined with vitamins and minerals to help augment your immune system and protect against toxins in the external and internal environment. Perfect for when you’re feeling depleted of energy levels. <br><br><h6>Purpose : Energy Boost</h6>"
                }
            />
            <ServicesComponent
                srTitle={"MYER’S MAGIC POTION"}
                id={"myersMagic"}
                content={
                    "Named after the late John Myers, M.D., the Myers Magic Potion is the first ever IV Therapy. It is an infusion of multiple vitamins and minerals that help restore balance to your body and mind by resolving stress, muscle pains, migraines, and a lot more. This drip hydrates your body to stimulate growth and support tissue repair, boosts immunity, controls blood pressure and maintains optimal body weight. It also helps relieve PMS symptoms. <br><br><h6>Purpose : Overall Wellness</h6>"
                }
            />

            <BookNow/>
            <BackToTop/>
            <Footer/>
        </Fragment>
    );
}
