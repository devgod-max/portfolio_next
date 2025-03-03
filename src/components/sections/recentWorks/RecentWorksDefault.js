/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    if (typeof window !== "undefined") {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });

      return () => isotope.current.destroy();
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Projects</div>

        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item frontend border-line-h">
            <div className="box-item">
              <div className="image" style={{ borderRadius: "10px" }}>
                <a
                  href="https://full-stack-real-estate-youtube-sooty.vercel.app"

                  //   className="has-popup-image"
                >
                  <img
                    src="images/works/1.PNG"
                    alt=""
                    width={500}
                    height={400}
                  />
                  <span className="info">
                    <span className="ion ion-code" />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
                <a
                  href="https://full-stack-real-estate-youtube-sooty.vercel.app"
                  className="name has-popup-image"
                >
                  Real Estate Booking Website
                </a>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="box-item">
              <div className="image" style={{ borderRadius: "10px" }}>
                <a
                  href="https://www.youtube.com/watch?v=PRpTY5LS95M&list=PLSDeUiTMfxW5ymcWAXlbnJ3KLoN34Li_C"
                  className="has-popup-image"
                >
                  <img src="images/works/3.PNG" alt="" />
                  <span className="info">
                    <span className="ion ion-code" />
                  </span>
                </a>
              </div>
              <div className="desc m-4">
                <a
                  href="https://www.youtube.com/watch?v=PRpTY5LS95M&list=PLSDeUiTMfxW5ymcWAXlbnJ3KLoN34Li_C"
                  className="name has-popup-image"
                >
                  E-Commerce Site
                </a>
              </div>
            </div>
          </div>
          {/* work item video */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image" style={{ borderRadius: "10px" }}>
                <a
                  href="https://moonflix.vercel.app/"
                  className="has-popup-image"
                >
                  <img src="images/works/2.PNG" alt="" />
                  <span className="info">
                    <span className="ion ion-paintbrush" />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
                <a
                  href="https://moonflix.vercel.app/"
                  className="name has-popup-image"
                >
                  Movie-Advertisement
                </a>
              </div>
            </div>
            <br />
            <br />
            <div className="box-item">
              <div className="image" style={{ borderRadius: "10px" }}>
                <a
                  href="https://presale-live-v1.vercel.app/"
                  className="has-popup-image"
                >
                  <img src="images/works/4.PNG" alt="" />
                  <span className="info">
                    <span className="ion ion-paintbrush" />
                  </span>
                </a>
              </div>
              <div className="desc p-4">
                <a
                  href="https://presale-live-v1.vercel.app/"
                  className="name has-popup-image"
                >
                  Pre-Sale
                </a>
              </div>
            </div>
          </div>
          {/* work item photo */}

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
