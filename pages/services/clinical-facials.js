import { Fragment, useEffect, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper/core";
import BackToTop from "../../shared/components/back-to-top";
import BookNow from "../../shared/components/book-now";
import Footer from "../../shared/components/footer/footer";
import ServicesComponent from "../../shared/components/pages/services/services";
import PageH2 from "../../shared/components/page-header/page-h2";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

export default function GlowTech() {
    const [device, set_device] = useState(2);
    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <Fragment>
            <PageH2 title={"Services"} />
            <ServicesComponent
                titleElement={"IS CLINICAL"}
                srTitle={"FIRE & ICE"}
                bannerUrl={`/images/services/clinical-facials/banner.png`}
                content={
                    "The legendary Fire & Ice facial is designed to safely resurface and rapidly rejuvenate the skin with little or no downtime. This professional protocol helps reduce the appearance of fine lines and wrinkles while improving the appearance of uneven skin tone and blemishes, resulting in a more youthful complexion."
                }
            />

            <ServicesComponent
                srTitle={"FOAMING ENZYME"}
                isFullSeparator={true}
                content={
                    "The powerful yet soothing Foaming Enzyme facial combines papaya and pineapple enzymes with a potent clinical-level grade of glycolic acid. This professional protocol produces a luxurious foaming activity while bioactive ingredients exfoliate and deep-cleanse the pores; revealing a polished, healthy and radiant complexion."
                }
            />

            <ServicesComponent
                titleElement={"ZEIN OBAGI"}
                srTitle={"ZO Stimulator Facial"}
                bannerUrl={`/images/services/clinical-facials/obagi.png`}
                content={
                    "A combination of citric, glycolic and lactic acids help to improve skin texture and tone by providing both accelerated exfoliation of the epidermal layer to remove dead skin cells. Its unique brightening complex works to prevent the formation of hyper-pigmentation and dark spots for a radiant skin. A highly effective protocol for the many signs of skin ageing, the ZO Stimulator Peel is ideal for treating fine lines, uneven texture, large pores, dull skin and acne."
                }
            />

            <ServicesComponent
                srTitle={"VAMPIRE FACIAL"}
                bannerUrl={`/images/services/clinical-facials/vampire.png`}
                content={
                    "A clinical facial designed to combat premature wrinkles, uneven skin tone, blemishes and dullness. Made for a lasting face lift that returns the youthful glow to your skin. This procedure includes an initial blood draw, followed by running the blood through a centrifuge to isolate the platelets which are then injected into your face. The platelets contain high levels of growth factors, which, when applied to the skin, will stimulate cell turnover. This helps your skin function optimally, increasing everything from collagen to elastin for a firm skin, while also bringing antioxidant and hydrating properties."
                }
            />

            <ServicesComponent
                srTitle={"EXPRESS GLOW"}
                content={
                    "A quick 30 - 40 minutes facial that involves a 3 step process of cleansing, exfoliating and masking for that instant glow. This facial has been designed keeping in mind your busy schedule. Whether it is a last minute rejuvenation before a big day or a bi-weekly upkeep that you can fit into your day’s events, this facial is the right choice for you. We start with a therapeutic massage to prepare your skin for a deep cleanse. This is followed by exfoliation using a customised peel and the swift application of a hydrojelly algae mask. The mask is customised to your skin’s needs for hydration, brightening or plumping."
                }
            />

            <ServicesComponent
                srTitle={"GLASS SKIN FACIAL"}
                content={
                    "A K-Beauty secret to luminous skin, this is an advanced dermatological treatment that provides instant results in — brightening, hydration and smoothness of the skin. It works inwards by stimulating our skin’s fibroblast cells with its patent technology, improving pigmentation, skin texture and firmness with 56 components infused directly into your skin through the help of patent needles. A facial that infuses glutathione, hyaluronic acid, amino acids, proteins and vitamins into the skin. It additionally helps combating free radicals, build a healthy skin barrier and firming skin."
                }
            />

            <ServicesComponent
                srTitle={"MIRAPEEL"}
                content={
                    "MIRApeel TM is an advanced aesthetic treatment device with serum infused dermabrasion, micro-channelling, microcurrent and LED therapy for face, neck and décolleté. It is the most effective, most comprehensive skin therapy modality to help you with minimising pores, reducing acne, fine lines, wrinkles and hyperpigmentation. MIRApeel TM combines wet abrasion and the use of micro-needling in one effective and non-invasive treatment. The treatment is done via a five-step process. The first step involves gentle cupping therapy for lymphatic drainage. The second step involves microdermabrasion or gentle exfoliation of the outer layers. The third step uses microneedles that are rolled across the skin along with a flow of customised serums. This is followed by a full spectrum LED light therapy which helps reduce acne, reduces inflammation and promotes anti-aging. Lastly followed with the application of a bio-cellulose face mask that keeps the skin moist. What is even more extraordinary about the MIRApeel TM is the use of 4 customised serums for detoxifying, exfoliating, moisturising and nourishing the skin from within."
                }
            />

            <BookNow />
            <BackToTop />
            <Footer />
        </Fragment>
    );
}
