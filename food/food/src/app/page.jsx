import Slide from "./(components)/Slide";

import logo from "../../public/logo.png";
import Image from "next/image";
import fruit from '../../public/icons/fruit.png'
import veggie from '../../public/icons/veggie.png'
import tea from '../../public/icons/tea.png'
import heldi from '../../public/icons/heldi.png'
import other from '../../public/icons/other.png'
import CountrySlide from "./(components)/CountrySlide";
import whyChoose from '../../public/whyChoose.jpg';
import companyOverview from '../../public/company.jpg'

export default function Home() {

  return (
    <>

      <div className="w-[100vp] h-[100vh]  relative overflow-hidden  ">
        <Slide />
        <div className="  w-[100vp] h-[100vh]  absolute top-0 left-0  z-40 bg-transparent bg-gradient-to-b from-black/80 via-black/20 to-black/80 flex justify-center items-center">
          <Image
            style={{ width: "30%" }}
            alt="logo"

            src={logo} />
        </div>
      </div>
      

      <div className="w-[100vp] grid grid-flow-row  grid-cols-2  md:grid-cols-4 lg:grid-cols-5 lg:px-4 border-b-2  border-b-green-100">

        <div className="  flex justify-center items-center border-r-2 border-r-green-600 p-8 flex-col" >
          <div className="w-24 h-24 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-16 h-16 " alt="fruit icon" src={fruit} /></div>
          <span className="text-lg pt-2 md:text-xl text-green-600 font-semibold">Fruit Export</span>
        </div>

        <div className=" flex justify-center items-center border-r-2 border-r-green-600  p-8 flex-col" >
          <div className="w-24 h-24 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-16 h-16 " alt="fruit icon" src={veggie} /></div>
          <span className="text-lg pt-2 md:text-xl text-green-600 font-semibold">Vegitable Export</span>
        </div>

        <div className="flex justify-center items-center border-r-2 border-r-green-600  p-8 flex-col" >
          <div className="w-24 h-24 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-16 h-16 " alt="fruit icon" src={tea} /></div>
          <span className="text-lg pt-2 md:text-xl text-green-600 font-semibold">Tea Export</span>
        </div>

        <div className=" flex justify-center items-center border-r-2 border-r-green-600  p-8 flex-col" >
          <div className="w-24 h-24 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-16 h-16 " alt="fruit icon" src={tea} /></div>
          <span className="text-lg pt-2 md:text-xl text-green-600 font-semibold">Heldi Fruit Export</span>
        </div>

        <div className="lg:col-start-5 col-span-full  flex justify-center items-center   p-8 flex-col md:p-4 " >
          <div className="w-24 h-24 bg-green-100 rounded-full flex justify-center items-center  border-solid border-2 border-green-600" ><Image className="w-16 h-16 " alt="fruit icon" src={other} /></div>
          <span className="text-lg pt-2 md:text-xl text-green-600 font-semibold">Other</span>
        </div>
      </div>
<br/>
<br/>
<br/>
<div>
<h1 className="text-center text-3xl text-[#AC4425] pb-8 md:text-5xl font-extrabold font-sans underline underline-offset-1">Why Choose Us</h1>
<div className="flex flex-col-reverse  justify-center items-center w-[100vp] md:flex-row"> 
<div className="px-8 py-4 md:w-80 lg:w-1/3"><p className="text-justify text-[#AC4425] font-sans font-semibold ">The Network panel now always shows the requests failure reason in the Status column and the Copy submenu is now better organized. The Performance panel gets customizable breadcrumbs to help you set, track, and jump between zoom levels.The Network and Application panels now show you warnings next to cookies affected by the third-party cookie restrictions from Tracking Protection.</p>

</div>
<div className="p-8"><Image style={{border:'solid',borderWidth:2,borderColor:'white'}} width={350} alt="overview" src={whyChoose}/></div>
</div>

<br/>
<br/>


</div>

<br/>

      <div >
        <h1 className="text-center text-3xl text-green-600 font-extrabold md:text-5xl underline underline-offset-1">Export Countrys</h1>
        <div className="w-[100vp] py-12 px-12">

          <CountrySlide/>

        </div>
      </div>
      <br/>


<div>
<h1 className="text-center text-3xl text-[#AC4425] pb-8 md:text-5xl font-extrabold font-serif underline underline-offset-1">Company Overview</h1>
<div className="flex flex-col-reverse  justify-center items-center w-[100vp] md:flex-row"> 
<div className="p-8"><Image style={{border:'solid',borderWidth:2,borderColor:'white'}} width={350} alt="overview" src={companyOverview}/></div>
<div className="px-8 py-4 md:w-80 lg:w-1/3"><p className="text-justify text-[#AC4425] font-serif ">The Network panel now always shows the requests failure reason in the Status column and the Copy submenu is now better organized. The Performance panel gets customizable breadcrumbs to help you set, track, and jump between zoom levels.The Network and Application panels now show you warnings next to cookies affected by the third-party cookie restrictions from Tracking Protection.</p>
</div>
</div>

<br/>
<br/>

<div className="w-[100vp] grid grid-flow-row grid-cols-1 sm:grid-cols-2 bg-green-200">
  
<div className="py-4 "><h1 className="text-center text-2xl text-amber-800  pb-2 font-bold font-serif">Vision</h1>
  <div className="px-10" >
    <p className="p-4 text-justify border-dashed border-2 border-amber-800 rounded-lg text-amber-800 font-serif font-bold">The Network panel now always shows the requests failure reason in the Status column and the Copy submenu is now better organized.</p>
  </div>
  </div>

  <div className="py-4"><h1 className="text-center text-2xl text-green-800 font-bold pb-2 font-serif">Mission</h1>
  <div className="px-10" >
    <p className="p-4 text-justify border-dashed border-2 border-green-800 rounded-lg text-green-800 font-serif font-bold">The Network panel now always shows the requests failure reason in the Status column and the Copy submenu is now better organized.</p>
  </div>
  </div>
<br/>

</div>
</div>


<div className="mt-12">
<h1 className="text-center text-3xl text-green-600 pb-8 font-extrabold lg:text-5xl">Contact Us</h1>

<div></div>
<div></div>
</div>

   



    </>
  );
}
