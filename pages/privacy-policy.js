import {Fragment, useEffect, useState} from "react";
import styles from "./styles/privacy-policy.module.scss";
import PageHeader from "../shared/components/page-header/page-header";
import Footer from "../shared/components/footer/footer";
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from "swiper/core";
import BackToTop from "../shared/components/back-to-top";
import BookNow from "../shared/components/book-now";

SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);

export default function About() {
    const [render, set_render] = useState(1);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <Fragment>
            <PageHeader title={"PRIVACY POLICY"}/>

            <div className={"outer"}>
                <div className={"inner " + styles.privacyPolicy}>
                    <h1>PRIVACY POLICY</h1>
                    <p>GLOW SKIN BEAUTY WELLNESS ("us", "we", or "our") operates www.glow.clinic website (the "Service").
                        This Privacy Policy is a digital version in the form of an electronic contract created under the
                        Information Technology Act 2000, its rules, and the revised sections in various legislation
                        dealing with electronic documents or records as amended by the Information Technology Act 2000.
                        There is no requirement for a physical, electronic, or digital signature on this Privacy Policy.
                        This page explains our policies for collecting, using, and disclosing personal data when you use
                        our Service, as well as your options for dealing with that data.<br/><br/>

                        This Privacy Policy is a contract between you and GLOW SKIN BEAUTY WELLNESS that must be
                        followed. The provisions of this Privacy Policy will take effect after you accept them, and they
                        will govern your relationship with GLOW SKIN BEAUTY WELLNESS in regards to your use of the
                        website .............<br/><br/>

                        The provisions of the Information Technology (reasonable security practices and procedures and
                        sensitive personal data of information) rules, 2011 under the Information Technology Act, 2000,
                        require the publication of a Privacy Policy for the compilation, use, storage, and transfer of
                        sensitive personal information.<br/><br/>

                        Please take the time to read this Privacy Policy carefully. By using the Website, you
                        acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
                        Please do not use this Website if you do not accept the terms of this Privacy Policy.
                        Your information is used to provide and improve services. You agree to the collection and use of
                        information in line with this policy by using the Service. Unless otherwise stated in this
                        Privacy Policy, terms have the same meaning as in our Terms and Conditions, which can be found
                        at __________.
                    </p>

                    <h2>PERSONAL INFORMATION GATHERED BY GLOW SKIN BEAUTY WELLNESS</h2>
                    <p>The information we learn and gather from you, personal or otherwise, are used to register you,
                        verify your identity to permit you to use the app, undertake transactions (including to
                        facilitate and process payments), communicate with you,convey any promotional offers, services
                        or updates associated with GLOW SKIN BEAUTY WELLNESS, and generally maintain your accounts with
                        us. We also use this information to customize your experience and improve GLOW SKIN BEAUTY
                        WELLNESS.</p>


                    <h2>INFORMATION YOU GIVE US:</h2>
                    <p>We receive and store any information you provide while using GLOW SKIN BEAUTY WELLNESS, or give
                        us in any other way. You can choose not to provide certain information, but then you might not
                        be able to use GLOW SKIN BEAUTY WELLNESS. We use the information that you provide for such
                        purposes as opening your account, processing your transactions, responding to your requests, and
                        communicating with you</p>

                    <h2>INFORMATION WE COLLECT ABOUT YOU:</h2>
                    <p>We receive and store certain types of information whenever you interact with us. For example,
                        like many websites, we use "cookies," and we obtain certain types of information when your web
                        browser accesses our Services. We may also receive/store information about your location and
                        your mobile device, including a unique identifier for your device. We may use this information
                        for internal analysis and to provide you with location-based services, such as advertising,
                        search results, and other personalized content.</p>


                    <h2>CATEGORIES OF PERSONAL DATA</h2>
                    <p>Categories of Personal Data collected and processed by us are as follows;</p>

                    <h3>Demographic & Identity data</h3>
                    <ul>
                        <li>Contact details such as Name, email address, contact number, shipping address, country, date
                            of birth, profile picture
                        </li>
                        <li>Open data and public records such as information about YOU that is openly available on the
                            internet
                        </li>
                        <li>Details such as Transaction amount, Bank Name, Card Type, Card number.</li>
                    </ul>

                    <h3>Online Identifiers and other Technical Data</h3>
                    <ul>
                        <li>Location details such as data we get about your location, IP address, logs, or from where
                            you connect a computer to the internet
                        </li>
                        <li>Technical details such as device information, location and network carrier when you use
                            our mobile applications
                        </li>
                        <li>Communications details such as the Metadata and other Personal Data we get from
                            communications done through e-mails, SMS, instant messages and calls
                        </li>
                        <li>Usage data details such as data about how you use our website or web-based properties,
                            pages viewed, etc.
                        </li>
                    </ul>


                    <h2>COOKIES</h2>
                    <p>We use data collection devices such as "cookies" on certain pages of the Platform to help analyze
                        our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies"
                        are small files placed on your hard drive that assist us in providing our services. Cookies do
                        not contain any of your personal information. We offer certain features that are only available
                        through the use of a "cookie". We also use cookies to allow you to enter your password less
                        frequently during a session. Cookies can also help us provide information that is targeted to
                        your interests. Most cookies are "session cookies," meaning that they are automatically deleted
                        from your hard drive at the end of a session. You are always free to decline/delete our cookies
                        if your browser permits, although in that case you may not be able to use certain features on
                        the Platform and you may be required to re-enter your password more frequently during a session.
                        Additionally, you may encounter "cookies" or other similar devices on certain pages of the
                        Platform that are placed by third parties. We do not control the use of cookies by third
                        parties. We use cookies from third-party partners such as Google Analytics for marketing and
                        analytical purposes. </p>


                    <h2>SHARING OF PERSONAL INFORMATION</h2>
                    <p>We may share personal information with our other corporate entities and affiliates. These
                        entities and affiliates may market to you as a result of such sharing unless you explicitly
                        opt-out.<br/><br/>
                        We may disclose personal information to third parties. This disclosure may be required for us to
                        provide you access to our Services, to comply with our legal obligations, to enforce our User
                        Agreement, to facilitate our marketing and advertising activities, or to prevent, detect,
                        mitigate, and investigate fraudulent or illegal activities related to our Services. We do not
                        disclose your personal information to third parties for their marketing and advertising purposes
                        without your explicit consent.<br/><br/>
                        We may disclose personal information if required to do so by law or in the good faith belief
                        that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other
                        legal process. We may disclose personal information to law enforcement offices, third party
                        rights owners, or others in the good faith belief that such disclosure is reasonably necessary
                        to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or
                        other content violates the rights of a third party; or protect the rights, property or personal
                        safety of our users or the general public.<br/><br/>
                        We and our affiliates will share / sell some or all of your personal information with another
                        business entity should we (or our assets) plan to merge with, or be acquired by that business
                        entity, or reorganization, amalgamation, restructuring of business. Should such a transaction
                        occur, another business entity (or the new combined entity) will be required to follow this
                        privacy policy with respect to your personal information.
                    </p>


                    <h2>DATA SECURITY</h2>
                    <p>We are committed to protecting your Personal Data in our custody. We take reasonable steps to
                        ensure appropriate physical, technical and managerial safeguards are in place to protect your
                        Personal Data from unauthorized access, alteration, transmission and deletion. We work to
                        protect the security of your personal information during transmission by using encryption
                        protocols. We use multi-layered controls to help protect our infrastructure, constantly
                        monitoring and improving our applications, systems, and processes to meet the growing demands
                        and challenges of security.We ensure that the third parties who provide services to us under
                        appropriate contracts, take appropriate security measures to protect your Personal Data in line
                        with our policies.</p>


                    <h2>RETENTION AND DISPOSAL OF DATA</h2>
                    <p>We keep the Personal Data we collect about you on our systems or with third parties for as long
                        as it is required for the purposes set out in this Privacy Policy and for legal or regulatory
                        reasons. We will only use your Personal Data for those purposes and will make sure that your
                        Privacy is protected. We shall take reasonable steps to delete or permanently de-identify
                        Personal Data that is no longer needed.</p>


                    <h2>LINKS TO OTHER WEBSITES</h2>
                    <p>Our website may contain links to websites of other organizations. This privacy policy does not
                        cover how that organization processes Personal Data. We encourage you to read the privacy
                        policies on the other websites you visit.</p>


                    <h2>CHILDREN’S PRIVACY</h2>
                    <p>Our website is directed to be used by adults only. If you are not an adult, while you may look at
                        our site, you should not make a purchase, register, or submit Personal Data to us. We or our
                        associates /affiliates do not knowingly collect information from minors.</p>


                    <h2>CHOICE/OPT-OUT</h2>
                    <p>We provide all users with the opportunity to opt-out of receiving non-essential (promotional,
                        marketing-related) communications from us on behalf of our partners, and from us in general,
                        after setting up an account.
                        If you want to remove your contact information from all www.myntra.com lists and newsletters,
                        please visit unsubscribe.
                    </p>


                    <h2>YOUR CONSENT</h2>
                    <p>By using the Website and/ or by providing your information, you consent to the collection and use
                        of the information you disclose on the Website in accordance with this Privacy Policy, including
                        but not limited to your consent for sharing your information as per this privacy policy.
                        If we decide to change our privacy policy, we will post those changes on this page so that you
                        are always aware of what information we collect, how we use it, and under what circumstances we
                        disclose it.
                    </p>


                </div>
            </div>

            <BookNow/>
            <BackToTop/>
            <Footer/>
        </Fragment>
    );
}
