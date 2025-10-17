import React from 'react';

import '../../css/score-panel.css';
import crashIcon from '../../img/score/crash.png';
import timerIcon from '../../img/score/timer.png';


const ScorePanel = props => {
  // Calcular puntos ecológicos: menos colisiones = más puntos
  const ecoScore = Math.max(0, 1000 - (props.collisionCount * 50) + (props.time * 2));
  
  return (
    <div className={'score-panel'}>
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        <img className={'score-panel__timer-icon'} src={timerIcon} alt={'timerIcon'} title="Tiempo de Misión"/>
        <span className={'score-panel__score'}>
          {props.time}
        </span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        <img className={'score-panel__crash-icon'} src={crashIcon} alt={'crashIcon'} title="Impactos Ambientales"/>
        <span className={'score-panel__score'} style={{color: '#000000', fontWeight: 'bold'}}>
          {props.collisionCount}
        </span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        <span style={{fontSize: '14px', fontWeight: 'bold'}} title="Puntos Ecológicos">🌿</span>
        <span className={'score-panel__score'} style={{color: '#000000', fontWeight: 'bold'}}>
          {ecoScore}
        </span>
      </div>
    </div>
  );
};

export default ScorePanel;