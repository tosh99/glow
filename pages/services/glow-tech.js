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
                titleElement={"GLOW TECH"}
                id={"laserHairReduction"}
                srTitle={"LASER HAIR REDUCTION"}
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
            <ServicesComponent
                srTitle={"MORPHEUS8"}
                id={"morpheus8"}
                content={
                    "Morpheus8 is a technological revolution in the beauty world.  It uses microneedling radiofrequency (MNRF) technology,  and is widely popular among Hollywood celebrities to treat scars and refine skin. It works on acne scars and dilated pores with deep layer skin contraction on multiple levels. It safely tightens the facial skin, remodels the jawline and tones saggy skin. It also promotes collagen production leaving the skin plumper, firmer and tighter. The skin instantly looks and feels younger with a silky smooth surface with reduced signs of ageing. Morpheus8 gives an instant yet long lasting glow and clear skin.\n"
                }
            />
            <ServicesComponent
                srTitle={"MORPHEUS8 BODY"}
                id={"morpheus8body"}
                content={
                    "Morpheus8 Body is the most sought after body remodelling treatment. It treats saggy skin in various areas of the body including belly thighs and arms. It uses micro-pins of various lengths to treat every part with the depth and pressure required. This FDA approved treatment significantly reduces stretch marks, cellulite and scarring making the skin look miraculously smooth and toned.\n"
                }
            />
            <ServicesComponent
                srTitle={"FORMA"}
                id={"forma"}
                content={
                    "Forma, also known as face iron, uses radiofrequency technology to contour the face making it appear more toned and firm with lifted cheek bones. It is suitable for people looking for non-surgical treatments to defy skin ageing, get defined jawline, reduce fine lines and wrinkles. It also tightens the sagging skin around the neck and submental area and stimulates collagen production. It leaves the skin refreshed and younger giving it a healthy glow.\n"
                }
            />

            <BookNow/>
            <BackToTop/>
            <Footer/>
        </Fragment>
    );
}
