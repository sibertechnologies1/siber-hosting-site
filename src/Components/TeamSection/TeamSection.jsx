import React from "react";
import Team1 from "./Team1.jpg";
import team2 from "./team2.png";

const TeamSection = () => {
  const team = [
    { 
      name: "Tiroug Boadzie Ebenezer", 
      role: "CEO", 
      img: Team1,
      bio: "Tiroug is a visionary leader with a passion for technology and innovation. With over 5 years of experience in the tech industry, he has led multiple successful projects that have brought significant improvements to the business." 
    },
    { 
      name: "Cobby Bossman", 
      role: "CTO", 
      img: team2, 
      bio: "Cobby has been instrumental in driving the technical direction of the company. He brings expertise in software development and systems architecture, overseeing the development of cutting-edge solutions for our clients."
    },
  ];

  return (
    <div>
      {/* Leadership Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-xl font-semibold text-gray-800">Leadership</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-center lg:w-80 w-full hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full mx-auto w-32  h-32 object-cover mb-4"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-lg text-gray-600">{member.role}</p>
              <p className="mt-4 text-sm text-gray-500 text-justify">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800  text-center">What We Do</h2>
        <div className="mt-8 flex lg:flex-row flex-col justify-center gap-12">
          <div className="p-8 rounded-lg shadow-lg text-center lg:w-80 w-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-900  text-center">Web Development</h3>
            <p className="mt-4 text-sm text-gray-600 text-justify">
              We create responsive, user-friendly websites that provide a seamless experience across all devices.
            </p>
          </div>
          <div className=" p-8 rounded-lg shadow-lg lg:w-80 w-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">Mobile Apps</h3>
            <p className="mt-4 text-sm text-gray-600 text-justify">
              Our team develops mobile apps that are intuitive, scalable, and tailored to your business needs.
            </p>
          </div>
          <div className="p-8 rounded-lg shadow-lg  lg:w-80 w-full hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-900  text-center">Cloud Solutions</h3>
            <p className="mt-4 text-sm text-gray-600 text-justify">
              We offer cloud-based services to streamline your business processes and ensure data security and scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">What Our Clients Say</h2>
        <div className="mt-8 flex lg:flex-row flex-col justify-center gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-justify l:w-80 w-full">
            <p className="text-lg text-gray-600">
              "The team at Siber Technologies exceeded our expectations. Their attention to detail and commitment to excellence made a significant impact on our business."
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-900">Client Name</p>
            <p className="text-gray-600">CEO, [Gitgoa & Niitha Group of Companies]</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-justify l:w-80 w-full">
            <p className="text-lg text-gray-600">
              "Thanks to the expertise of [Siber Technologies], we were able to streamline our operations and improve our overall business performance."
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-900">Client Name</p>
            <p className="text-gray-600">CTO, [Grat Dimafa Media Group]</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
          We're here to help. If you have any questions or would like to learn more about our services, please don't hesitate to reach out.
        </p>
        <div className="mt-8">
          <a href="mailto:info@yourcompany.com" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
