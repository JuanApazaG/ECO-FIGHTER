import React from 'react';
import '../../css/mobile-controls.css';

/**
 * Componente de controles móviles con botones visuales
 * Incluye: Izquierda, Derecha, Acelerar, Frenar
 */
const MobileControls = ({ 
  onLeftStart, 
  onLeftEnd,
  onRightStart, 
  onRightEnd,
  onAccelerateStart,
  onAccelerateEnd,
  onBrakeStart,
  onBrakeEnd,
  isVisible = true
}) => {
  
  if (!isVisible) return null;

  // Manejar eventos táctiles (touch + mouse para compatibilidad)
  const handleTouchStart = (callback) => (e) => {
    e.preventDefault();
    callback();
  };

  const handleTouchEnd = (callback) => (e) => {
    e.preventDefault();
    callback();
  };

  return (
    <div className="mobile-controls">
      {/* Controles de dirección - Lado izquierdo */}
      <div className="controls-group left-controls">
        <button 
          className="control-btn direction-btn left-btn"
          onTouchStart={handleTouchStart(onLeftStart)}
          onTouchEnd={handleTouchEnd(onLeftEnd)}
          onMouseDown={handleTouchStart(onLeftStart)}
          onMouseUp={handleTouchEnd(onLeftEnd)}
          onMouseLeave={handleTouchEnd(onLeftEnd)}
          aria-label="Girar a la izquierda"
        >
          <span className="material-icons">chevron_left</span>
        </button>

        <button 
          className="control-btn direction-btn right-btn"
          onTouchStart={handleTouchStart(onRightStart)}
          onTouchEnd={handleTouchEnd(onRightEnd)}
          onMouseDown={handleTouchStart(onRightStart)}
          onMouseUp={handleTouchEnd(onRightEnd)}
          onMouseLeave={handleTouchEnd(onRightEnd)}
          aria-label="Girar a la derecha"
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </div>

      {/* Controles de aceleración y freno - Lado derecho */}
      <div className="controls-group right-controls">
        <button 
          className="control-btn action-btn accelerate-btn"
          onTouchStart={handleTouchStart(onAccelerateStart)}
          onTouchEnd={handleTouchEnd(onAccelerateEnd)}
          onMouseDown={handleTouchStart(onAccelerateStart)}
          onMouseUp={handleTouchEnd(onAccelerateEnd)}
          onMouseLeave={handleTouchEnd(onAccelerateEnd)}
          aria-label="Acelerar"
        >
          <span className="material-icons">arrow_upward</span>
          <span className="btn-label">Acelerar</span>
        </button>

        <button 
          className="control-btn action-btn brake-btn"
          onTouchStart={handleTouchStart(onBrakeStart)}
          onTouchEnd={handleTouchEnd(onBrakeEnd)}
          onMouseDown={handleTouchStart(onBrakeStart)}
          onMouseUp={handleTouchEnd(onBrakeEnd)}
          onMouseLeave={handleTouchEnd(onBrakeEnd)}
          aria-label="Frenar"
        >
          <span className="material-icons">arrow_downward</span>
          <span className="btn-label">Frenar</span>
        </button>
      </div>
    </div>
  );
};

export default MobileControls;
