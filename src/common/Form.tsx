import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { PropsWithChildren, useState } from "react";
import { Field } from "src/types/pageTypes";

type FormProps = {
  fields: Array<Field>;
  title: string;
};

const Form = ({
  fields = [],
  children,
  title,
}: PropsWithChildren<FormProps>) => {
  const [state, setState] = useState({});
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <Box m="8" overflow="hidden" cursor="pointer" p={[2, 2, 4, 6, 8]}>
      <Heading variant="h6" my="8">
        {title}
      </Heading>
      <SimpleGrid columns={1} spacing={8}>
        <Stack spacing={8}>
          {fields.map((field) => {
            return field.type === "textarea" ? (
              <Textarea
                sx={{
                  color: "gray",
                  _focus: {
                    color: "black",
                  },
                }}
                variant="filled"
                size="lg"
                placeholder={field.placeholder}
                onChange={handleChange}
                name={field.name}
                value={state[field.name] || field.initialValue}
              />
            ) : (
              <Input
                sx={{
                  color: "#242424",
                  _focus: {
                    color: "black",
                  },
                }}
                type={field.type}
                variant="filled"
                placeholder={field.placeholder}
                name={field.name}
                value={state[field.name] || field.initialValue}
                onChange={handleChange}
              />
            );
          })}
        </Stack>
        <Button variant="solid" width="100%" onClick={handleSubmit}>
          Submit
        </Button>
      </SimpleGrid>
      {children}
    </Box>
  );
};

export default Form;
