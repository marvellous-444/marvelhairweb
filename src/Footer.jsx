import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import './Footer.css'

export default function Footer(){
    return(
        <>
            <div className="footer-box">

                <img className="footer-img" src="/image.png" alt="" />

                <div className="footer-socialmedia-box">
                    <a className="footer-socialmedia-link1" href="https://wa.me/+2349159679144"><FaWhatsapp  className="footer-socialmedia"/></a>
                    <a className="footer-socialmedia-link2" href="https://www.instagram.com/sbn__444/"><FaInstagram  className="footer-socialmedia"/></a>
                    <a className="footer-socialmedia-link3" href="https://x.com/SBN__444/"><FaXTwitter  className="footer-socialmedia"/></a>
                    <a className="footer-socialmedia-link4" href="https://www.tiktok.com/@plutosenator/"><FaTiktok  className="footer-socialmedia"/></a>
                </div>

                <span className="footer-text-div">
                     Copyright © 2024 Marvel Hair Cut | All rights reserved.
                </span>
            </div>
        </>
    )
}