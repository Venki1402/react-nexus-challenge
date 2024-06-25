import { useState } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendeeList = ({ attendees }) => {
  // hooks
  const [search, setSearch] = useState("");

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
        className="search-bar"
        style={{ margin: "10px" }}
      />
      <div className="card-container">
        {filteredAttendees.map((attendee) => (
          <Card
            border="secondary"
            style={{ width: "18rem", margin: "10px" }}
            key={attendee.id}
          >
            <Card.Body>
              <Card.Title>{attendee.name}</Card.Title>
              <Card.Text>Company: {attendee.company}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

AttendeeList.propTypes = {
  attendees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AttendeeList;
