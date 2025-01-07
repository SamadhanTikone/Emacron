// import React from "react";
import "./OperatingModelSection.css"; // Import the CSS for the gradient background
import DoneMarkIcon from "/svgs/doneMark.svg?url";
import AgileIcon from "/svgs/agile.svg";
import HandshakeIcon from "/svgs/handshake.svg";
import MoneyIcon from "/svgs/money.svg";
import SupportIcon from "/svgs/support.svg";
import TimeIcon from "/svgs/time.svg";

const OperatingModelSection = () => {
  const features = [
    {
      title: "Quality Deliverables",
      description:
        "We ensure top-tier deliverables that meet your business needs.",
      icon: DoneMarkIcon,
    },
    {
      title: "Agile Process",
      description:
        "We follow agile methodologies for fast and effective outcomes.",
      icon: AgileIcon,
    },
    {
      title: "Timely Releases",
      description:
        "We guarantee timely product releases to meet your market demands.",
      icon: TimeIcon,
    },
    {
      title: "Tech Support",
      description: "24/7 support to ensure smooth operation of your systems.",
      icon: SupportIcon,
    },
    {
      title: "Technology Partner",
      description:
        "We become your trusted partner for all technological innovations.",
      icon: HandshakeIcon,
    },
    {
      title: "Cost Savings",
      description: "We ensure cost savings for your business operations.",
      icon: MoneyIcon,
    },
  ];

  return (
    <section className="py-16 h-screen text-white gradient-bg bg-gray-600">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Digital Operating Model
        </h2>
        <div className="grid grid-cols-2 gap-12 place-self-center text-center sm:text-lg md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center card p-2">
      <div className="bg-white text-blue-600 p-4 sm:p-6 rounded-full mb-4">
        <img
          src={icon}
          alt={title}
          className="w-6 h-6 sm:w-12 sm:h-12 animated-icon"
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>

      <p className=" block text-center w-[60%] md:w-[80%]">{description}</p>
    </div>
  );
};

export default OperatingModelSection;
