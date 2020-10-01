import React from "react";
import StickyFooter from "react-sticky-footer";
import "./footerstyle.css";
function Footer() {
  return (
    <div className="footer">
      <footer class="bottom">
        <div class="cont">
          <p className="p" style={{ color: "whitesmoke" }}>
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
