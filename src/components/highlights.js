import React from 'react';
import circle from 'uswds/img/circle-124.png';

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
              Diversion
            </h3>
            <p>
              Graphic headings can be used a few different ways, depending on
              what your landing page is for. Highlight your values, specific
              program areas, or results.
            </p>
            
          </div>
          
        </div>
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Cases
            </h3>
            <p>
              Keep body text to about 30 words. They can be shorter, but try to
              be somewhat balanced across all four. It creates a clean
              appearance with good spacing.
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">

          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Indicators
            </h3>
            <p>
              For anything you want to highlight here, understand what your
              users know now, and what activity or impression you want from them
              after they see it.
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Sentencing
            </h3>
            <p>
              In addition to your goal, find out your users’ goals. What do they
              want to know or do that supports your mission? Use these headings
              to show those.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
