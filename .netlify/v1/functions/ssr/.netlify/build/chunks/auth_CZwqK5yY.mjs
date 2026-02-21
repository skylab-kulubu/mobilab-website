const PASSWORD = "mobilab_admin";
const COOKIE_NAME = "mobilab_auth";
function isAuthenticated(cookies) {
  return cookies.get(COOKIE_NAME)?.value === PASSWORD;
}

export { COOKIE_NAME as C, PASSWORD as P, isAuthenticated as i };
