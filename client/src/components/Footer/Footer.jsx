import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Leid flsdi dkao dfkdfooa fadk dfls sdlfina, jmdoid dkihna mdoie aldij.
          Sdlfka aldsop erdfog gkd dok erjfg jute ndikd kdolo fjkrbe ieb irnd nd
          kkdn dkoe kdpa. Erpgir wie fopclre itm df rmdier keid kdld irld, kldoe
          lsdi lrufn riunf eo iem.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Leid flsdi dkao dfkdfooa fadk dfls sdlfina, jmdoid dkihna mdoie aldij.
          Sdlfka aldsop erdfog gkd dok erjfg jute ndikd kdolo fjkrbe ieb irnd nd
          kkdn dkoe kdpa. Erpgir wie fopclre itm df rmdier keid kdld irld, kldoe
          lsdi lrufn riunf eo iem.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Wang Wares</span>
          <span className="copyright">
          © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
