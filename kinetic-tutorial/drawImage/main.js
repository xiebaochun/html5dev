 var stage = new Kinetic.Stage({
        container: 'container',
        width: 980,
        height: 360
      });
      var layer = new Kinetic.Layer();

      var imageObj = new Image();
      imageObj.onload = function() {
        var youpaiwang = new Kinetic.Image({
          x: 0,
          y: 0,
          image: imageObj,
          width: 980,
          height: 360
        });

        // add the shape to the layer
        layer.add(youpaiwang);

        // add the layer to the stage
        stage.add(layer);
      };
      imageObj.src = 'http://www.yupoo.com/img/index/slide_img03.jpg';