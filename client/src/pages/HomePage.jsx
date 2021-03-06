
import "../App.css";
import LandscapeSlide from "../components/LandscapeSlide/LandscapeSlide";
import BasicModal from "../components/Modal/Modal";
import PortraitSlide from "../components/PortraitSlide/PortraitSlide"


function HomePage() {
  return (
    <div className="App">
    
      <header className="App-header">
      <p>Name: Claudia Matute</p>
      <p>Contact: tuemail@tudominio.com</p>
      <BasicModal />
       <h3>Landscapes</h3>
       <div>
       <LandscapeSlide />
       </div>

       <h3>B/N urban landscapes</h3>
       <div>
       
       </div>

       <h3>Portraits</h3>
       <div>
       <PortraitSlide />
       </div>
        
      </header>
    </div>
  );
}

export default HomePage;
