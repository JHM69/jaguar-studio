import Image from 'next/image';

const CompanyLogos = () => {
  return (
    <div className="flex flex-row mx-[40px] justify-between space-x-8 mt-[48px]">
      <Image src="/companies-logo/netflix.svg" alt="Netflix" width={185} height={50} />
      <Image src="/companies-logo/robin-hood.svg" alt="Robinhood" width={145} height={50} />
      <Image src="/companies-logo/spire-science.svg" alt="Spire Sciences" width={214.4} height={60} />
      <Image src="/companies-logo/b-wear.svg" alt="b.WEAR" width={226} height={40} />
      <Image src="/companies-logo/priori.svg" alt="Priori" width={223} height={60} />
    </div>
  );
};

export default CompanyLogos;
