import React, { useEffect, useRef } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'

const Titlecards = ({title,category}) => {

  
const cardrefs=useRef();

const handlewheel=(event)=>{
  event.preventDefault();
  cardrefs.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  cardrefs.current.addEventListener('wheel',handlewheel)
},[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className="card-list" ref={cardrefs}>
        {cards_data.map((card,index)=>{
             return <div className="card" key={index}>
                <img src={card.image} alt=''/>
                <p>{card.name}</p>
             </div>
        })}
      </div>
    </div>
  )
}

export default Titlecards
