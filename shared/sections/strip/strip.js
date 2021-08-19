import styles from "./strip.module.scss";
import {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);

const items = [
    {
        title: 'Body'
    },
    {
        title: 'Hair'
    },
    {
        title: 'Wellness'
    },
    {
        title: 'Beauty'
    }
]


export default function Strip() {
    const carousel_settings = {
        nav: false,
        autoPlay: true,
        dots: false

    }

    const [current_slide, set_current_slide] = useState(0);

    return (<>
        <div className={"outer " + styles.stripOuter}>
            <div className={"inner"}>
                <Swiper slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                        }}
                        loop={true}
                        onInit={(ev) => {
                            // set_body_swiper(ev)
                        }}
                        onSlideChange={(ev) => {
                            if (ev.activeIndex - 1 === 5) {
                                // set_current_body_slide(0)
                            } else {
                                // set_current_body_slide(ev.activeIndex - 1)
                            }
                        }}>
                    {
                        items.map((item, index) => {
                            return (<SwiperSlide>
                                    <div className={styles.strip}>
                                        <header> {item.title}</header>
                                        <img src={'/icons/common/star.svg'}/>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    </>)
}