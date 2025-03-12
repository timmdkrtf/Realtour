import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import logoRealtour from "../assets/img/icon-clients/2. Realtour Logo Utama (N).png";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="py-4">
            <img src={logoRealtour} className="w-25" alt="Realtour Logo" /><br />
            <small style={{opacity:"0.7", fontSize:"11px", fontFamily:"Be Vietnam Pro, sans-serif"}}>by PT Abdi Solusi Wisata</small>
            <div className="mt-3 opacity-75">
              <div className="mb-2">
                <a href="https://maps.app.goo.gl/AuKKXobm43vU2ABf6" target="_blank"className="text-white text-decoration-none">Jl. Aria Surialaga No.83, Kota Bogor 16119</a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <MdLocalPhone className="me-2" />
                <a href="tel:+622518632170" className="text-white text-decoration-none" target="_blank">+62 251 8632 170</a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <IoLogoWhatsapp className="me-2" />
                <a href="https://api.whatsapp.com/send?phone=6281213779357" className="text-white text-decoration-none" target="_blank">+62 812 1377 9357</a>
              </div>
              <div className="d-flex align-items-center">
                <MdEmail className="me-2" />
                <a href="mailto:contact@realtour.co.id" className="text-white text-decoration-none" target="_blank">contact@realtour.co.id</a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end opacity-75">
            <Nav className="justify-content-center justify-content-md-end mb-3">
              {/* <Nav.Link href="" className="text-white fs-3 me-1">
                <FaFacebook />
              </Nav.Link> */}
              <Nav.Link href="https://www.tiktok.com/@realtour.co.id" className="text-white fs-3 me-1">
                <FaTiktok />
              </Nav.Link>
              <Nav.Link href="https://instagram.com/realtour.co.id" className="text-white fs-3 me-1">
                <BsInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center opacity-75">
            <p className="mb-0">© 2025 Abdi Solusi Wisata &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
