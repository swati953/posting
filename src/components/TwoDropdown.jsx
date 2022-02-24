import React from "react";
import { Box, Flex, Input, Text, Select } from "@chakra-ui/react";
const TwoDropdown = ({
  postJob,
  setPostJob,

  state1,
  state2,

  Location,
}) => {
  const onchange = (e) => {
    setPostJob({ ...postJob, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Text mb="2px" mt="1rem">
        {Location.heading}
      </Text>
      <Flex justifyContent={"space-between"}>
        <Select
          placeholder={Location.select1}
          w={["49%"]}
          onChange={onchange}
          value={state1}
          id={Location.s1Id}
          name={Location.s1Id}
        >
          {Location.option1.map((index, i) => {
            return <option value={index}> {index}</option>;
          })}
          {/* <option value="3+"> 3+</option>
          <option value="5+">5+</option> */}
        </Select>
        <Select
          placeholder={Location.select2}
          w={["49%"]}
          onChange={onchange}
          value={state2}
          id={Location.s2Id}
          name={Location.s2Id}
        >
          {Location.option2.map((index, i) => {
            return <option value={index}> {index}</option>;
          })}
        </Select>
      </Flex>
    </>
  );
};

export default TwoDropdown;
