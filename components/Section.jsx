import RecordRow from "./RecordRow";

export default function Section({ header, list, isTimeline }) {
  return (
    <section>
      <h4>{header}</h4>
      <div className={isTimeline ? "timeline" : "regularList"}>
        {list.map((record) => (
          <RecordRow record={record} key={record.id} isTimeline={isTimeline} />
        ))}
      </div>
    </section>
  );
}
