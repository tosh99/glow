import styles from "./services.module.scss";

export default function ServicesComponent({
    titleElement,
    bannerUrl,
    content,
    srTitle,
    srDesc,
    srPurpose,
    isFullSeparator,
    id,
    isDarkBg,
}) {
    return (
        <div className={`outer ${styles.servicesOuter}`} style={{ background: isDarkBg ? "#EEEADD" : "#FFF" }} id={id}>
            <div className={`inner ${styles.services} ${isFullSeparator && styles.servicesFull}`}>
                {titleElement && <h1 dangerouslySetInnerHTML={{ __html: titleElement }} />}
                <div className={styles.servicesRight}>
                    {bannerUrl && <img title={titleElement} alt={titleElement} src={bannerUrl} />}
                    {srTitle && <header className={styles.srTitle}>{srTitle}</header>}
                    {srDesc && <header className={styles.srDesc}>{srDesc}</header>}
                    <p
                        className={`${styles.srContent} ${(isFullSeparator || isDarkBg) && styles.srContentFull}`}
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></p>
                    {srPurpose && <header className={styles.srPurpose}>{srPurpose}</header>}
                </div>
            </div>
        </div>
    );
}
