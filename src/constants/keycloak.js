import { RNKeycloak } from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'http://20.226.97.63:8585/',
  realm: 'lighthouse',
  clientId: 'keycloak-react-native',
});

export default keycloak;