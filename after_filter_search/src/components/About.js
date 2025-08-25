import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            This is the About Us Page
            <User name={"dravid"} />
            <UserClass name="dravid class" />
        </div>
    )
}

export default About;