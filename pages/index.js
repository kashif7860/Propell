import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState("checked text");

  function generateTableContent() {
    return (
      "<html><body>" +
      "<table border='1'>" +
      "<tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>" +
      `<tr><td>${firstName}</td><td>${lastName}</td><td>${checkBox}</td></tr>` +
      "</table>" +
      "</html></body>"
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Feedback on your service");
    const body = encodeURIComponent(generateTableContent());

    const mailtoLink = `mailto:recipient@example.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    // Your submit logic here
  };

  return (
    <div className="form-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="home-message-main">
          Become a{" "}
          <span className="home-message-sub-1" style={{ color: "#B9B2DC" }}>
            propeller
          </span>{" "}
          today.
          <p className="home-message-sub-2">
            Stay up to date today. Stay up to date with our latest product and
            investment news.
          </p>
        </div>
      </div>
      <Card variant="outlined">
        <CardContent>
          <h1
            style={{
              textAlign: "center",
              color: "#000",
              fontFamily: "Moderat",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "32px",
            }}
          >
            Join our newsletter
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Row 1: Checkboxes with text on the right */}
            <div
              style={{
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Select all that apply
            </div>
            <div
              style={{
                marginBottom: "16px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="I’m a prospective investor"
                labelPlacement="end" // Positions the label on the start (right side of checkbox)
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I am a landlord, and want to use Propell"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I just want to be in the loop"
                labelPlacement="end"
              />
            </div>

            {/* Row 2: Inputs */}
            <div className="field-container">
              <TextField
                value={firstName}
                label="First Name"
                variant="outlined"
                style={{
                  flex: "1",
                  marginBottom: "16px",
                  width: "100%",
                  marginRight: "16px",
                }}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                value={lastName}
                label="Last Name"
                style={{ flex: "1", marginBottom: "16px", width: "100%" }}
                variant="outlined"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            {/* Row 3: Input */}
            <div style={{ marginBottom: "16px", flex: "1" }}>
              <TextField
                value={email}
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Row 4: Submit Button */}
            <div style={{ width: "100%" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  backgroundColor: "#F9D75D",
                  color: "black",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div
        style={{
          marginTop: "10px",
          color: "#FFF",
          fontFamily: "Moderat",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
        }}
      >
        Learn more
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.75 17.25L12 21M12 21L8.25 17.25M12 21V3"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
