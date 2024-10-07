import RecordRow from "./RecordRow";

export default function Section({ header, list }) {
  return (
    <section>
      <h4>{header}</h4>
      <div className={header == "work experience" ? "timeline" : "regularList"}>
        {list.map((record) => (
          <RecordRow
            record={record}
            key={record.id}
            isTimeline={header == "work experience"}
          />
        ))}
      </div>
    </section>
  );
}
