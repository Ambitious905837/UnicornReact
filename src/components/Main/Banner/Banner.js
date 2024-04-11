import './Banner.css';

function Banner() {
  return (
    <section className="banner">
        <div className="shape right"></div>
        <div className="container big">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="banner__left">
                        <div className="block-text">
                            <h2 className="heading">
                                Next Generation <br/>
                                <span className="s1 arlo_tm_animation_text_word">Shopping</span><span className="typed-cursor"></span> <br/>
                            </h2>
                            <p className="desc">
                                
Unicorn Mart Inc. (UMI) is a comprehensive E-commerce platform, catering to your every need with an extensive range of products and services
                                
                            </p>

                            <a href="#" className="action-btn"><span>Visit Our Store - Coming Soon</span></a>
                        </div>

                        <div className="pay">
                            <h6>We are use Solana Network</h6>

                            <div className="list">
                                <p>We accept:</p>

                                <ul>
                                    <li><a href="#"><span className="icon-logo-01"></span></a></li>
                                    <li><a href="#"><span className="icon-logo-02"></span></a></li>
                                    <li><a href="#"><span className="icon-logo-03"></span></a></li>
                                    <li><a href="#"><span className="icon-logo-04"></span></a></li>
                                    <li><a href="#"><span className="icon-logo-05"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span></a></li>
                                    <li><a href="#"><span className="icon-logo-06"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">

                    <div className="banner__right">
                        <div className="image">
                            <img src="assets/images/layouts/banner-6.png" alt=""/>
                        </div>

                        <div className="price">
                            <div className="icon">
                                <img src="assets/images/icon/icon-02.png" alt=""/>
                            </div>
                            <div className="content">
                                <h5>2.260</h5>
                                <p>Total Products</p>
                            </div>
                        </div>

                        <div className="owner">
                            <div className="image">
                                <img src="assets/images/layouts/avt-01.png" alt=""/>
                            </div>
                            <div className="content">
                                <h5>1.750</h5>
                                <p>Total User</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;
