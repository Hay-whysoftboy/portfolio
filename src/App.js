import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai"
import profile from './assest/profile.jpg';
import logo from './assest/logo.png'
import figma from './assest/figma.png';
import web1 from './assest/web1.png';
import web2 from './assest/web2.png';
import web3 from './assest/web3.png';
import web4 from './assest/web4.png';
// import {Link} from 'react-router-dom'

function App() {

  return (
    <>
    <main className=" bg-white px-10 md:px-20">
      <section className="min-h-screen">
        <nav className=" py-10 mb-12 flex justify-between">
          <img src={logo} alt="logo" width={100}/>
          <ul className=" flex items-center">
           
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="google.com">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl text-teal-600 py-2 font-medium md:text-6xl">Adedeji Ayoade</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Frontend Developer.</h3>
          <p className="text-md py-5 leading-7 text-gray-800 md:text-xl max-w-2xl md:mx-auto">Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
        </div>
        <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20 mx-auto overflow-hidden md:h-96 md:w-96">
          <img className="object-cover" src={profile} alt="profile"/>
        </div>
      </section>


      <section className="flex flex-col md:flex-row gap-10 mx-auto max-w-screen-xl my-10">
        <div className="md:w-2/4">
          <h3 className="text-3xl py-1 font-bold">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products for both business and consumer use.</p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including programming and teaching.
          </p>
        </div>
          <div className="text-center shadow-lg p-5 rounded-xl">
            <img src={figma} width={500} height={500} alt="figma logo"/>
            <h3 className="text-lg font-medium pt-3 pb-2">Beautiful Designs</h3>
            <p className="py-2">Creating elegant designs suited for your needs following core design theory.</p>
            <h4 className="py-4 text-teal-600">Tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Visual Studio code</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
      {/* <div>
<Link to={'https://github.com/Hay-whysoftboy/clone_pigyyvest'}>Github</Link>
      </div> */}
        
      </section>
      <section>
        <div>
        <h3 className="text-3xl py-1 font-bold">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800">Since the beginning of my journey as a freelance designer and developer, I've done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create digital products for both business and consumer use.</p>
          <p className="text-md py-2 leading-8 text-gray-800">
            I offer from a wide range of services, including programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
          <div className="basis-1/3 flex-1">
            <img src={web1} alt="web1" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
          </div>
          <div className="basis-1/3 flex-1">
            <img src={web2} alt="web2" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
          </div>
          <div className="basis-1/3 flex-1">
            <img src={web3} alt="web3" className="rounded-lg object-cover" width={"100%"} height={"100%"}/>
          </div>
          <div className="basis-1/3 flex-1">
            <img src={web4} alt="web3" className="rounded-lg object-cover" width={"50%"} height={"50%"}/>
          </div>
        </div>
      </section>

      
    </main>
     <footer className="w-full p-5 bg-teal-500">
        <p className="text-center font-bold">Copyrights &copy; 2024, Developed by Deji</p>
      </footer>
      </>
  );
}

export default App;
