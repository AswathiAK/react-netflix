import React, { useEffect, useState } from 'react';
import Youtube from "react-youtube";
import "./RowPost.css";
import axios from '../../axios';
import {imageUrl,API_KEY} from "../../constants/constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err => {
      //alert('network error');
    })
  }, [])
  
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      console.log(response.data);
      if (response.data.results.length !== 0) {        
        setUrlId(response.data.results[0])
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie,index) => 
          <img onClick={()=>handleMovie(movie.id)} key={index} className={props.isSmall?'smallPoster':'poster'} 
           src= {`${imageUrl+movie.backdrop_path}`}   
           alt="poster" />
        )};   
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />} 
    </div>
  )
}

export default RowPost
