import {useRouter} from "next/router";
import {useState} from "react";
import styles from "../../shared/components/page-header/page-header.module.scss";
import Link from "next/link";
import ServicesMenu, {
    servicesItemsHyd,
    servicesItemsChennai
} from "../../shared/components/services-menu/services-menu";
import {useEffect} from "react";

export default function Services({bg = "transparent", is_root = false}) {
    const [show_services_menu, set_show_services_menu] = useState(false);
    const router = useRouter();

    const [title, setTitle] = useState('Services');

    useEffect(() => {
        const path = router.pathname;

        const baseIdentifier = path.split("/").filter(item => item);
        if (baseIdentifier.length === 1) {
            set_show_services_menu(true);
            is_root = true
        }

        let selectedServiceItem = servicesItemsHyd;
        if (path.includes("chennai")) {
            selectedServiceItem = servicesItemsChennai;
        }

        const identifiers = path.split("#");
        const baseUrl = identifiers[0];

        for (const serviceItem of selectedServiceItem) {
            if (serviceItem.url === baseUrl) {
                setTitle((prev) => `${prev} - ${serviceItem.title}`);
            }
        }

    }, []);

    return (
        <>
            <div
                className={`outer ${styles.headerOuter} ${bg === "transparent" ? styles.headerOuterTrans : ""}`}
                onClick={(ev) => {
                }}
            >
                <div className={"inner " + styles.header}>
                    <div className={styles.hLeft}>
                        <Link href={is_root ? '/' : '/services'}>
                            <img src={"/icons/header/back.svg"}/>
                        </Link>
                    </div>
                    <div className={styles.hRight} onClick={(ev) => {
                    }}>
                        <header>{title}</header>
                        <img
                            src={"/icons/header/star.svg"}
                            onClick={(ev) => {
                                set_show_services_menu((prev) => !prev);
                            }}
                        />
                    </div>
                </div>
            </div>
            {show_services_menu && (
                <ServicesMenu
                    close={() => {
                        set_show_services_menu(false);
                    }}
                />
            )}
        </>
    );
}
