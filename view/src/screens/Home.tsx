import type React from "react";
import Banner from "../components/Home/Banner";
import Container from "../components/Layout/Container";

const Home: React.FC = () => {
  return (
    <div className="p-12 pr-0">
      <div className="">
        <Banner />
      </div>
      <div className="py-6 px-3">
        <Container>home page</Container>
      </div>
    </div>
  );
};

export default Home;
