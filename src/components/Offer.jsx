import FlyerDieng from "../assets/img/flyer/flyer-dieng.jpeg"
import FlyerNepal from "../assets/img/flyer/flyer-nepal.jpeg"

import WaveLeft from "../assets/img/gelombang-left.png"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Offer(){

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return(
        <>
        <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
            <Modal.Title>Liburan Ke Bromo-Jogja</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <img src={FlyerDieng} alt="" loading="lazy" />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
                Tutup
            </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
            <Modal.Title>Liburan Ke Bromo-Jogja</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <img src={FlyerNepal} alt="" loading="lazy" />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
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
                                <img src={FlyerDieng} alt="" loading="lazy" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Dieng Private Trip 3D1N</h2>
                                        <p>Lakukan Perjalanan Menyenangkan ke Dieng, dengan menikmati keindahan alam, suasana indah gunung dieng, dan lain sebagainya</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShow1}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6281213779357" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-offer">
                            <div className="image-container">
                                <img src={FlyerNepal} alt="" loading="lazy" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Liburan ke Nepal Van Java</h2>
                                        <p>Lakukan Perjalanan Menyenangkan ke Nepal Van Java, dengan menikmati keindahan alam, dan lain sebagainya</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShow2}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6281213779357" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="blank" style={{padding:"100px 0", margin:"0 0 100px 0"}}>
                        <h3>Coming Soon</h3>
                    </div> */}
                </div>
            </div>
            <div className="icon-wave">
                <img src={WaveLeft} alt="" loading="lazy" />
            </div>
        </div>
        </>
    );
}

export default Offer;
