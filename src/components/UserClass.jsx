import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        location: "dummy",
        contact: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shw2003");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { contacts } = this.props;
    const { name, location, contact, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} height="200px" weight="200px" />
        <h3>Name: {name}</h3>
        {/* <h4> count: {this.state.count}</h4> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count INc
        </button> */}
        <h3>Location: {location}</h3>
        <h3>Contact: {contacts}</h3>
        <h3>Software engineer</h3>
      </div>
    );
  }
}

export default UserClass;
