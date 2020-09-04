// import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"
import "bootstrap/dist/css/bootstrap.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "../components/layout.css"
import Carouse from "../components/reusable/Carousel"
import DataBlock from "../components/reusable/DataBlock"
import Info from "../components/reusable/Info"
import Infosec from "../components/reusable/Infosec"
// import img1 from "../images/cardimg1.png"
import img2 from "../images/cardimg2.jpg"
import img3 from "../images/cardimg3.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carouse />
    <Info heading="Blogs" img={img3} />
    <Infosec heading="Online training " img={img2} />
    <Info heading="Youtube" img={img3} />
    <DataBlock heading="About Us" />
  </Layout>
)

export default IndexPage
