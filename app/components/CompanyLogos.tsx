import Image from 'next/image';

const CompanyLogos = () => {
  return (
    <div className="flex flex-wrap justify-center mx-4 md:mx-[40px] mt-8 gap-4">
      {[
        { src: "/companies-logo/netflix.svg", alt: "Netflix", width: 100, height: 30 },
        { src: "/companies-logo/robin-hood.svg", alt: "Robinhood", width: 80, height: 30 },
        { src: "/companies-logo/spire-science.svg", alt: "Spire Sciences", width: 214.4, height: 60 },
        { src: "/companies-logo/b-wear.svg", alt: "b.WEAR", width: 226, height: 40 },
        { src: "/companies-logo/priori.svg", alt: "Priori", width: 223, height: 60 },
      ].map((logo, index) => (
        <div key={index} className="m-2 flex-shrink-0">
          <Image 
            src={logo.src} 
            alt={logo.alt} 
            width={logo.width} 
            height={logo.height} 
            className="max-w-[150px] md:max-w-[200px] w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default CompanyLogos;
