import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContextGlobal()

  return (
    <div className={state.theme}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
          {state.favs.map(fav => <Card data={fav} key={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
