/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const GalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
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
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <section className="gallery-section pt-120 rpt-90 pb-100 rpb-70">
      <div className="container">
        <div className="section-title text-center mb-35">
          <span className="sub-title-two">Project Gallery</span>
          <h2>Looks Inside About Gallery</h2>
        </div>
        <ul className="gallery-filter mb-50">
          <li
            data-filter="*"
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            Show All
          </li>
          <li
            data-filter=".design"
            className={`c-pointer ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            Design
          </li>
          <li
            className={`c-pointer ${activeBtn("dranding")}`}
            onClick={handleFilterKeyChange("dranding")}
            data-filter=".dranding"
          >
            Branding
          </li>
          <li
            className={`c-pointer ${activeBtn("business")}`}
            onClick={handleFilterKeyChange("business")}
            data-filter=".business"
          >
            Business
          </li>
          <li
            className={`c-pointer ${activeBtn("development")}`}
            onClick={handleFilterKeyChange("development")}
            data-filter=".development"
          >
            Development
          </li>
          <li
            className={`c-pointer ${activeBtn("photographgy")}`}
            onClick={handleFilterKeyChange("photographgy")}
            data-filter=".photographgy"
          >
            Photographgy
          </li>
        </ul>
        <div className="row gallery-active justify-content-center">
          <div className="col-lg-4 col-sm-6 item dranding development">
            <div className="gallery-item wow fadeInUp delay-0-2s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery1.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery1.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Business Cosulting</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item design business">
            <div className="gallery-item wow fadeInUp delay-0-4s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery2.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery2.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Marketing Analysis</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item dranding development">
            <div className="gallery-item wow fadeInUp delay-0-6s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery3.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery3.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Co-Working Consulting</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item design business">
            <div className="gallery-item wow fadeInUp delay-0-2s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery4.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery4.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Business Cosulting</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item business development">
            <div className="gallery-item wow fadeInUp delay-0-4s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery5.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery5.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Client Handling Skills</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item dranding photographgy">
            <div className="gallery-item wow fadeInUp delay-0-6s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery6.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery6.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Business Cosulting</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item design photographgy">
            <div className="gallery-item wow fadeInUp delay-0-2s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery7.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery7.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Life Style Course</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item business photographgy">
            <div className="gallery-item wow fadeInUp delay-0-4s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery8.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery8.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Business Cosulting</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 item design development">
            <div className="gallery-item wow fadeInUp delay-0-6s">
              <div className="gallery-image">
                <img src="/assets/images/gallery/gallery9.jpg" alt="Gallery" />
                <a href="/assets/images/gallery/gallery9.jpg">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="gallery-content">
                <h4>Online Traning Course</h4>
                <span>Online Course, Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GalleryIsotope;
