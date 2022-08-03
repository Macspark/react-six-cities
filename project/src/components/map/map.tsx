import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import {City} from '../../types/map';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_ACTIVE} from '../../const';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City,
  offers: Offer[],
  activeOffer: Offer | undefined,
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, activeOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      document.querySelectorAll('.leaflet-marker-icon').forEach((elem) => elem.remove());

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });

      map.flyTo(
        {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        city.location.zoom,
        {
          animate: false,
        }
      );
    }

  }, [map, offers, city, activeOffer]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;
