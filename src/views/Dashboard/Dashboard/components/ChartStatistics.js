import { Flex, Progress, Text, useColorModeValue } from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import React from "react";

const ChartStatistics = ({ title, amount, icon, percentage }) => {
  const iconblue = useColorModeValue("blue.300", "blue.300");
  const iconBoxInside = useColorModeValue("#FF4546", "#FF4546");
  const textColor = useColorModeValue("gray.700", "#FF4546");
  const overlayRef = React.useRef();
  return (
    <Flex direction='column'>
      <Flex alignItems='center'>
        <IconBox as='box' h={"30px"} w={"30px"} bg={iconblue} me='6px'>
          {icon}
        </IconBox>
        <Text fontSize='sm' color='gray.400' fontWeight='semibold'>
          {title}
        </Text>
      </Flex>
      <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
        {amount}
      </Text>
      <Progress
        colorScheme='#FF4546'
        borderRadius='12px'
        h='5px'
        value={percentage}
      />
    </Flex>
  );
};

export default ChartStatistics;
