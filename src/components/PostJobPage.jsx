import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMdRefreshCircle } from "react-icons/io";
import { BiMessageSquareAdd } from "react-icons/bi";

import TwoDropdown from "./TwoDropdown";
const PostJobPage = () => {
  const [locations, setLocations] = useState(Array);
  const [tags, setTags] = useState(Array);
  const [postJob, setPostJob] = useState({
    Title: "",
    Locations: [],
    Tags: [],
    YOES: "",
    YOEE: "",
    GYS: "",
    GYE: "",
    JobDesc: "",
    Category: "",
    FunctionalArea: "",
  });
  const onchange = (e) => {
    setPostJob({ ...postJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(postJob, "postJob");
  };
  // let location = ['g',];
  useEffect(() => {
    setPostJob({ Locations: locations });
  }, [locations]);
  useEffect(() => {
    setPostJob({ Tags: tags });
  }, [tags]);
  const Cancel = () => {
    setPostJob({
      Locations: [],
      JobDesc: "",
      Title: "",
      Tags: [],
      GYS: "",
      GYE: "",
      YOEE: "",
      YOES: "",
      Category: "",
      FunctionalArea: "",
    });
  };
  const isError = postJob.Title === "";
  return (
    <Flex justifyContent={"center"}>
      <Flex direction={"column"} w={["90%", "90%", "90%", "60%"]}>
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
        <FormControl isRequired>
          <FormLabel htmlFor="Title" mb="2px" mt="1rem" mt="1rem">
            Job Title
          </FormLabel>
          <Input
            w="100%"
            id="Title"
            name="Title"
            onChange={onchange}
            placeholder="Write a title that appropriately describe this job"
            size="md"
            value={postJob.Title}
          />
        </FormControl>

        <Flex alignItems={"center"}>
          <FormControl isRequired>
            <FormLabel htmlFor="Locations" mb="2px" mt="1rem" mt="1rem">
              Job Location
            </FormLabel>

            <Input
              w="100%"
              id={"Locations"}
              name={"Locations"}
              placeholder={"+ Add Locations"}
              size="md"
              value={postJob.Locations}
              onChange={onchange}
            />
          </FormControl>
          <Box
            cursor="pointer"
            onClick={() => {
              let loc = postJob.Locations;
              setLocations((prev) => {
                return [...prev, loc];
              });
            }}
          >
            <BiMessageSquareAdd size="1.5rem" color="#5AB5A7" />
          </Box>
        </Flex>
        <TwoDropdown
          postJob={postJob}
          setPostJob={setPostJob}
          state1={postJob.YOES}
          state2={postJob.YOEE}
          Location={Location}
        />

        <Flex mb="1rem">
          <FormControl isRequired>
            <FormLabel htmlFor="JobDesc" mb="2px" mt="1rem" mt="1rem">
              Job Description
            </FormLabel>

            <Textarea
              id="JobDesc"
              name="JobDesc"
              onChange={onchange}
              placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
              w="100%"
              position={"relative"}
              h="8rem"
              value={postJob.JobDesc}
            />
          </FormControl>
          <Box
            position={"absolute"}
            right={["10%", "10%", "10%", "21%"]}
            top={["56%", "56%", "56%", "54.5%"]}
          >
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
            <FormControl isRequired>
              <FormLabel htmlFor="Tags">Category</FormLabel>
              <Select
                placeholder="Select"
                onChange={onchange}
                value={postJob.Category}
                id="Category"
                name="Category"
              >
                {Category.map((item, i) => {
                  return <option value={item}> {item}</option>;
                })}
              </Select>
            </FormControl>
          </Flex>
          <Flex direction={"column"} w="49%">
            <FormControl isRequired>
              <FormLabel htmlFor="Tags">Functional Area</FormLabel>
              <Select
                placeholder="Select"
                onChange={onchange}
                value={postJob.FunctionalArea}
                id="FunctionalArea"
                name="FunctionalArea"
              >
                {FunctionalArea.map((item, i) => {
                  return <option value={item}> {item}</option>;
                })}
              </Select>
            </FormControl>
          </Flex>
        </Flex>

        <TwoDropdown
          postJob={postJob}
          setPostJob={setPostJob}
          state1={postJob.GYS}
          state2={postJob.GYE}
          Location={Graduation}
        />

        <Flex alignItems={"center"}>
          <FormControl isRequired>
            <FormLabel htmlFor="Tags" mb="2px" mt="1rem" mt="1rem">
              Tags
            </FormLabel>

            <Input
              w="100%"
              id={"Tags"}
              name={"Tags"}
              placeholder={"+ Add Job tags"}
              size="md"
              value={postJob.Tags}
              onChange={onchange}
            />
          </FormControl>
          <Box
            cursor="pointer"
            onClick={() => {
              let loc = postJob.Tags;
              setTags((prev) => {
                return [...prev, loc];
              });
            }}
          >
            <BiMessageSquareAdd size="1.5rem" color="#5AB5A7" />
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-evenly"}
          my="1rem"
          flexDirection={["column", "column", "column", "row"]}
        >
          <Button
            bgColor={"#5AB5A7"}
            color="white"
            _active={{}}
            _focus={{}}
            _hover={{}}
            onClick={() => {
              handleSubmit();
            }}
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
            onClick={() => {
              //call api and then run cancel()
            }}
          >
            Post Job and Add another job
          </Button>
          <Button
            color="blue"
            bgColor={"white"}
            _active={{}}
            _focus={{}}
            _hover={{}}
            onClick={Cancel}
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
const Location = {
  heading: "Year of Experience ",
  select1: "Minimum Experience",
  select2: "Maximum Experience",
  s1Id: "YOES",
  s2Id: "YOEE",
  option1: ["1+", "2+", "3+"],
  option2: ["5+", "6+", "7+"],
};
const Graduation = {
  heading: "Graduating Year ",
  select1: "Start year",
  select2: "End year",
  s1Id: "GYS",
  s2Id: "GYE",
  option1: ["2016", "2017", "2018"],
  option2: ["2020", "2021", "2022"],
};
const FunctionalArea = ["Frontend", "Backend", "Design"];
const Category = ["UI", "UX", "Software Developer"];
