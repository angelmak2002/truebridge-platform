export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';

/** One-time nonce cookie name used to guard the OAuth state parameter. */
export const OAUTH_STATE_COOKIE = "oauth_state_nonce";

export type OAuthState = {
  redirectUri: string;
  nonce: string;
};

export function encodeOAuthState(state: OAuthState): string {
  return Buffer.from(JSON.stringify(state)).toString('base64');
}

export function decodeOAuthState(state: string): OAuthState {
  try {
    const decoded = Buffer.from(state, 'base64').toString('utf-8');
    const parsed = JSON.parse(decoded);
    return {
      redirectUri: parsed.redirectUri || '/',
      nonce: parsed.nonce || '',
    };
  } catch {
    return { redirectUri: '/', nonce: '' };
  }
}
