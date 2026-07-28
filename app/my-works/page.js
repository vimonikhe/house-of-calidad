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
  MonitorPlay,
  Plane,
  Video,
  FileVideo2,
  Smartphone,
  TargetIcon,
  DiamondIcon,
  Menu,
  X,
  MedalIcon,
  StarIcon,
} from "lucide-react";
import {
  Drone,
  Buildings,
  CoatHanger,
  Tray,
  Target,
  Eye,
  Star,
  Lightbulb,
  SealCheck,
  RocketLaunch,
  Compass,
  Medal,
  RocketLaunchIcon,
  LightbulbIcon,
  SealCheckIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
          <Link href="/" className={styles.workhome}>
            HOME
          </Link>
          <Link href="#realestate" className={styles.workrealestate}>
            REAL ESTATE
          </Link>
          <Link href="/" className={styles.workcommercial}>
            COMMERCIAL
          </Link>
          <Link href="/" className={styles.workevents}>
            EVENTS
          </Link>
          <Link href="/" className={styles.workbrandfilms}>
            BRAND FILMS
          </Link>
          <Link href="/" className={styles.workproducts}>
            PRODUCTS
          </Link>
          <Link href="/" className={styles.workfashion}>
            FASHION
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
                className={styles.workhome2}
                onClick={() => Setmobilemenu(false)}
              >
                HOME
              </a>
              <a
                href="#realestate"
                className={styles.realestate2}
                onClick={() => Setmobilemenu(false)}
              >
                REAL ESTATE
              </a>
              <a
                href="/"
                className={styles.commercial2}
                onClick={() => Setmobilemenu(false)}
              >
                COMMERCIAL
              </a>
              <a
                href="/"
                className={styles.events2}
                onClick={() => Setmobilemenu(false)}
              >
                EVENTS
              </a>
              <a
                href="/"
                className={styles.brandfilms2}
                onClick={() => Setmobilemenu(false)}
              >
                BRAND FILMS
              </a>
              <a
                href="/"
                className={styles.products2}
                onClick={() => Setmobilemenu(false)}
              >
                PRODUCTS
              </a>
              <a
                href="/"
                className={styles.fashion2}
                onClick={() => Setmobilemenu(false)}
              >
                FASHION
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.secondbackground}>
        <div className={styles.hero}>
          <div className={styles.ourwork}>
            OUR <span className={styles.work}>WORK</span>
          </div>
          <div className={styles.every}>
            {
              " Every project we create is driven by purpose, crafted with precision and designed to leave a lasting impression. From cinematic brand films to luxury real estate, fashion, products, and live events, we transform ideas into compelling visual stories."
            }
          </div>
          <div className={styles.line}></div>
          <div className={styles.fps}>FILMS . PHOTOGRAPHY . STORYTELLING</div>
        </div>
        <img
          src="/ourworks.jpg"
          width="50"
          height="50"
          alt="ourworks"
          className={styles.ourworkimage}
        />
      </div>
      <div className={styles.thirdbackground}>
        <div className={styles.realestateworks} id="realestate">
          REAL ESTATE
        </div>
        <div className={styles.swiperwrapper}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            loop={true}
            slidesperview={1}
            spaceBetween={5}
          >
            <SwiperSlide>
              <div className={styles.sujimotowrapper}>
                <video
                  controls
                  width="200"
                  poster="/realestate/sujimoto.jpg"
                  className={styles.sujimotovideo}
                >
                  <source
                    src="https://res.cloudinary.com/dmhvi3mwp/video/upload/v1785247216/sujimoto_vunyxj.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.sujimotoheading}>SUJIMOTO GROUP</div>
                <div className={styles.sujimotointro}>
                  {
                    " A cinematic showcase highlighting sophisticated architecture, redefined interiors, and the lifestyle that defines modern luxury."
                  }
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.cosgrovewrapper}>
                <video
                  controls
                  width="200"
                  poster="/realestate/cosgrove.jpg"
                  className={styles.cosgrovevideo}
                >
                  <source
                    src="https://res.cloudinary.com/dmhvi3mwp/video/upload/v1785246559/cosgrove_gwiiah.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.cosgroveheading}>COSGROVE AFRICA</div>
                <div className={styles.cosgroveintro}>
                  {" Every landmark begins with a vision. "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.farsadwrapper}>
                <video
                  controls
                  width="200"
                  poster="/realestate/farsad.jpg"
                  className={styles.farsadvideo}
                >
                  <source
                    src="https://res.cloudinary.com/dmhvi3mwp/video/upload/v1785246895/farsad_pimcl4.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.farsadheading}>
                  FARSAD CONCEPTS & SOLUTIONS NIGERIA LIMITED
                </div>
                <div className={styles.farsadintro}>
                  {
                    " An exploration of interior architecture where every detail tells a story. "
                  }
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.panamawrapper}>
                <video
                  controls
                  width="200"
                  poster="/realestate/panama.jpg"
                  className={styles.panamavideo}
                >
                  <source
                    src="https://res.cloudinary.com/dmhvi3mwp/video/upload/v1785247020/panama_ojg289.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.panamaheading}> THE PANAMA ABUJA</div>
                <div className={styles.panamaintro}>
                  {" Where modern luxury meets timeless elegance.  "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.unicowrapper}>
                <video
                  controls
                  width="200"
                  poster="/realestate/unico.jpg"
                  className={styles.unicovideo}
                >
                  <source
                    src="https://res.cloudinary.com/dmhvi3mwp/video/upload/v1785247308/unico_udu1lu.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.unicoheading}> UNICO EMPIRE LIMITED</div>
                <div className={styles.unicointro}>
                  {" Where vision becomes a reality. "}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.farsaadwrapper}>
                <video
                  controls
                  width="200"
                  poster="/realestate/farsaad.jpg"
                  className={styles.farsaadvideo}
                >
                  <source
                    src="https://res.cloudinary.com/dmhvi3mwp/video/upload/v1785246804/farsaad_q2od0p.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.farsaadheading}>
                  FARSAD CONCEPTS & SOLUTIONS NIGERIA LIMITED
                </div>
                <div className={styles.farsaadintro}>
                  {
                    " An exploration of interior architecture where every detail tells a story. "
                  }
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.unicoempirewrapper}>
                <video
                  controls
                  width="200"
                  poster="/realestate/unicoempire.jpg"
                  className={styles.unicoempirevideo}
                >
                  <source
                    src="https://res.cloudinary.com/dmhvi3mwp/video/upload/v1785248055/unicoempire_gyn9s7.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className={styles.unicoempireheading}>
                  {" "}
                  UNICO EMPIRE LIMITED
                </div>
                <div className={styles.unicoempireintro}>
                  {" Where vision becomes a reality. "}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <footer className={styles.footer}>
        © 2026 House of Calidad{" "}
        <span className={styles.all}>ALL RIGHT RESERVED</span>
      </footer>
    </div>
  );
}
