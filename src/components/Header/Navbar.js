import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src="../../../public/image/tobi_logo.svg" />
        </div>

        <div>
          <nav class="nav top-nav justify-content-between">
              <span class = "nav-link">Contact Us</span>
              <a class="nav-link" href="#">
                <img src="../../../public/image/topbar/Phone.svg" />
              </a>
              <a class="nav-link" href="#">
                <img src="../../../public/image/topbar/Path 3.svg" />
              </a>
              <a class="nav-link" href="#">
                <img src="../../../public/image/topbar/Component 10 – 3.svg" />
              </a>
              <a class="nav-link" href="#">
                <img src="../../../public/image/topbar/Component 11 – 3.svg" />
              </a>
              <a class="nav-link" href="#">
                <img src="../../../public/image/topbar/Component 12 – 3.svg" />
              </a>
          </nav>

          <div className="middle-nav">
            <span id="span1">Print Express</span>
            <br></br>
            <span id="span2">...fast and reliable</span>
          </div>

          <nav class="nav justify-content-between bottom-nav">
            <a class="nav-link" href="#">
              Active 
            </a>
            <a class="nav-link" href="#">
              Active 
            </a>
            <a class="nav-link" href="#">
              Active 
            </a>
            <a class="nav-link" href="#">
              Active 
            </a>
            <a class="nav-link" href="#">
              Active 
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
