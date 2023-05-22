import React, {useState, useEffect} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import SnackOrBoozeApi from "./Api";


function Home() {

  const [snacksCount, setSnacksCount] = useState(0);
  const [drinksCount, setDrinksCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const snacks = await SnackOrBoozeApi.getSnacks();
      const drinks = await SnackOrBoozeApi.getDrinks();
      setSnacksCount(snacks.length);
      setDrinksCount(drinks.length);
    }

    fetchData();

  }, []);

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
