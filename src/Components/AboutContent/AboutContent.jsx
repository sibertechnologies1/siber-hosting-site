import React from "react";

const AboutSection = () => {
  return (
    <section className="md:px-16 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center my-8">About Us</h2>
      <p className="mt-6 text-gray-700 leading-relaxed max-w-4xl mx-auto text-center  text-sm">
        <span className="text-[#15803d] font-semibold">Siber Techs</span> is a team of passionate and innovative developers, designers, and  
        problem-solvers dedicated to crafting high-quality digital solutions. Our expertise  
        spans across web development, UI/UX design, and modern software solutions that drive  
        success for businesses and individuals alike.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-center  text-sm">
        We believe in the power of technology to transform ideas into reality. By combining  
        creativity, technical expertise, and a deep understanding of user needs, we develop  
        seamless and engaging experiences tailored to modern demands. Our mission is to push  
        boundaries, deliver cutting-edge solutions, and leave a lasting impact in the digital space.
      </p>
    </section>
  );
};

export default AboutSection;
