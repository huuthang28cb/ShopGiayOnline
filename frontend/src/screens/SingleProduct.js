import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Rating from "../Components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "../Components/LoadingError/Error";
import ContactInfo from "../Components/homeComponents/ContactInfo";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Redux/Actions/ProductActions";
import Loading from "../Components/LoadingError/Loading";


const SingleProduct = ({ history, match }) => {

    const [qty, setQty] = useState(1);

    const productID = match.params.id;

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);

    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(productID));
    }, [dispatch, productID])

    // Add to cart handled
    const AddToCartHandle = (e) => {
        e.preventDefault()
        history.push(`/cart/${productID}?qty=${qty}`);
    }

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
                                                        <h6>Gi??</h6>
                                                        <span>${product.price}</span>
                                                    </div>
                                                    <div className="flex-box d-flex justify-content-between align-items-center">
                                                        <h6>Tr???ng th??i h??ng</h6>
                                                        {product.countInStock > 0 ? (
                                                            <span className='text-success'>C??n h??ng</span>
                                                        ) : (
                                                            <span className='text-danger'>H???t h??ng</span>
                                                        )}
                                                    </div>
                                                    <div className="flex-box d-flex justify-content-between align-items-center">
                                                        <h6>????nh gi??</h6>
                                                        <Rating
                                                            value={product.rating}
                                                            text={`${product.numReviews} ????nh gi??`}
                                                        />
                                                    </div>
                                                    {product.countInStock > 0 ? (
                                                        <>
                                                            <div className="flex-box d-flex justify-content-between align-items-center">
                                                                <h6>S??? l?????ng</h6>
                                                                <select
                                                                    value={qty}
                                                                    onChange={(e) => setQty(e.target.value)}
                                                                >
                                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <button onClick={AddToCartHandle} className="round-black-btn">Th??m v??o gi??? h??ng</button>
                                                        </>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RATING */}
                                    <div className="row my-5">
                                        <div className="col-md-6">
                                            <h6 className="mb-3">????nh gi?? v?? nh???n x??t</h6>
                                            <Message variant={"alert-info mt-3"}>Kh??ng c?? nh???n x??t</Message>
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
                                            <h6>B??I VI???T ????NH GI?? C???A KH??CH H??NG</h6>
                                            <div className="my-4"></div>

                                            <form>
                                                <div className="my-4">
                                                    <strong>X???p h???ng</strong>
                                                    <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                                                        <option value="">Ch???n...</option>
                                                        <option value="1">1 - Qu?? t???</option>
                                                        <option value="2">2 - B??nh th?????ng</option>
                                                        <option value="3">3 - T???t</option>
                                                        <option value="4">4 - R???t t???t</option>
                                                        <option value="5">5 - Qu?? tuy???t v???i</option>
                                                    </select>
                                                </div>
                                                <div className="my-4">
                                                    <strong>Nh???n x??t</strong>
                                                    <textarea
                                                        row="3"
                                                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                                                    ></textarea>
                                                </div>
                                                <div className="my-3">
                                                    <button className="col-12 bg-black border-0 p-3 rounded text-white">
                                                        G???i nh???n x??t c???a b???n
                                                    </button>
                                                </div>
                                            </form>
                                            <div className="my-3">
                                                <Message variant={"alert-warning"}>
                                                    Vui l??ng{" "}
                                                    <Link to="/login">
                                                        " <strong>????ng nh???p</strong> "
                                                    </Link>{" "}
                                                    ????? vi???t ????nh gi?? s???n ph???m c???a b???n{" "}
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
