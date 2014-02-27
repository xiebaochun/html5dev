 var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });

      var layer = new Kinetic.Layer();

      var blueBlob = new Kinetic.Blob({
        points: [{
          x: 73,
          y: 140
        }, {
          x: 340,
          y: 23
        }, {
          x: 500,
          y: 109
        }, {
          x: 300,
          y: 170
        }],
        stroke: 'blue',
        strokeWidth: 10,
        fill: '#aaf',
        tension: 0.8
      });

      var redBlob = new Kinetic.Blob({
        points: [{
          x: 73,
          y: 140
        }, {
          x: 340,
          y: 23
        }, {
          x: 500,
          y: 109
        }],
        stroke: 'red',
        strokeWidth: 10,
        fill: '#faa',
        tension: 1.2,
        scale: 0.5,
        x: 100,
        y: 50
      });

      layer.add(blueBlob);
      layer.add(redBlob);
      stage.add(layer);