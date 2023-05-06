import React, { useState, useEffect } from "react";

const Contributions = ({
  username,
  date = new Date().toLocaleDateString("en-US", { timeZone: "UTC" }),
}) => {
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
    <>
      {contributions !== null ? (
        <>{`- ${username} ( ${contributions} ~ ${date} )`}</>
      ) : (
        <>...</>
      )}
    </>
  );
};

export default Contributions;
