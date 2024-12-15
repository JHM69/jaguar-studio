import React from 'react';
import Typography from './ui/Typography';

const Services: React.FC = () => {
  return (
    <section className="">
        
      <Typography variant="body" className="mt-4 mx-16 text-gray-600 text-center">
        At Jaguar Studio, We design with intention, adapting to the evolving digital landscape to
        create user-focused solutions that seamlessly integrate creativity and
        functionality, empowering brands to thrive across all platforms.
      </Typography>
      <Typography variant="h3" className="mt-8 font-semibold">Get in touch with us.</Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
        {/* Services */}
        <div>
          <Typography variant="body" className="font-light">Services</Typography>
          <ul className="mt-4 space-y-2 text-gray-800 font-semibold">
            <li>UI/UX Design</li>
            <li>Design Systems</li>
            <li>Product Design</li>
            <li>Brand Identity</li>
            <li>Web & Mobile App Design</li>
            <li>User Research</li>
            <li>Usability Testing</li>
            <li>Creative Direction</li>
            <li>Web Development</li>
          </ul>
        </div>
        {/* Industries */}
        <div>
          <Typography variant="body" className="font-light">Industries</Typography>
          <ul className="mt-4 space-y-2 text-gray-800 font-semibold">
            <li>E-Commerce</li>
            <li>Life Sciences</li>
            <li>Direct 2 Consumer</li>
            <li>Health Tech</li>
            <li>EdTech</li>
            <li>Health & Wellbeing</li>
            <li>FinTech</li>
            <li>B2B</li>
            <li>Enterprise</li>
            <li>SaaS</li>
            <li>B2C</li>
          </ul>
        </div>
        {/* Selected Clients */}
        <div>
          <Typography variant="body" className="font-light">Selected Clients</Typography>
          <ul className="mt-4 space-y-2 text-gray-800 font-semibold">
            <li>Netflix</li>
            <li>Robin Hood Labs</li>
            <li>Spire Sciences</li>
            <li>b.WEAR</li>
            <li>Priori</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
