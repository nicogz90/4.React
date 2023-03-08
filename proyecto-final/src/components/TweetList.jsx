import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { useState } from "react";

function TweetList() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.get("/tweets").then((res) => {
      setTweets(res.data);
    });
    setIsLoading(false);
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-auto">
        <Link to="/new-tweet">New Tweet</Link>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul style={{ listStyleType: "none" }}>
            {tweets.map((tweet) => (
              <li key={tweet._id}>
                <p>
                  <strong>@{tweet.author.username}</strong>
                </p>
                <p style={{ marginLeft: "20px" }}>{tweet.text}</p>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TweetList;
