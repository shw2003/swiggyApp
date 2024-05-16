import React from "react";
import User from "../User";
import UserClass from "../UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <User name="Shweta Function" /> */}
      <UserClass
        name="Shweta"
        location="Mumbai"
        contacts="kamalshweta9@gmail.com"
      />
    </div>
  );
};

export default About;
