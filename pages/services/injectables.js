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

        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <Fragment>
            <Services title={"Services"}/>
            <ServicesComponent
                titleElement={"DERMAL FILLERS"}
                id={"dermalFillers"}
                bannerUrl={`/images/services/injectables/banner-chennai.png`}
                content={
                    "We have innovative injectable treatments designed to improve skin quality by replacing skin’s lost volume and replenishing its moisture content. It's formulated with skin conditioning hyaluronic  acid gel that is injected into the middle layers of the dermis across many sites to nourish it from the inside out. It hydrates the skin, because of the high water-binding capacity of hyaluronic acid,increases elasticity " +
                    "by stimulating collagen production and smoothes the skin by reducing the appearance of fine lines. Suitable for your cheeks, under eye, lips, chin, jawline augmentation and nasolabial folds." +
                    "<br><br>JUVÉDERM® FILLERS<br><br>" +
                    "<article>Ultra Plus XC <br></article>" +
                    "<article>Volbella <br></article>" +
                    "<article>Voluma <br></article>" +
                    "<article>Volift <br></article>" +
                    "<article>Profhilo<article>"
                }
            />
            <ServicesComponent
                titleElement={"SKIN BOOSTER"}
                id={"volite"}
                srTitle={"VOLITE"}
                isFullSeparator={true}
                content={
                    "Juvéderm  Volite is an innovative injectable treatment designed to improve skin quality by replenishing its moisture content. It's a skin conditioning hyaluronic acid gel that is injected into the middle layers of the dermis across many sites to nourish it from the inside out. It hydrates the skin, because of the high water-binding capacity of hyaluronic acid, increases elasticity by stimulating collagen production and smoothes the skin by reducing the appearance of fine lines. Suitable for your face, neck, décolletage and the back of your hands. The effects of Volite last for up to 9 months."
                }
            />
            <ServicesComponent
                titleElement={"ANTI-WRINKLE INJECTIONS"}
                id={"botox"}
                srTitle={"BOTOX®"}
                bannerUrl={`/images/services/injectables/botox.png`}
                content={
                    "BOTOX Cosmetic is FDA-approved to temporarily make moderate to severe frown lines, crow's feet, and forehead lines look better in adults. It improves the appearance of your skin as signs of aging begin to show, by relaxing the muscles that cause wrinkles. The effects of BOTOX last for several months."
                }
            />
            <ServicesComponent
                srTitle={"PROPHILO"}
                id={"prophilo"}
                content={
                    "Profhilo is an injectable, stabilised Hyaluronic Acid based product, designed to remodel multi-layer skin tissue. It is an anti-aging product that treats the source of ageing and not only the ageing symptoms. Having the highest Hyaluronic Acid concentration of 32 mg / ml and biological activation with multi-level 3D followability it reduces the number of treatment sessions, number of injections sites and downtime.  This clinically tested skin tissue enhancer remodels 3 main types of tissues — Collagen, Elastin & Adipocytes (fat cells) by stimulating fibroblast cells, activating keratinocytes and, preserving and encouraging the viability of adipocytes"
                }
            />

            <BookNow/>
            <BackToTop/>
            <Footer/>
        </Fragment>
    );
}
