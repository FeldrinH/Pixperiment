var renderer = PIXI.autoDetectRenderer(600,600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var guy = PIXI.Sprite.fromImage('textures/guy.png');