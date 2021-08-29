import styles from '../styles/Style.module.css'
import { SpaceBr, SpaceBrBr } from '../components/Space'
import Link from 'next/link'
import PackageBox from '../components/PackageBox'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const PackageSec = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
    }
    return (
        <section className={[styles.PackageSec] + " " + "pad-sec"}>
            <div className="container">
                <div className={[styles.PackageHead] + " " + "hding-2 para text-center"}>
                    <h2>RankLogo- A Place For All</h2>
                    <SpaceBr />
                    <p>Our creative logo designers are here to create an abstract logo for your brand or business to show your online presence in a unique way to attract the most customers. We make a custom design according to your requirements.</p>
                </div>
                <SpaceBrBr />
                <Tabs>
                    {props.TabNav ?
                        <TabList className={styles.TabNav}>
                            <Tab><Link href="#"><a onClick={handleClick}>logo design </a></Link></Tab>
                            <Tab><Link href="#"><a onClick={handleClick}>website design </a></Link></Tab>
                            <Tab><Link href="#"><a onClick={handleClick}>Stationary design</a></Link></Tab>
                        </TabList>
                        : ""}
                    <SpaceBrBr />
                    <SpaceBr />
                    {props.LogoDesignPkg ?
                        <div className={[styles.TabContent] + " " + "hding-4 para"}>
                            <ul className={styles.PackageList}>

                                <PackageBox
                                    Title={["Basic Logo", <br />, "Package"]}
                                    Price={[<del> $89.00</del>, " $49.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>3 Logo Design Concepts</li>,
                                        <li>Upto 5 Revisions</li>,
                                        <li>24 – 48 Hours Turnaround Time</li>,
                                        <li>1 Dedicated Designer</li>,
                                        <li>Final Files <span>(.AI, .PSD, .EPS, .JPEG, .PNG, .PDF) </span></li>,
                                        <li>FREE Colour Options</li>,
                                        <li>24/7 Customer Support</li>,
                                        <li>Money Back Guarantee</li>,
                                        <li>100% Satisfaction Guarantee</li>,
                                        <li>100% Ownership Rights</li>,
                                        <li>100% Unique Design</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                                <PackageBox
                                    Title={["Professional Logo", <br />, "Package"]}
                                    Price={[<del> $119.00</del>, " $79.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>6 Logo Design Concepts</li>,
                                        <li>Upto 8 Revisions</li>,
                                        <li>24 – 48 Hours Turnaround Time</li>,
                                        <li>2 Dedicated Designer</li>,
                                        <li>Final Files <span>(.AI, .PSD, .EPS, .JPEG, .PNG, .PDF) </span></li>,
                                        <li>FREE Colour Options</li>,
                                        <li>24/7 Customer Support</li>,
                                        <li>Money Back Guarantee</li>,
                                        <li>100% Satisfaction Guarantee</li>,
                                        <li>100% Ownership Rights</li>,
                                        <li>100% Unique Design</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                                <PackageBox
                                    Title={["Premium Logo", <br />, "Package"]}
                                    Price={[<del> $249.00</del>, " $169.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>8 Logo Design Concepts</li>,
                                        <li>Unlimited Revisions</li>,
                                        <li>24 – 48 Hours Turnaround Time</li>,
                                        <li>3  Dedicated Designer</li>,
                                        <li>Stationery Design <span>(Business Card, Letterhead, Envelope)</span></li>,
                                        <li>Final Files <span>(.AI, .PSD, .EPS, .JPEG, .PNG, .PDF) </span></li>,
                                        <li>FREE Colour Options</li>,
                                        <li>24/7 Customer Support</li>,
                                        <li>Money Back Guarantee</li>,
                                        <li>100% Satisfaction Guarantee</li>,
                                        <li>100% Ownership Rights</li>,
                                        <li>100% Unique Design</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                            </ul>
                        </div>
                        : props.LogoDesignPkgTab ?
                            <TabPanel>
                                <div className={[styles.TabContent] + " " + "hding-4 para"}>
                                    <ul className={styles.PackageList}>

                                        <PackageBox
                                            Title={["Basic Logo", <br />, "Package"]}
                                            Price={[<del> $89.00</del>, " $49.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>3 Logo Design Concepts</li>,
                                                <li>Upto 5 Revisions</li>,
                                                <li>24 – 48 Hours Turnaround Time</li>,
                                                <li>1 Dedicated Designer</li>,
                                                <li>Final Files <span>(.AI, .PSD, .EPS, .JPEG, .PNG, .PDF) </span></li>,
                                                <li>FREE Colour Options</li>,
                                                <li>24/7 Customer Support</li>,
                                                <li>Money Back Guarantee</li>,
                                                <li>100% Satisfaction Guarantee</li>,
                                                <li>100% Ownership Rights</li>,
                                                <li>100% Unique Design</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                        <PackageBox
                                            Title={["Professional Logo", <br />, "Package"]}
                                            Price={[<del> $119.00</del>, " $79.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>6 Logo Design Concepts</li>,
                                                <li>Upto 8 Revisions</li>,
                                                <li>24 – 48 Hours Turnaround Time</li>,
                                                <li>2 Dedicated Designer</li>,
                                                <li>Final Files <span>(.AI, .PSD, .EPS, .JPEG, .PNG, .PDF) </span></li>,
                                                <li>FREE Colour Options</li>,
                                                <li>24/7 Customer Support</li>,
                                                <li>Money Back Guarantee</li>,
                                                <li>100% Satisfaction Guarantee</li>,
                                                <li>100% Ownership Rights</li>,
                                                <li>100% Unique Design</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                        <PackageBox
                                            Title={["Premium Logo", <br />, "Package"]}
                                            Price={[<del> $249.00</del>, " $169.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>8 Logo Design Concepts</li>,
                                                <li>Unlimited Revisions</li>,
                                                <li>24 – 48 Hours Turnaround Time</li>,
                                                <li>3  Dedicated Designer</li>,
                                                <li>Stationery Design <span>(Business Card, Letterhead, Envelope)</span></li>,
                                                <li>Final Files <span>(.AI, .PSD, .EPS, .JPEG, .PNG, .PDF) </span></li>,
                                                <li>FREE Colour Options</li>,
                                                <li>24/7 Customer Support</li>,
                                                <li>Money Back Guarantee</li>,
                                                <li>100% Satisfaction Guarantee</li>,
                                                <li>100% Ownership Rights</li>,
                                                <li>100% Unique Design</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                    </ul>
                                </div>
                            </TabPanel>
                            : ""
                    }

                    {props.WebDesignPkg ?
                        <div className={[styles.TabContent] + " " + "hding-4 para"}>
                            <ul className={styles.PackageList}>

                                <PackageBox
                                    Title={["Basic WebDesign", <br />, "Package"]}
                                    Price={[<del> $1495.00</del>, " $299.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>3 Page Custom WP Website </li>,
                                        <li>1 Design Concept </li>,
                                        <li>3 Stock Images </li>,
                                        <li>Content Integration </li>,
                                        <li>Cross Browser Compatible </li>,
                                        <li>Secure admin tools for easy updates</li>,
                                        <li>Website optimization package for increased speed</li>,
                                        <li>Contact Form Integration </li>,
                                        <li>No contract: cancel anytime</li>,
                                        <li>Dedicated Account Manager</li>,
                                        <li>24/7 Chat Support</li>,
                                        <li>Turn Around 5 Business Days</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                                <PackageBox
                                    Title={["Professional  WebDesign", <br />, "Package"]}
                                    Price={[<del> $2245.00</del>, " $449.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>5 Page Custom WP Website </li>,
                                        <li>1 Design Concept </li>,
                                        <li>5 Stock Images </li>,
                                        <li>Content Integration </li>,
                                        <li>Cross Browser Compatible </li>,
                                        <li>Secure admin tools for easy updates</li>,
                                        <li>Website optimization package for increased speed</li>,
                                        <li>Contact Form Integration </li>,
                                        <li>No contract: cancel anytime</li>,
                                        <li>Dedicated Account Manager</li>,
                                        <li>24/7 Chat Support</li>,
                                        <li>Turn Around 5 Business Days</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                                <PackageBox
                                    Title={["Premium  WebDesign", <br />, "Package"]}
                                    Price={[<del> $2995.00</del>, " $599.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>6 Pages Custom WP Website </li>,
                                        <li>1 Design Concept </li>,
                                        <li>7 Stock Images </li>,
                                        <li>Mobile Responsive Website</li>,
                                        <li>Content Integration </li>,
                                        <li>Cross Browser Compatible </li>,
                                        <li>Secure admin tools for easy updates</li>,
                                        <li>Website optimization package for increased speed</li>,
                                        <li>Contact Form Integration </li>,
                                        <li>No contract: cancel anytime</li>,
                                        <li>Dedicated Account Manager</li>,
                                        <li>24/7 Chat Support</li>,
                                        <li>Turn Around 5 Business Days</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                            </ul>
                        </div>
                        : props.WebDesignPkgTab ?
                            <TabPanel>
                                <div className={[styles.TabContent] + " " + "hding-4 para"}>
                                    <ul className={styles.PackageList}>

                                        <PackageBox
                                            Title={["Basic WebDesign", <br />, "Package"]}
                                            Price={[<del> $1495.00</del>, " $299.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>3 Page Custom CMS Website </li>,
                                                <li>1 Design Concept </li>,
                                                <li>3 Stock Images </li>,
                                                <li>Content Integration </li>,
                                                <li>Cross Browser Compatible </li>,
                                                <li>Secure admin tools for easy updates</li>,
                                                <li>Website optimization package for increased speed</li>,
                                                <li>Contact Form Integration </li>,
                                                <li>No contract: cancel anytime</li>,
                                                <li>Dedicated Account Manager</li>,
                                                <li>24/7 Chat Support</li>,
                                                <li>Turn Around 5 Business Days</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                        <PackageBox
                                            Title={["Professional  WebDesign", <br />, "Package"]}
                                            Price={[<del> $2245.00</del>, " $449.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>5 Page Custom CMS Website </li>,
                                                <li>1 Design Concept </li>,
                                                <li>5 Stock Images </li>,
                                                <li>Content Integration </li>,
                                                <li>Cross Browser Compatible </li>,
                                                <li>Secure admin tools for easy updates</li>,
                                                <li>Website optimization package for increased speed</li>,
                                                <li>Contact Form Integration </li>,
                                                <li>No contract: cancel anytime</li>,
                                                <li>Dedicated Account Manager</li>,
                                                <li>24/7 Chat Support</li>,
                                                <li>Turn Around 5 Business Days</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                        <PackageBox
                                            Title={["Premium  WebDesign", <br />, "Package"]}
                                            Price={[<del> $2995.00</del>, " $599.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>6 Pages Custom CMS Website </li>,
                                                <li>1 Design Concept </li>,
                                                <li>7 Stock Images </li>,
                                                <li>Mobile Responsive Website</li>,
                                                <li>Content Integration </li>,
                                                <li>Cross Browser Compatible </li>,
                                                <li>Secure admin tools for easy updates</li>,
                                                <li>Website optimization package for increased speed</li>,
                                                <li>Contact Form Integration </li>,
                                                <li>No contract: cancel anytime</li>,
                                                <li>Dedicated Account Manager</li>,
                                                <li>24/7 Chat Support</li>,
                                                <li>Turn Around 5 Business Days</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                    </ul>
                                </div>
                            </TabPanel>
                            : ""
                    }

                    {props.StationaryDesign ?

                        <div className={[styles.TabContent] + " " + "hding-4 para"}>
                            <ul className={styles.PackageList}>

                                <PackageBox
                                    Title={["Basic Stationery", <br />, "Package"]}
                                    Price={[<del> $89.00</del>, " $49.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>Business Card</li>,
                                        <li>Letterhead Design</li>,
                                        <li>Envelope Design</li>,
                                        <li>Multiple File Format <span>(Ai, PDF, JPEG, etc)</span></li>,
                                        <li>100% Satisfaction Guarantee</li>,
                                        <li>100% Ownership Rights</li>,
                                        <li>100% Unique Design</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                                <PackageBox
                                    Title={["Professional Stationery", <br />, "Package"]}
                                    Price={[<del> $119.00</del>, " $79.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>2 Business Cards</li>,
                                        <li>Letterhead Design</li>,
                                        <li>Envelope Design</li>,
                                        <li>Fax Template</li>,
                                        <li>MS Word Letterhead</li>,
                                        <li>Multiple File Format <span>(Ai, PDF, JPEG, etc)</span></li>,
                                        <li>24/7 Customer Support</li>,
                                        <li>Money Back Guarantee</li>,
                                        <li>100% Satisfaction Guarantee</li>,
                                        <li>100% Ownership Rights</li>,
                                        <li>100% Unique Design</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                                <PackageBox
                                    Title={["Premium Stationary", <br />, "Package"]}
                                    Price={[<del> $199.00</del>, " $149.00 ", <span>ONLY</span>]}
                                    Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                    PkgList={[
                                        <li>2 Business Card Layout</li>,
                                        <li>2 Letterhead Design Layout</li>,
                                        <li>2 Envelope Design Layout</li>,
                                        <li>Fax Template</li>,
                                        <li>MS Word Letterhead</li>,
                                        <li>Tshirt Design</li>,
                                        <li>Multiple File Format <span>(Ai, PDF, JPEG, etc)</span></li>,
                                        <li>24/7 Customer Support</li>,
                                        <li>Money Back Guarantee</li>,
                                        <li>100% Satisfaction Guarantee</li>,
                                        <li>100% Ownership Rights</li>,
                                        <li>100% Unique Design</li>,
                                    ]}
                                    AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                />
                            </ul>
                        </div>
                        : props.StationaryDesignTab ?

                            <TabPanel>
                                <div className={[styles.TabContent] + " " + "hding-4 para"}>
                                    <ul className={styles.PackageList}>

                                        <PackageBox
                                            Title={["Basic Stationery", <br />, "Package"]}
                                            Price={[<del> $89.00</del>, " $49.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>Business Card</li>,
                                                <li>Letterhead Design</li>,
                                                <li>Envelope Design</li>,
                                                <li>Multiple File Format <span>(Ai, PDF, JPEG, etc)</span></li>,
                                                <li>100% Satisfaction Guarantee</li>,
                                                <li>100% Ownership Rights</li>,
                                                <li>100% Unique Design</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                        <PackageBox
                                            Title={["Professional Stationery", <br />, "Package"]}
                                            Price={[<del> $119.00</del>, " $79.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>2 Business Cards</li>,
                                                <li>Letterhead Design</li>,
                                                <li>Envelope Design</li>,
                                                <li>Fax Template</li>,
                                                <li>MS Word Letterhead</li>,
                                                <li>Multiple File Format <span>(Ai, PDF, JPEG, etc)</span></li>,
                                                <li>24/7 Customer Support</li>,
                                                <li>Money Back Guarantee</li>,
                                                <li>100% Satisfaction Guarantee</li>,
                                                <li>100% Ownership Rights</li>,
                                                <li>100% Unique Design</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                        <PackageBox
                                            Title={["Premium Stationary", <br />, "Package"]}
                                            Price={[<del> $199.00</del>, " $149.00 ", <span>ONLY</span>]}
                                            Para={["Suitable for potential super-startups and brand revamps for companies."]}
                                            PkgList={[
                                                <li>2 Business Card Layout</li>,
                                                <li>2 Letterhead Design Layout</li>,
                                                <li>2 Envelope Design Layout</li>,
                                                <li>Fax Template</li>,
                                                <li>MS Word Letterhead</li>,
                                                <li>Tshirt Design</li>,
                                                <li>Multiple File Format <span>(Ai, PDF, JPEG, etc)</span></li>,
                                                <li>24/7 Customer Support</li>,
                                                <li>Money Back Guarantee</li>,
                                                <li>100% Satisfaction Guarantee</li>,
                                                <li>100% Ownership Rights</li>,
                                                <li>100% Unique Design</li>,
                                            ]}
                                            AddOn={["Add on:", <strong> $50 </strong>, "for 24 Hours Rush Delivery"]}
                                        />
                                    </ul>
                                </div>
                            </TabPanel>
                            : ""
                    }

                </Tabs>

            </div>
        </section>
    )
}
export default PackageSec;