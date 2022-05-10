import { Fragment, useEffect, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper/core";
import BackToTop from "../../shared/components/back-to-top";
import BookNow from "../../shared/components/book-now";
import Footer from "../../shared/components/footer/footer";
import PageH2 from "../../shared/components/page-header/page-h2";
import ServicesComponent from "../../shared/components/pages/services/services";

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
                titleElement={"GLOW TECH"}
                id={"laserHairReduction"}
                srTitle={"LASER HAIR REDUCTION"}
                srDesc={"20 min"}
                bannerUrl={`/images/services/glow-tech/banner.png`}
                content={
                    "We use the world's first 2D diode technology with dual wave-length, the advanced Reveal VEGA for better, quicker and smoother hair removal. Furthermore, it uses an exclusive Smooth Mode TM that makes it safe for pigmented skin and lighter hair. The best-in-class cooling system makes the\n" +
                    "treatment comfortable and virtually painless. Appropriate for full body hair removal and intimate areas as well."
                }
            />
            <ServicesComponent
                srTitle={"SPECTRA LASER TONING"}
                id={"spectraLaserToning"}
                content={
                    "We use the revolutionary device, Hollywood Spectra™ as a platform to perform laser toning — a unique treatment for Melasma and Post Inflammatory Hyperpigmentation. It is one of the only FDA-approved lasers to treat melasma and is safe for all skin types. It uses the laser energy to reduce visible pigmentation by breaking down melanin molecules naturally. It’s a procedure recommended to even out skin tone and improve skin texture. Additionally, it helps with skin brightening, even skin tone, and reduced fine lines and wrinkles."
                }
            />
            <ServicesComponent
                srTitle={"HOLLYWOOD LASER PEEL"}
                id={"hollywoodLaserPeel"}
                content={
                    "We use the revolutionary device, Hollywood Spectra™, which is the world’s leading laser platform with proprietary capabilities to restore glowing skin. During this treatment, a layer of carbon peel is applied to the skin which acts as a target for the laser. Laser energy is then applied to the skin to lightly emove carbon particles within the peel which, as a result, lifts up the upper, dead skin layer and stimulates collagen production. This most sought-after Hollywood Spectra Peel helps exfoliate the skin, reduce pigmentation and sun damage, and softens skin tone and texture .A facial that will give you that enviable, soft, dewy glow."
                }
            />

            <BookNow />
            <BackToTop />
            <Footer />
        </Fragment>
    );
}
