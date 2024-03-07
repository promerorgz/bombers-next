import React from "react";
import {
  Drawer as ChakraDrawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";

const Drawer = ({ onClose, show, children, header, placement, size }) => {
  return (
    <ChakraDrawer
      placement={placement || "left"}
      onClose={onClose}
      isOpen={show}
      size={size || "lg"}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor="brand.medium">
        <DrawerCloseButton color="brand.light" />
        <DrawerHeader color="brand.light">{header || ""}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
