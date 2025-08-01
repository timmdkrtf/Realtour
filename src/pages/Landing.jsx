import Navbar from '../components/Navigation'
import Home from "../components/Home"
import Footer from '../components/Footer'
import About from '../components/About'
import Service from '../components/Service'
import Offer from '../components/Offer'
import Trip from '../components/Trip'
import Client from '../components/Client'
import Testimoni from '../components/Testimoni'
import BtnFloat from "../components/BtnFloat"

function Landing(){
    return (
        <div className="main">
            <Navbar />
            <Home />
            <About />
            <Service />
            <Offer />
            <Trip />
            <Client />
            <Testimoni />
            <BtnFloat />
            <Footer />
        </div>
    );
}

export default Landing;