
export const PASSWORD = "mobilab_admin";
export const COOKIE_NAME = "mobilab_auth";

export function isAuthenticated(cookies: any): boolean {
    return cookies.get(COOKIE_NAME)?.value === PASSWORD; // In real app, use hash
}
