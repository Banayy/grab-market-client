import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://1d9eb703-03c1-416c-9b94-cedd15116d3c.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        console.log("정상수신", result);
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생", error);
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images/banners/banner1.png" />
        </div>
        <h1>상품리스트</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="./images/icons/avatar.png"
                    />
                    <span>Charm_jun</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
