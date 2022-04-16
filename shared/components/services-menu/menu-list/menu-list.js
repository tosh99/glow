import {Fragment} from "react";
import styles from "./menu-list.module.scss";


export default function MenuList({close, selectedServiceItem, isEnd = false}) {
    return (<Fragment>
        <div className={styles.menuList + ' ' + (isEnd ? styles.menuListLast : '')} onMouseLeave={() => {
            close()
        }}>
            {
                selectedServiceItem && selectedServiceItem.items.map(service => {
                    return <>
                        <header className={styles.menuListItem}>{service.title}</header>
                    </>
                })
            }
        </div>
    </Fragment>)
}