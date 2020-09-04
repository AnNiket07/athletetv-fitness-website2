/** @jsx jsx */
import { jsx } from "theme-ui"
// import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/layout.css"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"

const Blogs = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="mt-5">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          className="border shadow p-4 mb-5  rounded col-8 mx-auto "
          key={node.id}
        >
          <h3 sx={{ color: "text", fontFamily: "heading" }}>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p sx={{ color: "text", fontFamily: "body" }}>{node.excerpt}</p>
          <Link to={node.fields.slug}>
            <h4>Learn more</h4>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default Blogs

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
