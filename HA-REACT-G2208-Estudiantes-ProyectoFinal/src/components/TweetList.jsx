import React, { useEffect, useState } from "react";
import api from "../api";

export default function TweetList() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.get("/tweets").then((result) => {
      setTweets(result.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Cargando Tweets...</p>;
  }

  return (
    <ul style={{ listStyleType: "none" }}>
      {tweets.map((tweet) => {
        return (
          <li key={tweet._id}>
            <div>
              <h2>@{tweet.author.username}</h2>
            </div>
            <div style={{ marginLeft: "20px" }}>{tweet.text}</div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}
