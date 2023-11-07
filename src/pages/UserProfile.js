import { Fragment } from "react";
import Navigation from "../components/Navigation";
import UserProfileForm from "../forms/UserProfileForm";

const UserProfile = () => {
    return (
        <Fragment>

            <Navigation />
            <UserProfileForm />

        </Fragment>
    )
}

export default UserProfile;