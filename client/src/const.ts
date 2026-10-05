export { COOKIE_NAME, ONE_YEAR_MS, OAUTH_STATE_COOKIE, encodeOAuthState } from "@shared/const";
import { OAUTH_STATE_COOKIE } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);
  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");
  return url.toString();
};

/**
 * Mint a one-time nonce, write it to a short-lived cookie, then redirect the
 * browser to the Manus OAuth portal. Call this only from event handlers — never
 * during render — because it writes a cookie and navigates away immediately.
 */
export function startLogin(redirectPath?: string): void {
  const nonce = crypto.randomUUID();
  // Write the nonce into a short-lived cookie so the callback can verify it.
  document.cookie = `${OAUTH_STATE_COOKIE}=${nonce}; path=/; max-age=300; secure; samesite=none`;

  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const postLoginRedirect = redirectPath ?? window.location.pathname;

  const state = btoa(JSON.stringify({ redirectUri: postLoginRedirect, nonce }));

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  window.location.href = url.toString();
}
