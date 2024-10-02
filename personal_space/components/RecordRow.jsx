import { useState } from "react";

export default function RecordRow({ record, isTimeline }) {
  // State to track if the description is visible
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the description visibility
  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`rowContainer ${isTimeline ? "timelineRow" : ""}`}
      onClick={toggleDescription}
    >
      {isTimeline && <div className="bullet"></div>}
      <div className="nameContainer">
        <h5>{record.name}</h5>
        {record.company ? <p>{record.company}</p> : <p>{record.skills}</p>}
        <p>{record.date}</p>
      </div>
      {isOpen && (
        <div className="descriptionContainer">
          <p>{record.description}</p>
        </div>
      )}
    </div>
  );
}