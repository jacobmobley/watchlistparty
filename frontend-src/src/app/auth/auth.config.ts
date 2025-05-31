import { AuthConfig } from '@auth0/auth0-angular';

export const authConfig: AuthConfig = {
  domain: 'dev-zwfdbrdzvgpnlx7l.us.auth0.com',
  clientId: 'GYFFTBm0pJO9AVX62W4OmTVFpBujto2E',
  authorizationParams: {
    redirect_uri: window.location.origin,
    prompt: 'login'
  }
}; 