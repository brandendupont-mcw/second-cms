import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h3 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">We're Opening</span>1st Judicial District Attorney Data to the Public
        </h3>
        <p>
        Learn about what data we're releasing and important context about our justice system.
        </p>
        <a className="usa-button" href="/about">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
