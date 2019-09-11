import React from "react";
import GitCard from "./GitCard.js";

class GitList extends React.Component {
  render() {
    return (
      <>
        <GitCard subj={this.props.data} />
        {this.props.list.map(cv => {
          return <GitCard subj={cv} key={cv.login} />;
        })}
      </>
    );
  }
}

export default GitList;
