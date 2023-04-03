import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function NewTweet() {
  const [newTweet, setNewTweet] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await api.post(
        "/tweets",
        { text: newTweet },
        {
          headers: { Authorization: "bearer " + localStorage.getItem("token") },
        }
      ); // enviamos nuevo tweet y token en header a servidor.
      navigate("/tweets");
    } catch (error) {
      setError(error.response.data.message);
    }
    setIsLoading(false);
  };
  return (
    <form
      className="row d-flex justify-content-center"
      action=""
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="col-auto">
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
        <button
          type="submit"
          className="btn btn-primary m-3"
          disabled={!newTweet}
        >
          {isLoading ? <i className="fa fa-spinner fa-spin fa-1x" /> : "Send"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </form>
  );
}

export default NewTweet;
