import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/compare.png" alt="newsletter" />
                <h3 className="mb-0 text-white">
                  Suscribrete para mas novedades
                </h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Tu direccion email"
                  aria-label="tu direccion email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Suscribrete
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contacto</h4>
              <div>
                <address className="text-white fs-6">
                  Av. Palma de Mallorca n 11 1-D <br />
                  Ciutadella de Menorca <br />
                  Islas Baleares, España
                  <br />
                  CP: 07760
                </address>
                <a
                  href="tel:+34 628091700"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +34 628091700
                </a>
                <a
                  href="mailto: info@illailustrada.com"
                  className="mt-2 d-block mb-1 text-white"
                >
                  info@illailustrada.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white fs-5" href="#">
                    <BsLinkedin />
                  </a>
                  <a className="text-white fs-5" href="#">
                    <BsInstagram />
                  </a>
                  <a className="text-white fs-5" href="#">
                    <BsGithub />
                  </a>
                  <a className="text-white fs-5" href="#">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informacion</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">
                  Politica de Privacidad
                </Link>
                <Link className="text-white py-2 mb-1">
                  Politica de Reenbolso
                </Link>
                <Link className="text-white py-2 mb-1">Politica de Envios</Link>
                <Link className="text-white py-2 mb-1">
                  Terminos y condiciones
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Cuenta</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Enlaces</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Ilustraciones</Link>
                <Link className="text-white py-2 mb-1">Cartas</Link>
                <Link className="text-white py-2 mb-1">Personalizado</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; by BartoPons
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
