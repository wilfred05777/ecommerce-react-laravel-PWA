import React, { Component, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MegaMenuMobile from "./MegaMenuMobile";
import Logo from "../../assets/images/easyshop.png";

export class MegaMenuAll extends Component {
  constructor() {
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }
  MegaMenu() {
    var acc = document.getElementsByClassName("accordionAll");
    var accNum = acc.length;
    var i;
    for (i = 0; i < accNum; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  render() {
    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">
          <button className="accordionAll">
            <img
              className="accordionMenuIconAll"
              src="https://image.flaticon.com/icons/png/128/739/739249.png"
            />
            &nbsp; Men's Clothing
          </button>
          <div className="panelAll">
            <ul>
              <li>
                <a href="#" className="accordionItemAll">
                  {" "}
                  Mans Tshirt 1
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemAll">
                  {" "}
                  Mans Tshirt 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenuAll;
