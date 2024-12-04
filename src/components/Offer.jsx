import FlyerTravel from "../assets/img/flyer/3.png"
import FlyerTrave2 from "../assets/img/flyer/2.png"
import FlyerTrave3 from "../assets/img/flyer/1 (1).png"

import WaveLeft from "../assets/img/gelombang-left.png"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Offer(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Perjalanan MotoGP penuh Aksi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <img src={FlyerTravel} alt="" />
                    <img src={FlyerTrave2} alt="" />
                    <img src={FlyerTrave3} alt="" />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Tutup
            </Button>
            </Modal.Footer>
        </Modal>

        <div className="offer" id="offer">
            <div className="container">
            <div className="title">
                <h2>Penawaran Kami</h2>
            </div>
                <div className="content">
                    {/* <div className="popular-offer">
                        <div className="card-offer">
                            <div className="image-container">
                                <img src={FlyerTravel} alt="" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Paket Mandalika</h2>
                                        <p>Lakukan Perjalanan Menyenangkan menyaksikan MotoGP di Mandalika - Lombok...</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShow}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6281213779357" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="blank" style={{padding:"100px 0", margin:"0 0 100px 0"}}>
                        <h3>Coming Soon</h3>
                    </div>
                </div>
            </div>
            <div className="icon-wave">
                <img src={WaveLeft} alt="" />
            </div>
        </div>
        </>
    );
}

export default Offer;
