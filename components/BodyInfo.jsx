import Section from "./Section";
import data from "../src/data.json";

export default function Bodyinfo() {
  return (
    <div>
      <Section
        header="work experience"
        list={data.workExperience}
        isTimeline={true}
      />
      <Section header="education" list={data.education} isTimeline={false} />
      <Section header="skills" list={data.skills} isTimeline={false} />
    </div>
  );
}
