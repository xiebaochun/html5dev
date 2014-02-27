 var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });

      var layer = new Kinetic.Layer();

      var rect = new Kinetic.Rect({
        x: 100,
        y: 50,
        width: 200,
        height: 150,
        fill: 'red',
        stroke: 'green',
        strokeWidth: 3
      });

      // add the shape to the layer
      layer.add(rect);

      // add the layer to the stage
      stage.add(layer);