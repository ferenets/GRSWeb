import React from 'react';
import classes from './map.scss';
import PointMarker from '../marker/marker.jsx';
import GoogleMap from 'google-map-react';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const API_KEY = 'AIzaSyDOIBaNsLlTYLI7OskzpjGpQntjqKfsqM8';
    const {targetPoints} = this.props;

    return (
      <GoogleMap
        bootstrapURLKeys={{
          key: API_KEY,
          language: 'uk',
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        resetBoundsOnResize={true}
        className={classes.mapBox}
      >

        {targetPoints.map((point, ind) =>
          <PointMarker key={ind} {...point} point={point} />
        )}

      </GoogleMap>
    );
  }
};

Map.defaultProps = {
  center: {lat: 49.00939434, lng: 31.40784526},
  zoom: 6,
};

Map.PropTypes = {
  targetPoints: React.PropTypes.array.isRequired,
};