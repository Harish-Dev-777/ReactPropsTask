import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import laptop from "./assets/laptop.jpg";
import mobile from "./assets/mobile.jpg";
import tv from "./assets/Tv.jpg";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Welcome To My Website</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          animi!
        </p>
      </header>
      <section>
        <Card
          image={laptop}
          name={"Laptop"}
          price={40000} 
        ></Card>
        <Card
          image={mobile}
          name={"Mobile"}
          price={30000}
        ></Card>
        <Card
          image={tv}
          name={"Tv"}
          price={50000}
        ></Card>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default App;
