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
                titleElement={"IS CLINICAL"}
                id={'fireAndIce'}
                srTitle={"FIRE & ICE"}
                bannerUrl={`/images/services/clinical-facials/banner.png`}
                content={
                    "The legendary Fire & Ice facial is designed to safely resurface and rapidly rejuvenate the skin with little or no downtime. This professional protocol helps reduce the appearance of fine lines and wrinkles while improving the appearance of uneven skin tone and blemishes, resulting in a more youthful complexion."
                }
            />

            <ServicesComponent
                srTitle={"FOAMING ENZYME"}
                id={'foamingEnzyme'}
                isFullSeparator={true}
                content={
                    "The powerful yet soothing Foaming Enzyme facial combines papaya and pineapple enzymes with a potent clinical-level grade of glycolic acid. This professional protocol produces a luxurious foaming activity while bioactive ingredients exfoliate and deep-cleanse the pores; revealing a polished, healthy and radiant complexion."
                }
            />

            <ServicesComponent
                titleElement={"ZEIN OBAGI"}
                id={'zoStimulator'}
                srTitle={"ZO Stimulator Facial"}
                bannerUrl={`/images/services/clinical-facials/obagi.png`}
                content={
                    "A combination of citric, glycolic and lactic acids help to improve skin texture and tone by providing both accelerated exfoliation of the epidermal layer to remove dead skin cells. Its unique brightening complex works to prevent the formation of hyper-pigmentation and dark spots for a radiant skin. A highly effective protocol for the many signs of skin ageing, the ZO Stimulator Peel is ideal for treating fine lines, uneven texture, large pores, dull skin and acne."
                }
            />

            <ServicesComponent
                srTitle={"VAMPIRE FACIAL"}
                id={'vampireFacial'}
                bannerUrl={`/images/services/clinical-facials/vampire.png`}
                content={
                    "A clinical facial designed to combat premature wrinkles, uneven skin tone, blemishes and dullness. Made for a lasting face lift that returns the youthful glow to your skin. This procedure includes an initial blood draw, followed by running the blood through a centrifuge to isolate the platelets which are then injected into your face. The platelets contain high levels of growth factors, which, when applied to the skin, will stimulate cell turnover. This helps your skin function optimally, increasing everything from collagen to elastin for a firm skin, while also bringing antioxidant and hydrating properties."
                }
            />

            <ServicesComponent
                srTitle={"DIAMOND GLOW"}
                id={'diamondGlow'}
                content={
                    "The Diamond Glow treatment is a hydra-dermabrasion procedure that uses patented technology to cleanse, extract and hydrate the skin. It’s a three step facial that exfoliates, deep cleaness, and infuse the skn with condition- specific serums for an all-inclusive luxury treatment. This gentler approach uses a diamond tip that vacuums out pores while simultaneously pushing in potent actives, which moisturize, brighten, plump, and protect. We choose from 4  different scrums that can be customized to your skin needs, These active ingredients are delivered at optimal skin depths to  enhance serum absorption  and retention at a deeper level. It improves skin health, function and appearance. This treatment is finished with a customised mask for brightening, hydrating and soothing the skin."
                }
            />

            <ServicesComponent
                srTitle={"OXYGLOW"}
                id={'oxyGlow'}
                content={
                    "The Oxyglow facial uses oxygen therapy to revitalise the skin. It is a  revolutionary system that generates 90% purified oxygen and producesanions 3 million times better than natural production. It uses pure oxygen to re-energize  skin cells and turn back the clock on aging. It is essential for absolutely anyone looking to get brighter, clearer, and healthier skin. Good for reducing  acne-causing bacteria, stimulating collagen production, supporting nutrient intake, and improving the tone and texture of the skin. Simply put, a facial that purefies, hydrates and brightens the face making it appears naturally and youthful."
                }
            />


            <ServicesComponent
                srTitle={"EXPRESS GLOW"}
                id={"expressGlow"}
                content={
                    "A quick 30 - 40 minutes facial that involves a 3 step process of cleansing, exfoliating and masking for that instant glow. This facial has been designed keeping in mind your busy schedule. Whether it is a last minute rejuvenation before a big day or a bi-weekly upkeep that you can fit into your day’s events, this facial is the right choice for you. We start with a therapeutic massage to prepare your skin for a deep cleanse. This is followed by exfoliation using a customised peel and the swift application of a hydrojelly algae mask. The mask is customised to your skin’s needs for hydration, brightening or plumping."
                }
            />
            <BookNow/>
            <BackToTop/>
            <Footer/>
        </Fragment>
    );
}
