import { IconAnchor } from "@tabler/icons-react";
import { IconBellFilled } from "@tabler/icons-react";
import { IconSettings  } from "@tabler/icons-react";
import { Avatar } from '@mantine/core'; 
import { Indicator } from '@mantine/core';
import Navlinks from "../Header/Navlinks";


const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-20 px-5 text-white flex justify-between items-center ">
      
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8 stroke-[1.20]" />
        <div className="text-2xl font-semibold">
          JobAnchor
        </div>
      </div>

      {Navlinks()}
      
      <div className="flex gap-3 items-center ">
        
        <div className="flex items-center gap-2">
            
             <div>Saksham</div>
             <Avatar src="avatar-9.png" alt="it's me" />
            
             </div>
              <div  className="bg-mine-shaft-800 p-1.5 rounded-full" >
            <IconSettings />
              </div>

             <div  className="bg-mine-shaft-800 p-1.5 rounded-full" >

            <Indicator color="bright-sun.3" offset={6} size={7} processing>

             <IconBellFilled stroke="1.5"/>
             </Indicator>

             </div>
             

      </div>
    </div>
  );
};

export default Header;