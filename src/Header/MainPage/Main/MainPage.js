import Footer from "../Footer/Footer";
import Line from "../Line/Line";
import MainBestsellers from "../MainBestsellers/MainBestsellers";
import MainButtons from "../MainButtons/MainButtons";
import PicFootter from "../PicFooter/PicFooter";
import QuickLink from "../QuickLink/QuickLink";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";
import Why from "../Why/Why";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

function MainPage(){
    return(
       <div>
       <QuickLink/>
        <Line/>
        <MainButtons/>
        <Slider/>
        <MainBestsellers/>
        <WorkingProcess/>
        <Why/>
        <PicFootter/>
        <Reviews/>
        <Footer/>
        
       </div>
    )
}
export default MainPage;