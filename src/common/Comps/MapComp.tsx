import * as React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { createCustomEqual } from 'fast-equals';
import { isLatLngLiteral } from '@googlemaps/typescript-guards';
import { useData } from '../../config/centralData';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

export const MapComp: React.VFC = () => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(16); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: -23.429382629401857,
    lng: -46.51050391839788,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  const Form = () => (
    <div
      style={{
        padding: '1rem',
        flexBasis: '250px',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <label htmlFor="zoom">Zoom</label>
      <input
        type="number"
        id="zoom"
        name="zoom"
        value={zoom}
        onChange={event => setZoom(Number(event.target.value))}
      />
      <br />
      <label htmlFor="lat">Latitude</label>
      <input
        type="number"
        id="lat"
        name="lat"
        value={center.lat}
        onChange={event =>
          setCenter({ ...center, lat: Number(event.target.value) })
        }
      />
      <br />
      <label htmlFor="lng">Longitude</label>
      <input
        type="number"
        id="lng"
        name="lng"
        value={center.lng}
        onChange={event =>
          setCenter({ ...center, lng: Number(event.target.value) })
        }
      />
      <h3>{clicks.length === 0 ? 'Click on map to add markers' : 'Clicks'}</h3>
      {clicks.map((latLng, i) => (
        <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
      ))}
      <button onClick={() => setClicks([])}>Clear</button>
    </div>
  );

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Wrapper
        apiKey={'AIzaSyAiGqC1_Ks_gn4DkbzVw0qfaFL_aeMTqTo'}
        render={render}
      >
        <Map
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: '1', height: '100%' }}
        >
          {/* {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))} */}
        </Map>
      </Wrapper>
      {/* Basic Form for controlling center and zoom of map. */}
      {Form}
    </div>
  );
};
interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();
  const currMapKml = useData(ct => ct.projectData.cards.selected.kml);
  const defaultMapKml =
    'https://firebasestorage.googleapis.com/v0/b/cong-maps.appspot.com/o/files%2Fcid_mart.kml?alt=media&token=8fca66c3-4f29-4652-9d81-704ed4c955dd';
  const condKml = currMapKml ?? defaultMapKml;

  React.useEffect(() => {
    const novoMap = new google.maps.KmlLayer({
      url: currMapKml,
    });
    novoMap.setMap();
    setMap(new window.google.maps.Map(ref.current, novoMap));
  }, [currMapKml]);

  React.useEffect(() => {
    const georssLayer = new google.maps.KmlLayer({
      url: condKml,
    });
    georssLayer.setMap(map);
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker: React.FC<google.maps.MarkerOptions> = options => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const deepCompareEqualsForMaps = createCustomEqual(
  deepEqual => (a: any, b: any) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
  },
);

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(
  callback: React.EffectCallback,
  dependencies: any[],
) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

// window.addEventListener('DOMContentLoaded', () => {
//   const root = createRoot(document.getElementById('root')!);
//   root.render(<MapComp />);
// });

// export {};
