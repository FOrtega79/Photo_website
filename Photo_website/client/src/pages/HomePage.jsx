
import "../App.css";
import StandardImageList from "../components/ImageGallery/ImageGallery";


function HomePage() {
  return (
    <div className="App">
    
      <header className="App-header">
      <p>Name: Claudia Matute</p>
      <p>Contact: tuemail@tudominio.com</p>
      <p>My equipment</p>
      <p>About me</p>
       <h3>Landscapes</h3>
       <div>
       <StandardImageList />
       </div>

       <h3>B/N urban landscapes</h3>
       <div>
       <StandardImageList />
       </div>

       <h3>B/N Portraits</h3>
       <div>
       <StandardImageList />
       </div>
        
      </header>
    </div>
  );
}

export default HomePage;
