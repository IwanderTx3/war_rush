import React, {Component} from 'react';
import '../App.css';
import redtank from '../images/units/Hex_Tank_Red_TextureTest3.png';
import redtank1 from '../images/units//Tank/R_1.png';
import redtank2 from '../images/units//Tank/R_2.png';
import redtank3 from '../images/units//Tank/R_3.png';
import redtank4 from '../images/units//Tank/R_4.png';
import redtank5 from '../images/units//Tank/R_5.png';
import redtank6 from '../images/units//Tank/R_6.png';
import bluetank1 from '../images/units//Tank/B_1.png';
import bluetank2 from '../images/units//Tank/B_2.png';
import bluetank3 from '../images/units//Tank/B_3.png';
import bluetank4 from '../images/units//Tank/B_4.png';
import bluetank5 from '../images/units//Tank/B_5.png';
import bluetank6 from '../images/units//Tank/B_6.png';
import greentank1 from '../images/units//Tank/G_1.png';
import greentank2 from '../images/units//Tank/G_2.png';
import greentank3 from '../images/units//Tank/G_3.png';
import greentank4 from '../images/units//Tank/G_4.png';
import greentank5 from '../images/units//Tank/G_5.png';
import greentank6 from '../images/units//Tank/G_6.png';

import bluetank from '../images/units/2_70.png';
import greentank from '../images/units/Hex_Tank_Green_TextureTest2.png';
import tanksprite from '../images/units/b2.png';
//import greentank from '../images/units/Hex_Grass_4.png';
import tile0 from '../images/Hex_Ocean_1.png';
import tile1 from '../images/Hex_Grass_4.png';
import tile2 from '../images/Hex_SandDunes_5.png';
import tile3 from '../images/Hex_Swamp_4.png';
import tile4 from '../images/Hex_Hill_6.png';
import tile5 from '../images/Hex_Forest_1.png';
import tile6 from '../images/Hex_Hill_3.png';
import tile7 from '../images/Hex_Mountain_3.png';

class Canvas extends Component {
    constructor(props){
        super(props);
        this.state = {
            hexSize: 64,
           // canvasSize:{ canvasWidth:window.innerWidth, canvasHeight:window.innerHeight},
        }

        this.Sprite = class{
            constructor(filename,is_tile,canvas){
                this.filename = filename;
                this.is_tile = is_tile;
                this.tile = null;
                this.rotation = Math.PI/180;
                this.canvasID = canvas
                this.ctx = this.canvasID.getContext("2d");
                if (filename !== undefined && filename !== "" && filename !== null){
                    this.image = new Image();
                    this.image.src = filename;
 //                   if (is_tile) 
 //                   this.tile = this.ctx.createPattern(this.image, 'repeat');
                }
                else
                    console.log("Unable to load sprite");
            }

            draw(x,y,w,h)
            {
                if (this.tile != null)
                {
                    this.ctx.fillstyle=this.tile;
                    this.ctx.fillRect(x,y,w,h);
                } else 
                {
                    if (w !== undefined || h !== undefined){
                        this.ctx.drawImage( this.image, x,y,
                            this.image.width,
                            this.image.height);
                    }
                    else
                    {
                        this.ctx.drawImage(this.image, x,y,w,h)
                    }
                }
            }

           rotate(x,y,angle){
                this.ctx.save();
                this.ctx.translate(x,y);
                this.ctx.rotate(angle* this.rotation);
                this.ctx.drawImage(this.image,
                    //console.log(this.image.height),
                    -((this.image.width)/2),
                    -((this.image.height)/2))
                this.ctx.restore();
            };
        }
    }

    componentWillMount(){
        this.setState({
            canvasSize:{ canvasWidth:window.innerWidth, canvasHeight:window.innerHeight},
        })
    }

    componentDidMount(){
        const { canvasWidth, canvasHeight} = this.state.canvasSize;
        this.mapCanvas.width = canvasWidth;
        this.mapCanvas.height = canvasHeight;
        var Sprite = this.Sprite;
        var tank = new Sprite(redtank, false, this.mapCanvas);
        var tank2 = new Sprite(bluetank, false,this.mapCanvas);
        var tank3 = new Sprite(greentank, false,this.mapCanvas);
        var tank4 = new Sprite(tanksprite, false,this.mapCanvas);
        var tank5 = new Sprite(tanksprite, false,this.mapCanvas);
        var tank6 = new Sprite(tanksprite, false,this.mapCanvas);
        var R1 = new Sprite(redtank1,false,this.mapCanvas);
        var R2 = new Sprite(redtank2,false,this.mapCanvas);
        var R3 = new Sprite(redtank3,false,this.mapCanvas);
        var R4 = new Sprite(redtank4,false,this.mapCanvas);
        var R5 = new Sprite(redtank5,false,this.mapCanvas);
        var R6 = new Sprite(redtank6,false,this.mapCanvas);
        var B1 = new Sprite(bluetank1,false,this.mapCanvas);
        var B2 = new Sprite(bluetank2,false,this.mapCanvas);
        var B3 = new Sprite(bluetank3,false,this.mapCanvas);
        var B4 = new Sprite(bluetank4,false,this.mapCanvas);
        var B5 = new Sprite(bluetank5,false,this.mapCanvas);
        var B6 = new Sprite(bluetank6,false,this.mapCanvas);
        var G1 = new Sprite(greentank1,false,this.mapCanvas);
        var G2 = new Sprite(greentank2,false,this.mapCanvas);
        var G3 = new Sprite(greentank3,false,this.mapCanvas);
        var G4 = new Sprite(greentank4,false,this.mapCanvas);
        var G5 = new Sprite(greentank5,false,this.mapCanvas);
        var G6 = new Sprite(greentank6,false,this.mapCanvas);
        var pattern = new Sprite(tile0, true,this.mapCanvas);
        var pattern1 = new Sprite(tile1, true,this.mapCanvas);
        var pattern2 = new Sprite(tile2, true,this.mapCanvas);
        var pattern3 = new Sprite(tile3, true,this.mapCanvas);
        var pattern4 = new Sprite(tile4, true,this.mapCanvas);
        var pattern5 = new Sprite(tile5, true,this.mapCanvas);
        var pattern6 = new Sprite(tile6, true,this.mapCanvas);
        var pattern7 = new Sprite(tile7, true,this.mapCanvas);
//        var angle = 0;
        var angle4 = 0;
        var angle5 = 0;
        var angle6 = 0;
        var G1x = 480;
        var G1y = 336;
        var loopcount = 0;
        var moved = 0;
 //       let count = 1;

        setInterval(function(){
            
 //           console.log(count);
//            count = count +1;
 //           console.log(angle);
            if (loopcount==10){
            G1x = G1x + 48;
            G1y = G1y - 24;
            moved = moved + 1;
            loopcount = 0;};

            if (moved == 8){
                G1x = 480;
                G1y = 336;
                moved = 0;
                loopcount = 0; 
            }

            loopcount = loopcount+1;
            console.log(loopcount);
            pattern.draw(0,0,'','');
            pattern.draw(192,0,'','');
            pattern.draw(384,0,'','');
            pattern.draw(576,0,'','');
            pattern.draw(768,0,'','');
            pattern.draw(960,0,'','');
            pattern.draw(1152,0,'','');
            pattern.draw(1344,0,'','');
            pattern.draw(1536,0,'','');
            pattern.draw(96,48,'','');
            pattern.draw(288,48,'','');
            pattern1.draw(480,48,'','');
            pattern1.draw(672,48,'','');
            pattern.draw(864,48,'','');
            pattern.draw(1056,48,'','');
            pattern1.draw(1248,48,'','');
            pattern.draw(1440,48,'','');
            pattern1.draw(1632,48,'','');

            pattern.draw(0,96,'','');
            pattern.draw(192,96,'','');
            pattern1.draw(384,96,'','');
            pattern2.draw(576,96,'','');
            pattern1.draw(768,96,'','');
            pattern5.draw(960,96,'','');
            pattern1.draw(1152,96,'','');
            pattern4.draw(1344,96,'','');
            pattern1.draw(1536,96,'','');

            pattern.draw(96,144,'','');
            pattern1.draw(288,144,'','');
            pattern3.draw(480,144,'','');
            pattern3.draw(672,144,'','');
            pattern7.draw(864,144,'','');
            pattern7.draw(1056,144,'','');
            pattern6.draw(1248,144,'','');
            pattern1.draw(1440,144,'','');
            pattern1.draw(1632,144,'','');

            pattern.draw(0,192,'','');
            pattern.draw(192,192,'','');
            pattern1.draw(384,192,'','');
            pattern1.draw(576,192,'','');
            pattern7.draw(768,192,'','');
            pattern7.draw(960,192,'','');
            pattern7.draw(1152,192,'','');
            pattern1.draw(1344,192,'','');
            pattern1.draw(1536,192,'','');

            pattern1.draw(96,240,'','');
            pattern.draw(288,240,'','');
            pattern1.draw(480,240,'','');
            pattern1.draw(672,240,'','');
            pattern1.draw(864,240,'','');
            pattern6.draw(1056,240,'','');
            pattern4.draw(1248,240,'','');
            pattern5.draw(1440,240,'','');
            pattern5.draw(1632,240,'','');

            pattern.draw(0,288,'','');
            pattern.draw(192,288,'','');
            pattern.draw(384,288,'','');
            pattern1.draw(576,288,'','');
            pattern5.draw(768,288,'','');
            pattern5.draw(960,288,'','');
            pattern7.draw(1152,288,'','');
            pattern6.draw(1344,288,'','');
            pattern5.draw(1536,288,'','');

            pattern.draw(96,336,'','');
            pattern.draw(288,336,'','');
            pattern1.draw(480,336,'','');
            pattern1.draw(672,336,'','');
            pattern1.draw(864,336,'','');
            pattern7.draw(1056,336,'','');
            pattern6.draw(1248,336,'','');
            pattern5.draw(1440,336,'','');
            pattern5.draw(1632,336,'','');

            pattern.draw(0,384,'','');
            pattern.draw(192,384,'','');
            pattern2.draw(384,384,'','');
            pattern2.draw(576,384,'','');
            pattern1.draw(768,384,'','');
            pattern1.draw(960,384,'','');
            pattern4.draw(1152,384,'','');
            pattern5.draw(1344,384,'','');
            pattern5.draw(1536,384,'','');

            pattern.draw(96,432,'','');
            pattern.draw(288,432,'','');
            pattern2.draw(480,432,'','');
            pattern1.draw(672,432,'','');
            pattern1.draw(864,432,'','');
            pattern1.draw(1056,432,'','');
            pattern1.draw(1248,432,'','');
            pattern1.draw(1440,432,'','');
            pattern1.draw(1632,432,'','');

            pattern.draw(0,480,'','');
            pattern.draw(192,480,'','');
            pattern.draw(384,480,'','');
            pattern3.draw(576,480,'','');
            pattern3.draw(768,480,'','');
            pattern1.draw(960,480,'','');
            pattern1.draw(1152,480,'','');
            pattern5.draw(1344,480,'','');
            pattern1.draw(1536,480,'','');

            pattern7.draw(96,528,'','');
            pattern1.draw(288,528,'','');
            pattern3.draw(480,528,'','');
            pattern3.draw(672,528,'','');
            pattern1.draw(864,528,'','');
            pattern1.draw(1056,528,'','');
            pattern1.draw(1248,528,'','');
            pattern1.draw(1440,528,'','');
            pattern1.draw(1632,528,'','');

            pattern.draw(0,576,'','');
            pattern.draw(192,576,'','');
            pattern1.draw(384,576,'','');
            pattern1.draw(576,576,'','');
            pattern1.draw(768,576,'','');
            pattern1.draw(960,576,'','');
            pattern1.draw(1152,576,'','');
            pattern4.draw(1344,576,'','');
            pattern6.draw(1536,576,'','');

            pattern.draw(96,624,'','');
            pattern.draw(288,624,'','');
            pattern.draw(480,624,'','');
            pattern.draw(672,624,'','');
            pattern.draw(864,624,'','');
            pattern.draw(1056,624,'','');
            pattern.draw(1248,624,'','');
            pattern7.draw(1440,624,'','');
            pattern.draw(1632,624,'','');

            pattern.draw(0,672,'','');
            pattern.draw(192,672,'','');
            pattern.draw(384,672,'','');
            pattern.draw(576,672,'','');
            pattern.draw(768,672,'','');
            pattern.draw(960,672,'','');
            pattern.draw(1152,672,'','');
            pattern.draw(1344,672,'','');
            pattern.draw(1536,672,'','');

            pattern.draw(96,720,'','');
            pattern.draw(288,720,'','');
            pattern.draw(480,720,'','');
            pattern.draw(672,720,'','');
            pattern.draw(864,720,'','');
            pattern.draw(1056,720,'','');
            pattern.draw(1248,720,'','');
            pattern.draw(1440,720,'','');
            pattern.draw(1632,720,'','');

            G1.draw(G1x,G1y,'','');
            G2.draw(672,336,'','');
            G3.draw(864,336,'','');
            G4.draw(1056,336,'','');
            G5.draw(1248,336,'','');
            G6.draw(1440,336,'','');
            B1.draw(480,432,'','');
            B2.draw(672,432,'','');
            B3.draw(864,432,'','');
            B4.draw(1056,432,'','');
            B5.draw(1248,432,'','');
            B6.draw(1440,432,'','');
            R1.draw(480,528,'','');
            R2.draw(672,528,'','');
            R3.draw(864,528,'','');
            R4.draw(1056,528,'','');
            R5.draw(1248,528,'','');
            R6.draw(1440,528,'','');
            //tank4.rotate(1020,463, angle4 += 35);
            tank5.rotate(450,370, angle5 );
            //tank6.rotate(1020,655, angle6 -= 35);
           
        }, 100)

//     this.setState({
// ready: true
//     })
};

    // drawHexes () {
    //     for (let row = 0; row <= 4; row++){
    //         for(let col = 0; col<=4;col++){
    //             let center = this.hexToPixel(this.hex(col,row));
    //             this.drawHex(this.mapCanvas,center);         }}}

    // hex(col,row){return{col: col, row: row}}

    // hexToPixel(h){
    //  let x = this.state.hexSize * (     3/2 * h.col                    )
    //  let y = this.state.hexSize * (Math.sqrt(3)/2 * h.col  +  Math.sqrt(3) * h.row)
    // return this.Point(x, y)}

    // drawHex(canvasID,center){
    //     for (let i=0; i <= 5; i++){
    //     let start = this.getHexCornerCoord(center,i);
    //     let end = this.getHexCornerCoord(center, i+1);
    //     this.drawLine(canvasID, {x: start.x, y: start.y}, { x: end.x, y: end.y });
    // }}

    // drawLine(canvasID,start, end){
    //     const ctx = canvasID.getContext("2d");
    //     ctx.beginPath();
    //     ctx.moveTo(start.x, start.y);
    //     ctx.lineTo(end.x, end.y);
    //     ctx.stroke();
    //     ctx.closePath();
    // }

    // getHexCornerCoord(center, i){
    //     let angle_deg = 60 * i + 30;
    //     let angle_rad = Math.PI /180 * angle_deg;       
    //     let x = center.x + this.state.hexSize * Math.sin(angle_rad);
    //     let y = center.y + this.state.hexSize * Math.cos(angle_rad);
    //     return this.Point(x,y)
    //  }

    //  Point(x,y){return { x: x, y: y}}

render (){
    
    return(
        
        <div id="container"><div className="app">
        <div>
        <canvas ref={mapCanvas => this.mapCanvas = mapCanvas} />
    </div></div></div> );
}
}
export default Canvas