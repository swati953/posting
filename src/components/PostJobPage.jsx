import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  IconButton,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdRefreshCircle } from "react-icons/io";
const PostJobPage = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <Flex justifyContent={"center"}>
      <Flex direction={"column"} w={["90%","90%","90%",'60%']}>
        <Text fontSize={"1rem"} fontWeight="700" my="1rem">
          Post Job
        </Text>
        <Text
          color={"#5AB5A7"}
          my="0.5rem"
          fontSize="1.3rem"
          fontWeight={"600"}
        >
          Basic Details
        </Text>
        <Divider />
        <Text mb="2px" mt="1rem" mt="1rem">
          Job Title *
        </Text>
        <Input
          w="100%"
          placeholder="Write a title that appropriately describe this job"
          size="md"
        />
        <Text mb="2px" mt="1rem" mt="1rem">
          Location *
        </Text>
        <Input w="100%" placeholder="+ Add Location" size="md" />
        <Text mb="2px" mt="1rem">
          Years of Experience *
        </Text>
        <Flex justifyContent={"space-between"} >
          <Select placeholder="Select Min" w={["49%"]}>
            <option value="option1"> 1+</option>
            <option value="option2"> 3+</option>
            <option value="option3">5+</option>
          </Select>
          <Select placeholder="Select Max"  w={["49%"]}>
            <option value="option1"> 7+</option>
            <option value="option2"> 10+</option>
            <option value="option3">15+</option>
          </Select>
        </Flex>
        <Text mb="2px" mt="1rem">
          Job Description *
        </Text>
        <Flex mb="1rem">
          <Textarea
            placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
            w="100%"
            position={"relative"}
            h="8rem"
          />

          <Box position={"absolute"} right={["10%","10%","10%",'21%']} top={["56%","56%","56%",'54.5%']}>
            <IoMdRefreshCircle size={"1.5rem"} color="#5AB5A7" />
          </Box>
        </Flex>

        <Text color={"#5AB5A7"} fontSize="1.3rem" fontWeight={"600"}>
          {" "}
          Targeting
        </Text>
        <Divider my="0.5rem" />
        <Flex w="100%" mt="0.5rem" justifyContent={"space-between"}>
          <Flex direction={"column"} w="49%">
            <Text>Category *</Text>
            <Select placeholder="Select">
              <option value="option1"> Software Developer</option>
              <option value="option2"> UI </option>
              <option value="option3">UX</option>
            </Select>
          </Flex>
          <Flex direction={"column"} w="49%">
            <Text>Functional Area *</Text>
            <Select placeholder="Select">
              <option value="option1">Frontend</option>
              <option value="option2"> Backend</option>
              <option value="option3">Design</option>
            </Select>
          </Flex>
        </Flex>
        <Text mb="2px" mt="1rem">
          Graduating Year *
        </Text>
        <Flex w="100%" justifyContent={"space-between"}>
          <Select placeholder="Min Batch" w="49%">
            <option value="option1"> 2020</option>
            <option value="option2"> 2021</option>
            <option value="option3">2023</option>
          </Select>
          <Select placeholder="Max Batch" w="49%">
            <option value="option1"> 2024</option>
            <option value="option2"> 2025</option>
            <option value="option3">2026</option>
          </Select>
        </Flex>
        <Text mb="2px" mt="1rem">
          Tags *
        </Text>
        <Input w="100%" placeholder="+ Add job tags" size="md" />
        <Flex justifyContent={"space-evenly"} my="1rem" flexDirection={['column','column','column','row']}>
          <Button
            bgColor={"#5AB5A7"}
            color="white"
            _active={{}}
            _focus={{}}
            _hover={{}}
          >
            Post Job
          </Button>
          <Button
            border={"0.15rem solid #5AB5A7"}
            bgColor="white"
            color="#5AB5A7"
            _active={{}}
            _focus={{}}
            _hover={{}}
          >
            Post Job and Add another job
          </Button>
          <Button
            color="blue"
            bgColor={"white"}
            _active={{}}
            _focus={{}}
            _hover={{}}
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PostJobPage;
// dummy data
const jobObj = [
  {
    Title: "Full Stack developer Updated",
    Locations: ["Pune", "Bangalore"],
    MustHaveSkills: ["ReactJS"],
    YearsOfExperience: "5+",
    Category: ["Software Dev"],
    EmploymentType: "Full Time",
  },
];
