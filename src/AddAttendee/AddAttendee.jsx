import { useState } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

const AddAttendee = ({ onAdd }) => {
  //hooks
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  // handle function
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAttendee = { id: Date.now(), name, company };
    onAdd(newAttendee);
    setName("");
    setCompany("");
  };

  return (
    <div className="add-attendee">
      <h2>Add New Attendee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
          style={{ margin: "10px" }}
        />
        <br />
        <input
          type="text"
          value={company}
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
          required
          style={{ margin: "10px" }}
        />
        <br />
        <Button variant="dark" type="submit" style={{ margin: "10px" }}>Add Attendee</Button>
      </form>
    </div>
  );
};

AddAttendee.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddAttendee;
