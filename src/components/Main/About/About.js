import './About.css';

function About() {
  return (
    <section className="about">
        <div className="shape"></div>
        <div className="container">
            <div className="row rev">
                <div className="col-xl-6 col-md-12">
                    <div className="about__right">
                        <div className="images">
                            <img className="img1" src="assets/images/layouts/about-01_2.png" alt="" />
                            <img className="img2" src="assets/images/layouts/about-02_2.png" alt="" />
                            <img className="img3" src="assets/images/layouts/about-03_2.png" alt="" />
                            <img className="img4" src="assets/images/layouts/about-04_2.png" alt="" />
                            <img className="img5" src="assets/images/layouts/about-05_2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="block-text">
                        <h6 className="sub-heading"><span>About us</span></h6>
                        <h2 className="heading wow words chars splitting animated" data-splitting=""><span className="word" data-word="Unicorn"><span className="char" data-char="U" >U</span><span className="char" data-char="n" >n</span><span className="char" data-char="i" >i</span><span className="char" data-char="c" >c</span><span className="char" data-char="o" >o</span><span className="char" data-char="r" >r</span><span className="char" data-char="n" >n</span></span><br/> <span className="word" data-word="Mart"><span className="char" data-char="M" >M</span><span className="char" data-char="a" >a</span><span className="char" data-char="r" >r</span><span className="char" data-char="t" >t</span></span><span className="whitespace"> </span><span className="word" data-word="Inc."><span className="char" data-char="I" >I</span><span className="char" data-char="n">n</span><span className="char" data-char="c" >c</span><span className="char" data-char="." >.</span></span></h2>

                        <p className="mb-17 fs-6">(UMI) is a cutting-edge e-commerce platform revolutionizing online shopping with its innovative integration of blockchain technology. At the heart of UMI's ecosystem is the UMI token, a digital currency that serves as a secure and efficient method of payment within the platform. Customers can seamlessly navigate through a diverse range of products, from electronics to fashion, and experience a swift and decentralized payment process by utilizing UMI tokens. This not only ensures a frictionless shopping experience but also enhances security and transparency, as blockchain technology provides an immutable ledger for all transactions.</p>

                    

                        <a href="#" className="action-btn"><span>More About Us</span></a>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
