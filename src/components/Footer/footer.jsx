import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { footerData } from "./footerData";
import { AppImages } from "../../constant/appImages";

const socialIcons = {
  twitter: <TwitterIcon fontSize="small" />,
  facebook: <FacebookIcon fontSize="small" />,
  youtube: <YouTubeIcon fontSize="small" />,
  linkedin: <LinkedInIcon fontSize="small" />,
};

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
                <img src={AppImages.logo} className="w-[50%]"/>
            
          </div>
          <p className="text-sm">{footerData.company.description}</p>
          <div className="flex gap-3 mt-6">
            {footerData.company.socials.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-orange-500 transition"
              >
                {socialIcons[item.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Link Sections */}
        {footerData.links.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-bold text-2xl sm:text-lg lg:text-2xl mb-2">{section.title}</h3>
             <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-4"></div>
            <ul className="space-y-2 text-sm">
              {section.items.map((item, idx) =>
                typeof item === "string" ? (
                  <li key={idx} className="hover:text-orange-400 cursor-pointer">{item}</li>
                ) : item.type === "email" ? (
                  <li key={idx} className="flex items-center gap-2">
                    <EmailIcon className="text-orange-500" fontSize="small" />
                    <span>{item.label}</span>
                  </li>
                ) : (
                  <li key={idx} className="flex items-center gap-2">
                    <PhoneIcon className="text-orange-500" fontSize="small" />
                    <span>{item.label}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-900 text-center py-4 text-sm text-gray-500">
        © {footerData.copyright.year} <span className="text-white font-semibold">{footerData.copyright.company}</span> | All Rights Reserved | 
      </div>
    </footer>
  );
};
