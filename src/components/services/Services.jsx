import React, { useEffect, useRef, useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const modalRefs = [useRef(null), useRef(null), useRef(null)];
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        // 27 là mã ASCII cho phím ESC
        // Đóng modal
        setToggleState(0); // Đặt toggleState về 0 để đóng modal
      }
    };
    const handleClickOutside = (event, index) => {
      if (
        modalRefs[index].current &&
        !modalRefs[index].current.contains(event.target)
      ) {
        setToggleState(0);
      }
    };

    window.addEventListener("keydown", handleEsc);

    modalRefs.forEach((ref, index) => {
      document.addEventListener("mousedown", (event) =>
        handleClickOutside(event, index)
      );
    });

    return () => {
      window.removeEventListener("keydown", handleEsc);
      modalRefs.forEach((ref, index) => {
        document.removeEventListener("mousedown", (event) =>
          handleClickOutside(event, index)
        );
      });
    };
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="services section" id="services">
      <h2 className="section__title">In the future</h2>
      <span className="section__subtitle">I will try to</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-lightbulb-alt services__icon"></i>
            <h3 className="services__title">engage in active learning</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
            ref={modalRefs[0]}
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Active learning</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                labore saepe esse harum.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">something awesome</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
            ref={modalRefs[1]}
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Awesome</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                labore saepe esse harum.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">engage in active challenge</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
            ref={modalRefs[2]}
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Active challenge</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                labore saepe esse harum.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
