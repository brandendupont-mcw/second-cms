import React from 'react';
import circle from 'uswds/img/circle-124.png';
import { Link } from 'gatsby';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
    <h1 ><span className="usa-hero__heading--alt">System Level Metrics and Indicators</span></h1>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
             <Link to="/referral" > <a className='usa-link' style={{color:'white'}}> Referrals</a> </Link> 
            </h3>
            <p>
            A referral to this office occurs when law enforcement presents an individual suspected of a crime to review for potential charges. This can occur via arrest, cite-and-release, and/or order in. 
            </p>
            
          </div>
          
        </div>
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              <Link to="/filing_charging" > <a className='usa-link' style={{color:'white'}}>Filing and Charging</a> </Link> 
            </h3>
            <p>
            After reviewing a case presented for review, prosecutors decide whether to issue charges. A charge is a formal accusation filed by this office that a specific person has committed a specific crime, also referred to as filing a criminal complaint or information. 
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              <Link to="/case_resolution" > <a className='usa-link' style={{color:'white'}}>Case Resolution</a> </Link> 
            </h3>
            <p>
            Let's add a quick definition  here.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/deferral_and_diversion" > <a className='usa-link' style={{color:'white'}}>Deferral & Diversion Outcomes</a> </Link> 
            </h3>
            <p>
            Let's add a quick definition  here.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/sentencing" > <a className='usa-link' style={{color:'white'}}>Sentencing</a> </Link> 
            </h3>
            <p>
            Let's add a quick definition  here.
            </p>
            
          </div>
          
        </div>
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/defendant_characteristics" > <a className='usa-link' style={{color:'white'}}>Defendant Characteristics</a> </Link> 
            </h3>
            <p>
            Let's add a quick definition  here.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/serving_victims" > <a className='usa-link' style={{color:'white'}}>Serving Victims</a> </Link> 
            </h3>
            <p>
            Let's add a quick definition  here.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
            <Link to="/staffing_caseload" > <a className='usa-link' style={{color:'white'}}>Staffing & Caseload</a> </Link> 
            </h3>
            <p>
            Let's add a quick definition  here. 
            </p>
          </div>
        </div>
      </div>

    </div>
    
  </section>
);

export default Highlights;
