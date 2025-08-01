import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import realtourLogo from '../assets/img/icon-clients/realtour2.png';
import realtourLogoScrolled from '../assets/img/icon-clients/realtour.png'; // Ganti dengan logo berbeda saat scroll

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const offset = window.scrollY;
        const triggerHeight = homeSection.offsetHeight;

        setScrolled(offset >= triggerHeight - 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={`navigation-bar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={scrolled ? realtourLogoScrolled : realtourLogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={scrolled ? "scrolled-btn" : ""} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={scrolled ? "scrolled-text" : ""} href="#home">Beranda</Nav.Link>
            <Nav.Link className={scrolled ? "scrolled-text" : ""} href="#about">Tentang Kami</Nav.Link>
            <Nav.Link className={scrolled ? "scrolled-text" : ""} href="#service">Layanan</Nav.Link>
            <Nav.Link className={scrolled ? "scrolled-text" : ""} href="#offer">Penawaran</Nav.Link>
            <Nav.Link className={scrolled ? "scrolled-text" : ""} href="#contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
