import axios from "axios";

// axios 인스턴스 생성
export const api = axios.create(
  {
    baseURL: "http://121.141.140.148:8089/api",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json",
    },
  },
  { withCredentials: true }
);

// const getToken = async () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     // 일반적으로 토큰은 요청 헤더의 Authorization 필드에 담아져 보내집니다.
//     // Authorization: <type> <credentials>
//     // Bearer 는 위 형식에서 type 에 해당합니다. JWT 또는 OAuth 에 대한 토큰을 사용합니다. (RFC 6750)
//     // 서버는 다양한 종류의 토큰을 처리하기 위해 전송받은 type 에 따라 토큰을 다르게 처리합니다. 그래서 적어줍니다.
//     return `Bearer ${token}`;
//   } else {
//     return null;
//   }
// };

// 인터셉터. 요청을 보내기 전에 수행할 일.
// api.interceptors.request.use(async (config) => {
//   config.headers["Content-Type"] = "application/json; charset=utf-8";
//   config.headers["X-Requested-With"] = "XMLHttpRequest";
//   config.headers["Accept"] = "*/*";
//   // config.headers["authorization"] = await getToken();
//   return config;
// });

// 구성 우선 순위 규칙
// // 인스턴스 호출 메서드 옵션 > 인스턴스.defaults 설정 옵션 > 인스턴스.create()에 설정된 옵션
