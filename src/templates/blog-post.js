// import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const BlogPost = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div
      className="container  border shadow-lg p-4 my-5"
      sx={{ color: "background" }}
    >
      <div
        className=" text-center"
        sx={{ color: "text", fontFamily: "heading" }}
      >
        <h1>{data.markdownRemark.frontmatter.title}</h1>
      </div>
      <div
        className="p-5 mx-auto"
        sx={{ color: "text", fontFamily: "body", lineHeight: "body" }}
      >
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </div>
  </Layout>
)

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
