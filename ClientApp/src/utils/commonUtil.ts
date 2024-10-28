import { jwtDecode, JwtPayload } from "jwt-decode";

export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded.exp) {
      return decoded.exp < Date.now() / 1000;
    }
  } catch {
    return false;
  }
  return false;
};

const padTo2Digits = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
};
