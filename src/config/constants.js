/* react project의 변수들을 관리 */

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server-p.herokuapp.com"
    : "http://localhost:8080";
