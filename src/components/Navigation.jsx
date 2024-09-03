import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import realtourLogo from '../assets/img/icon-clients/realtour.png'

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={realtourLogo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#about">Tentang Kami</Nav.Link>
            <Nav.Link href="#service">Layanan</Nav.Link>
            <Nav.Link href="#offer">Penawaran</Nav.Link>
            <Nav.Link href="#contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;