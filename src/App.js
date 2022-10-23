import axios from "axios";
import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import clientConfig from "./clientConfig";
import Login from "./components/client/Login";
import Post from "./components/client/Post";
import Main from "./components/Main";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get(`${clientConfig.siteUrl}/wp-json/wp/v2/posts`)
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const renderPosts = (routerProps) => {
      let postId = parseInt(routerProps.match.params.id);
      let foundPost = this.state.posts.find((postObj) => postObj.id === postId);
      return foundPost ? <Post post={foundPost} /> : "";
    };
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/:id"
            render={(routerProps) => renderPosts(routerProps)}
          />
          <Route exact path="/" component={Main} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
