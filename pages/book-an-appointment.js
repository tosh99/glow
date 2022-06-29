import styles from './styles/bookanappointment.module.scss'
import {useEffect, useState} from "react";
import PageHeader from "../shared/components/page-header/page-header";

export default function Home() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    const [bookAppointment, setBookAppointment] = useState({
        is_clinic: true
    })

    return (
        <div className={styles.page}>
            <PageHeader title={'Book An Appointment'} bg={'transparent'}/>
            <div className={"outer " + styles.banner}>
                <div className={"inner " + styles.inner}>
                    <h1>Book an Appointment</h1>
                    <div className={styles.inputGroup}>
                        <input placeholder={'FIRST NAME'}/>
                        <input placeholder={'LAST NAME'}/>
                    </div>
                    <div className={styles.inputGroupFull}>
                        <input placeholder={'PHONE NUMBER'}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <input placeholder={'DATE'}/>
                        <input placeholder={'TIME'}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <input placeholder={'APPOINTMENT'}/>
                        <div className={styles.selector}>
                            <header className={bookAppointment.is_clinic ? styles.selected : ''} onClick={() => {
                                setBookAppointment(prev => ({...prev, is_clinic: true}))
                            }}>IN CLINIC
                            </header>
                            <header className={!bookAppointment.is_clinic ? styles.selected : ''} onClick={() => {
                                setBookAppointment(prev => ({...prev, is_clinic: false}))
                            }}>VIRTUAL
                            </header>
                        </div>
                    </div>
                    <div className={styles.inputGroupFull}>
                        <textarea placeholder={'ANY SPECIFIC CONCERNS'}/>
                    </div>

                </div>
            </div>
        </div>

    )
}
