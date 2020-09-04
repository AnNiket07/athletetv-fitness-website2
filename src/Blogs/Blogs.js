// import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import { graphql } from "gatsby"
// import "../components/layout.css"
// import SEO from "../components/seo"
// import "bootstrap/dist/css/bootstrap.css"

// const Blogs = ({ data }) => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Blogs</h1>
//     {/* <div>
//       {data.allMarkdownRemark.edges.map(({ node }) => (
//         <div className="col-8 mx-auto " key={node.id}>
//           <Link
//             to={node.fields.slug}
//             // css={css`
//             //   text-decoration: none;
//             //   color: inherit;
//             // `}
//           >
//             <h3
//             // css={css`
//             //   margin-bottom: ${rhythm(1 / 4)};
//             // `}
//             >
//               {node.frontmatter.title}{" "}
//               <span
//               // css={css`
//               //   color: #bbb;
//               // `}
//               >
//                 — {node.frontmatter.date}
//               </span>
//             </h3>
//           </Link>
//           <p>{node.excerpt}</p>
//         </div>
//       ))}
//     </div> */}
//   </Layout>
// )

// export default Blogs

// // export const query = graphql`
// //   {
// //     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
// //       edges {
// //         node {
// //           id
// //           frontmatter {
// //             title
// //             date(formatString: "DD MMMM, YYYY")
// //           }
// //           fields {
// //             slug
// //           }
// //           excerpt
// //         }
// //       }
// //     }
// //   }
// // `
