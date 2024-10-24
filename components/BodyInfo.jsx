import Section from "./Section";
import data from "../src/data.js";

export default function Bodyinfo() {
  return (
    <div>
      <Section header="skills" list={data.skills} />
      <Section header="portfolio" list={data.portfolio} />
      <Section header="work experience" list={data.workExperience} />
      <Section header="education" list={data.education} />
    </div>
  );
}
