import React from 'react';

import '../../css/window.css';
import arrows from '../../img/window/arrows.png';

const Instruction = ({ onClickHandler, backClickHandler }) => (
  <div className="window mdl-card mdl-shadow--2dp">
    <div className="window__header--small mdl-card__title" style={{background: '#ffffff', border: '2px solid #27ae60'}}>
      <h2 className="window__caption mdl-card__title-text" style={{color: '#000000'}}>🎮 Cómo Jugar</h2>
    </div>
    <div style={{padding: '15px', background: '#ffffff', margin: '10px', borderRadius: '8px', border: '1px solid #ddd'}}>
      <p style={{fontSize: '13px', color: '#000000', fontWeight: 'bold', textAlign: 'center', margin: '5px 0'}}>
        🌍 TU MISIÓN: Navegar sin chocar con la contaminación
      </p>
    </div>
    <span className="window__text" style={{fontSize: '14px', fontWeight: '600'}}>
      🚗 Mantén presionado ▲ para acelerar
    </span>
    <div className="window__middle-wrapper">
      <span className="window__text" style={{fontSize: '13px'}}>
        ◀️ Izquierda
      </span>
      <img className="arrows" src={arrows} alt={'arrows'} />
      <span className="window__text" style={{fontSize: '13px'}}>
        Derecha ▶️
      </span>
    </div>
    <span className="window__text" style={{fontSize: '14px', fontWeight: '600'}}>
      🛑 Presiona ▼ para frenar
    </span>
    <div style={{padding: '10px', background: '#ffffff', margin: '10px', borderRadius: '8px', border: '2px solid #ffc107'}}>
      <p style={{fontSize: '12px', color: '#000000', textAlign: 'center', margin: '5px 0'}}>
        ⚠️ Evita chocar con edificios quemados y árboles secos<br/>
        💚 ¡Menos choques = Mayor puntaje ecológico!
      </p>
    </div>
    <button
      className="start-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      onClick={onClickHandler}
      style={{background: '#2ecc71'}}
    >
      EMPEZAR
    </button>
    <button
      className="window-back mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
      onClick={backClickHandler}
      style={{background: '#16a085', color: '#ffffff'}}
      title="Volver"
    >
      <i className="material-icons" style={{fontSize: '24px'}}>arrow_back</i>
    </button>
  </div>
);

export default Instruction;