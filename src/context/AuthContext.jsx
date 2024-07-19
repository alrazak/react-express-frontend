//import React dan hooks createContext, useState, dan useEffect dari react
import React, { createContext, useState, useEffect } from "react";

//import Cookies dari js-cookie untuk mengelola cookies
import Cookies from "js-cookie";

//membuat context untuk menyimpan status otentikasi 
export const AuthContext = createContext();

//membuat provider otentikasi dengan menggunakan context yang telah dibuat sebelumnya
export const AuthProvider = ({ children }) => {
    //menggunakan useState untuk menyimpan status otentikasi berdasarkan keberadaan token di cookies
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));

    //menggunakan useEffect untuk memantau perubahan pada token di cookies
    useEffect(() => {
        //membuat fungsi handleTokenChange untuk memperbarui status otentikasi ketika token di cookies berubah
        const handleTokenChange = () => {
            setIsAuthenticated(!!Cookies.get('token'));
        };

        //menambah event listener pada storage untuk memantau perubahan pada token
        window.addEventListener('storage', handleTokenChange);
        //mengembalikan sebuah fungsi yang akan dipanggil saat komponen di-unmount untuk membersihkan event listener
        return() => {
            window.removeEventListener('storage', handleTokenChange);
        };
    }, []);

    //mengembalikan provider dengan nilai isAuthenticated dan setIsAuthenticated yang diperoleh dari useState
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};