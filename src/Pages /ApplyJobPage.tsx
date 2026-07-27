import {Link} from "react-router-dom";
import {IconArrowLeft} from "@tabler/icons-react";
import { Button } from "@mantine/core";
import Applyjobcamp from "../ApplyJob/Applyjobcomp";


const ApplyJobPage = () =>{
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            
            <Link className="my-4 inline-block" to="/jobs">
        <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light">Back</Button>
        </Link>
        <Applyjobcamp />
        </div>
     

    )
}
export default ApplyJobPage;