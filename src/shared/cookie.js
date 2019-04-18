import Cookies from 'universal-cookie';

const cookie = new Cookies();
cookie.set("login", false, {path: '/'})
cookie.set("developer", false, {path: '/'})
cookie.set("ideaer", false, {path: '/'})

export {cookie};