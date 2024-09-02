import { Link } from "react-router-dom";

import React from "react";

const Content = ({ title, url, number }) => {
  return (
    <div className="w3-container w3-margin">
      <Link key={url + "link"} to={"/" + url}>
        <h3 key={url + "toc"} className="w3-border-bottom w3-padding-16">
          <span className="w3-xlarge w3-border w3-padding">{number}</span>
          &nbsp;&nbsp;&nbsp;
          {title}
        </h3>
      </Link>
    </div>
  );
};

export default Content;
