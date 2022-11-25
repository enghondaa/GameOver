import { useParams } from 'react-router-dom'
import React, { useState , useEffect} from 'react'
import AllGamesCard from '../AllGamesCard/AllGamesCard';
import { getGamesByCategory } from '../../apiCalls';
import Loading from '../Loading/Loading'


export default function Categories() {
    const [slices , setSlices ] = useState(20)
  const [games , setGames ] = useState([])
  const [displayGames , setDisplayGames ] = useState([])
    let {type}= useParams();
    useEffect(()=>{
      getGames()
  },[type])
  async function getGames(){
    let data = await getGamesByCategory(type);
    setGames(data);
    setDisplayGames(data.slice(0,slices));
  }
  function showMore(){
    setSlices(slices+20)
    setDisplayGames(games.slice(0,slices));
}
  return <>
  <div className="section">
      <div className="container">
          <div className="row">
              {displayGames.map((map,index)=><AllGamesCard key={index} info={map}/>)}
          </div>
          <div className="row">
              <div className="col-12 text-center">
              {displayGames.length>0 ?<button className='btn btn-primary' onClick={showMore}>Show More</button>:<Loading/>}
              </div>
          </div>
      </div>
  </div>


</>
}
