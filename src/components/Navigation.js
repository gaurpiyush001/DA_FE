import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import SignUpModal from '../UI/Search/Modal/SignUpModal';
import { authLogOut } from './../store/actions/user-actions';
import classes from "./Navigation.css";

// #ffffff


{/* <MyVerticallyCenteredModal
show={modalShow}
onHide={() => setModalShow(false)}
/> */}

const Navigation = (props) => {

    const logStatus = useSelector((state) => state.auth.loggedIn);
    const user = useSelector((state) => state.auth.user);

    console.log('this is it --> ', user)
    console.log('logStatus -->', logStatus)

    const [logIn, setLogInModal] = useState(false);
    const [signUp, setSignUpModal] = useState(false);
    const navigate = useNavigate();

    const modalLogInHandler = () => {
        // if(logIn){
        if (logIn)
            navigate('explore');
        else
            navigate('login');

        setLogInModal((prevState) => !prevState);
        // }
        // else if(signUp){
        //setSignUpModal((prevState) => !prevState);
        // }
    }

    const modalSignUpHandler = () => {
        // if (signUp)
        // navigate('explore');
        // else
        // navigate('signup');

        setSignUpModal((prevState) => !prevState);
    }

    const dispatch = useDispatch();

    const logOutHandler = () => {
        console.log('logginout');
        dispatch(authLogOut(user.email));
        navigate('explore');
    }

    return (
        <nav className="navbar navbar-expand-md bg-opacity-25 bg-black">
            <div className="container-xxl">
                <a href="#intro" className="navbar-brand">
                    <span className="fw-bolder text-light fs-larger" style={{ fontFamily: 'cursive' }}>SWEET💕69</span>
                </a>
                {/* toggle button for mobile nav  */}
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* aria-controls="main-nav"
                these are benefit for screen readers to allow little bit know more about structure of Web Page, its recommended for best practice */}


                {/* data-bs-target="#main-nav" 
                this tells which collaps-abel section we need to target,,, later on with list of links which will have this ID, and that the thing we gonna EXPAND and CLOSE */}


                {/* data-bs-toggle(data attribute) (bs stands for bootstrap) make a connection which it needs to toggle, here it is class name collapse */}

                {/* navbar link */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#about-us">About Us</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#get-in-touch">Get in Touch</a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#pick-up-lines">Top pickup lines</a>
                        </li>
                        <li className="nav-item d-md-none">
                            <a className="nav-link" href="#sign-up" onClick={props.LogInHandler}>Join Us</a>
                        </li>
                        <li className="nav-item ms-2 d-none d-md-inline">
                            <a className="btn btn-danger" href="#join" onClick={props.LogInHandler}>
                            Join for Free</a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )


}

export default Navigation;
