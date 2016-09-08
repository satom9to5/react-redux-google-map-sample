import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  GoogleMapLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import {
  default as ScriptjsLoader
} from 'react-google-maps/lib/async/ScriptjsLoader';

import MarkerInfo from './MarkerInfo';

class PointsMap extends Component {
  // containers/TopicMap mapStateToProps & mapDispatchToPropsで定義された値を全部指定
  static propTypes = {
    bounds: PropTypes.object.isRequired,
    markers: PropTypes.array.isRequired,
    timeoutId: PropTypes.number,
    centerChange: PropTypes.func.isRequired,
    centerChangeTimeout: PropTypes.func.isRequired,
    markerClick: PropTypes.func.isRequired,
  }

  static googleMapVersion = Math.ceil(Math.random() * 22)

  handleIdle() {
    if (this.props.timeoutId) {
      return
    }

    const newPos = this.refs.map.getCenter()
    const bounds = this.refs.map.getBounds()

    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId)
      this.props.centerChangeTimeout(timeoutId)
    }, 1000)

    this.props.centerChange({
      center: {
        lat: newPos.lat(),
        lng: newPos.lng(),
      },
      southWest: {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng(),
      },
      northEast: {
        lat: bounds.getNorthEast().lat(),
        lng: bounds.getNorthEast().lng(),
      },
    }, timeoutId)
  }

  renderInfoWindow(marker) {
    if (!marker.isShowInfo) {
        return
    }

    return (
      <InfoWindow onCloseclick={::this.props.markerClick.bind(this, marker)}>
        <MarkerInfo
          marker={marker}
        />
      </InfoWindow>
    )
  }

  render() {
    const enableProps = Object.keys(PointsMap.propTypes).reduce((props, key) => {
      delete props[key]
      return props	    
    }, Object.assign({}, this.props))
    return (
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ v: `3.${PointsMap.googleMapVersion}`, libraries: `geometry,drawing,places` }}
        loadingElement={
          <div {...enableProps} style={{ height: `100%` }}>
          </div>
        }
        containerElement={
          <div {...enableProps} style={{ height: `100%` }} />
        }
        googleMapElement={
          <GoogleMap
            ref="map"
            defaultZoom={13}
            defaultCenter={{ lat: 33.5925, lng: 130.3997 }}
            onIdle={::this.handleIdle}
          >
            {this.props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  key={marker.id}
                  onClick={::this.props.markerClick.bind(this, marker)}
                >
                  {this.renderInfoWindow(marker)}
                </Marker>
	          )
	        })}
          </GoogleMap>
        }
      />
    );
  }
}

export default PointsMap
