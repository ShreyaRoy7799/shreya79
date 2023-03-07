export const fetchUser = () => {
    const userInfo = localStorage.getItem('user') !== "unddefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    return userInfo;
}