import logoRealtourPrimary from '../assets/img/icon-clients/realtour.png'
import logoRealtourSecondary from '../assets/img/icon-clients/2. Realtour Logo Utama (N).png'

function About(){
    return(
        <div id="about" style={{padding:"40px 0 0 0"}}>
        <div className="about">
            <div className="container">
                <div className="content-flex">
                    <div className="logo">
                        <img src={logoRealtourPrimary} className='primary' alt="Logo Realtour" />
                        <img src={logoRealtourSecondary} className='secondary' alt="Logo Realtour" />
                    </div>
                    <div className="text-left">
                        <div className="title">
                            <h2>Tentang <span>Kami</span></h2>
                        </div>
                        <p>Realtour adalah persembahan dari PT Abdi Solusi Wisata yang merupakan perusahaan manajemen perjalanan korporat yang berkomitmen untuk menyediakan solusi lengkap bagi kebutuhan perjalanan Anda. Kami bekerja sama dengan Anda untuk menentukan destinasi yang ideal, memilih penginapan yang nyaman, dan merencanakan kuliner serta kegiatan yang mendukung keberlanjutan lingkungan.</p>
                        <p>Selain itu, kami juga menyusun aktivitas menyenangkan lainnya yang sesuai dengan preferensi Anda. Dengan pendekatan kami yang terintegrasi, setiap perjalanan Anda akan dirancang untuk memberikan pengalaman yang nyaman, menyenangkan, dan penuh makna, memastikan bahwa setiap momen perjalanan Anda menjadi pengalaman yang tak terlupakan.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;