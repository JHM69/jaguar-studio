import React from 'react';
import Typography from './ui/Typography';

const Services: React.FC = () => {
  const services = [
    "UI/UX Design", "Product Strategy", "Design Systems", "Product Design", 
    "Brand Identity", "Web & Mobile App Design", "User Research", 
    "Usability Testing", "Creative Direction", "Web Development"
  ];

  const industries = [
    "E-Commerce", "Life Sciences", "Direct 2 Consumer", "Health Tech", 
    "EdTech", "Health & Wellbeing", "FinTech", "B2B", "Enterprise", 
    "SaaS", "B2C"
  ];

  const clients = [
    "Netflix", "Robin Hood Labs", "Spire Sciences", "b.WEAR", "Priori"
  ];

  return (
    <section className="flex flex-col px-4 md:px-10 py-4 md:py-6 items-center justify-center">
      <Typography variant="small" className="mt-4 mx-4  lg:w-[694.79px] text-center items-center text-black leading-5 "> 
        At Jaguar Studio, we design with intention, adapting to the evolving digital landscape to
        create user-focused solutions that seamlessly integrate creativity and
        functionality, empowering brands to thrive across all platforms.
      </Typography>
      <Typography variant="h3" className="mt-[17px] font-semibold">Get in touch with us.</Typography>
      
      <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-[45px] text-left">
        {/* Services */}
        <div>
          <Typography variant="tiny" className="font-light">Services</Typography>
          <ul className="mt-4 space-y-0 md:space-y-[-4px] text-gray-800 font-semibold text-sm">
            {services.map(service => (
              <li key={service}>
                <Typography variant="small">{service}</Typography>
              </li>
            ))}
          </ul>
        </div>
        {/* Industries */}
        <div>
          <Typography variant="tiny" className="font-light">Industries</Typography>
            <ul className="mt-4 space-y-0 md:space-y-[-4px] text-gray-800 font-semibold text-sm">
            {industries.map(industry => (
              <li key={industry}>
                <Typography variant="small">{industry}</Typography>
              </li>
            ))}
          </ul>
        </div>
        {/* Selected Clients */}
        <div>
          <Typography variant="tiny" className="font-light">Selected Clients</Typography>
            <ul className="mt-4 space-y-0 md:space-y-[-4px] text-gray-800 font-semibold text-sm">
            {clients.map(client => (
              <li key={client}>
                <Typography variant="small">{client}</Typography>
              </li>
            ))}
          </ul>
        </div>
        {/* Empty Column */}
        <div></div>
      </div>
    </section>
  );
};

export default Services;
