import { useState } from "react";
import "./App.css";

const ProgrammingLanguage = () => {
  const [selectLanguage, setSelectedLanguage] = useState("");

  const languageHandler = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <form onChange={languageHandler}>
        <label>Select your proficiency in a programming language:</label> <br />
        <input type="radio" name="language" value="Beginner" /> Beginner <br />
        <input
          type="radio"
          name="language"
          value="Intermediate"
        /> Intermediate <br />
        <input type="radio" name="language" value="Advanced" /> Advanced
      </form>
      <p>Selected proficiency level: {selectLanguage}</p>
    </div>
  );
};

const TravelDestination = () => {
  const [selectDestination, setSelectedDestination] = useState("");

  const destinationHandler = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <div>
      <form onChange={destinationHandler}>
        <label>Select your dream travel destination:</label>
        <br />
        <input type="radio" name="destination" value="Beach" /> Beach <br />
        <input type="radio" name="destination" value="Mountain" /> Mountain{" "}
        <br />
        <input type="radio" name="destination" value="City" /> City
      </form>
      <p>Selected travel destination: {selectDestination}</p>
    </div>
  );
};

const CoffeePreference = () => {
  const [selectCoffee, setSelectedCoffee] = useState("");

  const coffeeHandler = (event) => {
    setSelectedCoffee(event.target.value);
  };

  return (
    <div>
      <form onChange={coffeeHandler}>
        <label>Select your coffee preference:</label>
        <br />
        <input type="radio" name="coffee" value="Black Coffee" /> Black Coffee{" "}
        <br />
        <input type="radio" name="coffee" value="Latte" /> Latte <br />
        <input type="radio" name="coffee" value="Cappuccino" /> Cappuccino
      </form>
      <p>Selected coffee preference: {selectCoffee}</p>
    </div>
  );
};

const Pet = () => {
  const [selectPet, setSelectedPet] = useState("");

  const petHandler = (event) => {
    setSelectedPet(event.target.value);
  };

  return (
    <div>
      <form onChange={petHandler}>
        <label>Select your preferred pet:</label>
        <br />
        <input type="radio" name="pet" value="Dog" />
        Dog <br />
        <input type="radio" name="pet" value="Cat" />
        Cat <br />
        <input type="radio" name="pet" value="Fish" />
        Fish
      </form>
      <p>Selected pet: {selectPet}</p>
    </div>
  );
};

const FavoriteSport = () => {
  const [selectSport, setSelectedSport] = useState("");

  const sportHandler = (event) => {
    setSelectedSport(event.target.value);
  };

  return (
    <div>
      <form onChange={sportHandler}>
        <label>Select your favorite sport:</label>
        <br />
        <input type="radio" name="sport" value="Football" />
        Football <br />
        <input type="radio" name="sport" value="Basketball" />
        Basketball <br />
        <input type="radio" name="sport" value="Tennis" />
        Tennis
      </form>
      <p>Selected sport: {selectSport}</p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <ProgrammingLanguage />
      <TravelDestination />
      <CoffeePreference />
      <Pet />
      <FavoriteSport />
    </main>
  );
}
