import { 
  IconAnchor, 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandX 
} from "@tabler/icons-react";

import { footerLinks } from "../Data/Data";

const Footer = () => {
  return (
    <div className="mt-20 pb-5 flex justify-around">

      {/* Left Section */}
      <div className="flex flex-col w-1/4 gap-4">

        <div className="flex gap-2 items-center text-bright-sun-400">
          <IconAnchor className="h-6 w-6 stroke-[1.20]" />
          <div className="text-xl font-semibold">JobAnchor</div>
        </div>

        <div className="text-sm text-mine-shaft-300">
          Job portal with user profiles, skills updates, certifications,
          work experience, and admin job postings.
        </div>

        <div className="flex gap-4 text-bright-sun-400">
          <div><IconBrandFacebook /></div>
          <div><IconBrandInstagram /></div>
          <div><IconBrandX /></div>
        </div>

      </div>

      {/* Right Links Section */}
      {footerLinks.map((item, index) => (
        <div key={index}>
          <div className="items-center text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>

          {item.links.map((link, i) => (
            <div
              key={i}
              className="text-sm ease-i duration-300 transition duration-300 hover:translate-x-2 text-mine-shaft-300 hover:text-bright-sun-400 mb-1 cursor-pointer "
            >
              {link}
            </div>
          ))}
        </div>
      ))}

    </div>
  );
};

export default Footer;