import Transport from "../assets/img/logo-layanan/Public Transportation.png"
import Travel from "../assets/img/logo-layanan/Around the Globe.png"
import Program from "../assets/img/logo-layanan/Boarding Pass.png"
import Hotel from "../assets/img/logo-layanan/Booking.png"
import View from "../assets/img/logo-layanan/Environmental Planning.png"
import Culture from "../assets/img/logo-layanan/Wayang Shadow Puppet.png"
import Environment from "../assets/img/logo-layanan/Tree Planting.png"
import Care from "../assets/img/logo-layanan/Hand Planting.png"

import waveRight from "../assets/img/gelombang-right.png"

function Service(){
    return(
        <>
        {/* <div className="shape-wave-right">
            <img src={waveRight} alt="" />
        </div> */}
        <div className="shape-wave-left">
            <img src={waveRight} alt="" loading="lazy" />
        </div>
        <div className="service" id="service">
            <div className="img-bg">
            </div>
            <div className="container">
                <div className="title">
                    <h2>Layanan Kami</h2>
                </div>
                <div className="card-content">
                    <div className="card">
                        <img src={Transport} alt="" loading="lazy" />
                        <p>Transportasi</p>
                    </div>
                    <div className="card">
                        <img src={Travel} alt="" loading="lazy" />
                        <p>Wisata Global</p>
                    </div>
                    <div className="card">
                        <img src={Program} alt="" loading="lazy" />
                        <p>Program Pariwisata</p>
                    </div>
                    <div className="card">
                        <img src={Hotel} alt="" loading="lazy" />
                        <p>Pemesanan Hotel</p>
                    </div>
                    <div className="card">
                        <img src={View} alt="" loading="lazy" />
                        <p>Edukasi Objek Kunjungan</p>
                    </div>
                    <div className="card">
                        <img src={Culture} alt="" loading="lazy" />
                        <p>Edukasi Budaya</p>
                    </div>
                    <div className="card">
                        <img src={Environment} alt="" loading="lazy" />
                        <p>Edukasi Peduli Lingkungan</p>
                    </div>
                    <div className="card">
                        <img src={Care} alt="" loading="lazy" />
                        <p>Aksi Peduli Lingkungan</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Service;