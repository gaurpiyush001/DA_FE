// UserProfile.js
import React, { useState, useReducer } from 'react';
// import { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function profileReducer(state, action) {
  switch (action.type) {
    case 'name': {
      return {
        ...state,
        name: action.payload,
      };
    }
    case 'age': {
      return {
        ...state,
        age: action.payload,
      };
    }
    case 'sex': {
      return {
        ...state,
        sex: action.payload
        // isLoggedIn: true,
        // isLoading: false,
      };
    }
    case 'sexual-orientation': {
      return {
        ...state,
        'sexual-orientation': action.payload
      };
    }
    case 'location': {
      return {
        ...state,
        location: action.payload
      };
    }
    case 'relationship': {
      return {
        ...state,
        relationship: action.payload
      };
    }
    case 'dating-intention': {
      return {
        ...state,
        'dating-intention': action.payload
      };
    }
    case 'religion': {
      return {
        ...state,
        religion: action.payload
      };
    }
    case 'beverages': { //alchoholic / non-alchoholic
      return {
        ...state,
        beverages: action.payload
      };
    }
    case 'political-belief': { //-liberal,conservative,moderate
      return {
        ...state,
        'political-belief': action.payload
      };
    }
    case 'profile-pic': { //single pic
      return {
        ...state,
        'profile-pic': action.payload
      };
    }
    case 'extra-images': { //extra images
      return {
        ...state,
        'extra-images': action.payload
      };
    }
    case 'about': {
      return {
        ...state,
        'about': action.payload
      };
    }
    default:
      return state;
  }
}


const UserProfileForm = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    age: 'john@example.com',
    sex: 'M'
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  // const initFunc = (initialState) => {
  //   if ( initialState &&
  //     Object.keys(initialState).length === 0 &&
  //     initialState.constructor === Object) {//if object is empty, then return empty

  //       {name, } = ...initialState

  //   }
  //   return initialState;
  // }

  const initialState = {
    name: '',
    age: '',
    sex: '',
    'sexual-orientation': '',
    location: '',
    relationship: '',
    'dating-intention': '',
    religion: '',
    beverages: '',
    'political-belief': '',
    'profile-pic': '',
    'extra-images': '',
    about: ''
  }

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const handleInputChange = (e) => {
    console.log('e.target', e.target);
    const { name, value } = e.target;
    console.log(' name ', name, ' value ', value)
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo)
  };

  return (
    <div className="container">
      <h1>User Profile</h1>
      {isEditing ? (
        <div>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input
              type="date"
              name="age"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sex:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Sexual-Orientation:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Relationship:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dating-Intention:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Religion:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Beverages:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Political-belief:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Profile Pic:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Extra-Images:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">About:</label>
            <input
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button onClick={handleSaveClick} className="btn btn-primary">
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Age:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Sex:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Sexual-Orientation:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Location:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Relationship:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Dating-Intention:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Religion:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Beverage:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Political-Belief:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Profile-Pic:</strong> {userInfo.email}
          </p>
          <p>
            <strong>Images:</strong> {userInfo.name}
          </p>
          <p>
            <strong>About:</strong> {userInfo.name}
          </p>

          <button onClick={handleEditClick} className="btn btn-secondary">
            Edit
          </button>
        </div>
      )}
    </div>
  );

}

// function UserProfileForm() {

//   // const inputRefSex = useRef();
//   // const inputRefName = useRef();
//   //   const   
//   const [isEditing, setIsEditing] = useState(false);
//   // const [userInfo, setUserInfo] = useState({
//   //   name: 'John Doe',
//   //   age: 'john@example.com',
//   //   sex: 'M'
//   // });

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };

//   const handleInputChange = (e) => {
//     console.log('e.target', e.target);
//     const { name, value } = e.target;
//     console.log(' name ', name, ' value ', value)
//     setUserInfo({ ...userInfo, [name]: value });
//     console.log(userInfo)
//   };

//   return (
//     <div className="container">
//       <h1>User Profile</h1>
//       {isEditing ? (
//         <div>
//           <div className="mb-3">
//             <label className="form-label">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={userInfo.name}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Age:</label>
//             <input
//               type="text"
//               name="age"
//               value={userInfo.email}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Sex:</label>
//             <input
//               type="text"
//               name="email"
//               value={userInfo.email}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <button onClick={handleSaveClick} className="btn btn-primary">
//             Save
//           </button>
//         </div>
//       ) : (
//         <div>
//           <p>
//             <strong>Name:</strong> {userInfo.name}
//           </p>
//           <p>
//             <strong>Age:</strong> {userInfo.email}
//           </p>
//           <p>
//             <strong>Sex:</strong> {userInfo.name}
//           </p>

//           <button onClick={handleEditClick} className="btn btn-secondary">
//             Edit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

export default UserProfileForm;
