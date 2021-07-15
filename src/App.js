import Photo from "./Component/Profile/Photo";
import FullName from"./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress"
import NavBar from "./Component/Profile/Navbar"
import ImgFb from "./Component/Profile/footer"
import './App.css';

const App = () => (
    <div className="App">
      <>
      <header><NavBar /></header>
      </>
       <>
   <Photo />
 </>
 <>
 <FullName />
 </>
 <>
 <Adress />
 </>
 <>
 <footer><ImgFb /></footer>
 </>
    </div>
  );


export default App;
