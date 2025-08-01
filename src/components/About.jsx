import logoRealtourSecondary from "../assets/img/icon-clients/realtour2.png";

function About() {
  return (
    <div id="about">
      <div className="about">
        <div className="logo">
          <img
            src={logoRealtourSecondary}
            alt="Realtour Secondary Logo"
            className="secondary-logo"
          />
        </div>
        <div className="container">
          <div className="content-flex">
            <div className="video-youtube">
              <div className="title">
                <h3>Lihat Perjalanan Kami</h3>
              </div>
              <div className="video-list d-flex flex-column gap-3">
                <div className="video d-flex gap-3">
                  <iframe
                    width="150"
                    height="85"
                    src="https://www.youtube.com/embed/fkt5-0jif2A?si=lZArmW_62uDHiwkx"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <span>
                    Arisan Perumahan Villa Mutiara Bersama Realtour 9-12 Mei
                    2025
                  </span>
                </div>
                <div className="video d-flex gap-3">
                  <iframe
                    width="150"
                    height="85"
                    src="https://www.youtube.com/embed/IDewDCm_C_A?si=MkI_dCB4XiipaeLq"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <span>
                    Arisan Bogor Barat Goes To Dieng Bersama Realtour 28-30
                    April 2025
                  </span>
                </div>
                <div className="video d-flex gap-3">
                  <iframe
                    width="150"
                    height="85"
                    src="https://www.youtube.com/embed/LMQj1Tm1OjQ?si=BUD2a13EMXmpwnrA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <span>
                    BBS Tour Bersama Realtour 4-8 Februari 2025
                  </span>
                </div>
              </div>
              <div className="btn-more">
                <hr />
                <a className="btn" href="https://www.youtube.com/@Realtourid" target="_blank">Lihat Selengkapnya</a>
              </div>
            </div>
            <div className="text-left">
              <div className="title">
                <h2>
                  Tentang <span>Kami</span>
                </h2>
              </div>
              <p>
                Realtour adalah persembahan dari PT Abdi Solusi Wisata yang
                merupakan perusahaan manajemen perjalanan korporat yang
                berkomitmen untuk menyediakan solusi lengkap bagi kebutuhan
                perjalanan Anda. Kami bekerja sama dengan Anda untuk menentukan
                destinasi yang ideal, memilih penginapan yang nyaman, dan
                merencanakan kuliner serta kegiatan yang mendukung keberlanjutan
                lingkungan.
              </p>
              <p>
                Selain itu, kami juga menyusun aktivitas menyenangkan lainnya
                yang sesuai dengan preferensi Anda. Dengan pendekatan kami yang
                terintegrasi, setiap perjalanan Anda akan dirancang untuk
                memberikan pengalaman yang nyaman, menyenangkan, dan penuh
                makna, memastikan bahwa setiap momen perjalanan Anda menjadi
                pengalaman yang tak terlupakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
