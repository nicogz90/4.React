import React, { useEffect } from "react";
import api from "../api";
import { useState } from "react";

function TweetList() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.get("/tweets").then((res) => {
      setTweets(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-auto">
        {isLoading ? (
          <p>
            <i className="fa fa-spinner fa-spin fa-1x" /> Loading Tweets...
          </p>
        ) : (
          <ul style={{ marginTop: "2rem", listStyleType: "none" }}>
            {tweets.map((tweet, i) => (
              <li key={tweet._id} className={i % 2 !== 0 ? "isOdd" : "isEven"}>
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