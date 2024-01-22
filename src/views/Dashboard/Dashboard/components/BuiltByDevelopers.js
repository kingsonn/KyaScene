// Chakra imports
import {
  Button,
  Container,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const BuiltByDevelopers = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "#FF4546");

  return (
    <Container p='0' m='0'>
      <Text fontFamily='heading' mt='15px' fontSize='2xl' color={textColor} fontWeight='bold' pb='.5rem'>
            Top Scenes Today🔥
            </Text>
            <Card borderRadius="8px" my='10px'>
              <CardBody>
              <Flex  mr='10px' p='0' w='35%'>
                {image}
              </Flex>
              <Flex flexDirection='COLUMN'>
              < Text fontSize='md'>
              Sun, 12th Feb</Text>
              < Text fontFamily='heading'fontSize='lg' fontWeight='bold' >
              Live Music event</Text>
              < Text fontSize='md' color={textColor}>
              From ₹100</Text>
              </Flex>
              </CardBody>
            </Card>
            <Card borderRadius="8px" my='10px'>
              <CardBody>
              <Flex  mr='10px' p='0' w='35%'>
                {image}
              </Flex>
              <Flex flexDirection='COLUMN'>
              < Text fontSize='md'>
              Sun, 12th Feb</Text>
              < Text fontFamily='heading'fontSize='lg' fontWeight='bold' >
              Live Music event</Text>
              < Text fontSize='md' color={textColor}>
              From ₹100</Text>
              </Flex>
              </CardBody>
            </Card>
            <Card borderRadius="8px" my='10px'>
              <CardBody>
              <Flex  mr='10px' p='0' w='35%'>
                {image}
              </Flex>
              <Flex flexDirection='COLUMN'>
              < Text fontSize='md'>
              Sun, 12th Feb</Text>
              < Text fontFamily='heading'fontSize='lg' fontWeight='bold' >
              Live Music event</Text>
              < Text fontSize='md' color={textColor}>
              From ₹100</Text>
              </Flex>
              </CardBody>
            </Card>
           
    </Container>
  );
};

export default BuiltByDevelopers;
