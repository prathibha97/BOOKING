import Featured from "../featured/Featured";
import FeaturedProperties from "../featuredProperties/FeaturedProperties";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import Navbar from "../layouts/navbar/Navbar";
import MailList from "../mailList/MailList";
import PropertyList from "../propertyList/PropertyList";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
