import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/blog/' + node.fields.name,
  }));
  return (
    <Layout>
      <SEO title="Blog" />
      <div
        id="blog"
        className="bg-primary-darker usa-content font-serif-lg padding-y-6"
      >
        <div className="grid-container">
          <h1 className="text-normal text-white margin-0">Data Stories</h1>
          <span className="text-base-lighter display-block padding-top-1 text-light">
            Deep dives into the Denver District Attorney's office.
          </span>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-row">
          <div className="desktop:grid-col-8 usa-prose padding-right-4">
            <main id="main-content">
              {/* This loops through the paginated posts */}
              {posts.map(post => (
                <div
                  key={post.title}
                  className="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest"
                >
                  <h3 className="title">
                    <Link className="usa-link text-no-underline" to={post.path}>
                      {post.title}
                    </Link>
                  </h3>
                  <div className="text-base margin-bottom-2">
                    <div className="margin-top-neg-105">
                      By <span className="text-bold">{post.author}</span> ·{' '}
                      {post.date}
                    </div>
                  </div>
                  {/*
                    We default to using post.html, but you can also use post.excerpt.
                    If you use excerpt then you have to make sure the content is on each
                    post header
                  */}
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              ))}

              {/* Pagination links */}
              <div className="grid-row padding-top-2">
                <div className="tablet:grid-col-4 text-center tablet:order-2 font-body-xs text-base">
                  Page {pageContext.humanPageNumber} of{' '}
                  {pageContext.numberOfPages}
                </div>
                <div className="tablet:grid-col-4 text-right tablet:order-3">
                  {pageContext.nextPagePath && (
                    <>
                      <Link
                        to={pageContext.nextPagePath}
                        className="paginate-link usa-link text-no-underline text-bold tablet:margin-top-0"
                      >
                        Next {pageContext.limit} Posts &rsaquo;
                      </Link>
                      <Link
                        to={pageContext.nextPagePath}
                        className="paginate-button usa-button margin-top-3"
                      >
                        Next {pageContext.limit} Posts &rsaquo;
                      </Link>
                    </>
                  )}
                </div>
                <div className="tablet:grid-col-4 text-left tablet:order-1">
                  {pageContext.previousPagePath && (
                    <>
                      <Link
                        to={pageContext.previousPagePath}
                        className="paginate-link usa-link text-no-underline text-bold tablet:margin-top-0"
                      >
                        &lsaquo; Previous {pageContext.limit} Posts
                      </Link>
                      <Link
                        to={pageContext.previousPagePath}
                        className="paginate-button usa-button margin-top-2"
                      >
                        &lsaquo; Previous {pageContext.limit} Posts
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </main>
          </div>
          <aside className="desktop:grid-col-fill margin-top-4 padding-right-4">
            <div className="border-top-1 border-accent-cool-darker padding-top-2 margin-bottom-4 usa-prose">
              <h4 className="">Most Recent Posts</h4>
              <ul className="usa-list usa-list--unstyled padding-top-2">
                {posts.map(post => (
                  <li key={post.title} className="padding-bottom-1">
                    <Link className="usa-link" to={post.path}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-top-1 border-accent-cool-darker padding-top-2 margin-bottom-4 usa-prose">
              <h4>Another list of links</h4>
              <ul className=" usa-list usa-list--unstyled padding-top-2">
                <li className="padding-bottom-1">
                  <Link className="usa-link" to="/blog">
                    Most popular
                  </Link>
                </li>
                <li className="padding-bottom-1">
                  <Link className="usa-link" to="/blog">
                    Another popular post
                  </Link>
                </li>
                <li className="padding-bottom-1">
                  <Link className="usa-link" to="/blog">
                    This is popular
                  </Link>
                </li>
                <li className="padding-bottom-1">
                  <Link className="usa-link" to="/blog">
                    A very long blog header that is popular
                  </Link>
                </li>
                <li className="padding-bottom-1">
                  <Link className="usa-link" to="/blog">
                    A popular post on a blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-top-1 border-accent-cool-darker padding-top-2 margin-bottom-4 usa-prose">
              <h4>Social links</h4>
              <ul className="usa-list usa-list--unstyled padding-top-2">
                <li className="padding-bottom-1">
                  <svg
                    style={{ verticalAlign: 'middle' }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="svg-inline--fa fa-twitter fa-w-16 text-primary width-2 margin-right-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="black"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                  <a className="usa-link" href="https://twitter.com/DenverDAsOffice">
                  @DenverDAsOffice on Twitter
                  </a>
                </li>
                <li className="padding-bottom-1">
                  <svg
                    style={{ verticalAlign: 'middle' }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    className="svg-inline--fa fa-twitter fa-w-16 text-primary width-2 margin-right-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" viewBox="0 0 16 16"
                  >
<path 
                 fill="currentColor"
d="M16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12 2.9 15.3 6.7 15.9V10.3H4.7V8H6.7V6.2C6.7 4.2 7.9 3.1 9.7 3.1C10.6 3.1 11.5 3.3 11.5 3.3V5.3H10.5C9.5 5.3 9.2 5.9 9.2 6.5V8H11.4L11 10.3H9.1V16C13.1 15.4 16 12 16 8Z" fill="black"/>

                  </svg>
                  <a className="usa-link" href="https://www.facebook.com/DenverDAsOffice/">
                  Facebook
                  </a>
                </li>
                <li className="padding-bottom-1">
                  <svg
                    style={{ verticalAlign: 'middle' }}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    className="svg-inline--fa fa-twitter fa-w-16 text-primary width-2 margin-right-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 20 20"
                  >
<path d="M16 0H0V16H16V0Z" fill="black"/>
<path d="M5.8 12H4.1V6.65H5.8V12ZM4.95 5.9C4.4 5.9 4 5.5 4 4.95C4 4.4 4.45 4 4.95 4C5.5 4 5.9 4.4 5.9 4.95C5.9 5.5 5.5 5.9 4.95 5.9ZM12 12H10.3V9.1C10.3 8.25 9.95 8 9.45 8C8.95 8 8.45 8.4 8.45 9.15V12H6.75V6.65H8.35V7.4C8.5 7.05 9.1 6.5 9.95 6.5C10.9 6.5 11.9 7.05 11.9 8.7V12H12Z" fill="white"/>

                  </svg>
                  <a className="usa-link" href="https://www.linkedin.com/company/denver-district-attorney's-office/">
                  Linkedin
                  </a>
                </li>
                <li className="padding-bottom-1">
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="grid-row padding-top-4 tablet:padding-x-4 margin-bottom-4">

        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog-posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          html
          frontmatter {
            author
            date
            title
          }
          fields {
            name
          }
        }
      }
    }
  }
`;

export default Blog;
