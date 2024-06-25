import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AttendeeList from "./AttendeeList/AttendeeList";
import AddAttendee from "./AddAttendee/AddAttendee";

function App() {
  // This is going to be our array which will store the attendees
  const [attendees, setAttendees] = useState([]);

  // fetching from json file
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

  // currently Im just adding the new attendee to the state but in real world scenario we will be sending this data to database/json file.
  const handleAddAttendee = (newAttendee) => {
    setAttendees((prevAttendees) => [...prevAttendees, newAttendee]);
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="challenge-accepted"
              src="assets/challenge.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            ReactNexus Challenge
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          {/* attendees list */}
          <AttendeeList attendees={attendees} />
        </Tab>
        <Tab eventKey="Add" title="Add">
          {/* add new attendees to the attendees list */}
          <AddAttendee onAdd={handleAddAttendee} />
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
