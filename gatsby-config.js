module.exports = {
  siteMetadata: {
    // Replace the Site URL with your domain, ex. https://example.gov 
    siteUrl: 'https://data.dacolorado.org/2nd/',
    author: 'Denver Judicial District Attorney',
    title: `Denver District Attorney’s Office Data Dashboard`,
    description: `Learn about what data we're releasing and important context about our criminal justice system.`,
    navigation: [
      {
        items: [{ text: 'Home', link: '/' }],
      },
      {
        items: [{ text: 'Overview', link: '/overview' }],
      },
      {
        items: [{ text: 'Criminal Justice Process', link: '/criminal-justice-process' }],
      },
      {
        title: 'Metrics',
        items: [
          { text: 'Felony Referrals', link: '/referral' },
          { text: 'Charging and Filing', link: '/filing_charging' },
          { text: 'Case Resolution', link: '/case_resolution' },
          { text: 'Diversion and Deferrals', link: '/deferral_and_diversion' },
          { text: 'Sentencing', link: '/sentencing' },
          { text: 'Defendant Characteristics', link: '/defendant_characteristics' },
          { text: 'Serving Victims', link: '/serving_victims' },
          { text: 'Staffing and Caseload', link: '/staffing_caseload' },
        ],
      },
      {
        items: [{ text: 'Data Stories', link: '/blog' }],
      },
      {
        items: [{ text: 'Disparity Analysis', link: 'https://data.dacolorado.org/2nd-disparity-analysis' }],
      },
      {
        items: [
          { text: 'Technical Notes', link: '/technical-notes' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Denver DA Homepage', link: 'https://www.denverda.org/' },
      { text: 'Contact Us', link: 'https://www.denverda.org/contact-us/' },
    ],

    /**
     * Search.gov configuration
     * 
     * 1. Create an account with Search.gov https://search.usa.gov/signup
     * 2. Add a new site.
     * 3. Add your site/affiliate name here.
     */
    searchgov: {
      
      // Only change this if you're using a CNAME. Learn more here: https://search.gov/manual/cname.html
      endpoint: 'https://search.usa.gov',
      
      // Replace this with your search.gov site handle.
      affiliate: 'federalist-uswds-example',
      
      // Replace this with your access key.
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=',
      
      // This renders the results within the page instead of sending to user to search.gov.
      inline: true, 

      // This allows Search.gov to present relevant type-ahead search suggestions in your website's search box. 
      // If you do not want to present search suggestions, set this value to false.
      suggestions: true,
    },

    /**
     * Digital Analytics Program (DAP) configuration
     * 
     * USAID   - Agency for International Development
     * USDA    - Department of Agriculture
     * DOC     - Department of Commerce
     * DOD     - Department of Defense
     * ED      - Department of Education
     * DOE     - Department of Energy
     * HHS     - Department of Health and Human Services
     * DHS     - Department of Homeland Security
     * HUD     - Department of Housing and Urban Development
     * DOJ     - Department of Justice
     * DOL     - Department of Labor
     * DOS     - Department of State
     * DOI     - Department of the Interior
     * TREAS   - Department of the Treasury
     * DOT     - Department of Transportation
     * VA      - Department of Veterans Affairs
     * EPA     - Environmental Protection Agency
     * EOP     - Executive Office of the President
     * GSA     - General Services Administration
     * NASA    - National Aeronautics and Space Administration
     * NARA    - National Archives and Records Administration
     * NSF     - National Science Foundation
     * NRC     - Nuclear Regulatory Commission
     * OPM     - Office of Personnel Management
     * USPS    - Postal Service
     * SBA     - Small Business Administration
     * SSA     - Social Security Administration
     */
    dap: {
      // agency: 'your-agency',

      // Optional
      // subagency: 'your-subagency',
    },

    /**
     * Google Analytics configuration
     */
    ga: {
      // ua: 'your-ua',
    },
  },
  pathPrefix: process.env.BASEURL || '/2nd/',
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documentation-pages`,
        path: `${__dirname}/src/documentation-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/federalist-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
