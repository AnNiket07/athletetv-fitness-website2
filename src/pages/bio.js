import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import DataBlock from "../components/reusable/DataBlock"
import Hero from "../components/reusable/Hero"
import Biosec from "../components/Bio/Biosec"
import image from "../images/image3.jpeg"

const Bio = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="i write code"
      subtitle="ATHLETE TV"
      heroclass="hero-background"
    />
    <Biosec heading="Bio" img={image} />
    <DataBlock heading="About Us" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Bio
