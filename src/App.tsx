import './App.css';
import FolderDiv from './FolderDiv';
import cosmos1 from './assets/cosmos1.png';

function App() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="mt-4 mb-6">
          {/* NAVBAR */}
          <div className="w-[80%] h-12 rounded-2xl bg-[rgba(189,189,189,0.3)] m-auto flex items-center justify-between px-6">
            <div className="font-semibold text-sm tracking-wider">STUDIO HPM+</div>
            <div className="flex flex-row justify-center gap-12">
              <span className="cursor-pointer text-xs font-medium hover:text-[#FFFFFF]">HOME</span>
              <span className="cursor-pointer text-xs font-medium hover:text-[#FFFFFF]">SERVICES</span>
              <span className="cursor-pointer text-xs font-medium hover:text-[#FFFFFF]">PORTFOLIO</span>
              <span className="cursor-pointer text-xs font-medium hover:text-[#FFFFFF]">CONTACT</span>
              <span className="cursor-pointer text-xs font-medium hover:text-[#FFFFFF]">BLOG</span>
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
          <div className="mt-[8rem] mb-[6rem] font-semibold text-5xl tracking-[20px]">STUDIO HPM+</div>
          {/* GRID 2 COLUMN 1 ROW */}
          <div className="grid grid-cols-2 gap-4 w-screen border border-white">
            <div className="relative mt-[-20rem] x-20 w-[57rem] h-[45rem] overflow-hidden mask-b-from-90% mask-b-to-98%">
              <img src={cosmos1} alt="Cosmos Render" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col mt-[4rem] items-center bg-transparent ms-[4rem] border border-white">
              <h2 className="tracking-[3px] text-3xl font-semibold mb-2 uppercase">Visualize Before You Build</h2>
              <p className="mt-3 text-lg w-[73%] mx-auto text-justify leading-[30px]">Dream in 3D. Build with certainty. Our renders bridge the gap between imagination and reality.</p>
              <div className="mt-10 w-fit px-8 h-10 rounded-xl bg-[rgba(189,189,189,0.3)] flex items-center justify-center text-center text-[#E1FF01] font-medium">Book a Free Consult</div>
            </div>
          </div>
        </div>
        <div className="w-screen mt-[-5rem] mb-6 z-10">
          <FolderDiv fill="#BDBDBD" />
        </div>
      </div>
    </>
  );
}

export default App;
