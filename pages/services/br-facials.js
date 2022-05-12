import { Fragment, useEffect, useState } from "react";
import PageH2 from "../../shared/components/page-header/page-h2";
import Footer from "../../shared/components/footer/footer";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper/core";
import BackToTop from "../../shared/components/back-to-top";
import BookNow from "../../shared/components/book-now";
import ServicesComponent from "../../shared/components/pages/services/services";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

export default function BRFacials() {
    const [device, set_device] = useState(2);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <Fragment>
            <PageH2 bg={"dark"} />
            <ServicesComponent
                isDarkBg={true}
                titleElement={"BIOLOGIQUE RECHERCHE"}
                bannerUrl={`/images/services/br-facials/banner.png`}
                content={
                    "Exclusively presenting to you Biologique Recherche — the leading dermo-cosmetic skincare brand born in Paris, " +
                    "France in 1992. Reputed across the globe for their technologically advanced approach to skincare, luxury skincare products " +
                    "and facial techniques." +
                    "<br><br>" +
                    "What makes them the ever withstanding brand in skincare is the combination of a specific physiological, behavioural and tactile techniques. We use skin boosters that are tailored to combat specific skin concerns and give you an instant glow."
                }
            />

            <ServicesComponent
                titleElement={"Face"}
                srTitle={"SKIN INSTANT© LAB"}
                id={"skinInstantLab"}
                srDesc={"20 min"}
                bannerUrl={`/images/services/br-facials/face.png`}
                content={
                    "The Skin Instant Lab consists of five sensors (measuring hydration,trans-epidermal water loss, elasticity, pigmentation and sebum levels) linked to a computer with an exclusive diagnostic analysis software program developed by Biologique Recherche. Based on our expert’s dermo-cosmetic analysis and objective easurements, the Skin Instant  Lab, retrieves data from our knowledge bank to come up with a selection of products and protocols perfectly matched to your Skin Instant needs."
                }
            />
            <ServicesComponent
                srTitle={"VISIOLAB©"}
                id={"visionLab"}
                srDesc={"30 min"}
                content={
                    "As a complement to the Skin Instant Lab, the Visiolab  takes a high-resolution picture of your face so that its features can be scientifically analysed. A detailed image will further analyse any wrinkles, the evenness of your complexion, UV pigmentation and the state of your pores. Results are calculated in real time so your beautician can directly interpret\n" +
                    "your Skin Instant and tailor a prescription of products and protocols that are precise to\n" +
                    "your individual requirements."
                }
            />
            <ServicesComponent
                srTitle={"SOIN RESTRUCTURANT ET LISSANT"}
                id={"soinRestructurant"}
                srDesc={"90 min"}
                content={
                    "<p>For replumped and hydrated skin</p>Designed for the quintessential city skin; it targets reactive, stressed and traumatised skin. An excellent anti-stress treatment that reduces the marks of time by hydrating, protecting and smoothing. A reconditioning procedure to contour and sculpt the face with an immediate replumping effect, designed for all Skin Instants. It has a draining action,\n" +
                    "leaving the skin of your face, neck and cleavage smoothed and toned."
                }
            />
            <ServicesComponent
                srTitle={"SOINLIFT C.V.S"}
                id={"soinLift"}
                srDesc={"90 min"}
                content={
                    "<p>For firmer and more toned skin</p>An exfoliating and lifting protocol combined with shaping techniques, designed for mature Skin Instants. Using the Jacquet-Leroy massage technique of unique vibrational movements and a gentle pinching technique performed around connective tissue to stimulate elastin and collagen whilst lifting and defining facial contours. The ultimate anti-ageing facial that will leave your skin smooth, refined and toned."
                }
            />
            <ServicesComponent
                srTitle={"SOIN MC 110"}
                srDesc={"60 min"}
                id={"soinMC"}
                content={
                    "<p>For minimising wrinkles</p>The MC 110 plumping procedure is particularly beneficial for anyone noticing a loss of volume and elasticity in the face or people seeking fuller skin. Using facial techniques that reduce wrinkles and fine lines dramatically, designed for lackluster Skin Instants . It leaves the skin on your face, neck and cleavage toned and redefines the oval of your face. Skin feels smoother, clearer and brighter."
                }
            />
            <ServicesComponent
                srTitle={"SOIN PEELING AUX ACIDES DE FRUITS"}
                srDesc={"60 min"}
                id={"soinPeeling"}
                content={
                    "<p>For refined skin texture</p>Rich in AHA, BHA and PHA, it exfoliates the epidermis to remove dead cells from the surface and to promote cell regeneration. A clinical procedure that smooths uneven areas\n" +
                    "on the skin such as acne scars, blemishes and dark spots. Recommended for lackluster and thick Skin Instants. It leaves the skin smoothed, radiant and refined. Leaves your skin feeling visibly brighter and dewy."
                }
            />
            <ServicesComponent
                srTitle={"SOIN MASQUE EXFOLIANT P50 VISAGE"}
                srDesc={"60 min"}
                id={"soinMasque"}
                content={
                    "<p>For deeply purified skin</p>The smoothing, unifying booster is formulated to help prevent premature aging of the skin, work on hyper-pigmentation and brighten the complexion. An exfoliating and regenerating protocol for keratinized Skin Instants and skin with an irregular micro-profile or textured skin. It evens out skin tone, leaving your face smooth and glowing."
                }
            />
            <ServicesComponent
                srTitle={"SOIN BOOSTER VIP O2"}
                srDesc={"60 min"}
                id={"soinBooster"}
                content={
                    "<p>For brighter skin</p>A treatment to detoxify and stimulate the epidermis and reoxygenate skin tissue, for dull Skin Instants asphyxiated by city pollution. This balancing facial is perfect for those who want refreshed and rejuvenated skin. A luxurious and balancing oxygen facial that features\n" +
                    "a perfect combination of micro-exfoliation, oxygenation, and bio-energy massages to leave you with healthy, revitalized, and glowing skin. It helps boost collagen production, detoxify the skin, accelerate cellular turnover, all while providing vital moisture. Your complexion is incredibly revitalized, skin is more luminous and radiant . "
                }
            />
            <ServicesComponent
                srTitle={"DOUBLE BOOSTER"}
                srDesc={"120 min"}
                id={"doubleBooster"}
                content={
                    "<p>For lifted and smoothed skin</p>After conducting a thorough analysis of your Skin Instants our Skin Expert will prescribe\n" +
                    "a combination of two of the above facials that will give your visage twice the boost. An exfoliating and reconditioning procedure that works on a deeper level for skin that is lifted, sculpted, even-toned and smoothed. Using advanced techniques to make sure results last longer."
                }
            />
            <ServicesComponent
                srTitle={"SOIN SECONDE PEAU"}
                srDesc={"60 min"}
                id={"soinSeconde"}
                content={
                    "<p>For youthful skin</p>A world’s first in professional aesthetic care, this regenerating and lifting treatment features an electrospun mask with 80% pharmaceutical-grade hyaluronic acid and is designed for altered Skin Instants. It is an incredible regenerating treatment that is a revolutionary alternative to invasive facial fillers. Sterile electrospun hyaluronic acid skin patches are custom fitted to your unique trouble areas and massaged carefully with serum until absorbed, creating an effective anti-wrinkle treatment with instant results. This treatment was specifically designed with the needs of maturing skin in mind. This anti-wrinkle treatment results in a plumper and more hydrated skin instantly." +
                    "<br><br>SINGLE BOOSTER + SOIN SECONDE PEAU" +
                    "<br>DOUBLE BOOSTER + SOIN SECONDE PEAU"
                }
            />
            <ServicesComponent
                srTitle={"MICRO PUNCTURE LAB"}
                srDesc={"60 mins"}
                id={"microPuncture"}
                content={
                    "<p>For radiant and youthful skin </p>An intensive treatment that activates collagen production through intra-epidermal micro-stimulation and helps combat premature signs of skin aging. It helps remodel the deeper dermal layer for increased regeneration, resurfacing and firmness. The obtained effects are the stimulation of intra-dermal collagen production and increased penetration of Cocktail d’Actifs Regenerants vitamins and growth factor serum. This intensive treatment helps fight against signs of premature skin aging and results in a firmer, plumper skin, reduces the appearance of scars, fine lines and wrinkles and refines skin texture. Skin is better moisturised and regains its elasticity and smoothness. The complexion is more radiant and even, sagging skin feels denser, restructured and stretched."
                }
            />
            <ServicesComponent
                srTitle={"REMODELLING FACE©"}
                srDesc={"60 mins"}
                id={"remodellingFace"}
                isFullSeparator={true}
                content={
                    "<p>For lifted and sculpted look</p>Get brighter looking eyes, more pronounced cheekbones, fewer visible wrinkles and a clearly defined facial contour with Biologique Recherche’s innovative face sculpting, Remodeling Facial Machine. This state-of-the-art anti-aging\n" +
                    "treatment uses a bio-electro stimulation through this combination of microcurrents — galvanic current, medium and high frequencies, for immediate and long-lasting results. This sculpting facial utilizes microcurrents to increase the skin’s absorption of active ingredients in the serums and products we apply to your face. The low and medium frequency currents tone and re-shape your face while the high-frequency currents regenerate and rejuvenate your skin. " +
                    "<br><br>SINGLE BOOSTER + REMODELLING FACE©" +
                    "<br>DOUBLE BOOSTER + REMODELLING FACE©"
                }
            />
            <ServicesComponent
                titleElement={"EN PLUS"}
                bannerUrl={`/images/services/br-facials/enplus.png`}
                srTitle={"PRIVILEGE PASS"}
                id={"privilegePass"}
                content={
                    "With Biologique Recherche’s Privilege Pass you enjoy 5 facials or bodytreatments consisting of Single Boosters or Double Boosters" +
                    "<br><br>(Excluding the Seconde Peau Treatment and Specific Treatments)<br><br>" +
                    "<h4>5 Treatments of Single Booster (60 mins)</h4>" +
                    "<h4>5 Treatments of Single Booster (90 mins)</h4>" +
                    "<h4>5 Treatments of Double Booster</h4>"
                }
            />
            <ServicesComponent
                titleElement={"ADD ONS"}
                id={"addOns"}
                content={
                    "<h5>Cold Mask.</h5>" +
                    "<h5>Algae Jelly Mask</h5>" +
                    "<h5>LED Therapy</h5>" +
                    "<h5>Masque Pigm400</h5>" +
                    "<h5>Patches Defatigants</h5>" +
                    "<h5>Soin Biovecteur Marin</h5>" +
                    "<h5>Masque Collagene Caviar</h5>" +
                    "<h5>Masque Biologique Feerie Face</h5>"
                }
            />
            <BookNow />
            <BackToTop />
            <Footer />
        </Fragment>
    );
}
