import classes from './Header.css'
import Navigation from './Navigation';

const Header = (props) => {

    const backgroundStyle = {
        backgroundImage: `url('./assets/bright_sunflower_forehead.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
        width: "100%",
        position: "relative",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
    };

    const middleDivHeader = {
        minWidth: "min-content",
        width: "50vw",
        height: "min-height",
        transform: "translate(50%, 170%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const nestedDivHeader = {
        display: "flex",
        justifyContent: "space-around",
        width: "50%"
    }

    // style={{marginRight: spacing + 'em'}}
    // className='d-flex justify-content-around w-lg-50 w-md-100'
    return (
        <div style={backgroundStyle}>
            <Navigation LogInHandler={props.onJoinClick}/>
            <div style={middleDivHeader} >
                <div className='d-flex justify-content-around w-50'>
                    <button onClick={props.onJoinClick} className='btn px-lg-4 py-lg-2 px-sm-2 py-sm-1 px-2 py-2 border-3 me-lg-0 me-4 btn-light border-danger fw-medium'>Seeker</button>
                    <button onClick={props.onJoinClick} className='btn px-lg-4 py-lg-2 px-sm-2 py-sm-1 px-2 py-2 border-2 ms-lg-0 ms-4  border-light btn-danger text-light fw-medium'>Wanna Date</button>
                </div>
                <p style={{textAlign:"center",marginTop:"1rem",color:"#ffffff",fontWeight:"500"}}>Falling in Love Starts with Us – Join the Romance Revolution!
                </p>
            </div>
        </div>
    )


}

export default Header;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, justo id sagittis tincidunt, mi velit consequat erat, non varius velit ex at libero.


// Find Your Love Story - Where Heart Meets Technology