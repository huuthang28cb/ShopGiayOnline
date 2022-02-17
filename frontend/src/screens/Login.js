import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import ContactInfo from "../Components/homeComponents/ContactInfo"

const Login = () => {
    return (
        <>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                <form className="Login col-md-8 col-lg-4 col-11">
                    <h3>ĐĂNG KÝ</h3>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mật khẩu" />
                    <button type="submit">Đăng nhập</button>
                    <p>
                        <Link to={"/register"}>Tạo tài khoản mới</Link>
                    </p>
                </form>
            </div>
            <ContactInfo />
        </>
    )
}

export default Login