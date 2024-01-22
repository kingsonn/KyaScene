// Chakra imports
import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
// Custom components
import chill from "../../../../assets/img/chill.jpg"
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import React from "react";

const MiniStatistics = ({ title, font,me,mx, percentage, icon }) => {
  const iconblue = useColorModeValue("blue.300", "blue.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card bgColor='pink' minH='83px' w='max' mx={mx} me={me}  >
      <CardBody>
        <Flex fontFamily={font} flexDirection='row' align='center' justify='center' w='max'>
          <Text fontWeight='bold' letterSpacing='wider' fontSize='4xl'> 
            {title}
            <br/>
            Scene
          </Text>
          
          {/* <IconBox as='box' h={"45px"} w={"45px"} bg={iconblue}>
            {icon}
          </IconBox> */}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniStatistics;
