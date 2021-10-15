import {
  SimpleGrid,
  Stack,
  Input,
  Textarea,
  InputLeftElement,
  InputGroup,
  Box,
  Text,
  useRadio,
  useRadioGroup,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import _startCase from "lodash/startCase";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    last: "",
    email: "",
    message: "",
    phone: "",
    reason: "",
  });

  const handleChange = ({ currentTarget, target, ...e }) => {
    setContact({
      ...contact,
      [currentTarget.name]: currentTarget.value,
    });
  };

  const handleSubmit = () => {};

  const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          minWidth="150px"
          textAlign="center"
          transition="all .2s ease-in-out"
          color="gray.100"
          _checked={{
            bg: "gray.900",
            color: "gray.100",
            borderColor: "black.900",
            transform: "scale(1.05)",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  const options = ["business_inquiry", "new_player", "other"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "reason",
    defaultValue: "business_inquiry",
    onChange: (reason) => setContact({ ...contact, reason }),
  });

  const group = getRootProps();

  return (
    <Box overflow="hidden" cursor="pointer" p="8">
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

          {/* <Stack
            {...group}
            direction="row"
            spacing={2}
            justifyContent="space-evenly"
          >
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {_startCase(value)}
                </RadioCard>
              );
            })}
          </Stack> */}

          <Textarea
            sx={{
              color: "gray",
              _focus: {
                color: "black",
              },
            }}
            variant="filled"
            size="lg"
            placeholder="Message"
            onChange={handleChange}
            name="message"
            value={contact.message}
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