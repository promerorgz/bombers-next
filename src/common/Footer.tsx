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
import { Heading, Text, textDecoration, Link } from "@chakra-ui/react";
import Socials from "./Socials";

const Footer: FC<{ sponsors: Array<Sponsors> }> = ({ sponsors = [] }) => {
  const { navs, shortest } = useNav(["Club", "Team"]);

  return (
    <>
      <FooterContainer id="footer">
        <FooterInfo>
          <NavLogo color="brand.light" />

          <FooterIcons>
            <Socials size="" />
          </FooterIcons>
        </FooterInfo>
        <FooterLinks>
          {navs.map((item, i) => {
            return item.subMenus ? (
              <ul className={`col col-${i + 1}`} key={item.id}>
                <>
                  {<li className="header">{item.name}</li>}
                  {item.subMenus?.slice(0, shortest).map((link, index) =>
                    link.name !== "more" ? (
                      <Link
                        key={`link-${item.id}-${index}`}
                        style={{
                          textDecoration: "none",
                          alignSelf: "center",
                        }}
                        href={link.slug}
                      >
                        {link.name}
                      </Link>
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
