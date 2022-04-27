import { RNKeycloak } from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'http://20.206.80.63:8585/',
  realm: 'lighthouse',
  clientId: 'keycloak-react-native',
});

export default keycloak;