import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import Rating from "./Rating";
import products from "../../data/Products";

const ShopSection = () => {
    return (
        <>
            <div className='container'>
                <div className='section'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 article'>
                            {/* test */}
                            {/* <div className="container5">
                                <div className="card">
                                    <div className="imgBx">
                                        <img className="image" src="https://www.c-store.cz/fotky38463/fotos/_vyrp11_1910895terraultra-g-260-green-2.png" alt="" />
                                    </div>
                                    <div className="contentBx">
                                        <h2>Nike Shoes</h2>
                                        <div className="size">
                                            <h3>Size :</h3>
                                            <span>7</span>
                                            <span>8</span>
                                            <span>9</span>
                                            <span>10</span>
                                        </div>
                                        <div className="color">
                                            <h3>Color :</h3>
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container5">
                                <div className="card">
                                    <div className="imgBx">
                                        <img className="image" src="https://www.c-store.cz/fotky38463/fotos/_vyrp11_1910895terraultra-g-260-green-2.png" alt="" />
                                    </div>
                                    <div className="contentBx">
                                        <h2>Nike Shoes</h2>
                                        <div className="size">
                                            <h3>Size :</h3>
                                            <span>7</span>
                                            <span>8</span>
                                            <span>9</span>
                                            <span>10</span>
                                        </div>
                                        <div className="color">
                                            <h3>Color :</h3>
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div> */}
                            {/* end test */}
                            <div className='shopcontainer row'>
                                {products.map((product) => (
                                    // <div
                                    //     className="shop col-lg-4 col-md-6 col-sm-6"
                                    //     key={product._id}>
                                    //     <div className="border-product">
                                    //         <Link to={`/products/${product._id}`}>
                                    //             <div className="shopBack">
                                    //                 <img src={product.image} alt={product.name} />
                                    //             </div>
                                    //         </Link>

                                    //         <div className="shoptext">
                                    //             <p>
                                    //                 <Link to={`/products/${product._id}`}>
                                    //                     {product.name}
                                    //                 </Link>
                                    //             </p>

                                    //             <Rating
                                    //                 value={product.rating}
                                    //                 text={`${product.numReviews} reviews`}
                                    //             />
                                    //             <h3>${product.price}</h3>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <div
                                        className="shop col-lg-4 col-md-6 col-sm-6"
                                        key={product._id}
                                    >
                                        <div className="container5" key={product._id}>
                                            <div className="card">
                                                <div className="imgBx">
                                                    <Link to={`/products/${product._id}`}>
                                                        <img src={product.image} alt={product.name} />
                                                    </Link>
                                                </div>
                                                <div className="contentBx">
                                                    <h2>
                                                        {product.name}
                                                    </h2>
                                                    <div class="text-card">
                                                        <h4>
                                                            ${product.price}
                                                        </h4>
                                                    </div>
                                                    <div class="text-card">
                                                        <h3>
                                                            <div className='row'>
                                                                <Rating
                                                                    value={product.rating}
                                                                    text={`${product.numReviews} reviews`}
                                                                />
                                                            </div>
                                                        </h3>
                                                    </div>
                                                    <Link to="#">Mua ngay</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Phân trang */}
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopSection