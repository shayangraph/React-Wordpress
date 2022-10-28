import React, { Component } from "react";
import "../styles/App.css";
import Posts from "./client/Posts";
import axios from "axios";
import clientConfig from "../clientConfig";

const data = {
  username: "shayangraph",
  password: "Shagraph82",
};

class Main extends Component {
  componentDidMount() {
    //  axios.post(`${clientConfig.siteUrl}/wp-json/jwt-auth/v1/token`,data,{
    //   headers:{
    //     "Content-Type":"application/json"
    //   }
    //  }).then(res=>{
    //    window.localStorage.setItem("token" , res.data.token)
    //    console.log("token is :",res)
    //  }).catch(err => console.log(err , "is token error"))
  }
  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
}

export default Main;
