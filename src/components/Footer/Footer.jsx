import "./footer.scss";

import Email from "./Email/Email";
import SocialLinks from "./SocialLinks/SocialLinks";

const Footer = () => {

  return (
    <div className="footer">
      <Email />
      <SocialLinks />
    </div>
  );
};

export default Footer;

