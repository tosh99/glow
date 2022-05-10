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
                titleElement={"PEELS"}
                id={"darmelan"}
                srTitle={"DERMAMELAN©"}
                bannerUrl={`/images/services/clinical-peels/banner.png`}
                content={
                    "A clinical peel designed to combat hyperpigmentation that occurs from excessive sun exposure, hormone imbalances, inflammation or injury to the skin. Suitable for all skin types including darker skin tone, this procedure addresses melanic inconsistencies, brightens and unifies skin tone as well as improving the texture of the skin. Dermamelan is a modified, more intensive peel with a 30% increase in strength from its milder counterpart, Cosmelan. Suitable for those with notably significant or severe pigmentation."
                }
            />

            <ServicesComponent
                srTitle={"COSMELAN©"}
                id={"cosmelan"}
                content={
                    "A clinical peel designed to combat melanic inconsistencies, improve" +
                    "skin quality and, even skin tone and texture. Cosmelan  is a modified, gentler version of the Dermamelan peel, suitable for those with mild to moderate pigmentation" +
                    "<br><br>COSMELAN© PEEL + AT HOME PACK"
                }
            />

            <ServicesComponent
                srTitle={"ACNELAN©"}
                id={"acnelan"}
                srDesc={"We re commend 3 sessions for optimum results."}
                content={
                    "The Acnelan Peel is an intensive clinical treatment for acne-prone and seborrheic skin. It targets the triggers of acne and prevents recurrence and can be used in mild to severe acne. Effective in reducing active acne lesions, preventing the formation of new acne lesions, and maintaining a healthy skin balance. Formulated with active ingredients it fights acne on a deeper level. "
                }
            />

            <ServicesComponent
                srTitle={"FERULAC DUBAI LIP PEEL"}
                id={"feburacDubai"}
                content={
                    "This chemical lip peel is ideal to treat hyperpigmentation and lip photoaging. It is formulated with moisturizing, antioxidant and depigmenting actives, which unify the tone, hydrate in depth and provide an intense natural luminosity. This peel uses a unique system to deliver natural ingredients deep into the lips through nanotechnology."
                }
            />

            <ServicesComponent
                srTitle={"CUSTOM PEELS"}
                id={"customPeels"}
                content={
                    "After a thorough analysis of your skin, our Skin Experts will prescribe a custom peel to rejuvenate your and restore your glow. We recommend a series of in-clinic sittings for optimum results."
                }
            />

            <ServicesComponent
                srTitle={"BODY PEELS"}
                id={"bodyPeels"}
                content={
                    "After a thorough analysis of your skin, our Skin Experts will prescribe a custom body peel to help combat concerns like pigmentation, body acne, acne marks, stretch marks, sun spots, keratosis pilaris, dryness, and uneven skin tone and texture. These peels are gentle yet powerful and help naturally exfoliate your skin, revealing a healthier, even-toned complexion.  A total rejuvenation of your glow from head to toe. We recommend a series of in-clinic sittings for optimum results."
                }
            />

            <BookNow />
            <BackToTop />
            <Footer />
        </Fragment>
    );
}
