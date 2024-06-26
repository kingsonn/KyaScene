// Chakra Imports
import {
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  useColorMode,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AdminNavbarLinks from "./AdminNavbarLinks";
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
export default function AdminNavbar(props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [scrolled, setScrolled] = useState(false);
  const {
    variant,
    children,
    fixed,
    secondary,
    brandText,
    onOpen,
    ...rest
  } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue("gray.700", "gray.200");
  let secondaryText = useColorModeValue("gray.400", "gray.200");
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(21px)";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  let navbarIcon = useColorModeValue("gray.500", "gray.200");

  if (props.fixed === true)
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = useColorModeValue(
        "0px 7px 23px rgba(0, 0, 0, 0.05)",
        "none"
      );
      navbarBg = useColorModeValue(
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
      );
      navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
      navbarFilter = useColorModeValue(
        "none",
        "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
      );
    }
  if (props.secondary) {
    navbarBackdrop = "none";
    navbarPosition = "absolute";
    mainText = "white";
    secondaryText = "white";
    secondaryMargin = "22px";
    paddingX = "30px";
  }
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="0px"
      left={document.documentElement.dir === "rtl" ? "30px" : "0px"}
      right={document.documentElement.dir === "rtl" ? "" : "15px"}
      px={{
        sm: paddingX,
        md: "30px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="0px"
      top="18px"
      w='100%'
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          {/* <Breadcrumb>
            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href="#" color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href="#" color={mainText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb> */}
          {/* Here we create navbar brand, based on route name */}
          <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Flex>
          <span class="material-symbols-outlined">person_pin_circle</span>
          <Text
            color={mainText}
            fontSize='xl'
          >
           Mumbai
          </Text>
          </Flex>
          <Flex>
          <Button w='25px' h='35px' bgColor='purple.200' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon w='25px' h='35px' color='gray.500'/> : <SunIcon w='25px' h='35px'/>}
              </Button>
          <ProfileIcon color={navbarIcon} w="35px" h="35px" me="0px"  />
          </Flex>
          </Flex>
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
