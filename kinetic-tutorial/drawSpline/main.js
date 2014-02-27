 var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });

      var layer = new Kinetic.Layer();

      var blueSpline = new Kinetic.Spline({
        points: [{
          x: 73,
          y: 160
        }, {
          x: 340,
          y: 23
        }, {
          x: 500,
          y: 109
        }, {
          x: 300,
          y: 109
        }],
        stroke: 'blue',
        strokeWidth: 10,
        lineCap: 'round',
        tension: 1
      });

      var redSpline = new Kinetic.Spline({
        points: [{
          x: 73,
          y: 160
        }, {
          x: 340,
          y: 23
        }, {
          x: 500,
          y: 109
        }, {
          x: 300,
          y: 109
        }],
        stroke: 'red',
        strokeWidth: 10,
        lineCap: 'round',
        tension: 0.5
      });

      var greenSpline = new Kinetic.Spline({
        points: [{
          x: 20,
          y: 50
        }, {
          x: 340,
          y: 50
        }, {
          x: 200,
          y: 150
        }, {
          x: 250,
          y: 150
        }],
        stroke: 'green',
        strokeWidth: 5,
        lineCap: 'round',
        tension: 1,
        dashArray: [10, 10]
      });

      layer.add(blueSpline);
      layer.add(redSpline);
      layer.add(greenSpline);
      stage.add(layer);