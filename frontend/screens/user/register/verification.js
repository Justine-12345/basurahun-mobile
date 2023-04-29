import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import { VStack } from "native-base";
import Form1 from "../../../stylesheets/form1";
import { Checkbox } from 'react-native-paper';
import RenderHtml from "react-native-render-html";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../Redux/Actions/userActions";
import Toast from 'react-native-toast-message';

const Verification = ({ navigation }) => {

    const dispatch = useDispatch()

    const { personal, address, account } = useSelector(state => state.registerData);
    const { loading: authLoading, isAuthenticated, error: authError, user: authUser } = useSelector(state => state.auth);
    var { width, height } = Dimensions.get("window");

    const [agreed, setAgreed] = useState(false);
    let user

    useEffect(() => {
        if (isAuthenticated) {
            // Toast.show({
            //     type: 'success',
            //     text1: 'Registered Successfully',
            //     text2: 'Welcome To BasuraHunt, You can Log in Now'
            // });

            navigation.navigate('OTP')
        }

        if (authError) {
            Toast.show({
                type: 'error',
                text1: 'Registered Error',
                text2: authError
            });
        }

    }, [authError, authLoading, isAuthenticated, authUser])


    const submitHandle = () => {
        user = {
            ...personal,
            ...address,
            ...account
        };
        let dateNow = new Date();
        const formData = new FormData();

        formData.append('first_name', user.first_name);
        formData.append('middle_name', user.middle_name);
        formData.append('last_name', user.last_name);
        formData.append('suffix', user.suffix);
        formData.append('birthday', user.birthday);
        // formData.append('phone_number', phone_number);
        // formData.append('gender', gender);

        formData.append('house_number', user.house_number);
        formData.append('street', user.street);
        formData.append('barangay', user.barangay);

        formData.append('email', user.email);
        formData.append('alias', user.alias);
        formData.append('password', user.password);
        if (user.avatar) {
            formData.append('avatar', user.avatar);
        }
        if (user.jobDesc) {
            formData.append('jobDesc', user.jobDesc);
        }
        formData.append("dateTimeNow", dateNow.toLocaleString("en-US"))
        dispatch(register(formData))
    }

    const source = {
        html: `
        <div>
           <p><strong>TABLE OF CONTENTS</strong></p>
            <ol>
                <li>
                    AGREEMENT TO TERMS
                </li>
                <li>
                    INTELLECTUAL PROPERTY RIGHTS
                </li>
                <li>
                    USER REPRESENTATIONS
                </li>
                <li>
                    USER REGISTRATION
                </li>
                <li>
                    SOFTWARE
                </li>
                <li>
                    PROHIBITED ACTIVITIES
                </li>
                <li>
                    USER-GENERATED CONTRIBUTIONS
                </li>
                <li>
                    CONTRIBUTION LICENSE
                </li>
                <li>
                    MOBILE APPLICATION LICENSE
                </li>
                <li>
                    SUBMISSIONS
                </li>
                <li>
                    SITE MANAGEMENT
                </li>
                <li>
                    PRIVACY POLICY
                </li>
                <li>
                    COPYRIGHT INFRINGEMENTS
                </li>
                <li>
                    TERM AND TERMINATION
                </li>
                <li>
                    MODIFICATIONS AND INTERRUPTIONS
                </li>
                <li>
                    CORRECTIONS
                </li>
                <li>
                    DISCLAIMER
                </li>
                <li>
                    LIMITATIONS OF LIABILITY
                </li>
                <li>
                    USER DATA
                </li>
                <li>
                    ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                </li>
                <li>
                    MISCELLANEOUS
                </li>
                <li>
                    CONTACT US
                </li>
            </ol>
            <p><br/></p>
            <p><strong>1. AGREEMENT TO TERMS</strong></p>
            <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and BasuraHunt (&quot;Company&quot;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), concerning your access to and use of the <a href="https://verdant-cassata-948ce2.netlify.app/">https://www.basurahunt.com</a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &ldquo;Site&rdquo;). &nbsp;You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
            <p>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the &ldquo;Last Updated&rdquo; date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</p>
            <p>The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
            <p>The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or&nbsp;register for the Site.</p>
            <p>&nbsp;</p>
            <p><strong>2. INTELLECTUAL PROPERTY RIGHTS</strong></p>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us. The Content and the Marks are provided on the Site &ldquo;AS IS&rdquo; for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
            <p>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks.</p>
            <p><br/></p>
            <p><strong>3. USER REPRESENTATIONS</strong></p>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.</p>
            <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).</p>
            <p><br/></p>
            <p><strong>4. USER REGISTRATION</strong></p>
            <p>You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
            <p>&nbsp;</p>
            <p><strong>5. SOFTWARE</strong></p>
            <p>We may include software for use in connection with our services. If such software is accompanied by an end user license agreement (&ldquo;EULA&rdquo;), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Terms of Use. Any Software and any related documentation is provided &ldquo;as is&rdquo; without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risks arising out of the use or performance of any Software. You may not reproduce or redistribute any software except under the EULA or these Terms of Use.</p>
            <p>&nbsp;</p>
            <p><strong>6. PROHIBITED ACTIVITIES</strong></p>
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            <p>As a user of the Site, you agree not to:</p>
            <ul>
                <li>
                    Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                </li>
                <li>
                    Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
                </li>
                <li>
                    Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.
                </li>
                <li>
                    Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.
                </li>
                <li>
                    Use any information obtained from the Site to harass, abuse, or harm another person.
                </li>
                <li>
                    Make improper use of our support services or submit false reports of abuse or misconduct.
                </li>
                <li>
                    Use the Site in a manner inconsistent with any applicable laws or regulations.
                </li>
                <li>
                    Engage in unauthorized framing of or linking to the Site.
                </li>
                <li>
                    Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&rsquo;s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.
                </li>
                <li>
                    Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
                </li>
                <li>
                    Delete the copyright or other proprietary rights notice from any Content.
                </li>
                <li>
                    Attempt to impersonate another user or person or use the username of another user.
                </li>
                <li>
                    Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&ldquo;gifs&rdquo;), 1&times;1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &ldquo;spyware&rdquo; or &ldquo;passive collection mechanisms&rdquo; or &ldquo;pcms&rdquo;).
                </li>
                <li>
                    Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.
                </li>
                <li>
                    Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.
                </li>
                <li>
                    Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.
                </li>
                <li>
                    Copy or adapt the Site&rsquo;s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
                </li>
                <li>
                    Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.
                </li>
                <li>
                    Except as may be the result of the standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.
                </li>
                <li>
                    Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
                </li>
                <li>
                    Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.
                </li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>7. USER-GENERATED CONTRIBUTIONS</strong></p>
            <p>The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:</p>
            <ul>
                <li>
                    The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
                </li>
                <li>
                    You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.
                </li>
                <li>
                    You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.
                </li>
                <li>
                    Your Contributions are not false, inaccurate, or misleading.
                </li>
                <li>
                    Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                </li>
                <li>
                    Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
                </li>
                <li>
                    Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
                </li>
                <li>
                    Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
                </li>
                <li>
                    Your Contributions do not violate any applicable law, regulation, or rule.
                </li>
                <li>
                    Your Contributions do not violate the privacy or publicity rights of any third party.
                </li>
                <li>
                    Your Contributions do not violate any applicable law concerning child pornography or otherwise intended to protect the health or well-being of minors.
                </li>
                <li>
                    Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
                </li>
                <li>
                    Your Contributions do not otherwise violate or link to material that violates any provision of these Terms of Use, or any applicable law or regulation.
                </li>
            </ul>
            <p>Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.</p>
            <p><br/></p>
            <p><strong>8. CONTRIBUTION LICENSE</strong></p>
            <p>By posting your Contributions to any part of the Site, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sub-licenses of the foregoing. The use and distribution may occur in any media format and through any media channels.</p>
            <p>This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.&nbsp;</p>
            <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
            <p>We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>
            <p><br/></p>
            <p><strong>9. MOBILE APPLICATION LICENSE</strong></p>
            <p>Use License</p>
            <p>If you access the Site via a mobile application, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the mobile application on wireless electronic devices owned or controlled by you and to access and use the mobile application on such devices strictly under the terms and conditions of this mobile application license contained in these Terms of Use. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the application; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application; (5) use the application for any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the application available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application; (8) use the application to send automated queries to any website or to send any unsolicited commercial e-mail; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application.</p>
            <p>&nbsp;</p>
            <p><strong>10. SUBMISSIONS</strong></p>
            <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (&quot;Submissions&quot;) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</p>
            <p>&nbsp;</p>
            <p><strong>11. SITE MANAGEMENT</strong></p>
            <p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</p>
            <p>&nbsp;</p>
            <p><strong>12. PRIVACY POLICY</strong></p>
            <p>We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy posted on the Site, which is incorporated into these Terms of Use. Please be advised the Site is hosted in&nbsp;the&nbsp;Philippines. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in&nbsp;the&nbsp;Philippines, then through your continued use of the Site, you are transferring your data to&nbsp;the&nbsp;Philippines, and you agree to have your data transferred to and processed in&nbsp;the&nbsp;Philippines.</p>
            <p>&nbsp;</p>
            <p><strong>13. COPYRIGHT INFRINGEMENTS</strong></p>
            <p>We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a &ldquo;Notification&rdquo;). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that according to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.</p>
            <p>&nbsp;</p>
            <p><strong>14. TERM AND TERMINATION</strong></p>
            <p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, AT OUR SOLE DISCRETION.</p>
            <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
            <p>&nbsp;</p>
            <p><strong>15. MODIFICATIONS AND INTERRUPTIONS</strong></p>
            <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.</p>
            <p>We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.</p>
            <p>&nbsp;</p>
            <p><strong>16. CORRECTIONS</strong></p>
            <p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</p>
            <p><br/></p>
            <p><strong>17. DISCLAIMER</strong></p>
            <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&rsquo;S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>
            <p>&nbsp;</p>
            <p><strong>18. LIMITATIONS OF LIABILITY</strong></p>
            <p>IN&nbsp;NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <p>&nbsp;</p>
            <p><strong>19. USER DATA</strong></p>
            <p>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
            <p>&nbsp;</p>
            <p><strong>20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</strong></p>
            <p>Visiting&nbsp;the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email, and on the Site, satisfy any legal requirement that such communication is in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
            <p>&nbsp;</p>
            <p><strong>21. MISCELLANEOUS</strong></p>
            <p>These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.</p>
            <p>&nbsp;</p>
            <p><strong>22. CONTACT US</strong></p>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding the use of the Site, please contact us at:</p>
            <p>basurahunt@gmail.com</p>
            <p><br/></p>
            <p><br/></p>

        </div>`
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <VStack style={Form1.formContainer}>
                <ScrollView stickyHeaderIndices={[0]} style={{height:height/2}} >
                    <View style={{backgroundColor: "#f7faf7", paddingHorizontal: 10}}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>TERMS AND CONDITIONS</Text>
                    </View>
                    <View style={{backgroundColor: "white", paddingHorizontal: 10}}>
                        <RenderHtml
                            contentWidth={width}
                            source={source}
                        />
                    </View>
                </ScrollView>

                <Checkbox.Item
                    label="I have read and accept the terms and conditions."
                    labelStyle={{
                        textAlign: "left"
                    }}
                    position="leading"
                    status={agreed ? 'checked' : 'unchecked'}
                    onPress={() => { setAgreed(!agreed) }}
                    color="#1E5128"
                    disabled={authLoading}
                />

            </VStack>

            <View style={Form1.bottom}>
                <TouchableOpacity style={agreed ? Form1.formBtn : Form1.formBtnDisable} activeOpacity={0.8}
                    // onPress={()=>{navigation.navigate('')}}
                    disabled={!agreed || authLoading}
                    onPress={submitHandle}
                >
                    <Text style={Form1.btnLabel}>{authLoading ? <ActivityIndicator size="large" color="#00ff00" /> : "Submit"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={authLoading ? Form1.formBtnDisable : Form1.formBtn} activeOpacity={0.8}
                    disabled={authLoading}
                    onPress={() => { navigation.navigate('Account') }}>
                    <Text style={Form1.btnLabel}>Back</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Verification;