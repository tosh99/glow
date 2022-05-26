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
                id={'laserHairReduction'}
                srTitle={"LASER HAIR REDUCTION"}
                bannerUrl={`/images/services/glow-tech/banner-chennai.png`}
                content={
                    "We use the world's first 2D diode technology with dual wave-length, the advanced Reveal VEGA for better, quicker and smoother hair removal. Furthermore, it uses an exclusive Smooth Mode TM that makes it safe for pigmented skin and lighter hair. The best-in-class cooling system makes the\n" +
                    "treatment comfortable and virtually painless. Appropriate for full body hair removal and intimate areas as well."
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
            <ServicesComponent
                srTitle={"Lumecca Photofacial"}
                id={"lumeca"}
                content={
                    "Lumecca uses intense pulsed light aimed at treating various skin concerns like  sun damage, rosacea and mild pigmentation.The precision of this photofacial also helps remove unwanted freckles and age spots. This fairly simple and quick process leaves the skin beautifully illuminated while repairing it.  Apart from the face, Lumecca can also be used to reduce pigmentation and signs of ageing on the neck and décolletage area.\n"
                }
            />

            <BookNow/>
            <BackToTop/>
            <Footer/>
        </Fragment>
    );
}
