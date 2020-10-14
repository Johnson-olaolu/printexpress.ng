import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div class="card">
        <img src='../../../public/image/Homepage/img_avatar.png' alt="Avatar"/>
        <div class="container2">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  }
}
export default Cards;
