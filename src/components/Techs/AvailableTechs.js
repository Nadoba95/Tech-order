import Card from "../UI/Card";
import TechItem from "./TechItem/TechItem";

import classes from "./AvailableTechs.module.css";

const techs = [
  {
    id: "t1",
    name: "SAMSUNG 1213",
    price: 1100,
    description: "New iphone series device on discount 15%",
  },
  {
    id: "t2",
    name: "Iphone 13 Pro Max",
    price: 1500,
    description: "New iphone series device on discount 15%",
  },
  {
    id: "t3",
    name: "Hendard",
    price: 500,
    description: "New iphone series device on discount 15%",
  },
  {
    id: "t4",
    name: "okidartan",
    price: 51100,
    description: "New iphone series device on discount 15%",
  },
  {
    id: "t5",
    name: "pinoko123",
    price: 134500,
    description: "New iphone series device on discount 15%",
  },
];

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
