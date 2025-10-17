import React from 'react';

import '../../css/window.css';
import music from '../../mp3/finish.mp3';


const Finish = props => {
  const { currentResult, bestResults, chooseLevelHandler, nextLevelHandler, level } = props;
  let empty = '--//--';
  const bestResultsTr = bestResults.map((res, i) => {
    if (res) {
      return (
        <tr>
          <td className="mdl-data-table__cell--non-numeric">{i+1}</td>
          <td>{res.time}</td>
          <td>{res.collisions}</td>
          <td>{res.score}</td>
        </tr>
      )
    } else {
      return (
        <tr key={i+1}>
          <td className="mdl-data-table__cell--non-numeric">{i+1}</td>
          <td>{empty}</td>
          <td>{empty}</td>
          <td>{empty}</td>
        </tr>
      )
    }
  });
  
  return (
  <div className="window mdl-card mdl-shadow--2dp">
    <audio src={music} autoPlay={true}></audio>
    <div className="window__header--small mdl-card__title">
      <h2 className="window__caption mdl-card__title-text">Terminaste lo lograste</h2>
    </div>
    <table className="window__table mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <caption className="window__table__caption">Tu resultado</caption>
      <thead>
        <tr>
          <th>Tiempo</th>
          <th>Colisiones</th>
          <th>Puntuación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{currentResult.time}</td>
          <td>{currentResult.collisions}</td>
          <td>{currentResult.score}</td>
        </tr>
      </tbody>
    </table>
    <table className="window__table mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <caption className="window__table__caption">Mejor resultado</caption>
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Nivel</th>
          <th>Tiempo</th>
          <th>Colisiones</th>
          <th>Puntuación</th>
        </tr>
      </thead>
      <tbody>
        {bestResultsTr}
      </tbody>
    </table>
    <div className="bottom-button-container">
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        onClick={chooseLevelHandler}
      >
        Selecciona nivel
      </button>
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        onClick={nextLevelHandler}
        style={{display: level !== 4 ? 'block' : 'none'}}
      >
        SIGUIENTE NIVEL
      </button>
    </div>
  </div>
)};


export default Finish;