import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {

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
        <div></div>
    )


}

export default Navigation;
