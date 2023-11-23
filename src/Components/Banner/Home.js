import React from "react";
import "./Home.css";
import Products from "../Products/Products";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { slideLeft, slideRight } from "./Slideshow";
function Home() {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="home">
      <div className="home__container">
        <div className="Banner_container_image">
          <div className="arrow_container">
            <div onClick={slideLeft} className="slideLeft">
              <ArrowBackIosNewIcon />
            </div>
            <div onClick={slideRight} className="slideRight">
              <ArrowForwardIosIcon />
            </div>
          </div>
          <img
            className="Banner_image DB"
            src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
            alt="Banner image"
          />
          <img
            className="Banner_image"
            src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
            alt="Banner image"
          />
          <img
            className="Banner_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Banner image"
          />
          <img
            className="Banner_image"
            src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
            alt="Banner image"
          />
          <img
            className="Banner_image"
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt="Banner image"
          />
        </div>

        <div className="home__row">
          <Products
            id="12321"
            title={truncate("Activity trackers and smartwatches ", 50)}
            price={499.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />
          <Products
            id="12341"
            title={truncate(
              "Reversible Sectional Sofa U Shaped Couch with Storage Seat",
              50
            )}
            price={1700.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71fAMGlU2+L._AC_SX300_SY300_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="12345"
            title={truncate(
              '2022 MSI GE76 Raider 17.3" 144Hz (Intel 8-Core i7-11800H, 64GB RAM, 2TB PCIe SSD, RTX 3060), FHD Gaming Laptop ',
              50
            )}
            price={1570.96}
            rating={5}
            image="https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/2700044f-d57e-4aea-bba9-e9c6d1043cd6/bb49b9a0-6766-47cc-b5be-b1a27ecd0122/media._SL480_.jpeg"
          />
          <Products
            id="122334"
            title={truncate(
              "RCA 43-inch 4K UHD Roku Smart Flat Screen LED TV, 2022 Model ",
              50
            )}
            price={442.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71bycIeeQfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Products
            id="1234165"
            title={truncate(
              "Honeywell HHF360V 360 Degree Surround Fan Forced Heater with Surround Heat Output Charcoal Grey Energy Efficient Portable Heater with Adjustable Thermostat ",
              50
            )}
            price={424.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61TdIDsNEWL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="7396573"
            title={truncate(
              'Acer Nitro 34" QHD 3440 x 1440 1500R Curved PC Gaming Monitor | AMD FreeSync Premium | 165Hz Refresh | 1ms (VRB) | ZeroFrame Design | 2 x Display Port 1.4 & 2 x HDMI 2.0 Ports | XZ342CU Sbmiipphx',
              150
            )}
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71XeeQ77-LL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Products
            id="7396570"
            title={truncate(
              "UXZDX Game Chairs Adjustable Office Chair Ergonomic Computer Armchair Gaming Chair LOL Computer Chair Cafe ",
              50
            )}
            price={796.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/617HyLb6NdL._AC_SX425_.jpg"
          />
          <Products
            id="7396571"
            title={truncate(
              "YB HOME Linen Blended French Door Shades Self Adhesive, Privacy Room Darkening Glass Door Window Curtains for Kitchen Patio Door Sidelight Curtain Tie Up Shades, Wide 30 x Long 69 inch, 1 Pc, Khaki ",
              50
            )}
            price={174.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/814a+2ZwJ2L._AC_UL320_.jpg"
          />
          <Products
            id="7396572"
            title={truncate(
              "NANSON Headphones Wireless Earbuds 60hrs Playback IPX7 Waterproof Earphones Over-Ear Stereo Bass Headset with Earhooks Microphone LED Battery Display for Sports/Workout/Gym/Running Black ",
              50
            )}
            price={109.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61yB8Fk7sHL._AC_SX425_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
