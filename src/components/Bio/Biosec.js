import React from "react"
import Heading from "../reusable/Heading"
// import { Link } from "gatsby"
import "../layout.css"

export default function Biosec({ heading, img }) {
  return (
    <div className="container-fluid my-5 py-4 theme">
      <div className="row" style={{ marginLeft: "15px", marginRight: "15px" }}>
        <div className="col-sm-5 mx-auto ">
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
        </div>
        <div className="col-sm-6 mx-auto">
          <iframe
            title="one"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/aDdRPoNdk-Y"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
