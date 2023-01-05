import React from "react";

function Info() {
  return (
    <div className="info">
      {/* <img
        src="kermit-headshot.jpg"
        alt="headshot"
        width="50px"
        className="head-shot"
      /> */}
      <h1 className="name">Kermit The Frog</h1>
      <h3 className="title">Frontend Pond Dweller</h3>
      <h4 className="website">kermit.website</h4>
      <button id="emailbtn">Email</button>
      <button id="linkedinbtn">LinkedIn</button>
    </div>
  );
}

export default Info;
