import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img src="../../../public/image/tobi_logo.svg" />
          </div>

          <div>
            <nav class="nav top-nav justify-content-between">
              <span class="nav-link">Contact Us</span>
              <a class="nav-link" href="#">
                <img
                  src="../../../public/image/topbar/Phone.svg"
                  class="img-icon"
                />
              </a>
              <a class="nav-link" href="#">
                <img
                  src="../../../public/image/topbar/Path 3.svg"
                  class="img-icon"
                />
              </a>
              <a class="nav-link" href="#">
                <img
                  src="../../../public/image/topbar/Component 10 – 3.svg"
                  class="img-icon"
                />
              </a>
              <a class="nav-link" href="#">
                <img
                  src="../../../public/image/topbar/Component 11 – 3.svg"
                  class="img-icon"
                />
              </a>
              <a class="nav-link" href="#">
                <img
                  src="../../../public/image/topbar/Component 12 – 3.svg"
                  class="img-icon"
                />
              </a>
            </nav>

            <div className="middle-nav">
              <span id="span1">Print Express</span>
              <br></br>
              <span id="span2">...fast and reliable</span>
            </div>

            <nav class="nav justify-content-between bottom-nav">
              <Link to="/" class="nav-link" href="#">
                Home
              </Link>
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
        </header>
      </div>
    );
  }
}

export default Navbar;
