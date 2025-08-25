import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        console.log("Constructor - UserClass");
    }
    componentDidMount() {
        console.log("Component Did Mount - UserClass");
    }
    render() {
        console.log("Render - UserClass");
        return (
            <div className="user-card">
                <h4>Count: {this.state.count}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Inc</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Loc: Chennai</h3>
            </div>
        )
    }
}

export default UserClass;
// 1:07