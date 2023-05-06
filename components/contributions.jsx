import React, { useState, useEffect } from "react";

const Contributions = ({ username, date }) => {
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/events`
      );
      const events = await response.json();
      const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.created_at).toLocaleDateString();
        return event.type === "PushEvent" && eventDate === date;
      });
      const totalCommits = filteredEvents.reduce(
        (sum, event) => sum + event.payload.commits.length,
        0
      );
      setContributions(totalCommits);
    };
    fetchData();
  }, [username, date]);

  return (
    <div>
      {contributions !== null ? (
        <p>{`${username} made ${contributions} contributions on ${date}`}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Contributions;
