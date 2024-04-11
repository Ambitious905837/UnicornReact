import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className="container big">
            <div className="row">
                <div className="col-12">
                    <div className="header__body">
                        <div className="header__logo">
                            <a href="#">
                                <img src="assets/images/logo/unicorn-logo.png" alt="Peson" width="203" height="55" data-retina="assets/images/logo/unicorn-logo-web" data-width="203" data-height="55"/>
                            </a>
                        </div>
                        <div className="header__action">
                            <a href="" className="action-btn"><span>Join Our Community</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
