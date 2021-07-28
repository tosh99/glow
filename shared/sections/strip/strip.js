import styles from "./strip.module.scss";
import {useEffect, useState} from "react";


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


    useEffect(() => {
        const owl = $('.strip-carousel');
        owl.owlCarousel(carousel_settings);

        owl.on('changed.owl.carousel', function (event) {
            set_current_slide(event.item.index - 3);
        })
    }, [])

    return (<>
        <div className={"outer " + styles.stripOuter}>
            <div className={"inner"}>
                <div className={'owl-carousel owl-theme strip-carousel'}>
                    {
                        items.map((item, index) => {
                            return <div className={styles.strip}>
                                <header> {item.title}</header>
                                <img src={'/icons/common/star.svg'}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}