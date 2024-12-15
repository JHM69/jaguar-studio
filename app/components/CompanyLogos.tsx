import Image from 'next/image';

const CompanyLogos = () => {
  return (
    <div className="flex flex-row mx-8 justify-between space-x-12 my-8">
      <Image src="/companies-logo/netflix.png" alt="Netflix" width={185} height={50} />
      <Image src="/companies-logo/robin-hood.png" alt="Robinhood" width={145} height={50} />
      <Image src="/companies-logo/spire-science.png" alt="Spire Sciences" width={214.4} height={60} />
      <Image src="/companies-logo/b-wear.png" alt="b.WEAR" width={226} height={40} />
      <Image src="/companies-logo/priori.png" alt="Priori" width={223} height={60} />
    </div>
  );
};

export default CompanyLogos;
