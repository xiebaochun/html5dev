 var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });
      var layer = new Kinetic.Layer();

      var star = new Kinetic.Star({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        numPoints: 6,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4
      });

      // add the shape to the layer
      layer.add(star);

      // add the layer to the stage
      stage.add(layer);