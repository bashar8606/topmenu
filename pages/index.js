import BottomMenu from "../src/components/BottomMenu";
import DeliveryPopup from "../src/components/DeliveryPopup";
import Footer from "../src/components/Footer";
import LoginModal from "../src/components/LoginModal";
import Menu from "../src/components/Menu";
import SignupModal from "../src/components/SignupModal";
import AppCategories from "../src/widgets/AppCategories";
import AppProducts from "../src/widgets/AppProducts";
import AppSearch from "../src/widgets/AppSearch";
import HomeBanner from "../src/widgets/HomeBanner";
import HomeBrands from "../src/widgets/HomeBrands";
import HomePrices from "../src/widgets/HomePrices";
import HomeSteps from "../src/widgets/HomeSteps";
import HomeTestimonials from "../src/widgets/HomeTestimonials";

const HomePage = (props) => {
  return <main>
    <Menu />
    <BottomMenu />

    <AppSearch />
    <AppCategories />
    <AppProducts />
    <DeliveryPopup />
    <LoginModal/>
    <SignupModal/>
    
    

    <HomeBanner />
    <HomeBrands />
    <HomeSteps />
    <HomeTestimonials />
    <HomePrices/>
    {/* <Footer /> */}
  </main>;
};



export default HomePage;
