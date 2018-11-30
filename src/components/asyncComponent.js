import React, { Component } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import ImageZoom from 'react-medium-image-zoom'

// export default function asyncComponent(baseURL, imageName, i) {
class AsyncComponent extends Component {
  state = {
    loaded: false
  }

  render() {
    const { loaded } = this.state
    const { baseURL, imageName, index } = this.props

    return (
      <React.Fragment>
        <ImageIcon
          style={loaded ? {display: 'none'} : {fontSize: '2vw'}}
        />
        <ImageZoom style={loaded ? {} : {display: 'none'}}
          key={index}
          image={{
            src: baseURL + imageName,
            alt: imageName,
            style: { width: '10em' },
            onLoad: () => this.setState({loaded: true})
          }}
          zoomImage={{
            src: baseURL + imageName,
            alt: imageName,
          }}
        />
      </React.Fragment>
    )
  }
}

export default AsyncComponent
