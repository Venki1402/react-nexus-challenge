import { useState, useEffect } from "react";
import "./AttendeeList.css";

const AttendeeList = () => {
  // hooks
  const [attendees, setAttendees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/attendees.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`ERROR! Status-code: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setAttendees(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // search function
  const filteredAttendees = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="attendee-list">
      <h1>List of Attendees</h1>
      <input
        type="text"
        value={search}
        placeholder="Search for attendees..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredAttendees.map((attendee) => (
          <li key={attendee.id}>
            <h2>{attendee.name}</h2>
            <p>company : {attendee.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendeeList;
