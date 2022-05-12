import { Fragment, useEffect, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper/core";
import BackToTop from "../../shared/components/back-to-top";
import BookNow from "../../shared/components/book-now";
import Footer from "../../shared/components/footer/footer";
import PageH2 from "../../shared/components/page-header/page-h2";
import ServicesComponent from "../../shared/components/pages/services/services";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

export default function BRFacials() {
    const [device, set_device] = useState(2);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <Fragment>
            <PageH2 title={"Services"} />
            <ServicesComponent
                titleElement={"Hair Treatments"}
                srTitle={"OXYGENATING & STRENGTHENING"}
                id={"oxygenating"}
                bannerUrl={`/images/services/hair-treatments/banner.png`}
                content={
                    "A procedure to oxygenate and fortify your hair. Providing anti-pollution hair care for dull, dry and damaged hair by eliminating the polluting particles on the scalp and hair lengths. The Oxygenating Complex helps stimulate cell respiration by replenishing cells whose oxygen content has become depleted. Vitalises dry and weakened capillary fibres, regains hair strength and glossy shine."
                }
            />
            <ServicesComponent
                srTitle={"SEBO-REGULATING"}
                id={"sebo"}
                content={
                    "A procedure to gently cleanse and purify your scalp. Combining effective hair care with a gentle formula suitable for sensitive scalps. Thanks to its purifying, cleansing and sebo-regulating active ingredients, it leaves the scalp thoroughly clean and less prone to oiliness. Reduces and regulates future sebum production."
                }
            />
            <ServicesComponent
                srTitle={"DRY DANDRUFF BALANCING"}
                id={"dryDandruff"}
                content={
                    "A balancing methodology for hair with dry dandruff, this gentle procedure is suitable even for the most sensitive scalps to eliminate flaking. Cleansing and protecting hair while preserving the natural balance of the scalp. Its soothing and reconditioning active ingredients combine effectively to calm an itching scalp and provide a genuine sensation of relief. "
                }
            />
            <ServicesComponent
                srTitle={"GREASY DANDRUFF BALANCING"}
                id={"greasyDandruff"}
                content={
                    "A balancing methodology for hair with greasy dandruff. It regulates sebum secretions so the scalp is clean and rebalanced. Works on the scalp to gently eliminate flaking while reconditioning the hair length. Recommended for all Scalp Instants especially prone to seborrhea."
                }
            />
            <ServicesComponent
                srTitle={"OXYGENATING & STRENGTHENING WITH MICRO-PUNCTURE"}
                id={"oxygenatingMicro"}
                content={
                    "We combine the Oxygenating and Strengthening protocol along with the Micro-Puncture protocol designed for tired scalps and lifeless hair. The Oxygenating Complex helps stimulate cell respiration by replenishing cells whose oxygen content has become depleted. When used with the micro puncture pen, it stimulates collagen production by increasing blood flow. This in turn stimulates hair growth by increasing density and thickness. This procedure is good for deep cleanse of the scalp, improving hair count and volume, hydrating and nourishing the scalp and giving your hair a softer and silkier look."
                }
            />
            <ServicesComponent
                srTitle={"GROWTH FACTOR THERAPY"}
                id={"growthFactor"}
                srPurpose={"We re commend  3 sessions for optimum results."}
                content={
                    "Ideal for hair concerns where you’re experiencing thinning, hair fall and loss of density or want to take preventative measures for dull, dry and damaged hair with weakened capillary fibres. This procedure includes an initial blood draw, followed by running the blood through a centrifuge to isolate the growth factors. You'll then receive these isolated growth factors through injection into your scalp. These growth factors fortify hair follicles, stimulate new growth and rejuvenate dormant hair follicles. It additionally helps with improved scalp health, hair thickness and strength, lending itself to prevention of hair fall."
                }
            />
            <ServicesComponent
                srTitle={"K18"}
                id={"k18"}
                content={
                    "Travelling into the innermost layers of hair to reach the core polypeptide chains (keratin chains), the revolutionary K18Peptide™ is a bioactive peptide that is just the right size and makeup to fit in and reconnect broken chains. With just one treatment session your hair will be restored to 91% of its original strength and 94% of its original elasticity. This treatment involves a pre-treatment professional molecular repair hair mist that strengthens hair for the chemical treatment and a professional molecular repair hair mask that is clinically proven to repair and reverse damage caused by chemical services and thermal styling. Ideal for hair that has been visibly damaged from salon treatments or exposure to environmental stressors."
                }
            />
            <ServicesComponent
                srTitle={"Moroccan Oil Hair Spa"}
                id={"moroccan"}
                content={
                    "Get the silky, shiny and healthy hair you've always wanted. Moroccan Oil Hair treatment products pioneered oil-infused hair care and brought everyone to notice the many benefits of argan oil. Infused with antioxidant-rich argan oil and shine-boosting vitamins, this completely transformative hair treatment repairs damaged hair, boosts shine, prevents split ends, controls frizziness  and even reduces the occurrence of dandruff — leaving you with nourished, shiny, and smooth hair. With the 4 step treatment of shampoo, conditioner, hair mask and scalp massage, this is the ultimate pampering ritual for your tresses."
                }
            />
            <BookNow />
            <BackToTop />
            <Footer />
        </Fragment>
    );
}
