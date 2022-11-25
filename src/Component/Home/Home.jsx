import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getSortedGames } from '../../apiCalls.jsx'
import DisplayGames from '../DisplayGames/DisplayGames.jsx';
import './Home.css'


export default function Home() {
  let [details, setDetails] = useState([]);
 

async function getSortedGames() {
let {data} = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers:{'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},params:{'sort-by':'popularity'}})
     setDetails(data.slice(0,3));
}
useEffect(() => {
  getSortedGames();  
}, []) 
  
  return (
    <>
      <section className='home-section text-center my-5'>
        <h1 className="jumbotron-heading">Find &amp; track the best <span className="ftg-blue">free-to-play</span> games!</h1>
        <p className="lead text-muted">Track what you've played and search for what to play next! Plus get free premium loot! </p>
        <Link role="button" className="btn btn-outline-secondary btn-md ml-0" to="/games/all">Browse Games</Link>
      </section>
      <section>
        <div className="container">
        <h3 className='mb-3'><i className="fas fa-robot mr-2"></i>Personalized Recommendations</h3>
          <div className="row">
            { details.map((detail,index) => { return <DisplayGames key={index} info={detail} /> })}
          </div>
        </div>
      </section>
    </>
  )
}
