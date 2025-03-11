import React from "react";
import trav from "../../assets/trav.jpg";
import Card from "../../components/card/card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-row justify-center px-6 md:px-16 py-10 gap-14">
        <div className="flex flex-row justify-center px-16 py-10 gap-1">
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-base md:text-5xl uppercase">
              Welcome to <br />
              my Portfolio
            </h1>
            <p className="text-xs md:text-base mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img
            src={trav}
            alt="Potrait"
            className="w-[200px] h-[250px] md:w-[400px] md:h-[500px] object-cover rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[50px]"
          />
        </div>
      </section>

      <section className="flex flex-col">
        <h1 className="font-semibold text-xl md:text-5xl uppercase text-center">
          My Projects
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-5 p-6 md:p-16">
          <div className="flex-1">
            <Card
              imgSrc={trav}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="flex-1">
            <Card
              imgSrc={trav}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <div className="flex-1">
            <Card
              imgSrc={trav}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
