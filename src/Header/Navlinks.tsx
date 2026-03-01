import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
 const links = [
  { name: "Find Job", url: "/find-jobs" },
  { name: "Find Talent", url: "/find-talent" },
  { name: "Upload Job", url: "/upload-job" },
  { name: "About Us", url: "/about" },
];

  const location = useLocation();
  return <div className="flex gap-5 text-mine-shaft-500 h-full items-center">
    {
    links.map((link, index) => <div className={`${location.pathname==link.url?"border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full items-center flex text-mine-shaft-500`}>
        <Link key={index} to={link.url} > {link.name} </Link>
        </div>)
        }

  </div>
    
};

export default Navlinks;