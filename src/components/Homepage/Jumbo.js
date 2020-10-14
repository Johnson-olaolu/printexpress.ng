import React from "react";

class Jumbo extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbo">
          <img
            src="../../../public/image/Mask Group 1.png"
            class="nothing w-100"
          />
          <div class="img-overlay">
            <span class="img-overlay-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
            </span>
            <button class="jumbo-button">Contact Us</button>
          </div>
        </div>
        
        <div class="header-text">
          <span>Lorem ipsum</span>
          <p>
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd.
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbo;
