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
    <div className="window__header--small mdl-card__title" style={{background: '#ffffff', border: '2px solid #27ae60'}}>
      <h2 className="window__caption mdl-card__title-text" style={{color: '#000000'}}>🌍 ¡MISIÓN COMPLETADA!</h2>
    </div>
    <div style={{padding: '20px', background: '#ffffff', borderRadius: '8px', margin: '15px', textAlign: 'center', border: '1px solid #ddd'}}>
      <p style={{fontSize: '16px', color: '#000000', fontWeight: 'bold', margin: '10px 0'}}>
        🌱 ¡Felicidades Eco-Guerrero! 🌱
      </p>
      <p style={{fontSize: '14px', color: '#000000', lineHeight: '1.6', margin: '10px 0'}}>
        Has completado tu misión evitando áreas contaminadas con edificios quemados y árboles secos. 
        Cada viaje sin choques ayuda a reducir la contaminación y proteger nuestro planeta.
      </p>
      <p style={{fontSize: '13px', color: '#000000', fontWeight: '600', margin: '15px 0'}}>
        💚 Menos colisiones = Menos contaminación = Más vida 💚
      </p>
    </div>
    <table className="window__table mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <caption className="window__table__caption">Tu Impacto Ambiental</caption>
      <thead>
        <tr>
          <th>Tiempo</th>
          <th>Colisiones</th>
          <th>Puntos Eco</th>
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
      <caption className="window__table__caption">🏆 Mejores Logros Ecológicos</caption>
      <thead>
        <tr>
          <th className="mdl-data-table__cell--non-numeric">Nivel</th>
          <th>Tiempo</th>
          <th>Colisiones</th>
          <th>Puntos Eco</th>
        </tr>
      </thead>
      <tbody>
        {bestResultsTr}
      </tbody>
    </table>
    <div style={{padding: '15px', background: '#ffffff', borderRadius: '8px', margin: '15px', textAlign: 'center', border: '1px solid #ddd'}}>
      <p style={{fontSize: '12px', color: '#000000', margin: '5px 0', fontStyle: 'italic'}}>
        "Cada decisión cuenta. Conduce con cuidado, cuida el planeta." 🌎
      </p>
    </div>
    <div className="bottom-button-container">
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        onClick={chooseLevelHandler}
        style={{background: '#27ae60'}}
      >
        🌿 Elegir Nivel
      </button>
      <button
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        onClick={nextLevelHandler}
        style={{display: level !== 4 ? 'block' : 'none', background: '#2ecc71'}}
      >
        🚀 SIGUIENTE MISIÓN
      </button>
    </div>
  </div>
)};


export default Finish;