import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="text-base tracking-wider">

            <div className="bg-[#051c2c] text-white pt-5 pb-[70px] white-link">
                <div className="container mx-auto">
                    <div className="w-full lg:grid lg:grid-cols-3">
                        <div className="col-span-1 py-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                            <img src="http://ystore.us/HTML/RedefineCommerce/Ecom-front/gamedaygear/images/footer-bb.png" className="inline-block" alt="" />{" "}
                            <img src="http://ystore.us/HTML/RedefineCommerce/Ecom-front/gamedaygear/images/footer-norton.png" className="inline-block" alt="" />
                        </div>
                        <div className="col-span-1 text-center py-2.5">
                            <img src="images/for-planet.png" className="inline-block" alt="" />
                        </div>
                        <div className="col-span-1 text-center py-2.5">
                            <div className="flex flex-wrap justify-center lg:justify-end">
                                We Accept :{" "}
                                <img
                                    alt="We Accept"
                                    src="http://ystore.us/HTML/RedefineCommerce/Ecom-front/gamedaygear/images/footer-card.png"
                                    role="presentation"
                                    className="ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="text-center text-[16px]">
                            © 2023 FWR | 2290 Pawtucket Avenue East Providence, RI 02914
                        </div>
                        <div className="flex flex-wrap justify-center gap-5 py-2">
                            <span title="Privacy & Security">
                                Privacy &amp; Security
                            </span>{" "}
                            <span title="Terms and Conditions">
                                Terms &amp; Conditions
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;