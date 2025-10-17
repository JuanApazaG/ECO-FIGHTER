import rn from '../../functions/randomNumber';

const createComposition = (width, height, long, imgs) => {
  const { trees, buildings } = imgs;
  
  let length = Math.round(height * long / width);
  
  return new Array(length+5).fill(null).map(i => {
    if (rn(0,1)) {
      return {
        type: 'building',
        img: buildings[rn(0, buildings.length-1)]
      }
    } else {
      return {
        type: 'tree',
        img: trees[rn(0, trees.length-1)]
      }
    }
  })
};

class Street {
  constructor(width, height, side, long, imgs) {
    this.width = width;
    this.height = height;
    this.side = side;
    this.shift = 0;
    this.long = long;
    this.addShift = side === 'left' ? 100 : 0;
    
    this.composition = createComposition(width, height, long, imgs);
  }
  
  drawItem(ctx, item) {
    // Detectar si es móvil por el ancho del canvas
    const isMobile = this.width < 100;
    
    // En móvil: obstáculos MÁS PEQUEÑOS para mejor jugabilidad
    const buildingScale = isMobile ? 0.70 : 0.8;
    const treeScale = isMobile ? 0.65 : 0.6;
    
    // Offset para centrar mejor los obstáculos
    const buildingOffset = isMobile ? 0.15 : 0.1;
    const treeOffset = isMobile ? 0.175 : 0.2;
    
    const drawMethods = {
      building: (ctx, img) => {
        let w = buildingScale * this.width;
        ctx.drawImage(img, buildingOffset * this.width, 0, w, w);
      },
      tree: (ctx, img) => {
        let w = treeScale * this.width;
        ctx.drawImage(img, treeOffset * this.width, 0, w, w)
      }
    };
    
    drawMethods[item.type](ctx, item.img);
  }
  
  drawComposition(ctx) {
    let index = this.shift/(this.long*this.height);
    index = Math.round(this.long * index * this.height / this.width);
    
    // En móvil mostrar menos edificios (8 en lugar de 10) para reducir densidad
    const isMobile = this.width < 100;
    const itemsToShow = isMobile ? 8 : 6;
    
    for (let i = index ; i < index + itemsToShow ; i++) {
      ctx.save();
        ctx.translate(0, this.width*(this.composition.length - 1 - i));
        this.drawItem(ctx, this.composition[i]);
        ctx.restore();
    }
  
  }
  
  drawGround(ctx) {
    let x = this.side === 'left'? 0 : 5;
    ctx.fillStyle = '#009933';
    ctx.fillRect(x, 0, this.width - 5, this.height);
  }
  
  setShift(newShift) {
    this.shift = newShift;
  }
  
  draw(ctx) {
    ctx.beginPath();
    this.drawGround(ctx);
    ctx.save();
  
    ctx.translate(0, -this.height*(this.long+0.1) + this.shift + this.addShift);
    this.drawComposition(ctx);
    
    ctx.restore();
    ctx.closePath();
  }
}

export default Street;