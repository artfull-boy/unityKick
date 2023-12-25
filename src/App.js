import Navbar from './components/navbar/Navbar';
import Logo from './images/Unity kick 1.png';
import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './components/pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import StandingPage from './components/pages/standingPage/StandingPage';
import React from "react"
import Teams from './components/pages/dashboard/Teams/Teams';
import TeamsPage from './components/pages/teamsPage/TeamsPage'
import ParticipatingCountry from './components/pages/participatingCountries/ParticipatingCountries'
import NewsPage from './components/pages/newsPage/NewsPage'
import Footer from './components/footer/Footer';
import Stadium from './components/pages/Stadiums/Stadium';
import StatisticsPage from './components/pages/statisticsPage/StatisticsPage';
import CityDetails from './components/pages/cityDetails/CityDetails';
import HostCountries from './components/pages/hostCountries/HostCountries'
function App() {
  /*-------------Favorite Treatment--------------*/
  const [FavTeams,setFavTeams] = useState([]);
  useEffect(() => {
    const storedFavTeams = localStorage.getItem('FavTeams');
    if (storedFavTeams) {
      setFavTeams(JSON.parse(storedFavTeams));
    }
  }, []);
  const handleFavadd = (item) => {
    const isObjectInArray = (array, objectToCheck) => {
      return array.some(item => item.code == objectToCheck.code);
    };
    var updatedFavTeams;    
    if(isObjectInArray(FavTeams,item)){
      updatedFavTeams = FavTeams;
    }else{
      updatedFavTeams = [...FavTeams,item];
    }
    setFavTeams(updatedFavTeams);
    localStorage.setItem('FavTeams', JSON.stringify(updatedFavTeams));
  };
  const removeFromFav = (TeamCode) => {
    const updatedCart = FavTeams.filter((Team) => Team.code != TeamCode);
    setFavTeams(updatedCart);
    localStorage.setItem('FavTeams', JSON.stringify(updatedCart));
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1400);
  const [isNavOpen, setIsNavOpen]= useState(false);
    useEffect(()=>{
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1400);
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    },[window.innerWidth]);
  return (
    <Router>
      <div className={`page-content ${isSmallScreen?`block`:`inline`}`}>
        <div className={`sidebar ${isSmallScreen?`block`:`inline`}`}>
          {isSmallScreen && (
            <div id='burger' className={`logo-menu`}>
              <i id='burger' class="fa-solid fa-bars fa-xl" style={{color: "#636363;"}} onClick={()=>{setIsNavOpen(!isNavOpen)}}></i>
              <div className="logo">
                <img src={Logo} alt='Logo'/>
                <h2>Unity Kick</h2>
              </div>
            </div>
          )}
          <Navbar isSmallScreen={isSmallScreen} removeFav={removeFromFav} isNavOpen={isNavOpen} setNavOpen={setIsNavOpen} Fav_teams={FavTeams}/>
      </div>
      <div className='right-side'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/Standings' element={<StandingPage/>}/>
            <Route path='/teams' element={<TeamsPage />}></Route>
            <Route path='/NationalTeam/:team' element={<ParticipatingCountry addFav={handleFavadd} FavList={FavTeams}/>}></Route>
            <Route path="/news/:id" element={<NewsPage />}></Route>
            <Route path='/Statistics/:match_id' element={<StatisticsPage/>}/>
            <Route path='/CityDetails' element={<CityDetails/>}></Route>
            <Route path="/host/:country" element={<HostCountries />}></Route>
            <Route path="/host/:country/stadium/:stadium" element={<Stadium />}></Route>
            <Route path="/host/:country/city/:city" element={<CityDetails />}></Route>
          </Routes>
          <Footer/>
      </div>
    </div>
  </Router>
  );
}

export default App;
