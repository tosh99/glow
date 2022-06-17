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
                    <p>GLOW SKIN BEAUTY WELLNESS ("us", "we", or "our") operates www.glow.clinic website (the
                        "Service").
                        This Privacy Policy is a digital version in the form of an electronic contract created under the
                        Information Technology Act 2000, its rules, and the revised sections in various legislation
                        dealing with electronic documents or records as amended by the Information Technology Act 2000.
                        There is no requirement for a physical, electronic, or digital signature on this Privacy Policy.
                        This page explains our policies for collecting, using, and disclosing personal data when you use
                        our Service, as well as your options for dealing with that data.<br/><br/>

                        This Privacy Policy is a contract between you and GLOW SKIN BEAUTY WELLNESS that must be
                        followed. The provisions of this Privacy Policy will take effect after you accept them, and they
                        will govern your relationship with GLOW SKIN BEAUTY WELLNESS in regards to your use of the
                        website www.glow.clinic<br/><br/>

                        The provisions of the Information Technology (reasonable security practices and procedures and
                        sensitive personal data of information) rules, 2011 under the Information Technology Act, 2000,
                        require the publication of a Privacy Policy for the compilation, use, storage, and transfer of
                        sensitive personal information. Please take the time to read this Privacy Policy carefully. By
                        using the Website, you acknowledge that you have read, understood, and agreed to the terms of
                        this Privacy Policy. Please do not use this Website if you do not accept the terms of this
                        Privacy
                        Policy. This Privacy Policy (&quot;Policy&quot;) deals with the collection, storage, handling,
                        disclosure
                        and/or transfer of personal information including Personal Data collected from Users by Us. Our
                        Policy is subject to change at any time without notice. Your continued use of the Site following
                        such changes to the Policy constitutes Your acceptance of the changed Policy and You are bound
                        by such changes. If You do not continue to use the Site following the change in the policy but
                        take no action with respect to Your Personal Data with Us, Our use of Your Personal Data shall
                        remain subject to the Policy in effect prior to the change. You are responsible for periodically
                        reviewing this Policy in order to be aware of any changes thereto.

                        Your information is used to provide and improve services. You agree to the collection and use of
                        information in line with this policy by using the Service. Unless otherwise stated in this
                        Privacy

                        Policy, terms have the same meaning as in our Terms and Conditions, which can be found at
                        www.glow.clinic
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

                    <p>The Company limits itself to collect information which is necessary to ensure accurate services
                        and is required to process your order of the Product or provide a refund and continually improve
                        our Products and services.<br/><br/>
                        Following are the categories of Personal Information that is collected and processed by
                        us:<br/>
                        <ul>
                            <li>your name, e-mail and postal addresses, phone number(s), country;</li>
                            <li>date of birth, language preference, location;</li>
                            <li>any open data and public records such as information about you that is openly available
                                on
                                the
                                Internet;
                            </li>
                            <li>names of people to whom purchases have been shipped including address and telephone
                                numbers, IP addresses;
                            </li>
                            <li>Product interest information and in certain circumstances, your opinions and individual
                                preferences, etc.;
                            </li>
                            <li>You may also provide us with information like financial information such as bank account
                                or
                                credit card or debit card or other payment instrument details, password for availing the
                                Products at our Platform;
                            </li>
                            <li>We may also maintain a record of your Product interests and acquire information about
                                you
                                from our future affiliates;
                            </li>
                            <li>phone numbers used to call our customer service number.</li>
                            <li>We may collect and use technical data and related information, including but not limited
                                to,
                                technical information about your device, system and application software, and
                                peripherals,
                                that
                                is
                                gathered periodically to facilitate the provision of software updates, product support
                                and
                                other
                                services to you (if any) related to the Platform.
                            </li>
                        </ul>

                    </p>

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


                    {/*<h2>COOKIES</h2>*/}
                    {/*<p>We use data collection devices such as "cookies" on certain pages of the Platform to help analyze*/}
                    {/*    our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies"*/}
                    {/*    are small files placed on your hard drive that assist us in providing our services. Cookies do*/}
                    {/*    not contain any of your personal information. We offer certain features that are only available*/}
                    {/*    through the use of a "cookie". We also use cookies to allow you to enter your password less*/}
                    {/*    frequently during a session. Cookies can also help us provide information that is targeted to*/}
                    {/*    your interests. Most cookies are "session cookies," meaning that they are automatically deleted*/}
                    {/*    from your hard drive at the end of a session. You are always free to decline/delete our cookies*/}
                    {/*    if your browser permits, although in that case you may not be able to use certain features on*/}
                    {/*    the Platform and you may be required to re-enter your password more frequently during a session.*/}
                    {/*    Additionally, you may encounter "cookies" or other similar devices on certain pages of the*/}
                    {/*    Platform that are placed by third parties. We do not control the use of cookies by third*/}
                    {/*    parties. We use cookies from third-party partners such as Google Analytics for marketing and*/}
                    {/*    analytical purposes. </p>*/}

                    <h2>HOW DO WE COLLECT YOUR PERSONAL INFORMATION?</h2>
                    <p>We communicate with you through a variety of means and channels, including our Platform,
                        email, phone or text messaging on your mobile phone, although we do generally note that our
                        preferred means of communication is email which has the least impact on the environment. Such
                        communications may involve giving to you, as well as receiving information from you. We
                        collect and receive the Personal Information in the following ways</p>

                    <ul>
                        <li>When you submit your Personal Information on our Platform: The Company collects
                            and stores the Personal Information that you provide while using our Platform including
                            when you enter your Personal Information into data fields on the Platform as part of a
                            voluntary registration process. We also collect and store your Personal Information
                            through sponsored social media platforms, events, etc.
                        </li>
                        <li> Automatic collection: We automatically collect and store certain types of information
                            whenever you interact with us. Such information includes information about your use of
                            the Platform, your interaction with content and services available through the Platform.
                            Like many websites, unidentifiable information may be collected using various
                            technologies, such as cookies, Internet tags, and web beacons We use data collection
                            devices such as &quot;cookies&quot; on certain pages of the Platform to help analyze our web
                            page
                            flow, measure promotional effectiveness, and promote trust and
                            safety. &quot;Cookies&quot; are
                            small files placed on your hard drive that assist us in providing our services. Cookies do
                            not contain any of your personal information. We also use cookies to allow you to enter
                            your password less frequently during a session. Cookies can also help us provide
                            information that is targeted to your interests. Most cookies are &quot;session
                            cookies,&quot;
                            meaning that they are automatically deleted from your hard drive at the end of a session.
                            You are always free to decline/delete our cookies if your browser permits, although in
                            that case you may not be able to use certain features on the Platform and you may be
                            required to re-enter your password more frequently during a session. Additionally, you
                            may encounter &quot;cookies&quot; or other similar devices on certain pages of the Platform
                            that
                            are
                            placed by third parties. We do not control the use of cookies by third parties. We use

                            cookies from third-party partners such as Google Analytics for marketing and analytical
                            purposes
                        </li>
                        <li> Other sources: We might receive information about you from other sources, such as
                            updated delivery and address information from third parties, which we use to correct our
                            records and deliver your next purchase more easily. Further, we may receive information
                            about you from third parties that feature our Products or promotional offers if you opt-in
                            to receive information from us. You may also choose to participate in a third party
                            application or social media sites through which you allow us to collect (or the third party
                            to share) Personal Information about you, including usage information. We may also
                            receive information, such as marketing related or demographic information about you
                            from third parties to enhance our ability to tailor our content and offer you the Products
                            that we believe may be of interest to you. The Company is not responsible for the privacy
                            practices of such third-party websites which it does not own, manage or control.
                        </li>

                    </ul>

                    <h2>SHARING OF PERSONAL INFORMATION</h2>
                    <p>We share your personal Information only with the persons authorized by us shall have access to
                        your Personal Information. We may share your Personal Information only to those mentioned
                        below and they are either subject to this Policy or follow practices at least as protective as
                        those
                        described in this Policy. We may share personal information with our other corporate entities
                        and
                        affiliates. These
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
                        Personal Data from unauthorized access, alteration, transmission and deletion. We make
                        reasonable efforts to ensure that our Internet service providers have implemented physical,
                        electronic, and procedural security measures to assist with safeguarding your personal
                        information, and to help protect against unauthorized access and disclosure. We work to
                        protect the security of your personal information during transmission by using encryption
                        protocols. We use multi-layered controls to help protect our infrastructure, constantly
                        monitoring and improving our applications, systems, and processes to meet the growing demands
                        and challenges of security.We ensure that the third parties who provide services to us under
                        appropriate contracts, take appropriate security measures to protect your Personal Data in line
                        with our policies. Your information collected by us is stored on our systems in India and/or
                        outside the
                        territory of India, by us or our subsidiaries, group companies, affiliates, vendors, suppliers
                        and
                        subcontractors. By providing information to us in any manner including accessing our website,
                        you consent to such storage of information as contemplated herein. Notwithstanding our efforts,
                        the Internet has inherent security risks.</p>


                    <h2>RETENTION AND DISPOSAL OF DATA</h2>
                    <p>We will retain Your Personal Data only as long as We have Your subsisting consent, and the
                        retention of data is reasonably required for the purposes mentioned hereinabove and/or
                        otherwise permitted or required by applicable law or regulatory requirements. We may also

                        retain Your Personal Data so long as it is necessary to fulfil the purposes for which it was
                        collected (including for purposes of meeting any legal, administrative, accounting, or other
                        reporting requirements). Your Personal Data is safeguarded against inappropriate access and
                        disclosure, as per this Privacy Policy. We also maintain appropriate and adequate
                        administrative, technical, and physical safeguards designed to protect Your
                        Personal Data against accidental, unlawful, or unauthorized destruction, loss, alteration,
                        access, disclosure, or use. We shall take reasonable steps to delete or permanently de-identify
                        Personal Data that is no longer needed.</p>


                    <h2>LINKS TO OTHER WEBSITES</h2>
                    <p>We may pass your details to other companies in our group. We may also pass your details to our
                        agents and subcontractors to help us with any of our uses of your data set out in our Privacy
                        Policy. For example, we may use third parties to assist us with delivering products to you, to
                        help
                        us to collect payments from you, to analyze data and to provide us with marketing or customer
                        service assistance. We may exchange information with third parties for the purposes of fraud
                        protection and credit risk reduction. We may transfer our databases containing your personal
                        information if we sell our business or part of it. Other than as set out in this Privacy Policy,
                        we
                        shall NOT sell or disclose your personal data to third parties without obtaining your prior
                        consent unless this is necessary for the purposes set out in this Privacy Policy or unless we
                        are
                        required to do so by law. The Site may contain advertising of third parties and links to other
                        sites
                        or frames of other sites. Please be aware that we are not responsible for the privacy practices
                        or
                        content of those third parties or other sites, nor for any third party to whom we transfer your
                        data
                        in accordance with our Privacy Policy. We encourage you to read the privacy policies on the
                        other websites you visit.</p>


                    <h2>CHILDREN’S PRIVACY</h2>
                    <p>Our website is directed to be used by adults only and our website’s content is not directed
                        toward
                        collecting information from anyone who is under the age of 18 (eighteen) If you are not an
                        adult,
                        while you may look at our site, you should not make a purchase, register, or submit Personal
                        Data to us. For example, you cannot register. If we become aware that we have inadvertently

                        received Personal Information from a visitor under the age of eighteen (18) on the Platform, we
                        will delete the information from our records</p>


                    <h2>CHOICE/OPT-OUT</h2>
                    <p>We at www.glow.clinic will not use your Personal Information for a purpose that has not
                        previously
                        been specified, unless we have previously obtained your consent or unless such purpose is
                        required by law. In particular we will seek your explicit prior consent (opt in) before sending
                        to
                        you marketing communications. At any time, you can withdraw your consent to our collection,
                        use or disclosure (generally Processing) of your Personal Information by (I) contacting us, or
                        (ii)
                        writing to us in the prescribed manner (whether by email or call), as specified in our
                        communications to you, or in relevant forms. However, in such event we reserve the right to
                        refuse or limit your access and use of our website and any of their features, including the
                        services
                        offered by us. You also have the right to update or correct your information provided to us and
                        the right to opt out of providing us information.
                        If you have any concerns whatsoever, with regard to the unsubscribe functionality that we make
                        available to you, pursuant to this section, please contact us at the address mentioned at the footer below .
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
