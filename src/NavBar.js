import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Artist from "./ArtistSurvey";
import Report from "./Surveylist";
import About from "./About"
import {BiLogOut} from "react-icons/bi"
import "./NavBar.css"; 

function NavBar(props) {
    const {onLogout} =props;
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/survey">survey</Link>
          </li>
          <li>
            <Link to="/report"> Report</Link>
          </li>
          <li>
          <button onClick={onLogout}><BiLogOut/>LogOut</button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path ="/" element={<About/>}/>
        <Route path="/survey" element={<Artist />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
