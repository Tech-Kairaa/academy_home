import Link from "next/link";
import CartCount from "../src/components/CartCount";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Cart = () => {
  return (
    <Layout>
      <PageBanner pageName={"Cart"} />
      <section className="cart-page py-120 rpy-100">
        <div className="container">
          <div className="cart-total-product">
            <div className="total-cart-price">
              <h5>Total Items: 4</h5>
              <h5>Cart Total: $510</h5>
            </div>
            <div className="cart-item-wrap pt-15">
              <div className="alert fade show cart-single-item">
                <h6 className="product-name">PSD Book Mockup</h6>
                <span className="product-price">$70</span>
                <CartCount />
                <span className="avilable">
                  <i className="fas fa-check" /> Avilable Now
                </span>
                <span className="product-total-price">$70</span>
                <button type="button" className="close" data-dismiss="alert">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="alert fade show cart-single-item">
                <h6 className="product-name">Historical Store Book</h6>
                <span className="product-price">$120</span>
                <CartCount />
                <span className="avilable">
                  <i className="fas fa-check" /> Avilable Now
                </span>
                <span className="product-total-price">$360</span>
                <button type="button" className="close" data-dismiss="alert">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="alert fade show cart-single-item">
                <h6 className="product-name">Medical Equipment</h6>
                <span className="product-price">$10</span>
                <CartCount />
                <span className="avilable">
                  <i className="fas fa-check" /> Avilable Now
                </span>
                <span className="product-total-price">$20</span>
                <button type="button" className="close" data-dismiss="alert">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="alert fade show cart-single-item">
                <h6 className="product-name">Video Tutorials</h6>
                <span className="product-price">$20</span>
                <CartCount />
                <span className="avilable">
                  <i className="fas fa-check" /> Avilable Now
                </span>
                <span className="product-total-price">$60</span>
                <button type="button" className="close" data-dismiss="alert">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
          </div>
          <div className="cart-total-price mt-40">
            <div className="row justify-content-end text-center text-lg-left">
              <div className="col-lg-6">
                <div className="update-shopping text-lg-right">
                  <Link href="/cart">
                    <a className="mr-2 theme-btn mt-10">update cart</a>
                  </Link>
                  <Link href="/checkout">
                    <a className="theme-btn mt-10">checkout</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Cart;
