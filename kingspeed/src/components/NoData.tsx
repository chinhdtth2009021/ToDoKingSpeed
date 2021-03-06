import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'

export default function NoData() {
    return (
        <Flex justify="center" flexDirection="column" align="center" mt="40px">
            <Image src='/background/happy.png' alt='happy' h="100px" w="100px" />

            <Box fontSize="30px" color="#ffab00" mt="20px">
            Please connect to your Metamask first
                {/* {walletAddress ? "No data" : "Please connect to your Metamask first"} */}
            </Box>
        </Flex>
    )
}