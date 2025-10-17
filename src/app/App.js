import React, { Component } from 'react';

import '../css/app.css';
import '../css/mobile.css';
import { START } from './constants/windowTypes';
import Window from './window/Window';
import { onLoad } from './functions/loadImages';

class App extends Component {
  constructor(props) {
    super(props);
  
    onLoad.then(() => this.forceUpdate());
  
    this.state = {
      level: null,
      playerCar: 0,
      currentWindow: START,
      currentResult: null,
      bestResults: new Array(5).fill(null),
      doc: this.props.doc,
      isMobile: false,
      deviceWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
      deviceHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
      orientation: typeof window !== 'undefined' ? 
        (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') : 'portrait'
    };
    
    this.changeWindowHandler = this.changeWindowHandler.bind(this);
    this.chooseLevelHandler = this.chooseLevelHandler.bind(this);
    this.changePlayerCarHandler = this.changePlayerCarHandler.bind(this);
    this.playerFinishedHandler = this.playerFinishedHandler.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    // Detectar cambios de tamaño y orientación
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('orientationchange', this.handleResize);
    
    // Actualizar estado inicial
    this.handleResize();
    
    // Prevenir zoom accidental
    document.addEventListener('wheel', (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('orientationchange', this.handleResize);
  }

  handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;
    const orientation = width > height ? 'landscape' : 'portrait';

    this.setState({
      isMobile,
      deviceWidth: width,
      deviceHeight: height,
      orientation
    });
  }
  
  chooseLevelHandler(level) {
    this.setState({
      level
    });
  }
  
  changeWindowHandler(newWindow) {
    return () => {
      this.setState({
        currentWindow: newWindow
      });
    }
  }
  
  changePlayerCarHandler(i) {
    this.setState({
      playerCar: i
    });
  }
  
  playerFinishedHandler(time, collisions) {
    const { bestResults, level } = this.state;
  
    const currentResult = {
      time, collisions,
      score: Math.round(10000000/(time + collisions*5)*(level+1))
    };
    
    if (!bestResults[level] || bestResults[level].score < currentResult.score) {
      const newBestResults = bestResults.slice();
      newBestResults[level] = currentResult;
      
      this.setState({
        currentResult,
        bestResults: newBestResults
      });
    } else {
      this.setState({
        currentResult
      });
    }
  }
  
  render() {
    const {
      changeWindowHandler,
      chooseLevelHandler,
      changePlayerCarHandler,
      playerFinishedHandler
    } = this;
    
    const handlers = {
      changeWindowHandler,
      chooseLevelHandler,
      changePlayerCarHandler,
      playerFinishedHandler
    };

    const deviceInfo = {
      isMobile: this.state.isMobile,
      width: this.state.deviceWidth,
      height: this.state.deviceHeight,
      orientation: this.state.orientation
    };
    
    return (
      <div className={'app'}>
        <Window appState={this.state}
                handlers={handlers}
                deviceInfo={deviceInfo}/>
      </div>
    )
  }
}

export default App;