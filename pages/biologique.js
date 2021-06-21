import {Fragment, useEffect, useState} from "react";
import styles from "./styles/biologue.module.scss";
import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import Ourclinic from "../shared/components/ourclinic/ourclinic";
import {constants} from "../styles/constants";
import PageHeader from "../shared/components/page-header/page-header";

export default function Biologique() {


    return (<Fragment>
        <PageHeader title={'Biologique Recherche'}/>

        <div className={"outer " + styles.skinCareOuter}>
            <div className={"inner " + styles.skinCare}>
                <h1>Dr. Varshini Reddy-  Biologique Recherche Skincare Expert</h1>
                <div className={styles.img}>
                    <div className={styles.imgLeft}>
                        <p>Your skin changes with age, diet, weather, lifestyle choices and your state of mind. At every turning point, you need to check in with your skin.
                            At Glow, we don’t categorise you into a skin type. We consult with you to get to know your skin and then proceed with a personalised service.
                        </p>
                    </div>
                    <div className={styles.imgRight}>
                        <div>
                            <img src={constants.assetPrefix + 'images/biologue/banner.png'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </Fragment>)
}