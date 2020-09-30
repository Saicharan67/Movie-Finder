import React from "react";
import StickyFooter from "react-sticky-footer";
import "./footerstyle.css";
function Footer() {
  return (
    <div className="footer">
      <footer class="bottom">
        <div class="container">
          <p class="m-0 text-center text-white" style={{ fontSize: 17 }}>
            Copyright &copy;{" "}
            <span>
              <a href="https://saicharan67.github.io/PortFolio">MaC-02</a>
            </span>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
