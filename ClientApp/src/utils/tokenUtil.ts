import { jwtDecode, JwtPayload } from "jwt-decode";

export function isTokenExpired(token: string): boolean {
  const decoded = jwtDecode<JwtPayload>(token);
  if (decoded.exp) {
    return decoded.exp < Date.now() / 1000;
  }
  return false;
};