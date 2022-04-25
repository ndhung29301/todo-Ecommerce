import React from "react";
import {Box, Button, Flex, Link, Text} from "../../atoms/custom_basic";
import { MdLanguage } from "react-icons/md";

export const Footer: React.VFC =():JSX.Element =>{
    return (

        <Box backgroundColor={"#19110B"} width={"100%"} height={"189px"} minHeight={"auto"} minWidth={"auto"}>
                <Flex padding={"20px 40px 0 40px"} height={"65px"}>
                    <Text color={"#ffffff"} fontWeight={"bold"} fontSize={"16px"} lineHeight={"24px"}>
                        LOUIS VUITTON
                    </Text>
                </Flex>
            <Box  padding={"0 40px 0 40px"}>
                <Flex border={'1px solid white'}/>
            </Box>
            <Flex padding={"30px 0 0 32px"} >
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Link href={"#"} color={"#ffffff"} marginTop={"5px"}  >
                        <MdLanguage fontSize={"20px"}/>
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} fontSize={"16px"} marginLeft={"7px"} lineHeight={"20px"}>
                        ENGLISH (INTL)
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Newsletter
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Contact
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Stores
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Sustainability
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Apps
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Follow Us
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Legal & Privacy
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Cookies
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"52px"} fontSize={"16px"} lineHeight={"20px"}>
                        Jobs
                    </Link>
                    <Link href={"#"} color={"#ffffff"} textDecorationLine={"none"} marginLeft={"58px"} fontSize={"16px"} lineHeight={"20px"}>
                        Sitemap
                    </Link>
                </Flex>
            </Flex>
        </Box>
    )
}