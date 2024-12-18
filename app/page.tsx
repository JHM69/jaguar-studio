import Header from './components/Header';
import MainContent from './components/MainContent';
import Skills from './components/Skills';
import Services from './components/Services';
import Footer from './components/Footer';
import CompanyLogos from './components/CompanyLogos';
import MoreInfo from './components/MoreInfo';
import CursorDot from './components/ui/CursorDot';
 
export default function Home() {
  return (
    <div className="relative min-h-screen text-black pb-[200px]">
      <div className="animated-gradient absolute inset-0 -z-10"></div>
      <CursorDot /> {/* Add this line */}
      <div className="cursor-dot"></div>
      <Header />
      <MainContent />
      <CompanyLogos />
      <MoreInfo />
      <Skills />
      <div className='mx-[40px] mt-[193px] rounded-xl bg-white'>
        <Services />
        <Footer />
      </div>
    </div>
  );
}
