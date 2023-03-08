import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function NewTweet() {
  const [newTweet, setNewTweet] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await api.post("/tweets", { text: newTweet });
      navigate("/tweets");
    } catch (error) {
      setError(error.response.data?.message);
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>New tweet</h1>
      <textarea
        name="new-tweet"
        id="new-tweet"
        cols="30"
        rows="5"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
        placeholder="Say something..."
      ></textarea>
      <button type="submit" disabled={!newTweet}>
        {isLoading ? "Sending" : "Send"}
      </button>
      {error && <p style={{ color: "red" }}> {error} </p>}
    </form>
  );
}
