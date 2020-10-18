import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div class="card-box">
        <button class="card-button" id="card-button-left">
          &#10094;
        </button>
        <div class = "cards justify-content-between">
          
          <div class="card">
            <img
              src="../../../public/image/Homepage/img_avatar.png"
              alt="Avatar"
            />
            <div class="container2">
              <span>Trifold Brochure</span>
              <br></br>
              <span>From &#8358;13,999/100</span>
              <br></br>
              <button>ORDER NOW</button>
            </div>
          </div>
          <div class="card">
            <img
              src="../../../public/image/Homepage/img_avatar.png"
              alt="Avatar"
            />
            <div class="container2">
              <span>Trifold Brochure</span>
              <br></br>
              <span>From &#8358;13,999/100</span>
              <br></br>
              <button>ORDER NOW</button>
            </div>
          </div>
          <div class="card">
            <img
              src="../../../public/image/Homepage/img_avatar.png"
              alt="Avatar"
            />
            <div class="container2">
              <span>Trifold Brochure</span>
              <br></br>
              <span>From &#8358;13,999/100</span>
              <br></br>
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
        
        <button class="card-button" id="card-button-right">
          &#10095;
        </button>
      </div>
    );
  }
}
export default Cards;
