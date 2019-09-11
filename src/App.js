import React from "react";
import "./App.scss";
import axios from "axios";
import GitList from "./Components/GitList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.url = "https://api.github.com/users/";
    this.state = {
      gitData: {},
      followers: [],
      followerGitData: []
    };
  }

  componentDidMount() {
    axios
      .get(this.url + "benjamin-t-wilson")
      .then(res => {
        this.setState({ gitData: res.data });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
    axios
      .get(this.url + "benjamin-t-wilson/followers")
      .then(res => {
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log("Followers Error: ", err);
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.followers !== this.state.followers) {
      this.state.followers.map(cv => {
        return (
        axios
          .get(this.url + cv.login)
          .then(res => {
            this.setState({
              followerGitData: [...this.state.followerGitData, res.data]
            });
          })
          .catch(err => {
            console.log("Error: ", err);
          }))
      });
    }
  }

  render() {
    return (
      <div className="container">
        <GitList
          data={this.state.gitData}
          list={this.state.followerGitData}
          url={this.url}
        />
      </div>
    );
  }
}

export default App;
