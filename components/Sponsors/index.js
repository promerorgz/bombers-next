import { Center, Wrap, Grid, GridItem, WrapItem } from "@chakra-ui/react";
import { groupBy } from "lodash";
import React, { useEffect, useState } from "react";
import Pic from "../../common/Pic";
import useBp from "../../theme/useBp";
import { SponsorContainer, SponsorsTitle } from "./styles";

const Sponsors = ({ level, forFooter, sponsors = [], ...props }) => {
  const [columns, setColumns] = useState(sponsors.length);
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
      <SponsorsTitle>Main Partners</SponsorsTitle>
      {sponsors.map((sponsor) => (
        <Pic
          fit="contain"
          style={{
            height: 100,
            width: 100,
            height: "4rem",
            opacity: 0.4,
            marginLeft: "2.8rem",
          }}
          src={sponsor.image.url || sponsor.logo}
        ></Pic>
      ))}
    </SponsorContainer>
  );
};

export default Sponsors;
