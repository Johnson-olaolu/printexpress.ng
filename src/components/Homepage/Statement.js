import React from "react";

class Statement extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col statement">
            <h6>Mission Statement</h6>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
          </div>
          <div class="col statement">
            <h6>Vision Statement</h6>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
          </div>
        </div>
        <div class="row ">
            <div class = "about_us">
          <span>ABOUT US</span>
          <br></br>
          <div class="a-card">
            <img src="../../../public/image/HomePage/DSC_06030+++.jpg" alt="Denim Jeans" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statement;
