import React from "react";
import { Box, Flex, Image } from '@chakra-ui/react'
import ButtonConnectWallet from "../components/ButtonConnectWallet";
export default function AppHeader(){
    return( 
        <Flex alignItems="center" justifyContent="space-between">
        <Box className="app-header__logo">
            <Image src="/logo.svg" alt="logo" />
        </Box>
        
        {/* {walletAddress ? (
            <Account />
        ) : ( */}
            <Box mr={4}>
                <ButtonConnectWallet />
            </Box>
        {/* )} */}
    </Flex>
    )
}