import React from "react";
import {Box, Button, Flex, Link, Text} from "../../atoms/custom_basic";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
interface IHeader {

}
const Categories=styled(Link)`
  &:hover {
    text-decoration-line: underline;
  }
`
const Container=styled(Box)`
  &:hover {
    background-color: #FFFFFF;
  };
  position: absolute;
  top: 0;
  z-index: 100;
`
export  const  Header :React.FC<IHeader>=(props):JSX.Element =>{
    return (
    <Container width={"100%"} backgroundColor={"transparent"} paddingBottom={'20px'}>
    <Flex justifyContent={"space-between"} padding={"30px 50px 20px 50px"} alignItems={"center"}>
           <Button flexDirection={"row"} border={"none"} color={"none"} backgroundColor={"transparent"} alignItems={"center"} >
               <MdSearch fontSize={"24px"}/>
               <Text marginLeft={"7px"} fontSize={"14px"} lineHeight={"20px"} color={"#000000"} >Search</Text>
           </Button>
        <Link href={"/home"} textDecorationLine={"none"} fontSize={"28px"} lineHeight={"32px"} fontFamily={"Roboto"} fontWeight={"bold"} color={"#000000"} >
            LOUIS VUITTON
        </Link>
        <Flex alignItems={"center"}>
            <Link href={"#"} marginRight={"10px"} color={"#000000"} fontSize={"14px"} lineHeight={"24px"} fontFamily={"Roboto"} textDecorationLine={"none"}>
                Wishlist
            </Link>
            <Link textDecorationLine={"none"} color={"#000000"} href={"#"} fontSize={"14px"} lineHeight={"24px"} fontFamily={"Roboto"}>
                My LV
            </Link>
        </Flex>
    </Flex>
        <Flex alignItems={"center"} justifyContent={"center"} >
            <Flex>
                <Categories textDecorationLine={"initial"} padding={"0 10px 0 10px"} fontWeight={"bold"} color={"#000000"} href={"#"} fontSize={"14px"} lineHeight={"24px"} fontFamily={"Roboto"}>
                    NEW
                </Categories>
                <Categories textDecorationLine={"none"} padding={"0 10px 0 10px"} fontWeight={"bold"} color={"#000000"} href={"#"} fontSize={"14px"} lineHeight={"24px"} fontFamily={"Roboto"}>
                    WOMEN
                </Categories>
                <Categories textDecorationLine={"none"} padding={"0 10px 0 10px"} fontWeight={"bold"} color={"#000000"} href={"#"} fontSize={"14px"} lineHeight={"24px"} fontFamily={"Roboto"}>
                   MEN
                </Categories>
                <Categories textDecorationLine={"none"} padding={"0 10px 0 10px"} fontWeight={"bold"} color={"#000000"} href={"#"} fontSize={"14px"} lineHeight={"24px"} fontFamily={"Roboto"}>
                    ART OF LIVING
                </Categories>
                <Categories textDecorationLine={"none"} padding={"0 10px 0 10px"} fontWeight={"bold"} color={"#000000"} href={"#"} fontSize={"14px"} lineHeight={"24px"} fontFamily={"Roboto"}>
                    WORLD OF LOUIS VUITTON
                </Categories>
            </Flex>
        </Flex>
    </Container>


    )
}