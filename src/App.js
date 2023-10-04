import "./App.css";
import AboutMe from "./component/AboutMe/AboutMe";
import ContactMe from "./component/ContactMe/ContactMe";
import Profile from "./component/Home/Profile";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Projects/Projects";
import Resume from "./component/Resume/Resume";


function App() {
  return (
    <div className="app">
      <Profile />
      <AboutMe />
      <Navbar />
      <Resume />
      <Projects />
      <ContactMe/>
    </div>
  );
}

export default App;
