import React, { useEffect } from "react";
import api from "../api";
import { useState } from "react";
import { useSelector } from "react-redux";

function TweetList() {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const username = useSelector((state) => state.users.username);

  function fetchData() {
    setIsLoading(true);
    api.get("/tweets").then((res) => {
      setTweets(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await api.delete(`/tweets/${id}`, {
        headers: { Authorization: "bearer " + localStorage.getItem("token") },
      });
      fetchData();
    } catch (error) {
      setError(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="row d-flex justify-content-center p-0">
      <div className="col-auto">
        {isLoading ? (
          <p>
            <i className="fa fa-spinner fa-spin fa-1x" /> Loading Tweets...
          </p>
        ) : (
          <ul
            style={{
              listStyleType: "none",
              marginTop: "2rem",
              padding: "0",
              maxWidth: "75vw",
            }}
          >
            {tweets.map((tweet, i) => (
              <li key={tweet._id} className={i % 2 !== 0 ? "isOdd" : "isEven"}>
                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <p style={{ margin: 0 }}>
                    <strong>@{tweet.author.username}</strong>
                  </p>
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(tweet._id)}
                    disabled={username !== tweet.author.username}
                  >
                    X
                  </button>
                </div>
                <p style={{ paddingRight: "20px", flexWrap: "wrap" }}>
                  {tweet.text}
                </p>
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
