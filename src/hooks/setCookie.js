import Cookie from "js-cookie";

const SetCookie = (cookiename, param)=> {
    let thirtysec = new Date(new Date().getTime() + 180 * 1000);
    Cookie.set(cookiename,param,{
        expires: thirtysec,
        secure:true,
        sameSite: 'strict',
        path:'/'
    });
};

export default  SetCookie;