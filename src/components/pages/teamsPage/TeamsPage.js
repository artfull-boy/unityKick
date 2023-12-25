import React from "react";
import './teamsPage.css';
import data from "../../../data/teams.json";
import { useState,useEffect } from "react";

function TeamsPage() {
    /*-----API CALL--------*/
    const [TeamData, setTeamData] = useState([]);
    useEffect (()=>{
        const url = 'https://api-football-v1.p.rapidapi.com/v3/countries';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4afff38393mshbe4a049d71c877bp175c89jsnabdcff598280',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setTeamData(result.name);
                console.log(result);
            } catch (error) {
                console.error(error);
                console.log("salam")
            }
        }
        fetchData();
    },[])
    const [continent, setContinent] = React.useState("All");
    const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth < 880);
    React.useEffect(()=>{
        const handleResize = () => setIsSmallScreen(window.innerWidth < 880);
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    },[window.innerWidth]);
    const filtres = () => {
        if (isSmallScreen) {
            return (
                <div className="FiltersTeams">
                    <select value={continent} onChange={(e) => setContinent(e.target.value)}>
                    <option value={"All"} className={`filters ${continent === "All"?"active":""}`} >All Continents</option>
                    <option value={"Africa"} className={`filters ${continent === 'Africa'? 'active' : ''}`}>Africa</option>
                    <option value={"Asia"} className={`filters ${continent === "Asia"? "active" : ""} `}>Asia</option>
                    <option value={"North America"} className={`filters ${continent === "North America"?"active":""}`}>North America</option>
                    <option value={"South America"} className={`filters ${continent === "South America"?"active":""}`}>South America</option>
                    <option value={"Oceania"} className={`filters ${continent === "Oceania"?"active":""}`}>Oceania</option>
                    <option value={"Europe"} className={`filters ${continent === "Europe"?"active":""}`}>Europe</option>
                    </select>
                </div>
            )
        }
        else {
            return (
                <div className="FiltersTeams">
                    <p className={`filters ${continent === "All"?"active":""}`} onClick={() => setContinent("All")}>All Continents</p>
                    <p className={`filters ${continent === 'Africa'? 'active' : ''}`} onClick={() => setContinent("Africa")}>Africa</p>
                    <p className={`filters ${continent === "Asia"? "active" : ""} `} onClick={() => setContinent("Asia")}>Asia</p>
                    <p className={`filters ${continent === "North America"?"active":""}`} onClick={() => setContinent("North America")}>North America</p>
                    <p className={`filters ${continent === "South America"?"active":""}`} onClick={() => setContinent("South America")}>South America</p>
                    <p className={`filters ${continent === "Oceania"?"active":""}`} onClick={() => setContinent("Oceania")}>Oceania</p>
                    <p className={`filters ${continent === "Europe"?"active":""}`} onClick={() => setContinent("Europe")}>Europe</p>
                </div>
            )
        }
    }
    const renderCountries = () => {
        if (continent === "All") {
           return data.map((array) => (
                <div className="Continent">
                        <p className="continentName">
                        🌍 {array.name}
                        </p>
                        <div className="continentCountries">
                            {array.country.map((country) => <img className="flag" src={`https://media.api-sports.io/flags/${country}.svg`} /> )}
                        </div>
                </div>
            ))
        }
        else {
            const selectedContinentData = data.find((item) => item.name === continent);
            if (selectedContinentData) {
                return (
                    <div className="Continent">
                            <p className="continentName">
                            🌍 {selectedContinentData.name}
                            </p>
                            <div className="continentCountries">
                                {selectedContinentData.country.map((country) => <img className="flag" src={`https://media.api-sports.io/flags/${country}.svg`} /> )}
                            </div>
                    </div>
                )
            }
        }
    }
    return (
        <div className="TeamsPage">
            <p className='standingTitle'>
                🎮 Teams
            </p>
            <div className="TeamsSection">
                {filtres()}
                <div className="Teams">
                    {renderCountries()}
                </div>
            </div>
        </div>
    );
}

export default TeamsPage;