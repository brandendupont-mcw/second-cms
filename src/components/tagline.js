import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        Data is key to a well functioning justice system in Colorado.
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
        Denver District Attorney Beth McCann is committed to providing the public with greater insight and transparency into what happens in our office 
        </p>
        <p>
        Giving the community access to information about case referrals, outcomes, and performance indicators will bring greater accountability to the DA's Office and improve the fairness and effectiveness of the criminal justice system.
        </p>
      </div>
    </div>
  </section>
);

export default Tagline;
