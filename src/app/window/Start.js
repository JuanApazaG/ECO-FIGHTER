import React from 'react';

import '../../css/start.css';
import cup from '../../img/start/cup.png';
import gif from  '../../img/start/car_background.gif';
import finish from  '../../img/start/img_finish.png';


const Start = props => (
  <div className={'start'}>
    <div className={'start__image__wrapper'}>
      <img className={'start__image'} src={gif} alt={'car'}/>
      <img className={'start__image'} src={cup} alt={'cup'}/>
      <img className={'start__image start__mirror'} src={gif} alt={'car'}/>
    </div>
    <div className={'title'}>
      <img className={'title__image start__mirror'} src={finish} alt={'finish'}/>
      <span className={'title__text'}>
        🌍 ECO FIGHTER 🌱
      </span>
      <img className={'title__image'} src={finish} alt={'finish'}/>
    </div>
    <div style={{
      padding: '12px 20px',
      background: '#ffffff',
      borderRadius: '8px',
      margin: '15px auto',
      maxWidth: '85%',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '2px solid #27ae60'
    }}>
      <p style={{
        color: '#000000',
        fontSize: '14px',
        fontWeight: 'bold',
        margin: '5px 0',
        textAlign: 'center'
      }}>
        💚 Conduce con cuidado por zonas contaminadas 💚
      </p>
      <p style={{
        color: '#000000',
        fontSize: '12px',
        margin: '5px 0',
        textAlign: 'center',
        lineHeight: '1.4'
      }}>
        Evita edificios quemados y árboles secos.<br/>
        ¡Cada viaje limpio salva el planeta!
      </p>
    </div>
    <button
      className="play-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      onClick={() => props.onClickHandler && props.onClickHandler()}
      style={{background: '#27ae60', boxShadow: '0 4px 12px rgba(39, 174, 96, 0.4)'}}
    >
      🎮 JUGAR AHORA
    </button>
  </div>
);

export default Start