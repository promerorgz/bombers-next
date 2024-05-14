import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TabType } from "./types";

const Tab = ({ icon, title, href }: TabType) => {
  return (
    <li>
      <a id={href} title={title} href={`#${href}`}>
        <FontAwesomeIcon icon={icon} />
        {title}
      </a>
    </li>
  );
};

export default Tab;
