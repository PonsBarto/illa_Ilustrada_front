import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title="Contacto" />
      <BreadCrumb title="Contacto" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24450.610458609914!2d3.8244250645011477!3d40.0011582765531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12be040aab08890f%3A0x8145a42f36707c1e!2sCiudadela%20de%20Menorca%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1711604379503!5m2!1ses!2ses"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title">Contacto</h3>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Numero de telefono"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Escribe aqui tus comentarios"
                        ></textarea>
                      </div>
                      <div>
                        <button className="button border-0">enviar</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">
                      Contacta con nosotros
                    </h3>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Av. Palma de Mallorca n 11 1-D Ciutadella de Menorca
                          Islas Baleares, España CP: 07760
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel: +34 628091700">+34 628091700</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:info@illailustrada.com">
                        info@illailustrada.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Lunes a Viernes 10:00h a 20:00h</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
