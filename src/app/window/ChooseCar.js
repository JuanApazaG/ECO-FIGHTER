import React, { Component } from 'react';

import '../../css/window.css';
import { playerCars } from '../functions/loadImages';

class ChooseCar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cars: new Array(3).fill(false).map((v, i) => props.playerCar === i )
    };
    
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  
  onClickHandler(i) {
    return () => {
      const newCars = new Array(3).fill(false);
      newCars[i] = true;
      this.props.changePlayerCarHandler(i);
      
      this.setState({
        cars: newCars
      });
    }
  }
  
  render() {
    const cars = this.state.cars.map((v, i) => (
      <div key={i} className={(v ? 'container-checked ': '') +
      "car-button-container mdl-card mdl-shadow--2dp"}>
        <button className="choose-car-button mdl-button mdl-js-button mdl-button--fab"
                onClick={this.onClickHandler(i)}
        >
          <img className="car-image" src={playerCars[i].src} alt={'car'}/>
        </button>
      </div>
    ));
    
    const { backClickHandler, forwardClickHandler } = this.props;
    
    return (
      <div className="window mdl-card mdl-shadow--2dp">
        <div className="window__header choose-car-background text-right mdl-card__title" style={{background: '#ffffff', border: '2px solid #27ae60'}}>
          <h2 className="window__caption mdl-card__title-text" style={{color: '#000000'}}>🚗 Elige tu Vehículo Eco</h2>
        </div>
        <div style={{padding: '10px', background: '#ffffff', margin: '10px', borderRadius: '8px', textAlign: 'center', border: '1px solid #ddd'}}>
          <p style={{fontSize: '12px', color: '#000000', margin: '5px 0'}}>
            🌱 Cada vehículo representa tu compromiso con el ambiente
          </p>
        </div>
        <div className="car-container">
          {cars}
        </div>
        <button
          className="window-back mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          onClick={backClickHandler}
          style={{background: '#16a085', color: '#ffffff'}}
          title="Volver"
        >
          <i className="material-icons" style={{fontSize: '24px'}}>arrow_back</i>
        </button>
        <button
          className="window-next mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          onClick={forwardClickHandler}
          style={{background: '#27ae60', color: '#ffffff'}}
          title="Continuar"
        >
          <i className="material-icons" style={{fontSize: '24px'}}>arrow_forward</i>
        </button>
      </div>
    )
  }
}

export default ChooseCar;