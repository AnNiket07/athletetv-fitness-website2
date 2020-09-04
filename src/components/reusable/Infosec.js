import React from "react"
import Heading from "../reusable/Heading"
import { Link } from "gatsby"
import "../layout.css"
// import img from "../../images/image3.jpeg"

export default function Infosec({ heading, img }) {
  return (
    <div className="container mx-auto  my-5 py-4 theme grow-div">
      <div className="row" style={{ marginLeft: "15px", marginRight: "15px" }}>
        <img
          className="col-sm-4 mx-auto my-3"
          src={img}
          // style={{ width: "70%", maxHeight: "20rem" }}
          alt=""
        ></img>
        <div className="col-sm-6 mx-auto text-center ">
          <Heading title={heading} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            labore nostrum eveniet unde iure, adipisci ea, perspiciatis culpa at
            cupiditate, qui praesentium sit mollitia natus laudantium eligendi?
            Iste fugit incidunt a quae veritatis doloremque eveniet esse tempora
            architecto quis inventore, fugiat vitae ea voluptatum neque
            reprehenderit, repellendus totam magni beatae. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quas aspernatur quo distinctio
            dolores veritatis optio, cumque reprehenderit ad inventore amet
            voluptates delectus nostrum quaerat nulla aliquid eos in soluta
            eligendi quasi qui obcaecati quisquam non repellat? Provident soluta
            distinctio iste!
          </p>
          <Link
            to="/Blogs"
            className="btn btn-lg text-white"
            style={{ backgroundColor: "#ab02c2" }}
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  )
}
