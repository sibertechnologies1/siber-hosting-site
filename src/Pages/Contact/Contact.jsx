import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import { GrLocation, GrPhone } from 'react-icons/gr';
import { FaPaperPlane } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import ContactImg1 from './ContactImg/ContactImg1.jpg';

const ContactInfo = ({ Icon, title, value, href }) => (
  <div className="flex flex-col justify-center items-center">
    <Icon className="bg-[#15803d] p-2 text-[#fbbf24] my-2 text-4xl rounded-[50%]" />
    <p className="font-bold">
      {title}: <a href={href} className="font-light mx-2">{value}</a>
    </p>
  </div>
);

function Contact() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col w-full justify-center items-center px-16 my-20">
        <h1 className="font-bold text-xl mt-12">Contact Siber Techs On:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          <ContactInfo Icon={GrLocation} title="Address" value="Barekese, Kumasi" />
          <ContactInfo Icon={GrPhone} title="Phone" value="(+233) 054 352 9284" href="tel:0543529284" />
          <ContactInfo Icon={FaPaperPlane} title="Email" value="sibertechs@gmail.com" href="mailto:sibertechs@gmail.com" />
          <ContactInfo Icon={GiWorld} title="Website" value="Visit our website" href="https://sibertechsdotcom-f33n.vercel.app/" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 ">
          <form className="flex flex-col  border shadow-2xl rounded-md p-4">
            <h2 className="text-3xl mb-4">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col">
                <label className="font-bold uppercase text-sm">Full Name</label>
                <input type="text" className="border-b-2 outline-none p-3 w-full focus:border-[#15803d]" placeholder="Name" required />
              </div>
              <div className="flex flex-col">
                <label className="font-bold uppercase text-sm">Email Address</label>
                <input type="email" className="border-b-2 outline-none p-3 w-full focus:border-[#15803d]" placeholder="Email" required />
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label className="font-bold uppercase text-sm">Subject</label>
              <input type="text" className="border-b-2 outline-none p-3 w-full focus:border-[#15803d]" placeholder="Subject" required />
            </div>
            <div className="flex flex-col my-4">
              <label className="font-bold uppercase text-sm">Message</label>
              <textarea className="border-2 outline-none p-3 w-full focus:border-[#15803d]" rows="4" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="bg-[#15803d] text-white py-2 px-4 rounded-lg mt-4 hover:bg-[#0f581e]">Send Message</button>
          </form>

          <div className="w-full ">
            <img src={ContactImg1} alt="Contact Us" className="w-1/2 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
