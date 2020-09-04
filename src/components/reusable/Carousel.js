import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import img1 from "../../images/image1.jpg"
import img2 from "../../images/image2.jpeg"
import img3 from "../../images/image3.jpeg"
import "../layout.css"

class Carouse extends Component {
  render() {
    return (
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="alpha">
          <img src={img1} alt="slider" />
          {/* <h1 className="text=center">Hi i am a coder</h1> */}
          <p className="legend">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            quasi, explicabo neque inventore odit accusamus illo iste aut
            delectus fuga molestias, officiis quis consectetur, nulla ullam
            velit? Hic, dolores beatae.
          </p>
        </div>
        <div className="alpha">
          <img src={img2} alt="slider" />
          <p className="legend">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            quasi, explicabo neque inventore odit accusamus illo iste aut
            delectus fuga molestias, officiis quis consectetur, nulla ullam
            velit? Hic, dolores beatae.
          </p>
        </div>
        <div className="alpha">
          <img src={img3} alt="slider" />
          <p className="legend">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            quasi, explicabo neque inventore odit accusamus illo iste aut
            delectus fuga molestias, officiis quis consectetur, nulla ullam
            velit? Hic, dolores beatae.
          </p>
        </div>
      </Carousel>
    )
  }
}

export default Carouse
// import Flickity from "react-flickity-component"

// const flickityOptions = {
//   initialIndex: 2,
// }

// export default function Carousel() {
//   return (
//     <Flickity options={flickityOptions}>
//       <img src="" alt="img1" />
//       <img src="" alt="img2" />
//       <img src="" alt="img3" />
//     </Flickity>
//   )
// }
