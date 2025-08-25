import {useState} from "react";

const User = (props) => {
    const [count] = useState(0);
    return(
        <div className="user-card">
            <h4>Count: {count}</h4>
            <h2>Name: {props.name}</h2>
            <h3>Loc: Chennai</h3>
        </div>
    )
}

export default User;