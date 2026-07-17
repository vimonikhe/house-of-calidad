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
          <Link href="#vision" className={styles.visionn}>
            VISION
          </Link>
          <Link href="#mission" className={styles.missionn}>
            MISSION
          </Link>
          <Link href="#values" className={styles.valuess}>
            VALUES
          </Link>
          <Link href="/#contact" className={styles.contactt}>
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
                href="#vision"
                className={styles.vision2}
                onClick={() => Setmobilemenu(false)}
              >
                VISION
              </a>
              <a
                href="#mission"
                className={styles.mission2}
                onClick={() => Setmobilemenu(false)}
              >
                MISSION
              </a>
              <a
                href="#values"
                className={styles.values2}
                onClick={() => Setmobilemenu(false)}
              >
                VALUES
              </a>
              <a
                href="/#contact"
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
        <div className={styles.herosectionandimage}>
          <div className={styles.herosection}>
            <div className={styles.ourstory}>
              OUR <br />
            </div>
            <span className={styles.story}>STORY</span>
            <div className={styles.paragraphone}>
              {
                "At house of calidad, we believe every brand has a story worth telling and every story deserves to be told with excellence."
              }
            </div>
            <div className={styles.paragraphtwo}>
              {
                "Founded on a passion for cinematic story telling and timeless visual craftmanship, House of Calidad, is a creative studio, dedicated to producing premium visual experience that inspire ,connect and leave lasting impressions."
              }
            </div>
            <div className={styles.paragraphthree}>
              {
                "We partner with brands,businesses and visionaries to create content that goes beyond aesthetics, capturing emotions, purpose and identity in every frame."
              }
            </div>
            <div className={styles.paragraphfour}>
              {
                "From luxury real estate and architecture to fashion,hospitality, commercial campaigns and brand films, our work is driven by one principle: quality in every detail."
              }
            </div>
            <div className={styles.paragraphfive}>
              {
                "Every project is approached with creativity, precision and commitment to delivering visuals that not only look exceptional but communicate meaning and elevate brands."
              }
            </div>
            <div className={styles.paragraphsix}>
              {
                "At house of calidad, we do not just create content,we craft visual experience that stand the test of time ."
              }
            </div>
          </div>
          <div className={styles.imagesection}>
            <img
              className={styles.aboutimage}
              src="aboutimage.png"
              width="200"
              height="200"
              alt="aboutimage"
            />
            <div className={styles.servicess}>
              <div className={styles.realestate}>
                <Building2 className={styles.icon} size={32} weight="regular" />
                <div>
                  REAL ESTATE <br />& ARCHITECTURE
                </div>
              </div>
              <div className={styles.fashion}>
                <CoatHanger
                  className={styles.icon}
                  size={32}
                  weight="regular"
                />
                <div>FASHION</div>
              </div>
              <div className={styles.hospitality}>
                <Tray className={styles.icon} size={32} weight="regular" />
                <div>HOSPITALITY</div>
              </div>
              <div className={styles.commercial}>
                <Camera className={styles.icon} size={32} weight="regular" />
                <div>COMMERCIAL</div>
              </div>
              <div className={styles.aerial}>
                <Drone className={styles.icon} size={32} weight="regular" />
                <div>
                  AERIAL & <br />
                  EVENTS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mvv}>
          <div id="mission" className={styles.mission}>
            <Compass className={styles.iconn} size={32} weight="regular" />
            <div className={styles.ourmission}>
              OUR <span className={styles.mvvspan}>MISSION</span>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.missionstatement}>
              {
                "To craft timeless visual experiences that elevate brands through creativity, precision and uncompromising quality, transforming ideas into compelling stories that inspire connect, and leave a lasting impact"
              }
            </div>
          </div>
          <div id="vision" className={styles.vision}>
            <Eye className={styles.iconn} size={32} weight="regular" />
            <div className={styles.ourvision}>
              OUR <span className={styles.mvvspan}>VISION</span>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.visionstatement}>
              {
                "To become an Africa's leading creative studio, recognized globally for redefining visual story telling through innovation, excellence and world-class cinematic experiences."
              }
            </div>
          </div>
          <div id="values" className={styles.values}>
            <MedalIcon className={styles.iconn} size={32} weight="regular" />
            <div className={styles.ourvalues}>
              OUR <span className={styles.mvvspan}>VALUES</span>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.valuestatement}>
              <div className={styles.firstvalue}>
                <StarIcon
                  className={styles.valuesicon}
                  size={32}
                  weight="regular"
                />
                <div>
                  <div className={styles.firstvalueheading}>EXCELLENCE</div>
                  <div className={styles.firstvaluestatement}>
                    We partner with high value standards in every point
                  </div>
                </div>
              </div>
              <div className={styles.secondvalue}>
                <LightbulbIcon
                  className={styles.valuesicon}
                  size={32}
                  weight="regular"
                />
                <div>
                  <div className={styles.secondvalueheading}>CREATIVITY</div>
                  <div className={styles.secondvaluestatement}>
                    Every story deserves a unique prospective
                  </div>
                </div>
              </div>
              <div className={styles.thirdvalue}>
                <SealCheckIcon
                  className={styles.valuesicon}
                  size={32}
                  weight="regular"
                />
                <div>
                  <div className={styles.thirdvalueheading}>QUALITY</div>
                  <div className={styles.thirdvaluestatement}>
                    Attention to detail defines everything we create.
                  </div>
                </div>
              </div>
              <div className={styles.fourthvalue}>
                <ShieldCheckIcon
                  className={styles.valuesicon}
                  size={32}
                  weight="regular"
                />
                <div>
                  <div className={styles.fourthvalueheading}>INTEGRITY</div>
                  <div className={styles.fourthvaluestatement}>
                    We build lasting relationships through trust and
                    professionalism
                  </div>
                </div>
              </div>
              <div className={styles.fifthvalue}>
                <RocketLaunchIcon
                  className={styles.valuesicon}
                  size={32}
                  weight="regular"
                />
                <div>
                  <div className={styles.fifthvalueheading}>INNOVATION</div>
                  <div className={styles.fifthvaluestatement}>
                    We embrace new ideas and technologies to push creative
                    boundaries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.letssession}>
          <div>
            <div className={styles.letscreate}>{"LET'S CREATE SOMETHING"}</div>
            <div className={styles.extraordinary}>Extraordinary</div>
          </div>
          <div className={styles.hocvst}>
            <div className={styles.hoc}> HOUSE OF CALIDAD</div>
            <div className={styles.vst}>
              VISUAL STORY TELLING. TIMELESS IMPACT.
            </div>
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
