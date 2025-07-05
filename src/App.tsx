import './App.css';
import FolderDiv from './FolderDiv';
import cosmos1 from './assets/cosmos1.png';
import bg2 from './assets/bg2.jpg';

function App() {

  return (
    <>
      <div className="w-screen h-screen">
        <div className=" bg-[url('./assets/bg1.jpg')] bg-cover bg-center">
          {/* NAVBAR */}
          <div className="w-[80%] h-12 rounded-2xl bg-[rgba(189,189,189,0.3)] m-auto flex items-center justify-between px-6 sticky top-5 z-100">
            <div className="font-semibold text-sm tracking-wider">STUDIO HPM+</div>
            <div className="flex flex-row justify-center gap-12">
              <span className="hover-scale">HOME</span>
              <span className="hover-scale">SERVICES</span>
              <span className="hover-scale">PORTFOLIO</span>
              <span className="hover-scale">CONTACT</span>
              <span className="hover-scale">BLOG</span>
            </div>
            
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 35 35">
                <path
                  fill="#E1FF01"
                  d="M6.773 7H29.96c2.188 0 3.29 1.033 3.29 3.133v14.735c0 2.082-1.102 3.132-3.29 3.132H6.773c-2.188 0-3.29-1.05-3.29-3.133V10.133C3.483 8.033 4.585 7 6.773 7Zm11.585 15.05 11.794-9.678c.42-.35.753-1.155.228-1.872-.508-.717-1.435-.735-2.047-.297l-9.975 6.755L8.4 10.203c-.612-.438-1.54-.42-2.047.297-.525.717-.193 1.523.227 1.873l11.778 9.677Z"
                />
              </svg>
            </div>
          </div>
          {/* HERO SECTION */}
          <div className="py-[10rem] font-semibold text-5xl tracking-[20px]">STUDIO HPM+</div>
          <div className="grid grid-cols-2 gap-4 w-screen">
            <div className="relative mt-[-24rem] z-1 x-20 w-[70rem] h-[60rem] overflow-hidden mask-b-from-80% mask-b-to-98%">
              <img src={cosmos1} alt="Cosmos Render" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col mt-[6rem] items-center bg-transparent ms-[2rem]">
              <h2 className="hero-appear hover-scale tracking-[3px] text-4xl font-semibold mb-2 uppercase">Visualize Before You Build</h2>
              <p className="hero-appear hover-scale mt-3 text-lg w-[70%] mx-auto text-justify z-2 leading-[35px]">Dream in 3D. Build with certainty. Our renders bridge the gap between imagination and reality.</p>
              <div className="hover-scale text-base hover:text-whitemt-14 w-fit px-8 h-10 rounded-xl bg-[rgba(189,189,189,0.3)] flex items-center justify-center text-center text-[#E1FF01] font-medium">
                Book a Free Consult
                <span className="relative flex size-3 -top-4 -right-8 -ml-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-[#E1FF01]"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen mt-[-6.4rem] z-20">
          <FolderDiv bgImage={bg2} patternId="folder-bg-1" />
        </div>
        <div className="w-screen mt-[-5rem] mask-b-from-80% mb-6 z-20">
          <FolderDiv bgImage={bg2} patternId="folder-bg-1" />
        </div>
      </div>
    </>
  );
}

export default App;
