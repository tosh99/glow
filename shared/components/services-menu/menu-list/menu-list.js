import {Fragment} from "react";
import styles from "./menu-list.module.scss";


export default function MenuList({
                                     close, selectedServiceItem, isEnd = false, onClick = () => {
    }
                                 }) {
    const redirect = () => {

    }

    return (<Fragment>
        <div className={styles.menuList + ' ' + (isEnd ? styles.menuListLast : '')} onMouseLeave={() => {
            close()
        }}>
            {
                selectedServiceItem && selectedServiceItem.items.map(service => {
                    return <header
                        className={styles.menuListItem}
                        onClick={() => {
                            onClick(service)
                        }}>{service.title}
                    </header>
                })
            }
        </div>
    </Fragment>)
}
