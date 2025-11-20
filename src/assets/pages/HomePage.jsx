import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import NewArrivals from '../components/Arrival.jsx'
import Selling from '../components/Selling.jsx'
import Browse from '../components/Browse.jsx'
import Reviews from '../components/Reviews.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrivals />
      <Selling />
      <Browse />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;