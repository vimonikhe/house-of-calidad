"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import {
  House,
  Building2,
  Package,
  Shirt,
  Camera,
  Clapperboard,
  Lightbulb,
  MonitorPlay,
  Plane,
  Menu,
  X,
  Mic2,
  Megaphone,
  Video,
  FileVideo2,
  Smartphone,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { Drone, Scissors, InstagramLogoIcon } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const [mobilemenu, Setmobilemenu] = useState(false);
  return (
    <div className={styles.general}>
      <div className={styles.firstbackground}>
        <img
          className={styles.calidadlogo}
          src="/houseofcalidad.jpg"
          height="50"
          width="50"
          alt="calidadlogo"
        />
        <div className={styles.menu}>
          <Link href="/" className={styles.home}>
            HOME
          </Link>
          <Link href="/about" className={styles.about}>
            ABOUT US
          </Link>
          <Link href="#whatwedo" className={styles.services}>
            SERVICES
          </Link>
          <Link href="/myworks" className={styles.projects}>
            PROJECTS
          </Link>
          <Link href="#contact" className={styles.contact}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className={styles.firstbackground2}>
        <img
          className={styles.calidadlogo}
          src="/houseofcalidad.jpg"
          height="50"
          width="50"
          alt="calidadlogo"
        />
        <div className={styles.mobilemenuwrapper}>
          <div
            onClick={() => Setmobilemenu(!mobilemenu)}
            className={styles.navbar}
          >
            {mobilemenu ? (
              <X size={32} strokeWidth={2} />
            ) : (
              <Menu size={32} strokeWidth={2} />
            )}
          </div>
          {mobilemenu ? (
            <div className={styles.mobilemenudropdown}>
              <a
                href="/"
                className={styles.home2}
                onClick={() => Setmobilemenu(false)}
              >
                HOME
              </a>
              <a
                href="/about"
                className={styles.aboutus2}
                onClick={() => Setmobilemenu(false)}
              >
                ABOUT US
              </a>
              <a
                href="#whatwedo"
                className={styles.services2}
                onClick={() => Setmobilemenu(false)}
              >
                SERVICES
              </a>
              <a
                href="/myworks"
                className={styles.projects2}
                onClick={() => Setmobilemenu(false)}
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className={styles.contact2}
                onClick={() => Setmobilemenu(false)}
              >
                CONTACT
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.secondbackground}>
        <div className={styles.herosection}>
          <div className={styles.wedont}>
            {"WE  DON'T  JUST  CREATE  CONTENT."}
          </div>
          <div className={styles.wecraft}>
            WE CRAFT TIMELESS
            <br />
            VISUAL EXPERIENCES.
          </div>
          <div className={styles.line}></div>
          <div className={styles.fps}>FILMS • PHOTOGRAPHY • STORY TELLING</div>
          <Link href="#ourwork">
            {" "}
            <button className={styles.viewourwork}>VIEW OUR WORK</button>
          </Link>
          <Link href="#ourwork">
            {" "}
            <div className={styles.downarrow}>⌵</div>
          </Link>
        </div>
      </div>
      <div className={styles.thirdbackground}>
        <div className={styles.aboutsection}>
          <div className={styles.aboutusheading}>ABOUT US </div>
          <div className={styles.houseofcalidadintro}>
            WE ARE HOUSE <br />
            OF CALIDAD
          </div>
          <div className={styles.aboutparagraph}>
            {
              "We partner with brands,businesses and visionaries to create content that goes beyond aesthetics, capturing emotion, purpose and identity in every frame."
            }
          </div>
          <Link href="/about">
            {" "}
            <button className={styles.learnmore}>LEARN MORE</button>
          </Link>
        </div>
        <img
          className={styles.aboutimage}
          src="/aboutimage.jpg"
          width="50"
          height="50"
          alt="about"
        />
      </div>
      <div className={styles.fourthbackground}>
        <div className={styles.whatwedo} id="whatwedo">
          WHAT WE DO
        </div>
        <div className={styles.whatwedowrap}>
          <div className={styles.brandfilmswrap}>
            <Video
              size={40}
              strokeWidth={1.5}
              className={styles.brandfilmsicon}
            />
            <div className={styles.brandfilms}>BRAND FILMS</div>
          </div>
          <div className={styles.commercialphotographywrap}>
            <Camera
              size={40}
              strokeWidth={1.5}
              className={styles.commercialphotographyicon}
            />
            <div className={styles.commercialphotography}>
              COMMERCIAL <br />
              PHOTOGRAPHY
            </div>
          </div>
          <div className={styles.creativedirectionwrap}>
            <Lightbulb
              size={40}
              strokeWidth={1.5}
              className={styles.creativedirectionicon}
            />
            <div className={styles.creativedirection}>
              CREATIVE <br />
              DIRECTION
            </div>
          </div>
          <div className={styles.socialmediacampaignswrap}>
            <Smartphone
              size={40}
              strokeWidth={1.5}
              className={styles.socialmediacampaignsicon}
            />
            <div className={styles.socialmediacampaigns}>
              SOCIAL MEDIA <br />
              CAMPAIGNS
            </div>
          </div>
          <div className={styles.dronecinematographywrap}>
            <Drone
              size={40}
              strokeWidth={1.5}
              className={styles.dronecinematographyicon}
            />
            <div className={styles.dronecinematography}>
              DRONE <br />
              CINEMATOGRAPHY
            </div>
          </div>
          <div className={styles.videoeditingwrap}>
            <Clapperboard
              size={40}
              strokeWidth={1.5}
              className={styles.videoeditingicon}
            />
            <div className={styles.videoediting}>
              VIDEO <br />
              EDITING
            </div>
          </div>
        </div>
        <div id="ourwork" className={styles.ourwork}>
          <Link className={styles.exploreourworks} href="/myworks">
            EXPLORE OUR WORKS
          </Link>
          <div className={styles.workswrapper}>
            <div className={styles.realestatework}>
              <Building2
                className={styles.realestateworkicon}
                size={40}
                strokeWidth={1.5}
              />
              <div className={styles.realestatetext}>REAL ESTATE</div>
            </div>
            <div className={styles.fashionwork}>
              <Shirt
                className={styles.fashionworkicon}
                size={40}
                strokeWidth={1.5}
              />
              <div className={styles.fashiontext}>FASHION</div>
            </div>
            <div className={styles.productwork}>
              <Package
                className={styles.productworkicon}
                size={40}
                strokeWidth={1.5}
              />
              <div className={styles.producttext}>PRODUCTS</div>
            </div>
            <div className={styles.commercialwork}>
              <Megaphone
                className={styles.commercialworkicon}
                size={40}
                strokeWidth={1.5}
              />
              <div className={styles.commercialtext}>COMMERCIAL</div>
            </div>
            <div className={styles.eventswork}>
              <Mic2
                className={styles.eventworkicon}
                size={40}
                strokeWidth={1.5}
              />
              <div className={styles.eventtext}>EVENTS</div>
            </div>
            <div className={styles.brandfilmwork}>
              <User
                className={styles.brandfilmworkicon}
                size={40}
                strokeWidth={1.5}
              />
              <div className={styles.brandfilmtext}>BRAND FILMS</div>
            </div>
          </div>
        </div>
        <div className={styles.trustedby}>TRUSTED BY</div>
        <div className={styles.brands}>
          <img
            src="farsad.jpg"
            className={styles.farsadlogo}
            width="50"
            height="50"
            alt="farsadlogo"
          />
          <img
            src="dionyx.jpg"
            className={styles.dionyxlogo}
            width="50"
            height="50"
            alt="dionyxlogo"
          />
          <img
            src="sujimoto.jpg"
            className={styles.sujimotologo}
            width="50"
            height="50"
            alt="sujimotologo"
          />
          <img
            src="greymen.jpg"
            className={styles.greymenlogo}
            width="50"
            height="50"
            alt="greymenlogo"
          />
          <img
            src="unico.jpg"
            className={styles.unicologo}
            width="50"
            height="50"
            alt="unicologo"
          />
          <img
            src="didi.jpg"
            className={styles.didilogo}
            width="50"
            height="50"
            alt="didilogo"
          />
        </div>
        <div className={styles.letsworktogether}>{"LET'S WORK TOGETHER"}</div>
        <div className={styles.contactsection}>
          <div className={styles.readyandintro}>
            <div className={styles.letsworktogetherintro}>
              {
                "Every great project starts with a conversation, whether you're building a brand, launching a product or capturing a meaningful moment, House of Calidad is here to transform your vision into timeless visual experiences. Let's create something extraordinary together."
              }
            </div>
          </div>
          <div id="contact" className={styles.socialmediasection}>
            <Link href="tel:09053389939" className={styles.telephonelink}>
              {" "}
              <div className={styles.telephone}>
                <Phone
                  className={styles.telephonelogo}
                  size={30}
                  strokeWidth={1.5}
                />
                <div className={styles.telephonetext}>09053389939</div>
              </div>
            </Link>
            <Link
              href="mailto:samseojie@gmail.com"
              className={styles.emaillink}
            >
              <div className={styles.email}>
                <Mail
                  className={styles.emaillogo}
                  size={30}
                  strokeWidth={1.5}
                />
                <div className={styles.emailtext}>Samseojie@gmail.com</div>
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/houseof_calidad?igsh=ZTEzMzFzN2U2MGx0"
              className={styles.instagramlink}
            >
              <div className={styles.instagram}>
                <InstagramLogoIcon
                  className={styles.instagramlogo}
                  size={30}
                  strokeWidth={1.5}
                />
                <div className={styles.instagramtext}>{"@houseof_calidad"}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        © 2026 House of Calidad{" "}
        <span className={styles.all}>ALL RIGHT RESERVED</span>
      </footer>
    </div>
  );
}
