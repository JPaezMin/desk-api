const TokenService = {
    getToken() {
        return localStorage.getItem('accessToken')
    },
    saveToken(accesstoken) {
        localStorage.setItem('accessToken', accesstoken)
    },
    removeToken() {
        localStorage.removeItem('accessToken')
    },
    // getRefreshToken() {
    //   return localStorage.getItem("refreshToken");
    // },
    // saveRefreshToken(refreshtoken) {
    //   localStorage.setItem("refreshToken", refreshtoken);
    // },
    // removeRefreshToken() {
    //   localStorage.removeItem("refreshToken");
    // },
    // getIdToken() {
    //   return localStorage.getItem("idToken");
    // },
    // saveIdToken(idtoken) {
    //   localStorage.setItem("idToken", idtoken);
    // },
    // removeIdToken() {
    //   localStorage.removeItem("idToken");
    // }
}

export default TokenService
