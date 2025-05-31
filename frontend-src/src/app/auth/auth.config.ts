import { AuthConfig } from '@auth0/auth0-angular';

export const authConfig: AuthConfig = {
  domain: 'YOUR_AUTH0_DOMAIN', // e.g., 'dev-xyz123.us.auth0.com'
  clientId: 'YOUR_CLIENT_ID',
  authorizationParams: {
    redirect_uri: window.location.origin
  }
}; 