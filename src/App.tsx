import Root from "./routes/root.tsx";
import {NavBar} from "./components/NavBar/NavBar.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {useState} from "react";
import {SideBar} from "./components/SideBar/SideBar.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthProvider} from "./context/AuthProvider.tsx";

function App() {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const toggleSideBar = () => {
        setSideBarVisible(!sideBarVisible);
    };
    const queryClient = new QueryClient;

  return (
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <NavBar onToggleSideBar={toggleSideBar}/>
              <Root/>
              <Footer/>
          <SideBar showState={sideBarVisible} setShowState={setSideBarVisible}/>
          </AuthProvider>
      </QueryClientProvider>
  );
}

export default App;
