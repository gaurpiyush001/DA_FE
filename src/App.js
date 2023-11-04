// import { Fragment } from 'react';
import { Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import AuthModal from './components/MyModal';
// import Navigation from './components/Navigation';
import LogInForm from './forms/LogInForm';

function App() {

  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      {/* <Navigation /> */}
      <AuthModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        // logformcomponent={LogInForm}
        modalheading="Make Love❤️ Happen, Sign Up Now !" 
      />
      <Header onJoinClick={() => setModalShow(true)} />
      <Main />
    </Fragment>
  );
}

export default App;
