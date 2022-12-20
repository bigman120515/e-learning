import React, { useState } from 'react'
// import FaqsCard from './Crads/FaqsCard';
// import Faqs_List from './List/FaqsList';

function Faqs() {
    const [show,setShow]=useState(true);
  return (
    <>
        <section className="faq_section_class">
        <div className="comman_padding">
            <div className="comman_heading">
                <h2 className="text-center">FAQs </h2>
            </div>
            <div className="faqsection">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                How is Learnet different from other networking platforms?
                            </button>
                        </h2>
                        {show&&<div id="flush-collapseOne" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the class. This is the first item's accordion body.</div>
                        </div>}
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                Are there any membership / subscription charges for joining?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the class. This is the second item's accordion body. Let's imagine this
                                being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                What kind of business goals can Learnet help me with?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the class. This is the third item's accordion body. Nothing more exciting
                                happening here in terms of content, but just filling up the space to make it
                                look, at least at first glance, a bit more representative of how this would look in a
                                real-world application.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour" aria-expanded="false"
                                aria-controls="flush-collapseFour">
                                Which members will I get introduced to?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the class. This is the third item's accordion body. Nothing more exciting
                                happening here in terms of content, but just filling up the space to make it
                                look, at least at first glance, a bit more representative of how this would look in a
                                real-world application.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-headingFive" aria-expanded="false"
                                aria-controls="flush-collapseFive">
                                Can I get an introduction to a specific member?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the class. This is the third item's accordion body. Nothing more exciting
                                happening here in terms of content, but just filling up the space to make it
                                look, at least at first glance, a bit more representative of how this would look in a
                                real-world application.</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
    </>
  )
}

export default Faqs