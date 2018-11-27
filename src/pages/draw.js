import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ImageZoom from 'react-medium-image-zoom'

const styles = theme => ({});

class Draw extends React.Component {
  render() {

    return (
      <div>
      <p>"DRAW"</p>

        <ImageZoom
          image={{
            src: 'https://scontent-lga3-1.cdninstagram.com/vp/fbd910a6c95b5bb2ab9955bf7647708f/5CA91832/t51.2885-15/sh0.08/e35/s640x640/44575363_2485305361511095_4925126045707578033_n.jpg',
            alt: 'Protector OF What - 640w',
            className: 'img',
            style: { width: '10em' }
          }}
          zoomImage={{
            src: 'https://scontent-lga3-1.cdninstagram.com/vp/97f2a8da6097444d00795e86c92a7d71/5CAD97FB/t51.2885-15/fr/e15/s1080x1080/44575363_2485305361511095_4925126045707578033_n.jpg',
            alt: 'Protector OF What - 1080w'
          }}
        />
      </div>
    );
  }
}



// Draw.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Draw)
