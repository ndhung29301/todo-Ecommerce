import React from "react";
import {Header} from "../../components/organisms/header";
import {Footer} from "../../components/organisms/footer";
import {Home} from "../../components/templates/home/home";
import {Box} from "../../components/atoms/custom_basic";
import styled from "styled-components";
const  Container=styled(Box)`
    position: relative;
`
const HomePage : React.VFC =():JSX.Element => {
    return (
        <Box>
            <Header/>
            <Home/>
            <Footer/>
        </Box>
    )
}
export default HomePage