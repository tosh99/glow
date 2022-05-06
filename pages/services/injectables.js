import { Fragment, useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/core";
import BackToTop from "../../shared/components/back-to-top";
import BookNow from "../../shared/components/book-now";
import Footer from "../../shared/components/footer/footer";
import PageHeader from "../../shared/components/page-header/page-header";
import ServicesComponent from "../../shared/components/pages/services/services";

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

export default function GlowTech() {
  const [testimonial_swiper, set_testimonial_swiper] = useState({});
  const [current_slide, set_current_slide] = useState(0);
  const [showMore, set_showMore] = useState(false);

  const [device, set_device] = useState(2);
  useEffect(() => {
    if (screen.width <= 648) {
      set_device(0);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <PageHeader title={"Services"} />
      <ServicesComponent
        titleElement={"DERMAL FILLERS"}
        srTitle={""}
        srDesc={"Purpose  : Hydration"}
        bannerUrl={`/images/services/injectables/banner.png`}
        content={
          "We have innovative injectable treatments designed to improve skin quality by replacing skin’s lost volume and replenishing its moisture content. It's formulated with skin conditioning hyaluronic  acid gel that is injected into the middle layers of the dermis across many sites to nourish it from the inside out. It hydrates the skin, because of the high water-binding capacity of hyaluronic acid,increases elasticity by stimulating collagen production and smoothes the skin by reducing the appearance of fine lines. Suitable for your cheeks, under eye, lips, chin, jawline augmentation and nasolabial folds."
        }
      />
      <ServicesComponent
        titleElement={"SKIN BOOSTER"}
        srTitle={"VOLITE"}
        content={
          "Juvéderm  Volite is an innovative injectable treatment designed to improve skin quality by replenishing its moisture content. It's a skin conditioning hyaluronic acid gel that is injected into the middle layers of the dermis across many sites to nourish it from the inside out. It hydrates the skin, because of the high water-binding capacity of hyaluronic acid, increases elasticity by stimulating collagen production and smoothes the skin by reducing the appearance of fine lines. Suitable for your face, neck, décolletage and the back of your hands. The effects of Volite last for up to 9 months."
        }
      />
      <ServicesComponent
        titleElement={"ANTI-WRINKLE INJECTIONS"}
        srTitle={"BOTOX®"}
        srDesc={"Purpose  : Hydration"}
        bannerUrl={`/images/services/injectables/botox.png`}
        content={
          "BOTOX Cosmetic is FDA-approved to temporarily make moderate to severe frown lines, crow's feet, and forehead lines look better in adults. It improves the appearance of your skin as signs of aging begin to show, by relaxing the muscles that cause wrinkles. The effects of BOTOX last for several months."
        }
      />
      <ServicesComponent
        srTitle={"Prophilo"}
        srDesc={"Purpose : Detox"}
        content={
          "Profhilo is an injectable, stabilised Hyaluronic Acid based product, designed to remodel multi-layer skin tissue. It is an anti-aging product that treats the source of ageing and not only the ageing symptoms. Having the highest Hyaluronic Acid concentration of 32 mg / ml and biological activation with multi-level 3D followability it reduces the number of treatment sessions, number of injections sites and downtime.  This clinically tested skin tissue enhancer remodels 3 main types of tissues — Collagen, Elastin & Adipocytes (fat cells) by stimulating fibroblast cells, activating keratinocytes and, preserving and encouraging the viability of adipocytes"
        }
      />
      <ServicesComponent
        srTitle={"GLUTA GLOW"}
        srDesc={"Purpose : Brightening"}
        content={
          "Rehydrate, replenish and restore with our Gluta Glow drip, packed with glutathione, multivitamins and antioxidants to combat dullness and inflammation. Glutathione is a powerful antioxidant that removes free radicals and toxins that lead to hyperpigmentation, age spots, sun spots, wrinkles, acne and even melasma. Gluta Glow removes skin imperfections to reveal a radiant complexion and is a pre-event favourite to help you achieve healthy, glowing skin."
        }
      />
      <ServicesComponent
        srTitle={"QUICK BOOST"}
        srDesc={"Purpose : Energy Boost"}
        content={
          "Cool your body’s inflammation from a night out or fight fatigue with our Quick Boost infusion. Electrolyte hydration combined with vitamins and minerals to help augment your immune system and protect against toxins in the external and internal environment. Perfect for when you’re feeling depleted of energy levels.  "
        }
      />
      <ServicesComponent
        srTitle={"MYER’S MAGIC POTION"}
        srDesc={"Purpose : Overall Wellness"}
        content={
          "Named after the late John Myers, M.D., the Myers Magic Potion is the first ever IV Therapy. It is an infusion of multiple vitamins and minerals that help restore balance to your body and mind by resolving stress, muscle pains, migraines, and a lot more. This drip hydrates your body to stimulate growth and support tissue repair, boosts immunity, controls blood pressure and maintains optimal body weight. It also helps relieve PMS symptoms."
        }
      />

      <BookNow />
      <BackToTop />
      <Footer />
    </Fragment>
  );
}
