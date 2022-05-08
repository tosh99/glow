import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./services-menu.module.scss";
import {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import PageHeader from "../page-header/page-header";
import MenuList from "./menu-list/menu-list";
import Router from "next/router";

const regions = ['HYDERABAD', 'CHENNAI']
const servicesItemsHyd = [
    {
        title: 'BR Facials',
        url: '/services/br-facials',
        items: [
            {
                title: 'SKIN INSTANT  LAB',
                url: '#skinInstantLab'
            },
            {
                title: 'VISIO LAB©',
                url: ''
            },
            {
                title: 'SOIN RESTRUCTURANT ET LISSANT',
                url: ''
            },
            {
                title: 'SOINLIFT C.V.S',
                url: ''
            },
            {
                title: 'SOIN MC 110',
                url: ''
            },
            {
                title: 'SOIN PEELING AUX ACIDES DE FRUITS',
                url: ''
            },
            {
                title: 'SOIN MASQUE EXFOLIANT P50 VISAGE',
                url: ''
            },
            {
                title: 'SOIN BOOSTER VIP O2',
                url: ''
            }, {
                title: 'DOUBLE BOOSTER ',
                url: ''
            },
            {
                title: 'SOIN SECONDE PEAU',
                url: ''
            },
            {
                title: 'MICRO PUNCTURE LAB ',
                url: ''
            },
            {
                title: 'REMODELLING FACE',
                url: ''
            }, {
                title: 'PRIVILEGE PASS',
                url: ''
            },


        ]
    },
    {
        title: 'Clinical Facials',
        url: '/services/clinical-facials',
        items: [
            {
                title: 'FIRE  AND  ICE',
                url: ''
            },
            {
                title: 'FOAMING  ENZYME',
                url: ''
            },
            {
                title: 'ZO  STIMULATOR  FACIAL ',
                url: ''
            },
            {
                title: 'VAMPIRE  FACIAL',
                url: ''
            },
            {
                title: 'EXPRESS  GLOW',
                url: ''
            },
            {
                title: 'GLASS  SKIN  FACIAL',
                url: ''
            },
            {
                title: 'MIRAPEEL',
                url: ''
            }
        ]
    },
    {
        title: 'Clinical Peels',
        url: '/services/clinical-peels',
        items: [
            {
                title: 'DERMAMELAN',
                url: ''
            },
            {
                title: 'COSMELAN',
                url: ''
            },
            {
                title: 'ACNELAN©',
                url: ''
            },
            {
                title: 'FERULAC  DUBAI  LIP  PEEL',
                url: ''
            },
            {
                title: 'CUSTOM  PEELS',
                url: ''
            },
            {
                title: 'BODY PEELS',
                url: ''
            },
        ]
    },
    {
        title: 'Glow Tech',
        url: '/services/glow-tech',
        items: [
            {
                title: 'LASER HAIR REDUCTION',
                url: ''
            }
        ]
    },
    {
        title: 'Hair Treatments',
        url: '/services/hair-treatments',
        items: [
            {
                title: 'OXYGENATING  &  STRENGTHENING',
                url: ''
            },
            {
                title: 'SEBO - REGULATING',
                url: ''
            },
            {
                title: 'DRY  DANDRUFF  BALANCING',
                url: ''
            },
            {
                title: 'GREASY  DANDRUFF  BALANCING',
                url: ''
            },
            {
                title: 'OXYGENATING  AND  STRENGTHENING  WITH \n' + 'MICRO-PUNCTURE',
                url: ''
            },
            {
                title: 'GROWTH  FACTOR  THERAPY',
                url: ''
            },
            {
                title: 'K18',
                url: ''
            },
            {
                title: 'Moroccan Oil Hair Spa',
                url: ''
            }
        ]
    },
    {
        title: 'Injectables',
        url: '/services/injectables',
        items: [
            {
                title: 'Dermal Fillers',
                url: ''
            },
            {
                title: 'VOLITE',
                url: ''
            },
            {
                title: 'BOTOX',
                url: ''
            },
            {
                title: 'Prophilo',
                url: ''
            }
        ]
    },
    {
        title: 'IV INFUSIONS',
        url: '/services/iv-infusions',
        items: [
            {
                title: 'HYDRA CLEANSE',
                url: ''
            },
            {
                title: 'HELLO HEALTH',
                url: ''
            },
            {
                title: 'BYE HANGOVER',
                url: ''
            },
            {
                title: 'GET SET GLOW',
                url: ''
            },
            {
                title: 'GLUTA GLOW',
                url: ''
            },
            {
                title: 'QUICK BOOST',
                url: ''
            },
            {
                title: 'MYER’S  MAGIC  POTION',
                url: ''
            }
        ]
    }
];
const servicesItemsChennai = [
    {
        title: 'BR Facials',
        url: '/services/br-facials',
        items: [
            {
                title: 'SKIN INSTANT  LAB',
                url: ''
            },
            {
                title: 'VISIO LAB©',
                url: ''
            },
            {
                title: 'SOIN RESTRUCTURANT ET LISSANT',
                url: ''
            },
            {
                title: 'SOINLIFT C.V.S',
                url: ''
            },
            {
                title: 'SOIN MC 110',
                url: ''
            },
            {
                title: 'SOIN PEELING AUX ACIDES DE FRUITS',
                url: ''
            },
            {
                title: 'SOIN MASQUE EXFOLIANT P50 VISAGE',
                url: ''
            },
            {
                title: 'SOIN BOOSTER VIP O2',
                url: ''
            }, {
                title: 'DOUBLE BOOSTER ',
                url: ''
            },
            {
                title: 'SOIN SECONDE PEAU',
                url: ''
            },
            {
                title: 'MICRO PUNCTURE LAB ',
                url: ''
            },
            {
                title: 'REMODELLING FACE',
                url: ''
            }, {
                title: 'PRIVILEGE PASS',
                url: ''
            },


        ]
    },
    {
        title: 'Clinical Facials',
        url: '/clinical-facials',
        items: [
            {
                title: 'FIRE  AND  ICE',
                url: ''
            },
            {
                title: 'FOAMING  ENZYME',
                url: ''
            },
            {
                title: 'ZO  STIMULATOR  FACIAL ',
                url: ''
            },
            {
                title: 'VAMPIRE  FACIAL',
                url: ''
            },
            {
                title: 'EXPRESS  GLOW',
                url: ''
            },
            {
                title: 'GLASS  SKIN  FACIAL',
                url: ''
            },
            {
                title: 'MIRAPEEL',
                url: ''
            }
        ]
    },
    {
        title: 'Clinical Peels',
        url: '/clinical-peels',
        items: [
            {
                title: 'DERMAMELAN',
                url: ''
            },
            {
                title: 'COSMELAN',
                url: ''
            },
            {
                title: 'ACNELAN©',
                url: ''
            },
            {
                title: 'FERULAC  DUBAI  LIP  PEEL',
                url: ''
            },
            {
                title: 'CUSTOM  PEELS',
                url: ''
            },
            {
                title: 'BODY PEELS',
                url: ''
            },
        ]
    },
    {
        title: 'Glow Tech',
        url: '/glow-tech',
        items: [
            {
                title: 'LASER HAIR REDUCTION',
                url: ''
            }
        ]
    },
    {
        title: 'Hair Treatments',
        url: '/glow-tech',
        items: [
            {
                title: 'OXYGENATING  &  STRENGTHENING',
                url: ''
            },
            {
                title: 'SEBO - REGULATING',
                url: ''
            },
            {
                title: 'DRY  DANDRUFF  BALANCING',
                url: ''
            },
            {
                title: 'GREASY  DANDRUFF  BALANCING',
                url: ''
            },
            {
                title: 'OXYGENATING  AND  STRENGTHENING  WITH \n' + 'MICRO-PUNCTURE',
                url: ''
            },
            {
                title: 'GROWTH  FACTOR  THERAPY',
                url: ''
            },
            {
                title: 'K18',
                url: ''
            },
            {
                title: 'Moroccan Oil Hair Spa',
                url: ''
            }
        ]
    },
    {
        title: 'Injectables',
        url: '/glow-tech',
        items: [
            {
                title: 'Dermal Fillers',
                url: ''
            },
            {
                title: 'VOLITE',
                url: ''
            },
            {
                title: 'BOTOX',
                url: ''
            },
            {
                title: 'Prophilo',
                url: ''
            }
        ]
    },
    {
        title: 'IV INFUSIONS',
        url: '/glow-tech',
        items: [
            {
                title: 'HYDRA CLEANSE',
                url: ''
            },
            {
                title: 'HELLO HEALTH',
                url: ''
            },
            {
                title: 'BYE HANGOVER',
                url: ''
            },
            {
                title: 'GET SET GLOW',
                url: ''
            },
            {
                title: 'GLUTA GLOW',
                url: ''
            },
            {
                title: 'QUICK BOOST',
                url: ''
            },
            {
                title: 'MYER’S  MAGIC  POTION',
                url: ''
            }
        ]
    }
]


export default function ServicesMenu({close}) {
    const [index, setIndex] = useState(0);
    const [selectedServiceItem, setSelectedServiceItem] = useState({items: []});
    const [selectedRegion, setSelectedRegion] = useState(0);

    useEffect(() => {
        if (typeof (index) === 'number') {
            setSelectedServiceItem((selectedRegion === 0 ? servicesItemsHyd : servicesItemsChennai)[index])
        }
    }, [index, selectedRegion])


    return (<Fragment>
        <div className={styles.menu}>
            <InView threshold={0.5}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + ' ' + styles.servicesOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>

                            <PageHeader title={'Services'} onMenuClicked={close}/>
                            <div className={styles.menuContent}>
                                {
                                    (selectedRegion === 0 ? servicesItemsHyd : servicesItemsChennai).map((service, serviceIndex) => {
                                        return <Link href={service.url}>
                                            <div className={styles.menuCItem}>
                                                <header
                                                    className={styles.menuCTitle + ' ' + (index === serviceIndex ? styles.menuCTitleSelected : '')}
                                                    onMouseEnter={() => {
                                                        setIndex(serviceIndex)
                                                    }}>{service.title}
                                                </header>
                                                {
                                                    index === serviceIndex &&
                                                    <MenuList selectedServiceItem={selectedServiceItem}
                                                              onClick={(ev) => {
                                                                  Router.push(selectedServiceItem.url + ev.url)
                                                                  setIndex(undefined)
                                                              }}
                                                              close={() => {
                                                                  setIndex(undefined)
                                                              }}
                                                              isEnd={serviceIndex === (selectedRegion === 0 ? servicesItemsHyd : servicesItemsChennai).length - 1}/>
                                                }
                                            </div>
                                        </Link>
                                    })
                                }
                            </div>
                            <div className={styles.menuBottom}>
                                <div className={styles.locationSelector}>
                                    {
                                        regions.map((region, regionIndex) => {
                                            return <div className={styles.location + ' ' + (regionIndex === selectedRegion ? styles.locationSelected : '')}>
                                                <header>{region}</header>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                        </motion.div>)
                }
            </InView>
        </div>
    </Fragment>)
}