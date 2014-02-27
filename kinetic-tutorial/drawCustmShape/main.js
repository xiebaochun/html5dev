 var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });
      var layer = new Kinetic.Layer();

      /*
       * create a triangle shape by defining a
       * drawing function which draws a triangle
       */
      var triangle = new Kinetic.Shape({
        drawFunc: function(context) {
          context.beginPath();
          context.moveTo(200, 50);
          context.lineTo(420, 80);
          context.quadraticCurveTo(300, 100, 260, 170);
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      });

      // add the triangle shape to the layer
      layer.add(triangle);

      // add the layer to the stage
      stage.add(layer);