import {Fragment, useEffect, useState} from "react";
import styles from "./styles/privacy-policy.module.scss";
import PageHeader from "../shared/components/page-header/page-header";
import Footer from "../shared/components/footer/footer";
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from "swiper/core";
import BackToTop from "../shared/components/back-to-top";
import BookNow from "../shared/components/book-now";

SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);

export default function Tnc() {
    const [render, set_render] = useState(1);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <Fragment>
            <PageHeader title={"TERMS AND CONDITIONS"}/>

            <div className={"outer"}>
                <div className={"inner " + styles.privacyPolicy}>
                    <h1>TERMS AND CONDITIONS FOR GLOW SKIN BEAUTY WELLNESS</h1>


                    <h2>Website Terms of Service</h2>
                    <ol>
                        <li>General Conditions Pertaining to Accounts</li>
                        <li>Accuracy, Completeness and Timeliness of Information</li>
                        <li>Restriction to the copy of Intellectual Property</li>
                        <li>User Comments, Feedback & Other Submissions</li>
                        <li>Warranty Disclaimer</li>
                        <li>Third-Party Links and Privacy</li>
                        <li>Online protection of Minors</li>
                        <li>Personal Information</li>
                        <li>Errors, Inaccuracies and Omissions</li>
                        <li>Prohibited Uses</li>
                        <li>Limitation of Liability</li>
                        <li>Indemnification</li>
                        <li>Severability</li>
                        <li>Right to Termination, Modification and Suspension of Website</li>
                        <li>Arbitration and Waiver</li>
                        <li>Governing Law and Jurisdiction</li>
                        <li>Changes to Terms of Service</li>
                        <li>Entire Agreement</li>
                        <li>Cancellations, Returns and Refunds</li>
                        <li>Mode of Payment</li>
                        <li>Shipping and Delivery</li>
                        <li>Limited License</li>
                        <li>Site Security</li>
                        <li>General</li>
                    </ol>

                    <h2>1. ACCEPTANCE OF TERMS OF USE</h2>
                    <p>Please read the following terms and conditions as these terms of use (&quot;Terms&quot;)
                        constitute a
                        legally binding agreement between you and the Company regarding your use of the Site and
                        any services offered by the Company including but not limited to delivery of content via the
                        Site, any mobile or internet connected device or otherwise (the &quot;the Service&quot;). THESE
                        TERMS OF SERVICE APPLIES TO ALL VISITORS, USERS, VENDORS, CUSTOMERS,
                        MERCHANTS AND OTHERS WHO ACCESS THIS WEBSITE and does not depend on
                        the registration of an account. <br/><br/>

                        This website is operated by GLOW SKIN BEAUTY WELLNESS. Throughout the site, the
                        terms “we”, “us” and “our” refer to GLOW SKIN BEAUTY WELLNESS. GLOW SKIN
                        BEAUTY WELLNESS offers this website, including all information, tools and services
                        available from this site to you, the user, conditioned upon your acceptance of all terms,
                        conditions, policies and notices stated here. For the purpose of these terms and conditions
                        (“Terms of Use”) and the Privacy Policy, Shipping Policy and Cancellation, Refund and
                        Return Policy (together &quot;Policies&quot;) available on the Site and other terms and
                        conditions as
                        available across the Site, wherever the context so requires &quot;You&quot;, “Your”, “Yourself”
                        and/or
                        &quot;User&quot; shall mean any natural or legal person who is visiting the Site (whether
                        registered
                        with the Site or not). <br/><br/>

                        This Site is directed to be used only by adults i.e., persons who are above the age of 18 years.
                        The Site is not intended or designed to attract or be otherwise used by any person under the
                        age of 18 years or by any other person who is not competent to enter into contract in
                        accordance with the Indian Contract Act, 1872. By using the Site, You confirm that You are
                        either 18 years of age or more and/or are otherwise competent to contract (as understood
                        under the Indian Contract Act, 1872). If You are under 18 years of age or otherwise
                        incompetent to contract (as understood under the applicable law) then You should not make a
                        purchase on the Site and should not use the Site.<br/><br/>

                        By visiting our site and/ or purchasing something from us, you engage in our “Service” and
                        agree to be bound by the following terms and conditions (“Terms of Service”). Your use of
                        the Site, services, and products available on the website are governed by these Terms of Use
                        (as amended from time to time), and the Policies and other terms and conditions as available

                        across the Site (as may be amended from time to time), which are deemed to be incorporated
                        herein by way of reference and shall be considered as part of these Terms of Use. Hence, a
                        reference to Terms of Use shall be considered to include a reference to the Policies and any
                        other terms and conditions available across the Site. These Terms of Service apply to all users
                        of the site, including without limitation users who are browsers, vendors, customers,
                        merchants, and/ or contributors of content. By accessing, browsing, or using the Site, You are
                        acknowledging, that You have read, understood, and agree, without limitation or
                        qualification, to be bound by these Terms of Use. If You do not understand or do not agree to
                        any of the terms enumerated in the Terms of Use, please do not use the Site. You are
                        responsible for ensuring that Your access to this Site and material available on or through it
                        are legal in each jurisdiction, in or through which You access or view the Site or such
                        material.<br/><br/>

                        GLOW SKIN BEAUTY WELLNESS reserves the right to change the particulars contained
                        in the Terms of Use from time to time and at any time, without notice to its users and in its
                        sole discretion. If GLOW SKIN BEAUTY WELLNESS decides to change the Terms of Use,
                        it will post the new version of the Terms of Use on the Site and update the date specified
                        hereinabove. Any change or modification to the Terms of Use will be effective immediately
                        from the date of such upload of the Terms of Use and Policies on the Site. Your continued
                        use of the Site following the modifications to the Terms of Use and Policies constitutes Your
                        acceptance (without limitation or qualification) of the modified Terms of Use and Policies.
                        For this reason, You should frequently review these Terms of Use and, understand the Terms
                        of Use that apply to Your use of the Site and Our products and Services.

                    </p>


                    <h2>2. ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
                    <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit
                        or cancel quantities purchased per person, per household or per order. These restrictions may
                        include orders placed by or under the same customer account, the same credit card, and/or orders
                        that use the same billing and/or shipping address. In the event that we make a change to or
                        cancel an order, we may attempt to notify you by contacting the e-mail and/or billing
                        address/phone number provided at the time the order was made. We reserve the right to limit or
                        prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or
                        distributors.<br/><br/>
                        You agree to provide current, complete and accurate purchase and account information for all
                        purchases made at our store. You agree to promptly update your account and other information,
                        including your email address and credit card numbers and expiration dates, so that we can
                        complete your transactions and contact you as needed.
                    </p>


                    <h2>3. RESTRICTION TO THE COPY OF INTELLECTUAL PROPERTY</h2>
                    <p>The name and logo and all related product and service names, design
                        marks and slogans are the trademarks, logos or service marks (hereinafter referred to as
                        "Marks") of GLOW SKIN BEAUTY WELLNESS. All other Marks provided on the Site are the property of
                        their respective companies. No trademark or service mark license is granted in connection with
                        the materials contained on this Site. Access to this Site does not authorize anyone to use any
                        Marks in any manner. Marks displayed on this Site, whether registered or unregistered, of GLOW
                        SKIN BEAUTY WELLNESS or others, are the intellectual property of their respective owners, and
                        GLOW SKIN BEAUTY WELLNESS shall not be held liable in any manner whatsoever for any unlawful,
                        unauthorized use of the Marks.<br/><br/>
                        GLOW SKIN BEAUTY WELLNESS and its suppliers and licensors expressly and exclusively reserve all
                        the intellectual property rights in all text, programs, products, processes, technology,
                        content, software and other materials, which appear on this Site, including its looks and feel.
                        The compilation (meaning the collection, arrangement and assembly) of the content on the Site is
                        the exclusive property of GLOW SKIN BEAUTY WELLNESS and are protected by the Indian copyright
                        laws and International treaties. Consequently, the materials on this Site shall not be copied,
                        reproduced, duplicated, republished, downloaded, posted, transmitted, distributed or modified in
                        whole or in part or in any other form whatsoever, except for your personal, non-commercial use
                        only. No right, title or interest in any downloaded materials or software is transferred to you
                        as a result of any such downloading or copying, reproducing, duplicating, republishing, posting,
                        transmitting, distributing or modifying.<br/><br/>
                        All materials, including images, text, illustrations, designs, icons, photographs, programs,
                        music clips, downloads, video clips and written and other materials that are part of this Site
                        (collectively, the "Contents") are intended solely for personal, non-commercial use. You may
                        download or copy the Contents and other downloadable materials displayed on the Site for your
                        personal use only. We also grant you a limited, revocable, non-transferable, and non-exclusive
                        license to create a hyperlink to the home page of the Site for personal, non-commercial use
                        only. The Contents and software on this Site are to be used only as a shopping and consultation
                        resource. Any other use, including the reproduction, modification, distribution, transmission,
                        re-publication, display, or performance, of the Contents on this Site is strictly prohibited.
                        Unless GLOW SKIN BEAUTY WELLNESS explicitly provides to the contrary, all Contents are
                        copyrighted, trademarked, trade dressed and/or other intellectual property owned, controlled or
                        licensed by GLOW SKIN BEAUTY WELLNESS, any of its affiliates or by third parties who have
                        licensed their materials to GLOW SKIN BEAUTY WELLNESS and are protected by Indian copyright laws
                        and international treaties.
                    </p>

                    <h2>4. USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h2>
                    <p>Welcome any suggestions and comments. Please be aware that by sending creative ideas,
                        suggestions, proposals, plans, or other materials, at our request or otherwise, whether online,
                        by email, by postal mail, or any other format (collectively, 'comments'), you agree that we may,
                        at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use
                        in any medium any comments that you forward to us. We are and shall be under no obligation (1)
                        to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to
                        respond to any comments.<br/><br/>
                        We may monitor, edit, or remove content that we determine in our sole discretion is
                        inappropriate for any reason.
                    </p>


                    <h2>5. WARRANTY DISCLAIMER</h2>
                    <p>The site is presented "as is." Neither we nor our holding, subsidiaries, affiliates, partners, or
                        licensors make any representations or warranties of any kind whatsoever, express or implied, in
                        connection with these terms and conditions or the site or any of the content, including but not
                        limited to warranties of merchantability, non-infringement or fitness for a particular purpose,
                        except to the extent such representations and warranties are not legally excludable.
                        You agree that, to the fullest extent permitted by applicable law, neither we nor our holding,
                        Subsidiaries, affiliates, partners, or licensors will be responsible or liable (whether in
                        contract, tort (including negligence) or otherwise) under any circumstances for any (a)
                        interruption of business; (b) access delays or access interruptions to the site; (c) data
                        non-delivery, loss, theft, misdelivery, corruption, destruction or other modification; (d) loss
                        or damages of any sort incurred as a result of dealings with or the presence of off-website
                        links on the site; (e) viruses, system failures or malfunctions which may occur in connection
                        with your use of the site, including during hyperlink to or from third party websites; (f) any
                        inaccuracies or omissions in content; or (g) events beyond the reasonable control of GLOW SKIN
                        BEAUTY WELLNESS. We make no representations or warranties that defects or errors will be
                        corrected.<br/><br/>
                        Further, to the fullest extent permitted by law, neither we nor our subsidiaries, affiliates,
                        partners, or licensors will be liable for any indirect, special, punitive, incidental, or
                        consequential damages of any kind (including lost profits) related to the site or your use
                        thereof regardless of the form of action whether in contract, tort (including negligence) or
                        otherwise, even if we have been advised of the possibility of such damages and in no event shall
                        our maximum aggregate liability exceed.<br/><br/>
                        You agree that no claims or action arising out of, or related to, the use of the site or these
                        terms and conditions may be brought by you more than one (1) year after the cause of action
                        relating to such claim or action arose. If you have a dispute with us or are dissatisfied with
                        the site, termination of your use of the site is your sole remedy. We have no other obligation,
                        liability, or responsibility to you.
                    </p>


                    <h2>6. THIRD PARTY LINKS AND PRIVACY</h2>
                    <p>References on the Site to any names, marks, products or services of third parties or hypertext
                        links to third party sites or information are provided solely as a convenience to you. This does
                        not in any way constitute or imply GLOW SKIN BEAUTY WELLNESSendorsement, sponsorship or
                        recommendation of the third party, information, product or service or any association and
                        relationship between GLOW SKIN BEAUTY WELLNESS and those third parties.
                        GLOW SKIN BEAUTY WELLNESS is not responsible for the content of any third party sites and does
                        not make any representations regarding the content or accuracy of material on such sites. If you
                        decide to link to any such third party websites, you do so entirely at your own risk. Glow Skin
                        Beauty Wellnessdo not assume any responsibility for examining or evaluating the offerings of the
                        off-websites pages or any other websites linked from the Site. We shall not be responsible for
                        the actions, content, products, or services of such pages and websites, including, without
                        limitation, their privacy policies and terms and conditions. You should carefully review the
                        terms and conditions and privacy policies of all off-website pages and other websites that you
                        visit via the Site.<br/><br/>
                        We understand the importance of safeguarding your personal information and we have formulated a
                        Privacy Policy, to ensure that your personal information is sufficiently protected. Apart from
                        these Terms of Use, the Privacy Policy shall also govern your visit and use of the Site. Your
                        continued use of the Site implies that you have read and accepted the Privacy Policy and agree
                        to be bound by its terms and conditions. You consent to the use of personal information by in
                        accordance with Glow Skin Beauty Wellness the terms of and purposes set forth in the Privacy
                        Policy, the same may be subject to amendment from time to time at the sole discretion of Glow
                        Skin Beauty Wellness.

                    </p>


                    <h2>7. ONLINE PROTECTION OF MINORS </h2>
                    <p>You may only use the Website if you are 18 years of age or older. To register for an account,
                        purchase products via the Website and subscribe to receive any Content or other marketing or
                        promotional material from us (in any form and via any media) (a “Subscription”). To view
                        information on our policy regarding the privacy of children under the age of 18, please see our
                        Privacy Policy.<br/><br/>
                        GLOW SKIN BEAUTY WELLNESS hereby notifies you that parental control protections (such as
                        computer hardware, software or filtering services) are commercially available and may assist you
                        in limiting access to material that is harmful to minors.
                    </p>


                    <h2>8. ERRORS, INACCURACIES AND OMISSIONS</h2>
                    <p>Occasionally there may be information on our site or in the Service that contains typographical
                        errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions,
                        offers, product shipping charges, transit times and availability.
                        We reserve the right to correct any errors, inaccuracies or omissions, and to change or update
                        information or cancel orders if any information in the Service or on any related website is
                        inaccurate at any time without prior notice.<br/><br/>
                        We undertake no obligation to update, amend or clarify information in the Service or on any
                        related website, including without limitation, pricing information, except as required by law.
                        No specified update or refresh date applied in the Service or on any related website should be
                        taken to indicate that all information in the Service or on any related website has been
                        modified or updated.
                    </p>


                    <h2>9. PROHIBITED USES</h2>
                    <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from
                        using the site or its content: </p>
                    <ul>
                        <li>for any unlawful purpose;</li>
                        <li>to solicit others to perform or participate in any unlawful acts;</li>
                        <li>to violate any international, federal, provincial or state regulations, rules, laws, or
                            local ordinances;
                        </li>
                        <li>to infringe upon or violate our intellectual property rights or the intellectual property
                            rights of others;
                        </li>
                        <li>to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate
                            based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or
                            disability;
                        </li>
                        <li>to submit false or misleading information;</li>
                        <li>to upload or transmit viruses or any other type of malicious code that will or may be used
                            in any way that will affect the functionality or operation of the service or of any related
                            website, other websites, or the internet;
                        </li>
                        <li>to collect or track the personal information of others;</li>
                        <li>to spam, phish, pharm, pretext, spider, crawl, or scrape;</li>
                        <li>for any obscene or immoral purpose; or</li>
                        <li>to interfere with or circumvent the security features of the Service or any related website,
                            other websites, or the Internet. We reserve the right to terminate your use of the Service
                            or any related website for violating any of the prohibited uses.
                        </li>
                    </ul>


                    <h2>10. PERSONAL INFORMATION</h2>
                    <p>For information about the Company&#39;s policies and practices regarding the collection and use
                        of your personally identifiable information, please read the Privacy Policy as available on the

                        Site. The Privacy Policy is incorporated by reference and made part of these Terms. Thus, by
                        agreeing to these Terms, you agree that your presence on the Site and use of the Services are
                        governed by the Company’s Privacy Policy in effect at the time of your use. The Company
                        reserves the right to disclose any information that is required to be shared, disclosed or made
                        available to any governmental, administrative, regulatory or judicial authority under any law
                        or regulation applicable to the Company. The Company can further disclose your name, street
                        address, city, state, zip code, country, phone number, email, as it in its sole discretion
                        believes necessary or appropriate in connection with an investigation of fraud, intellectual
                        property infringement, piracy, or other unlawful activity.</p>


                    <h2>11. INDEMNIFICATION</h2>
                    <p>You agree to defend, indemnify and hold harmless GLOW SKIN BEAUTY WELLNESS, its employees,
                        directors, officers, agents and their successors and assigns, its holding, subsidiaries,
                        affiliates, partners, or licensors from and against any and all claims, liabilities, damages,
                        losses, costs and expenses, including attorney's fees, caused by or arising out of claims based
                        upon your actions or inactions, which may result in any loss or liability to GLOW SKIN BEAUTY
                        WELLNESS or any third party including but not limited to breach of any warranties,
                        representations or undertakings or in relation to the non-fulfilment of any of your obligations
                        under the Terms of Use, or arising out of the your violation of any applicable laws, regulations
                        including but not limited to Intellectual Property Rights, payment of statutory dues and taxes,
                        claim of libel, defamation, violation of rights of privacy or publicity, loss of service by
                        other subscribers and infringement of intellectual property or other rights. This clause shall
                        survive the expiry or termination of the Terms of Use.
                    </p>


                    <h2>12. SEVERABILITY</h2>
                    <p>If any provision of the Terms is determined to be invalid or unenforceable in whole or in part,
                        such invalidity or unenforceability shall attach only to such provision or part of such
                        provision and the remaining part of such provision and all other provisions of these Terms shall
                        continue to be in full force and effect.
                    </p>

                    <h2>13. RIGHT TO TERMINATION, MODIFICATION AND SUSPENSION OF THE WEBSITE</h2>
                    <p>We reserve the right to change, suspend or discontinue any aspect of the Website at any time and
                        from time to time, in our sole discretion and without notice or liability, including by adding
                        or eliminating certain features or discontinuing the Website entirely. Any description of
                        features on the Website shall not be considered to be a representation by GLOW SKIN BEAUTY
                        WELLNESS that such features will always be included on the Website. From time to time, we may
                        restrict access to some or the entire Website, including for Registered Users. We also reserve
                        the right to terminate or suspend your Account or restrict your use of or access to the Website,
                        without notice or liability, for any reason or no reason at our sole discretion. Accordingly,
                        for any reason, and without notice, all or any part of the Website may become unavailable to you
                        at any time and for any period.<br/><br/>
                        If we suspend or discontinue any aspect of the Website or terminate your Account, we are not
                        responsible for providing you with any information or content. We may also delete your other
                        preferences and interests to the extent stored within or in connection with your Account. You
                        have no recourse with regard to any information that we delete regardless of any value you may
                        ascribe to such information. We expressly disclaim any value you may attribute to any of your
                        information stored on our servers.
                    </p>

                    <h2>14. ARBITRATION AND WAIVER</h2>
                    <p>Any dispute or difference either in interpretation or otherwise, of these Terms and Conditions,
                        and other Policies on the app and/or website, between the parties hereto, shall be referred to
                        an independent arbitrator who will be appointed by GLOW SKIN BEAUTY WELLNESS and his decision
                        shall be final and binding on the parties hereto. The above arbitration shall be in accordance
                        with the Arbitration and Conciliation Act, 1996 as amended from time to time. The arbitration
                        shall be held in Hyderabad.</p>

                    <h2>15. GOVERNING LAW AND JURISDICTION</h2>
                    <p>The Terms of Use and the Policies shall be construed in accordance with the app and/or
                        website applicable laws of India. For proceedings arising therein shall referred to
                        arbitration.</p>


                    <h2>16. CHANGES TO TERMS OF SERVICE</h2>
                    <p>We reserve the right to make changes to our website, policies, and these Conditions of Use at any
                        time. You will be subject to the policies and Conditions of Use in force at the time that you
                        use the website or that you order goods from us, unless any change to those policies or these
                        conditions is required to be made by law or government authority (in which case it will apply to
                        orders previously placed by you). If any of these conditions is deemed invalid, void, or for any
                        reason unenforceable, that condition will be deemed severable and will not affect the validity
                        and enforceability of any remaining condition.</p>

                    <h2>17. ENTIRE AGREEMENT</h2>
                    <p>If any part of these Terms of Use is determined to be invalid or unenforceable pursuant to
                        applicable law including, but not limited to, the warranty disclaimers and liability limitations
                        set forth above, then the invalid or unenforceable provision will be deemed to be superseded by
                        a valid, enforceable provision that most closely matches the intent of the original provision
                        and
                        the remainder of the Terms of Use shall continue to be in effect. Unless otherwise specified
                        herein, these Terms of Use constitutes the entire agreement between you and GLOW SKIN
                        BEAUTY WELLNESS with respect to the Site/services and it supersedes all prior or
                        contemporaneous communications and proposals, whether electronic, oral or written. GLOW
                        SKIN BEAUTY WELLNESS’s failure to act with respect to a breach by you or others does
                        not waive its right to act with respect to the breach or subsequent and similar breaches.</p>

                    <h2>18. CANCELLATIONS, RETURNS AND REFUNDS</h2>
                    <p>Please refer to our Cancellation, Refunds and Returns Policy provided on our Site.</p>

                    <h2>19. MODE OF PAYMENT</h2>
                    <p>Payments for the products available on the Site may be made in the following ways:
                    </p>
                    <ul>
                        <li>Payments can be made by Credit Cards, Debit Cards, Net Banking, Wallets, e-Gift
                            cards, and reward points.
                        </li>
                        <li>Credit card, Debit Card and Net Banking payment options are instant payment options
                            and recommended to ensure faster processing of your order.
                        </li>
                        <li>Cash On Delivery option is not available for orders outside India</li>
                    </ul>

                    <h2>20. CANCELLATIONS, RETURNS AND REFUNDS</h2>
                    <p>Please refer to our Shipping and Delivery Policy provided on our Site, as amended from time to
                        time.</p>


                    <h2>21. LIMITED LICENSE</h2>
                    <p>GLOW SKIN BEAUTY WELLNESS grants you limited, non-exclusive, non-transferable,
                        non-sublicensable license to access, and make personal and non-commercial use of the Site. All

                        rights not expressly granted to you in these Terms of Use, are reserved and retained by the Site
                        and its affiliates. GLOW SKIN BEAUTY WELLNESS reserves the right, at any time, without
                        notice, and at its sole discretion, to terminate your license to use the Site and to block and
                        prevent your future access the Site.</p>


                    <h2>22. SITE SECURTY</h2>
                    <p>You are prohibited from violating or attempting to violate the security of the Website,
                        including, without limitation,<br/><br/>
                        a. accessing data not intended for you or logging onto a server or an account which you
                        are not authorized to access;<br/>
                        b. attempting to probe, scan or test the vulnerability of a system or network or to breach
                        security or authentication measures without proper authorization;<br/>
                        c. attempting to interfere with service to any other user, host or network, including,
                        without limitation, via means of submitting a virus to the Site, overloading,
                        &quot;flooding,&quot; &quot;spamming,&quot; &quot;mail bombing&quot; or &quot;crashing&quot;
                        <br/>
                        d. sending unsolicited email, including promotions and/or advertising of products or
                        services; or<br/>
                        e. forging any header or any part of the header information in any email or newsgroup
                        posting. Violations of system or network security may result in civil or criminal
                        liability<br/>
                        f. threatens the unity, integrity, defence, security or sovereignty of India, public order or
                        causes incitement to the commission of any cognizable offence or prevents
                        investigation of any offence.<br/></p>

                    <h2>GENERAL</h2>
                    <p>You acknowledge and hereby agree to these Terms and Conditions and that it constitute the
                        complete and exclusive agreement between us concerning your use of the Site, and supersede
                        and govern all prior proposals, agreements, or other communications. We reserve the right, in
                        our sole discretion, to change/ alter/ modify these Terms and Conditions at any time by posting
                        the changes on the Site. Any changes are effective immediately upon posting to the Site. Your
                        continued use of the Site thereafter constitutes your agreement to all such changed Terms and
                        Conditions. We may, with or without prior notice, terminate any of the rights granted by these

                        Terms and Conditions. You shall comply immediately with any termination or other notice,
                        including, as applicable, by ceasing all use of the Site. ANY BREACH OR VIOLATION OF
                        ANY OF THE TERMS WILL RESULT IN IMMEDIATE TERMINATION OF SERVICES
                        PROVIDED BY GLOW SKIN BEAUTY WELLNESS. <br/><br/>
                        Nothing contained in these Terms and Conditions shall be construed as creating any agency,
                        partnership, affiliation, joint venture or other form of joint enterprise between us. Our
                        failure to
                        require your performance of any provision hereof shall not affect our full right to require such
                        performance at any time thereafter, nor shall our waiver of a breach of any provision hereof be
                        taken or held to be a waiver of the provision itself. In the event that any provision of these
                        Terms and Conditions shall be unenforceable or invalid under any applicable law or be so held
                        by any court decision, such unenforceability or invalidity shall not render these Terms and
                        Conditions unenforceable or invalid as a whole but these Terms and Conditions shall be
                        modified, to the extent possible, by the adjudicating entity to most fully reflect the original
                        intent of the parties as reflected in the original provision. The headings in the Terms and
                        Conditions are for convenience only and shall not be used in its interpretation.</p>
                </div>
            </div>

            <BookNow/>
            <BackToTop/>
            <Footer/>
        </Fragment>
    );
}
