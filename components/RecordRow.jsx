import { useState } from "react";

export default function RecordRow({ record, isTimeline }) {
  return (
    <div className={`rowContainer ${isTimeline ? "timelineRow" : ""}`}>
      {isTimeline && <div className="bullet"></div>}
      <div className="shortDescriptionContainer">
        <div className="nameContainer">
          <h5>{record.name}</h5>
          {record.company ? <p>{record.company}</p> : <p>{record.skills}</p>}
          <p>{record.date}</p>
        </div>
        {record.keyPoints && (
          <div className="keyPointsContainer">
            <ul className="keyPoints">
              {record.keyPoints?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
