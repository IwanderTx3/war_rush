var Context = {
    canvas : null,
    context : null,
    create : function(canvas_tag_id) {
        //console.log('boom');
        this.canvas = document.getElementById(canvas_tag_id);
        this.context = this.canvas.getContext('2d');
        return this.context
    }
    };

var Sprite = function(filename, is_pattern)
{
    //console.log(Context.context)
    this.image = null;
    this.pattern = null;
    this.TO_RADIANS = Math.PI/180;

    if (filename != undefined && filename != "" && filename != null){
        this.image = new Image();
        this.image.src = filename;

        if (is_pattern) 
            this.pattern = Context.context.createPattern(this.image, 'repeat');

    }

    else
        console.log("Unable to load sprite");

    this.draw = function(x, y, w, h)
        {
            if (this.pattern != null)
            {
                Context.context.fillstyle = this.pattern;
                Context.context.fillReact(x,y,w,h);
            } else 
                {
                    if (w != undefined || h != undefined)
                    {
                        Context.context.drawImage(  this.image, x, y,
                                                    this.image.width,
                                                    this.image.height);                                                                
                    } 
                    else 
                    {
                        Context.context.drawImage(this.image, x,y,w,h);
                    }
                }
        };

        this.rotate = function(x,y, angle)
        {
            Context.context.save();
            Context.context.translate(x,y);
            Context.context.rotate(angle * this.TO_RADIANS);
            Context.context.drawImage(this.image,
                -(this.image.width/2),
                -(this.image.height/2));
            Context.context.restore();
        };


};



$(document).ready(function() {
    // Initialize
    //console.log(Context);
    Context.create('canvas');
    //console.log(Context);
    Context.context.beginPath();
    Context.context.rect(0,0,2560,960);
    Context.context.fillStyle = 'black';
    Context.context.fill();

    var WALL = "http://www.tigrisgames.com/wall.png";
    var CRATE = "http://www.tigrisgames.com/crate.png";

    var image = new Sprite(WALL, false);
    var image2 = new Sprite(CRATE, false);
    var tank = new Sprite('./units/Hex_Unit_Tank_Red_.png', false);
    var tank2 = new Sprite('./units/blue_tank.png', false);
    var tank3 = new Sprite('./units/red.png', false);
    var tank4 = new Sprite('./units/green_tank.png', false);
    var pattern = new Sprite('./units/Hex_Grass_4.png', true);
    var pattern1 = new Sprite('./units/Hex_Hill_6.png', true);
    var pattern2 = new Sprite('./units/Hex_Mountain_3.png', true);
    var pattern3 = new Sprite('./units/Hex_Forest_1.png', true);
    var pattern4 = new Sprite('./units/Hex_SandDunes_5.png', true);
    var pattern5 = new Sprite('./units/Hex_Swamp_4.png', true);
    var pattern6 = new Sprite('./units/Hex_Ocean_1.png', true);
    var angle = 0;

    setInterval(function(){

        Context.context.fillStyle = "#000000";
        Context.context.fillRect(0,0,800,800);

        tank.draw(0,0,96,96);
    
        //tank.rotate(256,208, angle = 90.0);
        pattern2.draw(160,64,256,180);
        pattern3.draw(64,112,256,180);
        pattern.draw(256,112,256,180);
        pattern1.draw(160,160,256,180);
        pattern6.draw(64,208,256,180);
        pattern4.draw(256,208,256,180);
        pattern5.draw(160,256,256,180);
        tank.draw(180,190,96,96);
        tank.rotate(320,290, angle -= 45.0);
    }, 64)


});







