import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

const FaqList = () => {
  return (
    <MDBContainer className="mt-5 faq_section" style={{maxWidth: '1100px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit ?">
        This is the first item's accordion body It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the accordion-body though the transition does
          limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
       This is the second item's accordion body. It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the accordion-body though the transition
          does limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit ?">
         This is the third item's accordion body It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the accordion-body though the transition does
          limit overflow.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  )
}

export default FaqList