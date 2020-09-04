import React from "react"
import Heading from "./Heading"
import "../layout.css"

export default function DataBlock({ heading }) {
  return (
    <div className=" my-5 py-4 ">
      <div className="row" style={{ marginLeft: "15px", marginRight: "15px" }}>
        <div className="col-10 sm-5 mx-auto text-center">
          <Heading title={heading} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            labore nostrum eveniet unde iure, adipisci ea, perspiciatis culpa at
            cupiditate, qui praesentium sit mollitia natus laudantium eligendi?
            Iste fugit incidunt a quae veritatis doloremque eveniet esse tempora
            architecto quis inventore, fugiat vitae ea voluptatum neque
            reprehenderit, repellendus totam magni beatae?{" "}
          </p>
        </div>
      </div>
    </div>
  )
}
