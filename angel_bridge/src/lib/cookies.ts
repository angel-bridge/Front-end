export const getCookie = (name: string): string | null => {
    console.log(document.cookie);
    const cookies = document.cookie.split(";").map(cookie => cookie.trim());
    const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.split("=")[1] || "") : null;
};