import React from "react";
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.Context'

const Card = ({ data }) => {
  const {state,dispatch} = useContextGlobal()

  const findFav = state.favs.find((fav) => fav.id == data.id)

  const addFav = ()=>{
    if(findFav){
      alert('Este doctor ya está agregado a favoritos')
    } else {
    dispatch({type: "ADD_FAV", payload:data})
    }
  }

  return (
    <div className="card">
        <Link to={'/dentista/' + data.id}>
        <img src="/images/doctor.jpg" alt="dentista" />
        <h4>{data.name}</h4>
        <h5>{data.username}</h5>
      </Link>
      <button onClick={addFav} className="favButton">{findFav ? '🌟' : '⭐'}</button>
    </div>
  );
};

export default Card;
