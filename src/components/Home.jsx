import bgPeople1 from '../assets/img/view/29.webp'
import bgPeople2 from '../assets/img/view/30.webp'
import bgView1 from '../assets/img/view/26.webp'
import bgView2 from '../assets/img/view/28.webp'

function Home(){
    return(
        <div className="home" id="home">
            <div className="container">
                <div className="content-flex">
                    <div className="content-text">
                        <h3>Menghadirkan <span className="wisata">Wisata</span> Berkesan dengan Sentuhan <span className="lingkungan">Lingkungan</span> & <span className="budaya">Budaya</span></h3>
                        <p>Realtour menawarkan pengalaman perjalanan yang seru dan memuaskan, sekaligus memberikan wawasan mendalam tentang lingkungan sekitar. Kami berkomitmen untuk menjadikan setiap perjalanan Anda unik dan penuh makna, dengan pendekatan yang memadukan kesenangan dan edukasi tentang keberlanjutan lingkungan hidup.</p>
                        <a href="#about" style={{textDecoration:"none"}}><button>Baca Selengkapnya</button></a>
                    </div>
                    <div className="content-img-grid">
                        <div className="img top"><img src={bgPeople1} alt="" /></div>
                        <div className="img right"><img src={bgView1} alt="" /></div>
                        <div className="img bottom"><img src={bgView2} alt="" /></div>
                        <div className="img left"><img src={bgPeople2} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;