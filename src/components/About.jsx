import RedDog from "../assets/red-dog.png";
import AboutBG from "../assets/bg-2.png";

const About = () => {
  return (
    <>
      <div
        className="container w-full h-[4px] bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"
        id="about"
      ></div>
      <div
        className="wrapper mt-6 lg:mt-0"
        style={{ backgroundImage: `url(${AboutBG})` }}
      >
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 ">
            <img src={RedDog} alt="" />
          </div>
          <div className="md:col-span-3 flex flex-col justify-center">
            <h2 className="title">About the game</h2>
            <p className="para max-w-[720px] mt-4 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates repudiandae eligendi tempora dolores consequuntur.
              Soluta temporibus odit dolore, quae expedita alias voluptatem
              incidunt modi ullam et culpa architecto ipsam ipsum? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptates
              repudiandae eligendi tempora dolores consequuntur. Soluta
              temporibus odit dolore, quae expedita alias voluptatem incidunt
              modi ullam et culpa architecto ipsam ipsum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
