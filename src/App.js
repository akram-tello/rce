import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Homepage from './comps/Homepage';
import ImageGrid from './comps/ImageGrid';
// import Modal from './comps/Modal';


function App() {
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const [setSelectedImg] = useState(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isAuthenticated) {
        return (
            <>
                <header className='ak-nav'>
                    <h1 className="ak-logo">RCE</h1>
                    <nav>
                        <ul className="nav_links">
                            <li><a href="/">Announcement</a></li>
                            <li><a href="/">Contact Us</a></li>
                            {/* <li><a href="#">Resume</a></li> */}
                        </ul>
                    </nav>
                    <button className='ak-btn' onClick={() => logout({ returnTo: window.location.origin })}>
                        Log out
                    </button>
                    <p className='ak-user'> Hello {user.name}{' '}</p>
                </header>
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                {/* {selectedImg && (
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                )} */}
                <footer className="nk-footer bg-theme-alt">
                    <div className="social-overlap">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-10">
                                    <ul className="social-bar bg-white round shadow-heavy animated" data-animate="fadeInUp" data-delay=".1">
                                        <li className="social-bar-title"><span>Follow us</span></li>
                                        <li> <span href="#"><em className="icon fab fa-facebook-f"></em> </span></li>
                                        <li> <span href="#"><em className="icon fab fa-twitter"></em> </span></li>
                                        <li> <span href="#"><em className="icon fab fa-youtube"></em> </span></li>
                                        <li> <span href="#"><em className="icon fab fa-github"></em> </span></li>
                                        <li> <span href="#"><em className="icon fab fa-bitcoin"></em> </span></li>
                                        <li> <span href="#"><em className="icon fab fa-medium-m"></em> </span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="nk-ovm ovm-top ovm-h-50 bg-white"></div>
                    </div>
                    <div className="section section-m section-footer bg-transparent tc-light">
                        <div className="container">

                            <div className="nk-block block-footer mgb-m50 mgt-m10">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-sm-10">
                                        <div className="wgs animated" data-animate="fadeInUp" data-delay=".2">
                                            <h2 className="text-white">RCE</h2>
                                            {/* <span href="#"><img src="images/logo-full-white.png" srcset="images/logo-full-white2x.png 2x" alt="logo" /> </span> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-mb-3 col-sm-3 col-6">
                                        <div className="wgs wgs-menu">
                                            <div className="wgs-body">
                                                <ul className="wgs-links wgs-links-uline wgs-links-s4 animated" data-animate="fadeInUp" data-delay=".3">
                                                    <li> <span href="#"> Schools </span></li>
                                                    <li> <span href="#">why / How ? </span></li>
                                                    <li> <span href="#">Media </span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-mb-3 col-sm-3 col-6">
                                        <div className="wgs wgs-menu">
                                            <div className="wgs-body">
                                                <ul className="wgs-links wgs-links-uline wgs-links-s4 animated" data-animate="fadeInUp" data-delay=".4">
                                                    <li> <span href="#">Teams </span></li>
                                                    <li> <span href="#">About </span></li>
                                                    <li> <span href="#">Contact </span></li>
                                                    <li> <span href="#">Faqs </span></li>
                                                    <li> <span href="#">Join Us </span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-mb-6 col-sm-4">
                                        <div className="wgs wgs-menu">
                                            <div className="wgs-body">
                                                <ul className="wgs-address animated" data-animate="fadeInUp" data-delay=".5">
                                                    <li>Johor, Skudai <br />Taman Universiti, Jalan Pendidikan 1</li>
                                                    <li>+182-390-395</li>
                                                    <li> <span href="#">hello@RCE.io </span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-white-10 my-0" />
                    <div className="section py-5 tc-light">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-7">
                                    <div className="copyright-text copyright-text-s3 op-70">
                                        <p><span>Copyright &copy; 2021, RCE Iskander.</span></p>
                                    </div>
                                </div>
                                <div className="col-md-5 text-md-right">
                                    <ul className="footer-links">
                                        <li> <span href="#">Privacy Policy </span></li>
                                        <li> <span href="#">Terms &amp; Conditions </span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>

        );
    } else {
        return <>
            <body className="nk-body body-wider mode-onepage">
                <div className="nk-wrap">
                    <header className="nk-header page-header is-transparent is-sticky is-shrink" id="header">

                        <div className="header-main">
                            <div className="header-container container">
                                <div className="header-wrap">

                                    <div className="header-logo logo animated" data-animate="fadeInDown" data-delay=".65">
                                        <span href="./" className="logo-link">
                                            <h2 className="text-white">RCE</h2>
                                            {/* <img  className="logo-dark" src="images/logo.png" srcset="images/logo2x.png 2x" alt="logo" /> */}
                                            {/* <img  className="logo-light" src="images/logo-full-white.png" srcset="images/logo-full-white2x.png 2x" alt="logo" /> */}
                                        </span>
                                    </div>

                                    <div className="header-nav-toggle">
                                        <span href="#" className="navbar-toggle" data-menu-toggle="example-menu-04">
                                            <div className="toggle-line">
                                                <span></span>
                                            </div>
                                        </span>
                                    </div>

                                    <div className="header-navbar header-navbar-s3">
                                        <nav className="header-menu justify-content-between" id="example-menu-04">
                                            <ul className="menu menu-s2 animated" data-animate="fadeInDown" data-delay=".75">
                                                {/* <li className="menu-item"> <a className="menu-link nav-link" href="/about">About Us </a></li> */}
                                                {/* <li className="menu-item"> <a className="menu-link nav-link" href="/cotact">Contact Us </a></li> */}
                                                {/* <li  className="menu-item"> <span  className="menu-link nav-link" href="#team">Team </span></li>
                                    <li  className="menu-item"> <span  className="menu-link nav-link" href="#token">Tokens </span></li>
                                    <li  className="menu-item"> <span  className="menu-link nav-link" href="#roadmap">Roadmap </span></li> */}
                                                {/* <li className="menu-item has-sub">
                                                    <a className="menu-link nav-link menu-toggle" href="#more">More </a>
                                                    <ul className="menu-sub menu-drop">
                                                        <li className="menu-item"> <a className="menu-link nav-link" href="#faqs">Faqs </a></li>
                                                        <li className="menu-item"> <a className="menu-link nav-link" href="#press">Press </a></li>
                                                    </ul>
                                                </li> */}
                                            </ul>
                                            <ul className="menu-btns align-items-center animated" data-animate="fadeInDown" data-delay=".85">
                                                <li> <span href="#" className="btn btn-rg btn-round btn-primary"><button onClick={loginWithRedirect} className='login-btn'>Log in</button> </span></li>
                                                <li className="language-switcher toggle-wrap">
                                                    <span className="btn btn-rg btn-round btn-outline btn-primary toggle-tigger tc-light" href="#">
                                                        <img className="language-flag" src="images/flag-en.jpg" alt="en" /><span>En</span> <em className="icon ti ti-angle-down"></em>
                                                    </span>
                                                    <ul className="toggle-class toggle-drop drop-list drop-list-sm">
                                                        <li> <a href="#my"><img className="language-flag" src="images/flag-fr.jpg" alt="fr" />MY </a></li>
                                                        <li> <a href="#en"><img className="language-flag" src="images/flag-en.jpg" alt="br" />En </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="header-banner bg-white">
                            <div className="nk-banner">
                                <div className="banner banner-single">
                                    <div className="banner-rounded-bg bg-theme-alt">
                                        <span className="banner-shade-1"><span className="banner-shade-2"><span className="banner-shade-3"></span></span></span>
                                    </div>
                                    <div className="banner-wrap h-100vh">
                                        <div className="container container-z">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-12 col-xl-10 text-center">
                                                    <div className="banner-caption wide-auto-xl pdb-l pdt-r tc-light">
                                                        <div className="cpn-head mb-5">
                                                            <h1 className="title title-md animated" data-animate="fadeInUp" data-delay="1.25">RCE Iskandar Sustainable and Low Carbon Schools Exhibition</h1>
                                                        </div>
                                                        <div className="cpn-text cpn-text-s1 cpn-text-center mt-5">
                                                            <p className="lead animated" data-animate="fadeInUp" data-delay="1.35">Iskandar Malaysia is honourably acknowledged by the United Nations University-Institute for the
                                                                Advanced Study of Sustainability (UNU-AS) as RCE Iskandar in December 2014. Regional Centre of Expertise (RCE) Iskandar is the third RCE in Malaysia, after RCE Penang and RCE Central Malaysia.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-10">
                                                    <div className="tc-light text-center pdb-r">
                                                        <span className="badge badge-sm badge-warning px-4 animated" data-animate="fadeInUp" data-delay="1.45">RCE Iskandar </span>
                                                        <p className="lead animated" data-animate="fadeInUp" data-delay="1.55">Universiti Teknologi Malaysia (UTM) and Iskandar Regional Development Authority (IRDA) are the RCE Iskandar Secretariat, offering support on the coordination and management of sustainable development activities in the Iskandar Malaysia region.</p>
                                                    </div>
                                                    <div className="token-status bg-white token-status-s6 shadow-dark round mb-5 animated d-none" data-animate="fadeInUp" data-delay="1.65">
                                                        {/* <h6  className="title title-xs-alt fw-4 tc-default">Round one sales ends in:</h6> */}
                                                        <div className="countdown-s3 countdown-s5 countdown-large countdown-thin countdown" data-date="2021/08/10"></div>
                                                        {/* <div  className="progress-wrap progress-wrap-point">
                                                <ul  className="list-inline fz-8 w-100 justify-content-between pb-2 pt-4 tc-alternet">
                                                    <li>0 ICOX</li>
                                                    <li>1 ETH = 50 ICOX</li>
                                                    <li>50000 ICOX</li>
                                                </ul>
                                                <div  className="progress-bar progress-bar-s2 bg-light-alt progress-bar-md bar-round">
                                                    <div  className="progress-percent progress-percent-s2 bg-theme-accent" data-percent="40">16899.49 ICOX</div>
                                                    <div  className="progress-point tc-alternet" data-point="30">Soft Cap </div>
                                                    <div  className="progress-point tc-alternet" data-point="70">Hard Cap </div>
                                                </div>
                                            </div> */}
                                                        <ul className="cpn-links flex-wrap flex-sm-nowrap cpn-links-s1 pt-0 pb-3 pb-sm-0 mb-5">
                                                            {/* <li  className="order-sm-0"> <span href="https://www.youtube.com/watch?v=SSo_EIwHSd4"  className="link link-xs link-light video-popup"><em  className="link-icon fas fa-play"></em><span>Watch Video</span> </span></li> */}
                                                            <li className="order-sm-0 order-last w-100"> <span href="#" className="btn btn-round btn-primary btn-lg">Register and upload you file Now </span></li>
                                                            {/* <li  className="order-sm-0"> <span href="#"  className="link link-xs link-light"><em  className="link-icon fas fa-file"></em><span>White Paper</span> </span></li> */}
                                                        </ul>
                                                        {/* <ul  className="icon-list fz-7 pt-3 tc-alternet">
                                                <li>WE ACCEPTED:</li>
                                                <li><em  className="fab fa-bitcoin"></em></li>
                                                <li><em  className="fas fa-pound-sign"></em></li>
                                                <li><em  className="fas fa-dollar-sign"></em></li>
                                            </ul> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-ovm ovm-top ovm-h-80 bg-theme-alt "></div>
                            </div>
                        </div>
                    </header>
                    <Homepage />

                </div>
            </body>
        </>;
        // return <div className="App">
        //   <button onClick={loginWithRedirect}>Log in</button>
        //   <Title />
        //   <UploadForm selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
        // </div>;
    }
}

export default App;
