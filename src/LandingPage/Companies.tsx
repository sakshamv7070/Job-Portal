import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies=()=>{
 return <div className="mt-20 pb-5">
   <div className="text-4xl text-center font-semibold text-mine-shaft-200 mb-10">Trusted By <span className="text-bright-sun-400">1000+</span> Companies</div>

   <Marquee pauseOnHover={true}>
   {

    companies.map((companies,index) => <div key= {index} className="mx-8 px-2 py-1 hover:bg-mine-shaft-400 rounded-xl cursor-pointer"> 
    <img className="h-14 " src={`/Companies/${companies}.png`} alt={companies} /> 
    </div>)


   }







   </Marquee>
















 </div>

}
export default Companies;