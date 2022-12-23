import Card from "../UI/Card";
import TechItem from "./TechItem/TechItem";
import techs from "../../data/AvailableTechsData.js";

import classes from "./AvailableTechs.module.css";

function AvailableTechs() {
  const techsList = techs.map((tech) => (
    <TechItem
      key={tech.id}
      id={tech.id}
      name={tech.name}
      description={tech.description}
      price={tech.price}
    />
  ));

  return (
    <section className={classes.techs}>
      <Card>
        <ul>{techsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableTechs;
