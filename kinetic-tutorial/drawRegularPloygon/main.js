var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });
      var layer = new Kinetic.Layer();

      var hexagon = new Kinetic.RegularPolygon({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        sides: 6,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      });

      // add the shape to the layer
      layer.add(hexagon);

      // add the layer to the stage
      stage.add(layer);