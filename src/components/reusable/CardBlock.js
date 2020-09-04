import React from "react"
import { Link } from "gatsby"
import img1 from "../../images/cardimg1.png"
import img2 from "../../images/cardimg2.jpg"
import img3 from "../../images/cardimg3.jpeg"
import "../layout.css"

const Cards = [
  {
    cardtitle: "Online training",
    image: img1,
    path: "/onilne-training",
  },
  {
    cardtitle: "Blogs",
    image: img2,
    path: "/Blogs",
  },
  {
    cardtitle: "Youtube",
    image: img3,
    path: "/youtube",
  },
]

export default function CardBlock() {
  return (
    <div className="my-5 py-4 theme">
      <div className="container">
        <div className="row">
          {Cards.map(Card => {
            return (
              <div className="col-sm-4 mx-auto py-3">
                <div className="card bg-secondary">
                  <img
                    src={Card.image}
                    style={{ maxHeight: "10rem" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">{Card.cardtitle}</h5>
                    <p className="card-text text-white">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link to={Card.path} className="btn btn-warning btn-block">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
