import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactInfo from "../Components/homeComponents/ContactInfo";
import ProfileTabs from "../Components/profileComponents/ProfileTabs";
import { getUserDetails } from "../Redux/Actions/userActions";
import moment from "moment";

const ProfileScreen = () => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);

    const { userInfo } = userLogin;

    console.log(userInfo)

    useEffect(() => {
        dispatch(getUserDetails("profile"));
    }, [dispatch, userInfo]);

    return (
        <>
            <Header />
            <div className="container mt-lg-5 mt-3">
                <div className="row align-items-start">
                    <div className="col-lg-4 p-0 shadow ">
                        <div className="author-card pb-0 pb-md-3">
                            <div className="author-card-cover"></div>
                            <div className="author-card-profile row">
                                <div className="author-card-avatar col-md-5">
                                    <img src="https://i.pinimg.com/564x/aa/86/db/aa86db47bb2d369c00f60191c8d57139.jpg" alt="userprofileimage" />
                                </div>
                                <div className="author-card-details col-md-7">
                                    <h5 className="author-card-name mb-2">
                                        <strong>{userInfo.name}</strong>
                                    </h5>
                                    <span className="author-card-position">
                                        <>Tham gia từ {moment(userInfo.createdAt).format("DD/MM/YYYY")}</>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="wizard pt-3 ">
                            <div class="d-flex align-items-start">
                                <div
                                    class="nav align-items-start flex-column col-12 nav-pills me-3 "
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        class="nav-link active"
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        Cập nhật thông tin cá nhân
                                    </button>
                                    <button
                                        class="nav-link d-flex justify-content-between"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        Danh sách phiếu đặt hàng của bạn
                                        <span className="badge2">3</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* panels */}
                    <div
                        class="tab-content col-lg-8 pb-5 pt-lg-0 pt-3"
                        id="v-pills-tabContent"
                    >
                        <div
                            class="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <ProfileTabs/>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <ContactInfo />
            <Footer />
        </>
    )
}

export default ProfileScreen