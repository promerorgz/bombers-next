import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import useNav from "../hooks/useNav";
import { Sponsors } from "../types/sponsors";
import NavLogo from "./NavLogo";
import {
  Copyright,
  FooterContainer,
  FooterIcons,
  FooterInfo,
  FooterLinks,
} from "./styles";
import { Heading, Text } from "@chakra-ui/react";

const Footer: FC<{ sponsors: Array<Sponsors> }> = ({ sponsors = [] }) => {
  const { navs, shortest } = useNav(["Club", "Team"]);

  return (
    <>
      <FooterContainer id="footer">
        <FooterInfo>
          <NavLogo color="brand.light" />
          <FooterIcons>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </FooterIcons>
        </FooterInfo>
        <FooterLinks>
          {navs.map((item, i) => {
            return item.subMenus ? (
              <ul className={`col col-${i + 1}`} key={item.id}>
                <>
                  {<li className="header">{item.name}</li>}
                  {item.subMenus
                    ?.slice(0, shortest)
                    .map((link, index) =>
                      link.name !== "more" ? (
                        <li key={`link-${item.id}-${index}`}>{link.name}</li>
                      ) : null
                    )}
                </>
              </ul>
            ) : null;
          })}
        </FooterLinks>
      </FooterContainer>{" "}
      <Copyright backgroundColor="brand.dark" p="4">
        <Text size="xs" textAlign="center">
          <span> © {new Date().getFullYear()} St. Louis Bombers.</span>
        </Text>
      </Copyright>
    </>
  );
};

export default Footer;
