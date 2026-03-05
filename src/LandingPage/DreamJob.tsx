import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Avatar } from '@mantine/core';


const DreamJob = () => {
  return (
    <div className="flex items-center justify-between px-20 min-h-[80vh]">

      {/* LEFT SIDE */}
      <div className="text-mine-shaft-400 flex flex-col w-[45%] gap-5">

        <h1 className="text-6xl text-mine-shaft-50 font-bold leading-tight">
          Find Your <span className="text-bright-sun-400">Dream</span>{" "}
          <span className="text-bright-sun-400">Job</span> with us
        </h1>

        <p className="text-lg text-mine-shaft-300">
          Good life begins with a good company. Start exploring thousands of jobs in one place.
        </p>

        {/* SEARCH BOX */}
        <div className="text-mine-shaft-100 flex gap-3 mt-5">

          <TextInput
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
            className="flex-1 bg-mine-shaft-600 rounded-lg px-3 py-2 [&_input]:!text-mine-shaft-100"
          />

          <TextInput
            variant="unstyled"
            label="Job Type"
            placeholder="Full-Time"
            className="flex-1 bg-mine-shaft-600 rounded-lg px-3 py-2 [&_input]:!text-mine-shaft-100"
          />

          <div className="flex items-center justify-center w-14 bg-bright-sun-400 text-mine-shaft-900 rounded-lg hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="h-5 w-5" />
          </div>

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-[55%] flex-col items-center justify-center">
        <div className="w-[40rem] relative">
        <img src="/boy.png"   alt="Working person"/>
        
        <div className=" backdrop-blur-md absolute w-fit top-[50%] border border-bright-sun-400 rounded-lg p-2 -right-8">
        <div className="text-mine-shaft-200 mb-1 text-sm text-center">10k got job</div>
        <Avatar.Group>
          <Avatar src="Avatar-8.png" />
          <Avatar src="Avatar-6.png" />
          <Avatar src="Avatar-9.png" />
          <Avatar>9k+</Avatar>
        </Avatar.Group>
         </div>
        </div>
        
        <div className=" backdrop-blur-md absolute w-fit top-[32%] border border-bright-sun-400 rounded-lg p-2 left-30">

           <div className="flex gap-2 items-center mb-3">
             <div className="w-10 h-10 p-1 bg-mine-shaft-100 rounded-lg">
              <img src="/Companies/Google.png" alt="" />            
               </div>


             <div className="text-sm text-mine-shaft-100 ">
                   
                <div>Software Engineer </div>
                <div className="text-mine-shaft-400 text-xs">New York</div>

             </div>

           </div>

           <div className=" text-xs justify-around flex gap-2 text-mine-shaft-50">

            <span>1 day ago</span>
            <span>120 Applicants</span>
            
           </div>

        </div>
        
        
      </div>

     

    </div>
    
  );
};

export default DreamJob;