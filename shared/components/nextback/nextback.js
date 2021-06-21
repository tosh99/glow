import styles from "./nextback.module.scss";
import {Fragment} from "react";
import {constants} from "../../../styles/constants";

export default function NextBack({onNext, onBack, theme = 'dark'}) {


    return (<Fragment>
        <div className={styles.nextback}>
            {
                theme === 'dark' &&
                <Fragment>
                    <img src={constants.assetPrefix + 'icons/common/back.svg'} onClick={onBack}/>
                    <img src={constants.assetPrefix + 'icons/common/next.svg'} onClick={onNext}/>
                </Fragment>
            }
            {
                theme === 'light' &&
                <Fragment>
                    <img src={constants.assetPrefix + 'icons/common/back_light.svg'} onClick={onBack}/>
                    <img src={constants.assetPrefix + 'icons/common/next_light.svg'} onClick={onNext}/>
                </Fragment>
            }
        </div>
    </Fragment>)
}