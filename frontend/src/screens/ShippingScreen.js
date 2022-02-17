import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const ShippingScreen = () => {
    window.scrollTo(0, 0);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center align-items-center login-center">
                <form
                    className="Login col-md-8 col-lg-4 col-11"
                    onSubmit={submitHandler}
                >
                    <h6>ĐỊA CHỈ GIAO HÀNG</h6>
                    <input type="text" placeholder="Địa chỉ nhận hàng" />
                    <input type="text" placeholder="Thành phố" />
                    <input type="text" placeholder="Nhập mã bưu chính" />
                    <input type="text" placeholder="Thành phố" />
                    <button type="submit">
                        <Link to="/payment" className="text-white">
                            Tiếp tục
                        </Link>
                    </button>
                </form>
            </div>
        </>
    );
};

export default ShippingScreen;
