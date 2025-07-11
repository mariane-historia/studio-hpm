import './App.css';
import FolderDiv from './FolderDiv';
import cosmos1 from './assets/cosmos1.png';
import cosmos2 from './assets/cosmos2.png';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg4 from './assets/bg4.jpg';
import ext from './assets/04.jpg';
import furniture from './assets/v2.jpg';
import {TestimonialSlider} from './TestimonialSlider';

function App() {
  return (
    <>
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
        <div className="w-screen h-screen">
          {/* HERO SECTION */}
          <div className="py-[8rem] font-medium text-5xl tracking-[50px]">STUDIO HPM+</div>
          <div className="grid grid-cols-2 gap-4 w-screen">
            <div className="relative mt-[-28rem] z-1 x-20 w-[70rem] h-[65rem] overflow-hidden mask-b-from-80% mask-b-to-98%">
              <img src={cosmos1} alt="Cosmos Render" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col mt-[3rem] items-center bg-transparent ms-[2rem]">
              <h2 className="hero-appear hover-scale tracking-[3px] text-4xl font-semibold mb-2 uppercase">Visualize Before You Build</h2>
              <p className="hero-appear hover-scale mt-3 text-lg w-[70%] mx-auto text-justify z-2 leading-[35px]">Dream in 3D. Build with certainty. Our renders bridge the gap between imagination and reality.</p>
              <div className="hover-scale text-base hover:text-white mt-14 w-fit px-8 h-10 rounded-xl bg-[rgba(189,189,189,0.3)] flex items-center justify-center text-center text-[#E1FF01] font-medium">
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
          <FolderDiv bgImage={bg2} patternId="folder-bg-1" className="mt-[-6.4rem] z-20 w-screen h-[58rem] overflow-hidden">
            <div className="grid grid-cols-2 justify-center items-center gap-4 w-full absolute top-0 left-0">
              <div className="flex flex-col mt-[4rem] bg-transparent ms-[4rem]">
                <h2 className="hero-appear hover-scale text-left tracking-[3px] text-4xl font-semibold mb-[10%] uppercase">why choose us?</h2>
                <p className="hero-appear hover-scale text-left text-lg ms-5 leading-[60px]">✔ Precision-crafted 3D renders </p>
                <p className="hero-appear hover-scale text-left text-lg ms-5 leading-[60px]">✔ Trusted by architects & developers </p>
                <p className="hero-appear hover-scale text-left text-lg ms-5 leading-[60px]">✔ Home, hotel, and resort specialists </p>

                <div className="grid grid-cols-3 mt-25 w-[60%] -ms-5">
                  <div className="border-[#E1FF01] border-r-2 h-8 text-3xl flex flex-col justify-center">
                    230M+
                    <span className="text-sm font-light items-center justify-center">User</span>
                  </div>
                  <div className="border-[#E1FF01] border-r-2 h-8 text-3xl flex flex-col justify-center">
                    12y
                    <span className="text-sm font-light items-center justify-center">Experience</span>
                  </div>
                  <div className="h-8 text-3xl flex flex-col justify-center">
                    90M+
                    <span className="text-sm font-light items-center justify-center">Assets</span>
                  </div>
                </div>
              </div>

              <div className="relative -ms-[5rem] w-[60rem] h-[60rem]">
                <img src={cosmos2} alt="Cosmos2" className="w-full h-full object-cover" />
              </div>
            </div>
          </FolderDiv>
        </div>

        <div className="w-screen mt-[-6.4rem] z-20">
          <FolderDiv bgImage={bg4} patternId="folder-bg-4" className="z-20 w-screen -scale-x-100 filter contrast-110 h-[64rem] overflow-hidden">
            <div className="grid grid-cols-2 w-[80%] mt-[10rem] mx-auto justify-center items-center -scale-x-100">
              <div className="hero-appear flex items-center justify-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="560" height="560" viewBox="0 0 560 560">
                  <defs>
                    <pattern id="bgPattern1" patternUnits="userSpaceOnUse" width="560" height="560">
                      <image href={ext as string} width="560" height="560" preserveAspectRatio="xMidYMid slice" />
                    </pattern>
                  </defs>
                  <path fill="url(#bgPattern1)" d="M560 401.091c0 41.421-33.579 75-75 75H321.486c-23.171 0-41.955 18.784-41.955 41.954 0 23.171-18.783 41.955-41.954 41.955H75c-41.421 0-75-33.579-75-75V75C0 33.579 33.579 0 75 0h410c41.421 0 75 33.579 75 75v326.091Z" />
                </svg>
                <span className="absolute bottom-[1.5rem] right-[6rem] text-2xl tracking-wider">Interior/Exterior</span>
              </div>

              <div className="hero-appear flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="560" height="560" viewBox="0 0 560 560">
                  <defs>
                    <pattern id="bgPattern2" patternUnits="userSpaceOnUse" width="560" height="560">
                      <image href={furniture as string} width="560" height="560" preserveAspectRatio="xMidYMid slice" />
                    </pattern>
                  </defs>
                  <path fill="url(#bgPattern2)" d="M560 401.091c0 41.421-33.579 75-75 75H321.486c-23.171 0-41.955 18.784-41.955 41.954 0 23.171-18.783 41.955-41.954 41.955H75c-41.421 0-75-33.579-75-75V75C0 33.579 33.579 0 75 0h410c41.421 0 75 33.579 75 75v326.091Z" />
                </svg>
                <span className="absolute bottom-[1.5rem] right-[9rem] text-2xl tracking-wider">Furnitures</span>
              </div>
            </div>

            <p className="-scale-x-100 w-[65%] mt-18 text-xl font-light leading-[40px] flex justify-center items-center text-justify mx-auto">
              Full-scene 3D visualization—from architectural exteriors to fully furnished interiors, including custom furniture layouts, lighting, and textures for a complete photorealistic experience.
            </p>

            <div className="flex justify-end me-[20rem]">
              <div className="grid grid-cols-2 -scale-x-100 mt-[4%] gap-4 w-fit">
                <div className="hover-scale text-base  flex justify-center items-center hover-scale text-base hover:text-white w-fit px-8 h-10 rounded-xl bg-[rgba(189,189,189,0.3)] text-[#E1FF01] font-medium">View More Projects</div>
                <div className="hover-scale text-base hover:text-white w-fit px-8 h-10 rounded-xl bg-[rgba(189,189,189,0.3)] flex items-center justify-center text-[#E1FF01] font-medium">Ready? Let’s Talk.</div>
              </div>
            </div>
          </FolderDiv>
        </div>
        <div className="w-screen mt-[-6.4rem] z-20">
          <FolderDiv bgImage={bg1} patternId="folder-bg" className="mt-[-6.4rem] z-20 w-screen h-[58rem] overflow-hidden">
            <p className="mt-[15rem] text-3xl uppercase">but don’t just take our word for it</p>
            <p className="text-xl tracking-wider">
              Find out what other people have to say about <span className="font-bold tracking-wider text-xl"> Studio HPM+ </span>
            </p>
            <div>
              <TestimonialSlider />
            </div>
          </FolderDiv>
        </div>
      </div>
    </>
  );
}

export default App;
