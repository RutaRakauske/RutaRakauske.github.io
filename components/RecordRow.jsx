export default function RecordRow({ record, isTimeline }) {
  return (
    <div className={`rowContainer ${isTimeline ? "timelineRow" : ""}`}>
      {isTimeline && <div className="bullet"></div>}
      <div className="shortDescriptionContainer">
        <div className="nameContainer">
          <h5>{record.name}</h5>
          {record.company ? <p>{record.company}</p> : <p>{record.skills}</p>}
          <p>{record.date}</p>
          {record.image && (
            <a href={record.url} target="_blank" rel="noopener noreferrer">
              <img
                src={record.image}
                alt="external website main page image"
                className="webPageImg"
              />
            </a>
          )}
          {record.gitHub && (
            <a href={record.gitHub} target="_blank" rel="noopener noreferrer">
              Code in GitHub
            </a>
          )}
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
