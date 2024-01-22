// Chakra imports
import {
  Button,
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
  
      
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='max'>
          {/* <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "45%" }}>
            <Text fontSize='sm' color='gray.400' fontWeight='bold'>
              
            </Text>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            Top Scenes Today
            </Text>
            {/* <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {description}
            </Text> */}
            {/* <Spacer />
            <Flex align='center'>
              <Button
                p='0px'
                variant='no-hover'
                bg='transparent'
                my={{ sm: "1.5rem", lg: "0px" }}>
                <Text
                  fontSize='sm'
                  color={textColor}
                  fontWeight='bold'
                  cursor='pointer'
                  transition='all .5s ease'
                  my={{ sm: "1.5rem", lg: "0px" }}
                  _hover={{ me: "4px" }}>
                  Read more
                </Text>
                <Icon
                  as={BsArrowRight}
                  w='20px'
                  h='20px'
                  fontSize='2xl'
                  transition='all .5s ease'
                  mx='.3rem'
                  cursor='pointer'
                  pt='4px'
                  _hover={{ transform: "translateX(20%)" }}
                />
              </Button>
            </Flex>
          </Flex>  */}
          {/* <Spacer /> */}
          <Text fontFamily='heading' fontSize='2xl' color={textColor} fontWeight='bold' pb='.5rem'>
            Top Scenes Today🔥
            </Text>
         
          
        
      
           <Flex border='2px solid' mb='10px' bgColor='pink'  w='6rem' h='6rem'>
              {image}
            <Flex justifyItems='center' flexDirection='column'>
            <CardBody mx='20px' >
              Sun, 4th Feb
           </CardBody>
            <Text w='max' ms='20px'>
              Live Music 
            </Text>
            
           
           <CardBody mx='20px' >
              helo
           </CardBody>
           <CardBody mx='20px' >
              helo
           </CardBody>
           </Flex>
           </Flex>
           <Flex border='2px solid' my='10px' bgColor='pink'  w='6rem' h='6rem'>
              {image}
            <Flex justifyItems='center' flexDirection='column'>
            <CardBody mx='20px' >
              Sun, 4th Feb
           </CardBody>
            <Text w='max' ms='20px'>
              Live Music 
            </Text>
            
           
           <CardBody mx='20px' >
              helo
           </CardBody>
           <CardBody mx='20px' >
              helo
           </CardBody>
           </Flex>
           </Flex>
           <Flex border='2px solid' my='10px' bgColor='pink'  w='6rem' h='6rem'>
              {image}
            <Flex justifyItems='center' flexDirection='column'>
            <CardBody mx='20px' >
              Sun, 4th Feb
           </CardBody>
            <Text w='max' ms='20px'>
              Live Music 
            </Text>
            
           
           <CardBody mx='20px' >
              helo
           </CardBody>
           <CardBody mx='20px' >
              helo
           </CardBody>
           </Flex>
           </Flex>
           <Flex border='2px solid' my='10px' bgColor='pink'  w='6rem' h='6rem'>
              {image}
            <Flex justifyItems='center' flexDirection='column'>
            <CardBody mx='20px' >
              Sun, 4th Feb
           </CardBody>
            <Text w='max' ms='20px'>
              Live Music 
            </Text>
            
           
           <CardBody mx='20px' >
              helo
           </CardBody>
           <CardBody mx='20px' >
              helo
           </CardBody>
           </Flex>
           </Flex>
           </Flex>
  );
};

export default BuiltByDevelopers;
