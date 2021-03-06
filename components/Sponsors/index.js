import { Center, Wrap, Grid, GridItem, WrapItem } from "@chakra-ui/react";
import { groupBy } from "lodash";
import React, { useEffect, useState } from "react";
import Pic from "../../common/Pic";
import useBp from "../../theme/useBp";

const Sponsors = ({ sponsors = [], forFooter }) => {
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
    <Center minH="2xs" bg="brand.white" p="8" w="100%">
      <Grid
        gap="12"
        templateColumns={`repeat(${columns}, 1fr)`}
        justifyContent="space-evenly"
        w="100%"
        // direction={["column", "column", "column", "row"]}
      >
        {sponsors?.map((sponsor) => {
          const logo = sponsor?.image?.url || sponsor.logo;
          return (
            <GridItem display="flex" justifyContent="center" key={sponsor.name}>
              <Pic
                style={{
                  width: 100,
                  height: 100,
                }}
                src={logo}
                fit="contain"
              ></Pic>
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
};

export default Sponsors;
