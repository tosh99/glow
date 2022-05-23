import { Fragment, useEffect, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper/core";
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

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <Fragment>
            <Services title={"Services"} />
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

            <BookNow />
            <BackToTop />
            <Footer />
        </Fragment>
    );
}
