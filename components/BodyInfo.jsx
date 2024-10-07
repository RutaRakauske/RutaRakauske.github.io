import Section from "./Section";
import data from "../src/data.json";

export default function Bodyinfo() {
  return (
    <div>
      <Section header="work experience" list={data.workExperience} />
      <Section header="education" list={data.education} />
      <Section header="skills" list={data.skills} />
    </div>
  );
}
