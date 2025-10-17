import React from 'react';

import '../../css/window.css';
import arrows from '../../img/window/arrows.png';

const Instruction = ({ onClickHandler, backClickHandler }) => (
  <div className="window mdl-card mdl-shadow--2dp">
    <div className="window__header--small mdl-card__title">
      <h2 className="window__caption mdl-card__title-text">Instrucciones</h2>
    </div>
    <span className="window__text">
      Mantenga pulsado para conducir
    </span>
    <div className="window__middle-wrapper">
      <span className="window__text">
        presione para moverse a la izquierda
      </span>
      <img className="arrows" src={arrows} alt={'arrows'} />
      <span className="window__text">
        presione para moverse a la derecha
      </span>
    </div>
    <span className="window__text">
      presione para frenar
    </span>
    <button
      className="start-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      onClick={onClickHandler}
    >
      JUGAR
    </button>
    <button
      className="window-back mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
      onClick={backClickHandler}
    >
      <i className="material-icons">arrow_back</i>
    </button>
  </div>
);

export default Instruction;