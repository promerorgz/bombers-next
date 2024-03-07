import {
  Box,
  Button,
  Flex,
  HStack,
  LinkBox,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import Link from "../../../common/Link";
import useNav from "../../../hooks/useNav";
import NavLogo from "../../../common/NavLogo";

const DesktopNav = () => {
  const { navs } = useNav();

  return (
    <>
      <Flex
        id="desktop-nav"
        bg="brand.light"
        minH={120}
        p={4}
        display={["none", "none", "flex", "flex"]}
        justifyContent={["space-evenly", "center", "center", "space-evenly"]}
      >
        {/* bombers logo */}
        <Box id="desktop-logo" display={["none", "none", "none", "flex"]}>
          <NavLogo />
        </Box>
        <HStack flex="1" spacing={2} justifyContent={"flex-end"}>
          {navs?.map(
            (nav) =>
              !nav.hide && (
                <div key={nav.id}>
                  <LinkBox
                    id={nav.id}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    key={nav.id}
                    color="brand.black"
                    _hover={{
                      color: "#212121",
                      borderBottom: "3px solid #212121",
                    }}
                  >
                    {!nav.subMenus?.length ? (
                      <Link
                        key={nav.name}
                        as={`/${nav.slug}`}
                        href={`/${nav.slug}`}
                        passHref
                      >
                        {nav.name.toUpperCase()}
                      </Link>
                    ) : (
                      <Popover trigger="hover">
                        <PopoverTrigger>
                          <Button
                            as={"a"}
                            href={`/${nav.slug}`}
                            color="brand.black"
                            fontFamily="Montserrat"
                            textTransform="uppercase"
                            fontWeight="bold"
                            fontSize="sm"
                            _hover={{
                              color: "#212121",
                              textDecoration: "none",
                            }}
                          >
                            {nav.name}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent maxWidth={220}>
                          {nav.subMenus?.map((sub) => {
                            return (
                              <PopoverBody
                                as={"a"}
                                zIndex={100}
                                color="brand.black"
                                fontFamily="Montserrat"
                                textTransform="uppercase"
                                fontWeight="bold"
                                fontSize="sm"
                                _hover={{
                                  color: "#212121",
                                  textDecoration: "none",
                                }}
                                key={sub.name}
                                href={`/${sub.slug}`}
                              >
                                {sub.name || sub.slug}
                              </PopoverBody>
                            );
                          })}
                        </PopoverContent>
                      </Popover>
                    )}
                  </LinkBox>
                </div>
              )
          )}
        </HStack>
      </Flex>
    </>
  );
};

export default DesktopNav;
