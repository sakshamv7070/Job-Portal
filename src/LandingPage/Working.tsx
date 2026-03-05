import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";

const Working=()=>{

    return (

<div className="mt-20 pb-5">
   <div className="text-4xl text-center font-semibold text-mine-shaft-200 mb-3"> How it<span className="text-bright-sun-400"> Works?</span> </div>
   <div className="text-lg mb-10 text-mine-shaft-400 text-center w-1/2 mx-auto">Effortlessly navigate through the process to land your dream job.</div>

   <div className="flex px-16 items-center justify-between">

     <div className="relative">
        <img className="w-[30rem]" src="/Working/girl.png" alt="girl" />
        <div className="w-36 flex-col justify-center items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md top-[15%] absolute right-0">
            <Avatar className="!h-16 !w-16" src="avatar-8.png" alt="girl" />
            <div className="text-sm font-semibold text-mine-shaft-200">
                Complete your profile
            </div>
            <div className=" text-xs text-mine-shaft-300 ">
                70% Completed
            </div>
        </div>
     </div>

     <div className="flex flex-col gap-10">
     {

        work.map((item,index)=>     <div key={index} className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-bright-sun-400">
                <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name} />
              </div>

              <div className="text-mine-shaft-50">
                  <div className="text-mine-shaft-100 font-semibold text-xl">{item.name}</div>
                  <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
         </div>
    
    
    
    
    )

     }

     </div>

   </div>
   
</div>
)
}

export default Working;