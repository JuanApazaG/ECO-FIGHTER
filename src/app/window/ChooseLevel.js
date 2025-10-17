import React from 'react';

import '../../css/window.css';

const ChooseLevel = props => {
  const { onClickHandler, backClickHandler } = props;
  
  const levelNames = [
    '🌱 Principiante',
    '🌿 Intermedio', 
    '🌳 Avanzado',
    '🌲 Experto',
    '🌍 Guardián'
  ];
  
  const levelButtons = new Array(5).fill(null).map((e, i) => (
    <button
      className="choose-level-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      key={i}
      onClick={onClickHandler(i)}
      style={{background: `linear-gradient(135deg, ${i === 0 ? '#a8e6cf' : i === 1 ? '#81c784' : i === 2 ? '#66bb6a' : i === 3 ? '#4caf50' : '#2e7d32'} 0%, ${i === 0 ? '#81c784' : i === 1 ? '#66bb6a' : i === 2 ? '#4caf50' : i === 3 ? '#388e3c' : '#1b5e20'} 100%)`}}
    >
      {levelNames[i]}
    </button>
  ));
  
  return (
  <div className="window mdl-card mdl-shadow--2dp">
    <div className="window__header choose-level-background mdl-card__title" style={{background: '#ffffff', border: '2px solid #27ae60'}}>
      <h2 className="window__caption mdl-card__title-text" style={{color: '#000000'}}>🎯 Elige tu Desafío Ecológico</h2>
    </div>
    <div style={{padding: '10px', background: '#ffffff', margin: '10px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ddd'}}>
      <p style={{fontSize: '12px', color: '#000000', margin: '5px 0'}}>
        💚 Cada nivel representa mayor compromiso ambiental
      </p>
    </div>
    <div className={'window__button-container'}>
    {levelButtons}
    </div>
    <button
      className="window-back mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
      onClick={backClickHandler}
      style={{background: '#16a085', color: '#ffffff'}}
      title="Volver"
    >
      <i className="material-icons" style={{fontSize: '24px'}}>arrow_back</i>
    </button>
  </div>
)};

export default ChooseLevel;