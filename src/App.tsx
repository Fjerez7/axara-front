import Root from "./routes/root.tsx";
import {NavBar} from "./components/NavBar/NavBar.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {useState} from "react";
import {SideBar} from "./components/SideBar/SideBar.tsx";
function App() {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toggleSideBar = () => {
        setSideBarVisible(!sideBarVisible);
    };

  return (
      <>

              <NavBar onToggleSideBar={toggleSideBar}/>
              <Root/>
              <Footer/>

          <SideBar showState={sideBarVisible} setShowState={setSideBarVisible}/>

      </>
  );
}

export default App;
