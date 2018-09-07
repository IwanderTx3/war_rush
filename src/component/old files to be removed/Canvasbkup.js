import React, {Component} from 'react';
import '../App.css';

let canvas = null;
let context = null;

class Canvas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lost :true,
            canvas : null,
            context : null,
            img : null,
        }
    }



componentDidMount()
{
   this.setState({

   canvas : this.refs.canvas,
   contex : canvas.getContext('2d'),
   img : this.refs.image,
})
   console.log(canvas)
   console.log(contex)
   console.log(img)

 var Sprite = function(filename , is_tile)
    {
        this.image = null;
        this.tile = null;
        this.facing = Math.PI/180;

    if (filename !== undefined && filename !== "" && filename !== null){
        this.image = new Image();
        this.image.src = filename;
        if (is_tile)
            this.tile = this.context.createTile(this.image, 'repeat');
    } else console.log("unable to load sprite");

    this.draw = function(x,y,w,h)
    {
        if (this.pattern != null)
            {
                this.context.fillstyle = this.pattern;
                this.context.fillReact(x,y,w,h);
            } else 
                {
                    if (w != undefined || h != undefined)
                    {
                        this.context.drawImage(  this.image, x, y,
                                                    this.image.width,
                                                    this.image.height);                                                                
                    } 
                    else 
                    {
                        this.context.drawImage(this.image, x,y,w,h);
                    }
                }
    }
    this.rotate = function(x,y, angle)
    {
        this.context.save();
        this.context.translate(x,y);
        this.context.rotate(angle * this.TO_RADIANS);
        this.context.drawImage(this.image,
            -(this.image.width/2),
            -(this.image.height/2));
        this.context.restore();
    };

   
};
        var tank = new Sprite('./units/Hex_Unit_Tank_Red_.png', false);
        console.log(tank);
        console.log('FUCKING BOOM')
       // tank.draw(0,0,96,96);
}




render ()
{
    return(
        <div>
        <canvas ref='canvas' width ={1600} height = {700} className='canvasBorder'/>
        <img ref="image" scr='./units/Hex_Unit_Tank_Red_.png' />
        </div>        
    )
}

}

export default Canvas