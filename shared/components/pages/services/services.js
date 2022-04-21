import styles from "./services.module.scss";

export default function ServicesComponent({titleElement, bannerUrl, content, srTitle, srDesc, srPurpose}) {
    return (
        <div className={"outer " + styles.servicesOuter}>
            <div className={"inner " + styles.services}>
                {
                    titleElement && <h1 dangerouslySetInnerHTML={{__html: titleElement}}/>
                }
                <div className={styles.servicesRight}>
                    {
                        bannerUrl && <img title={titleElement} alt={titleElement} src={bannerUrl}/>
                    }
                    {
                        srTitle && <header className={styles.srTitle}>{srTitle}</header>
                    }
                    {
                        srDesc && <header className={styles.srDesc}>{srDesc}</header>
                    }
                    {
                        srPurpose && <header className={styles.srPurpose}>{srPurpose}</header>
                    }
                    <p className={styles.srContent} dangerouslySetInnerHTML={{__html: content}}></p>
                </div>
            </div>
        </div>
    )
}