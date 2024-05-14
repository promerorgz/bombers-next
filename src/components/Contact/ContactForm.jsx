import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import contactTemplate from "../../../utils/contactTemplate";

const ContactForm = () => {
  const toast = useToast();
  const initialState = {
    name: "",
    email: "",
    message: "",
    phone: "",
  };
  const [contact, setContact] = useState(initialState);

  const handleChange = ({ currentTarget, target, ...e }) => {
    setContact({
      ...contact,
      [currentTarget.name]: currentTarget.value,
    });
  };

  const handleSubmit = async () => {
    toast({
      title: "Email Sent!",
      description: "We will get back to you ASAP",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    try {
      await axios.post(`${process.env.strapi}/email`, {
        from: "",
        to: "contact@stlouisbombers.com",
        subject: "New Contact",
        html: contactTemplate(contact),
      });
    } catch (error) {
      toast({
        title: "Oh no!",
        description: "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setContact(initialState);
  };

  return (
    <Box overflow="hidden" cursor="pointer" p={[2, 2, 4, 6, 8]}>
      <SimpleGrid direction="column" columns={1} spacing={8}>
        <Stack spacing={8}>
          <Input
            sx={{
              color: "#242424",
              _focus: {
                color: "black",
              },
            }}
            variant="filled"
            placeholder="Name"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.400" />}
            />
            <Input
              sx={{
                color: "gray",
                _focus: {
                  color: "black",
                },
              }}
              type="email"
              variant="filled"
              placeholder="Email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.400" />}
            />
            <Input
              sx={{
                color: "gray",
                _focus: {
                  color: "black",
                },
              }}
              variant="filled"
              type="tel"
              placeholder="Phone number"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </InputGroup>

          <Textarea
            sx={{
              color: "gray",
              _focus: {
                color: "black",
              },
            }}
            rows="10"
            variant="filled"
            size="lg"
            placeholder="Message"
            onChange={handleChange}
            name="message"
            value={contact.message}
            resize="vertical"
          />
        </Stack>
        <Button variant="solid" width="100%" onClick={handleSubmit}>
          Submit
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default ContactForm;
