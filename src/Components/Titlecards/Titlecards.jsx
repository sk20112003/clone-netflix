import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const Titlecards = ({title,category}) => {
const [apiData, setapiData]=useState([]);
const cardrefs=useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTk0NDk3MmNhNzExZmE3Zjc5NTcxYmI0MWExZmI4ZiIsIm5iZiI6MTcyMDMzNTM1NS43NTk4NjIsInN1YiI6IjY2MTNmN2FiNTQzN2Y1MDE0YTdkNGMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyQMNOi_eMD4YPXIiHVh-ecDZpB7fj3PR1UUtY48vg4'
  }
};


const handlewheel=(event)=>{
  event.preventDefault();
  cardrefs.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setapiData(response.results))
  .catch(err => console.error(err));

  cardrefs.current.addEventListener('wheel',handlewheel)
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardrefs}>
        {apiData.map((card,index)=>{
             return <Link to={`player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
                <p>{card.original_title}</p>
             </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards
