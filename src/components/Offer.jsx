import FlyerTravel from "../assets/img/flyer/3.png"
import FlyerTrave2 from "../assets/img/flyer/2.png"
import FlyerTrave3 from "../assets/img/flyer/1 (1).png"

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
                    <div className="popular-offer">
                        <div className="card-offer">
                            <div className="image-container">
                                <img src={FlyerTravel} alt="" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Paket Mandalika</h2>
                                        <p>Lakukan Perjalanan Menyenangkan menyaksikan MotoGP di Mandalika - Lombok...</p>
                                        <Button onClick={handleShow}>Baca Selengkapnya</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Offer;
