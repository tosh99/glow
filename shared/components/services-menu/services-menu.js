import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./services-menu.module.scss";
import {Fragment, useEffect, useState} from "react";
import PageHeader from "../page-header/page-header";
import MenuList from "./menu-list/menu-list";
import Router, {useRouter} from "next/router";

const regions = ["HYDERABAD", "CHENNAI"];
export const servicesItemsHyd = [
    {
        title: "BR Facials",
        url: "/services/br-facials",
        items: [
            {
                title: "SKIN INSTANT LAB",
                url: "#skinInstantLab",
            },
            {
                title: "VISIO LAB©",
                url: "#visionLab",
            },
            {
                title: "SOIN RESTRUCTURANT ET LISSANT",
                url: "#soinRestructurant",
            },
            {
                title: "SOIN LIFT C.V.S",
                url: "#soinLift",
            },
            {
                title: "SOIN MC 110",
                url: "#soinMC",
            },
            {
                title: "SOIN PEELING AUX ACIDES DE FRUITS",
                url: "#soinPeeling",
            },
            {
                title: "SOIN MASQUE EXFOLIANT P50 VISAGE",
                url: "#soinMasque",
            },
            {
                title: "SOIN BOOSTER VIP O2",
                url: "#soinBooster",
            },
            {
                title: "DOUBLE BOOSTER ",
                url: "#doubleBooster",
            },
            {
                title: "SOIN SECONDE PEAU",
                url: "#soinSeconde",
            },
            {
                title: "SOIN TRIPLE LIFT FACIAL",
                url: "#soinTriple",
            },
            {
                title: "MICRO PUNCTURE LAB ",
                url: "#microPuncture",
            },
            {
                title: "REMODELLING FACE",
                url: "#remodellingFace",
            },
            // {
            //     title: "Mentonniere Chin Strap",
            //     url: "#chinStrap",
            // },
            // {
            //     title: "PEN",
            //     url: "#pen",
            // },
            // {
            //     title: "Oxygenating Treatment",
            //     url: "#oxyTreatment",
            // },
            // {
            //     title: "PRIVILEGE PASS",
            //     url: "#privilegePass",
            // },
            {
                title: "ADD ONS",
                url: "#addOns",
            },
        ],
    },
    {
        title: "Clinical Facials",
        url: "/services/clinical-facials",
        items: [
            {
                title: "FIRE AND ICE",
                url: "#fireAndIce",
            },
            {
                title: "FOAMING ENZYME",
                url: "#foamingEnzyme",
            },
            {
                title: "ZO STIMULATOR FACIAL",
                url: "#zoStimulator",
            },
            {
                title: "VAMPIRE FACIAL",
                url: "#vampireFacial",
            },
            {
                title: "DIAMOND GLOW",
                url: "#diamondGlow",
            },
            {
                title: "OXYGLOW",
                url: "#oxyGlow",
            },
            {
                title: "EXPRESS GLOW",
                url: "#expressGlow",
            },
        ],
    },
    {
        title: "Clinical Peels",
        url: "/services/clinical-peels",
        items: [
            {
                title: "DERMAMELAN",
                url: "#darmelan",
            },
            {
                title: "COSMELAN",
                url: "#cosmelan",
            },
            {
                title: "ACNELAN©",
                url: "#acnelan",
            },
            {
                title: "FERULAC DUBAI LIP PEEL",
                url: "#ferulacDubai",
            },
            {
                title: "CUSTOM PEELS",
                url: "#customPeels",
            },
            {
                title: "BODY PEELS",
                url: "#bodyPeels",
            },
        ],
    },
    {
        title: "Glow Tech",
        url: "/services/glow-tech",
        items: [
            {
                title: "LASER HAIR REDUCTION",
                url: "#laserHairReduction",
            },
            {
                title: "SPECTRA LASER TONING",
                url: "#spectraLaserToning",
            },
            {
                title: "HOLLYWOOD LASER PEEL",
                url: "#hollywoodLaserPeel",
            },
            {
                title: "Morpheus8",
                url: "#morpheus8",
            },
            {
                title: "Morpheus8 Body",
                url: "#morpheus8body",
            },
            {
                title: "Forma",
                url: "#forma",
            },
        ],
    },
    {
        title: "Hair Treatments",
        url: "/services/hair-treatments",
        items: [
            {
                title: "OXYGENATING & STRENGTHENING",
                url: "#oxygenating",
            },
            {
                title: "SEBO - REGULATING",
                url: "#sebo",
            },
            {
                title: "DRY DANDRUFF BALANCING",
                url: "#dryDandruff",
            },
            {
                title: "GREASY DANDRUFF BALANCING",
                url: "#greasyDandruff",
            },
            {
                title: "OXYGENATING AND STRENGTHENING WITH \n" + "MICRO-PUNCTURE",
                url: "#oxygenatingMicro",
            },
            {
                title: "GROWTH FACTOR THERAPY",
                url: "#growthFactor",
            },
            {
                title: "K18 PEPTIDE TREATMENT",
                url: "#k18",
            },
            {
                title: "Moroccan Oil Hair Spa",
                url: "#moroccan",
            },
        ],
    },
    {
        title: "Injectables",
        url: "/services/injectables",
        items: [
            {
                title: "Dermal Fillers",
                url: "#dermalFillers",
            },
            {
                title: "VOLITE",
                url: "#volite",
            },
            {
                title: "BOTOX",
                url: "#botox",
            },
            {
                title: "Profhilo",
                url: "#profhilo",
            },
        ],
    },
    {
        title: "IV INFUSIONS",
        url: "/services/iv-infusions",
        items: [
            {
                title: "HYDRA CLEANSE",
                url: "#hydraCleanse",
            },
            {
                title: "HELLO HEALTH",
                url: "#helloHealth",
            },
            {
                title: "BYE HANGOVER",
                url: "#byeHangover",
            },
            {
                title: "GET SET GLOW",
                url: "#getSetGlow",
            },
            {
                title: "GLUTA GLOW",
                url: "#glutaGlow",
            },
            {
                title: "QUICK BOOST",
                url: "#quickBoost",
            },
            {
                title: "MYER’S MAGIC POTION",
                url: "#myersMagic",
            },
        ],
    },
];
export const servicesItemsChennai = [
    {
        title: "BR Facials",
        url: "/services/br-facials-chennai",
        items: [
            {
                title: "SKIN INSTANT  LAB",
                url: "#skinInstantLab",
            },
            {
                title: "VISIO LAB©",
                url: "#visionLab",
            },
            {
                title: "SOIN RESTRUCTURANT ET LISSANT",
                url: "#soinRestructurant",
            },
            {
                title: "SOIN LIFT C.V.S",
                url: "#soinLift",
            },
            {
                title: "SOIN MC 110",
                url: "#soinMC",
            },
            {
                title: "SOIN PEELING AUX ACIDES DE FRUITS",
                url: "#soinPeeling",
            },
            {
                title: "SOIN MASQUE EXFOLIANT P50 VISAGE",
                url: "#soinMasque",
            },
            {
                title: "SOIN BOOSTER VIP O2",
                url: "#soinBooster",
            },
            {
                title: "DOUBLE BOOSTER ",
                url: "#doubleBooster",
            },
            {
                title: "SOIN SECONDE PEAU",
                url: "#soinSeconde",
            },
            {
                title: "SOIN TRIPLE LIFT FACIAL",
                url: "#soinTriple",
            },
            {
                title: "MICRO PUNCTURE LAB ",
                url: "#microPuncture",
            },
            {
                title: "REMODELLING FACE",
                url: "#remodellingFace",
            },
            // {
            //     title: "Mentonniere Chin Strap",
            //     url: "#chinStrap",
            // },
            // {
            //     title: "PEN",
            //     url: "#pen",
            // },
            // {
            //     title: "Oxygenating Treatment",
            //     url: "#oxyTreatment",
            // },
            // {
            //     title: "PRIVILEGE PASS",
            //     url: "#privilegePass",
            // },
            {
                title: "PRIVILEGE PASS",
                url: "#privilegePass",
            },
            {
                title: "ADD ONS",
                url: "#addOns",
            },
        ],
    },
    {
        title: "Clinical Facials",
        url: "/services/clinical-facials-chennai",
        items: [
            {
                title: "FIRE AND ICE",
                url: "#fireAndIce",
            },
            {
                title: "FOAMING ENZYME",
                url: "#foamingEnzyme",
            },
            {
                title: "ZO STIMULATOR FACIAL ",
                url: "#zoStimulator",
            },
            {
                title: "VAMPIRE FACIAL",
                url: "#vampireFacial",
            },
            {
                title: "EXPRESS GLOW",
                url: "#expressGlow",
            },
            {
                title: "GLASS SKIN FACIAL",
                url: "#glassSkinFacial",
            },
            {
                title: "MIRAPEEL",
                url: "#miraPeel",
            },
        ],
    },
    {
        title: "Clinical Peels",
        url: "/services/clinical-peels",
        items: [
            {
                title: "DERMAMELAN",
                url: "#darmelan",
            },
            {
                title: "COSMELAN",
                url: "#cosmelan",
            },
            {
                title: "ACNELAN©",
                url: "#acnelan",
            },
            {
                title: "FERULAC DUBAI LIP PEEL",
                url: "#ferulacDubai",
            },
            {
                title: "CUSTOM PEELS",
                url: "#customPeels",
            },
            {
                title: "BODY PEELS",
                url: "#bodyPeels",
            },
        ],
    },
    {
        title: "Glow Tech",
        url: "/services/glow-tech-chennai",
        items: [
            {
                title: "LASER HAIR REDUCTION",
                url: "#laserHairReduction",
            },
            {
                title: "Morpheus8",
                url: "#morpheus8",
            },
            {
                title: "Morpheus8 Body",
                url: "#morpheus8body",
            },
            {
                title: "Forma",
                url: "#forma",
            },
            {
                title: "Lumecca Photofacial",
                url: "#lumecca",
            },
        ],
    },
    {
        title: "Hair Treatments",
        url: "/services/hair-treatments",
        items: [
            {
                title: "OXYGENATING & STRENGTHENING",
                url: "#oxygenating",
            },
            {
                title: "SEBO - REGULATING",
                url: "#sebo",
            },
            {
                title: "DRY DANDRUFF BALANCING",
                url: "#dryDandruff",
            },
            {
                title: "GREASY DANDRUFF BALANCING",
                url: "#greasyDandruff",
            },
            {
                title: "OXYGENATING AND STRENGTHENING WITH \n" + "MICRO-PUNCTURE",
                url: "#oxygenatingMicro",
            },
            {
                title: "GROWTH FACTOR THERAPY",
                url: "#growthFactor",
            },
            {
                title: "K18 PEPTIDE TREATMENT",
                url: "#k18",
            },
            {
                title: "Moroccan Oil Hair Spa",
                url: "#moroccan",
            },
        ],
    },
    {
        title: "Injectables",
        url: "/services/injectables-chennai",
        items: [
            {
                title: "Dermal Fillers",
                url: "#dermalFillers",
            },
            {
                title: "VOLITE",
                url: "#volite",
            },
            {
                title: "BOTOX",
                url: "#botox",
            },
            {
                title: "Profhilo",
                url: "#profhilo",
            },
        ],
    },
    {
        title: "IV INFUSIONS",
        url: "/services/iv-infusions",
        items: [
            {
                title: "HYDRA CLEANSE",
                url: "#hydraCleanse",
            },
            {
                title: "HELLO HEALTH",
                url: "#helloHealth",
            },
            {
                title: "BYE HANGOVER",
                url: "#byeHangover",
            },
            {
                title: "GET SET GLOW",
                url: "#getSetGlow",
            },
            {
                title: "GLUTA GLOW",
                url: "#glutaGlow",
            },
            {
                title: "QUICK BOOST",
                url: "#quickBoost",
            },
            {
                title: "MYER’S MAGIC POTION",
                url: "#myersMagic",
            },
        ],
    },
];

export default function ServicesMenu({close}) {
    const [index, setIndex] = useState(0);
    const [selectedServiceItem, setSelectedServiceItem] = useState({items: []});
    const [selectedRegion, setSelectedRegion] = useState(servicesItemsHyd);
    const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
    const router = useRouter();

    const [isBasePath, setIsBasePath] = useState(false);
    const [device, set_device] = useState(2);

    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0)
        }

        const path = router.pathname;
        const baseIdentifier = path.split("/").filter(item => item);
        if (baseIdentifier.length === 1) {
            setIsBasePath(true);
        }
    }, [])

    return (
        <Fragment>
            <div className={styles.menu}>
                <div
                    className={"outer " + " " + styles.servicesOuter}
                >
                    <PageHeader title={"Services"} onMenuClicked={() => {
                        if (isBasePath) {
                            Router.push('/');
                        } else {
                            close();
                        }
                    }}/>
                    <div className={styles.menuContent}>
                        {selectedRegion.map(
                            (region, regionIndex) => {
                                return (
                                    <div className={styles.menuCItem} onClick={() => {
                                        let index = 0;
                                        const regions = [...selectedRegion]
                                        for (const region of regions) {
                                            if (index !== regionIndex) {
                                                region.isDisplayed = false;
                                            } else {
                                                region.isDisplayed = !region.isDisplayed
                                                setSelectedServiceItem({...region});

                                            }
                                            index += 1
                                        }

                                        setSelectedRegion([...regions])
                                        setIndex(prev => prev + 1)
                                    }}>
                                        <header
                                            className={
                                                styles.menuCTitle +
                                                " " +
                                                (region.isDisplayed ? styles.menuCTitleSelected : "")
                                            }
                                            onClick={() => {
                                                if (device !== 0) {
                                                    Router.push(region.url)
                                                }
                                            }}
                                            onMouseOver={() => {
                                                if (device !== 0) {
                                                    let index = 0;
                                                    for (const region of selectedRegion) {
                                                        if (index !== regionIndex) {
                                                            region.isDisplayed = false;
                                                        }
                                                        index += 1
                                                    }

                                                    region.isDisplayed = true;
                                                    if (region.isDisplayed) {
                                                        setSelectedServiceItem(region);
                                                    } else {
                                                        setSelectedServiceItem(null)
                                                    }
                                                    setIndex(prev => prev + 1)
                                                }
                                            }}
                                        >
                                            {region.title}
                                            <img
                                                src={`/icons/common/${region.isDisplayed ? 'up' : 'down'}.svg`}
                                            />
                                        </header>
                                        {region.isDisplayed && (
                                            <MenuList
                                                selectedServiceItem={selectedServiceItem}
                                                onClick={(ev) => {
                                                    close();
                                                    Router.push(selectedServiceItem.url + ev.url);
                                                }}
                                                onMouseEnter={() => {
                                                    region.isDisplayed = true;
                                                }}
                                                onMouseLeave={() => {
                                                    setIndex(prev => prev + 1)
                                                }}
                                                isEnd={
                                                    regionIndex === selectedRegion.length - 1
                                                }
                                            />
                                        )}
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <div className={styles.menuBottom}>
                        <div className={styles.locationSelector}>
                            {regions.map((region, regionIndex) => {
                                return (
                                    <div
                                        onClick={() => {
                                            if (regionIndex === 0) {
                                                setSelectedRegion(servicesItemsHyd);
                                                setIndex(prev => prev + 1)
                                            } else {
                                                setSelectedRegion(servicesItemsChennai);
                                                setIndex(prev => prev + 1)
                                            }
                                            setSelectedRegionIndex(regionIndex);
                                        }}
                                        className={
                                            styles.location +
                                            " " +
                                            (regionIndex === selectedRegionIndex ? styles.locationSelected : "")
                                        }
                                    >
                                        <header>{region}</header>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
