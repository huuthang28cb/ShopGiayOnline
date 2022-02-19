import React, { useEffect} from "react";
import Header from "../Components/Header";
import Rating from "../Components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "../Components/LoadingError/Error";
import ContactInfo from "../Components/homeComponents/ContactInfo";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Redux/Actions/ProductActions";
import Loading from "../Components/LoadingError/Loading";


const SingleProduct = ({ match }) => {
    const productID = match.params.id;

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);

    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(productID));
    }, [dispatch, productID])

    return (
        <>
            <Header />
            <div className="container single-product">
                {
                    loading ? (
                        <Loading />
                    )
                    : error ? (
                        <Message variant="alert-danger">
                            {error}
                        </Message>
                    )
                    :
                    (
                        <>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-dtl">
                                        <div className="product-info">
                                            <div className="product-name">{product.name}</div>
                                        </div>
                                        <p>{product.description}</p>

                                        <div className="product-count col-lg-7 ">
                                            <div className="flex-box d-flex justify-content-between align-items-center">
                                                <h6>Giá</h6>
                                                <span>${product.price}</span>
                                            </div>
                                            <div className="flex-box d-flex justify-content-between align-items-center">
                                                <h6>Trạng thái hàng</h6>
                                                {product.countInStock > 0 ? (
                                                    <span className='text-success'>Còn hàng</span>
                                                ) : (
                                                    <span className='text-danger'>Hết hàng</span>
                                                )}
                                            </div>
                                            <div className="flex-box d-flex justify-content-between align-items-center">
                                                <h6>Đánh giá</h6>
                                                <Rating
                                                    value={product.rating}
                                                    text={`${product.numReviews} đánh giá`}
                                                />
                                            </div>
                                            {product.countInStock > 0 ? (
                                                <>
                                                    <div className="flex-box d-flex justify-content-between align-items-center">
                                                        <h6>Số lượng</h6>
                                                        <select>
                                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <button className="round-black-btn">Thêm vào giỏ hàng</button>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RATING */}
                            <div className="row my-5">
                                <div className="col-md-6">
                                    <h6 className="mb-3">Đánh giá và nhận xét</h6>
                                    <Message variant={"alert-info mt-3"}>Không có nhận xét</Message>
                                    <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                                        <strong>Admin</strong>
                                        <Rating />
                                        <span>Jan 12 2021</span>
                                        <div className="alert alert-info mt-3">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h6>BÀI VIẾT ĐÁNH GIÁ CỦA KHÁCH HÀNG</h6>
                                    <div className="my-4"></div>

                                    <form>
                                        <div className="my-4">
                                            <strong>Xếp hạng</strong>
                                            <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                                                <option value="">Chọn...</option>
                                                <option value="1">1 - Quá tệ</option>
                                                <option value="2">2 - Bình thường</option>
                                                <option value="3">3 - Tốt</option>
                                                <option value="4">4 - Rất tốt</option>
                                                <option value="5">5 - Quá tuyệt vời</option>
                                            </select>
                                        </div>
                                        <div className="my-4">
                                            <strong>Nhận xét</strong>
                                            <textarea
                                                row="3"
                                                className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                            ></textarea>
                                        </div>
                                        <div className="my-3">
                                            <button className="col-12 bg-black border-0 p-3 rounded text-white">
                                                Gửi nhận xét của bạn
                                            </button>
                                        </div>
                                    </form>
                                    <div className="my-3">
                                        <Message variant={"alert-warning"}>
                                            Vui lòng{" "}
                                            <Link to="/login">
                                                " <strong>Đăng nhập</strong> "
                                            </Link>{" "}
                                            để viết đánh giá sản phẩm của bạn{" "}
                                        </Message>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            <ContactInfo />
        </>
    );
};

export default SingleProduct;
