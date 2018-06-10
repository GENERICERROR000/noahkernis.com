'use strict';

module.exports.noahkernisDOTcom = (event, context, callback) => {
  const html = `
  <html>
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <style>
      body {
        text-align: center
      }
      
      #gif-wrap {
        margin: auto;
        width: 50%;
        height: 50%;
        background-color: #000;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    </style>
    <body>
      <h1>OH HEY THERE...!</h1>
      <h4>
        So this is my site. I's really not much right now...
      <h/h4>

      <h4>
        But - it's being served by a "serverless function" - so that's what the kids call cool.
      <h/h4>

      <h4>
        Anyway, below are some randomly grabbed gifs.
      <h/h4>

      <p>
        (And yes - there is something stupid if ya looks at the code...)
      </p>

      <br></br>

      <div id="gif-wrap"></div>
    </body>
    <script>
      $(document).ready(function() {
        var refresh;
        // Duration count in seconds
        const duration = 1000 * 10;
        // Giphy API defaults
        const giphy = {
          baseURL: "https://api.giphy.com/v1/gifs/",
          key: "dc6zaTOxFJmzC",
          tag: "fail",
          type: "random",
          rating: "pg"
        };
        // Target gif-wrap container

        const $gif_wrap = $("#gif-wrap");
        // Giphy API URL
        let giphyURL = encodeURI(giphy.baseURL + giphy.type + "?api_key=" + giphy.key + "&tag=" + giphy.tag + "&rating=" + giphy.rating);
      
        // Call Giphy API and render data
        var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));
      
        // Display Gif in gif wrap container
        var renderGif = _giphy => {
          // Set gif as bg image
          $gif_wrap.css({
            
            "background-image": 'url("' + _giphy.image_original_url + '")'
          });
      
      
          // Start duration countdown
          refreshRate();
        };
      
        // Call for new gif after duration
        var refreshRate = () => {
          // Reset set intervals
          clearInterval(refresh);
          refresh = setInterval(function() {
            // Call Giphy API for new gif
            newGif();
          }, duration);
        };
      
        // Call Giphy API for new gif
        newGif();
      });
    </script>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  callback(null, response);
};
