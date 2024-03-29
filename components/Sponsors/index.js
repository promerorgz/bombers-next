/* eslint-disable no-unused-vars */
import { Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Pic from "../../common/Pic";
import useBp from "../../theme/useBp";
import { SponsorContainer, SponsorsTitle, SponsorList } from "./styles";

const Sponsors = ({ level, forFooter, sponsors = [], ...props }) => {
  const [_columns, setColumns] = useState(sponsors.length);
  const [isDesktop] = useBp();

  useEffect(() => {
    setColumns(isDesktop ? sponsors?.length : 2);
  }, [isDesktop, sponsors.length]);

  return forFooter ? (
    <Wrap direction="row" spacing="6" w="100%">
      {sponsors?.map((sponsor) => {
        const logo = sponsor?.image?.url || sponsor.logo;
        return (
          <WrapItem key={sponsor?.name}>
            <Pic
              style={{
                width: 40,
                height: 40,
                // filter: `contrast(0)`,
                opacity: 0.4,
                zoom: 1,
              }}
              src={logo}
              fit="contain"
            ></Pic>
          </WrapItem>
        );
      })}
    </Wrap>
  ) : (
    <SponsorContainer>
      <SponsorsTitle>Our Sponsors</SponsorsTitle>
      <SponsorList>
        {sponsors.map((sponsor) => (
          <Pic
            fit="contain"
            className="sponsor_image"
            src={sponsor.image.url || sponsor.logo}
          ></Pic>
        ))}
      </SponsorList>
    </SponsorContainer>
  );
};

export default Sponsors;
