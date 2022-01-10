import React, { useState } from "react";
import styled from '@emotion/styled'
import { Box, HStack, Text } from '@chakra-ui/react'



export default function Banner() {
    const [kscPrice, setKscPrice] = useState(0)
    const Title = styled(Text)`
        font-size: 16px;
        font-weight: 600;
        line-height: 27px;
    `

    const Value = styled(Text)`
        font-size: 34px;
        line-height: 55px;
    `
    return (
            <Box
                mt="40px"
                pos="relative"
                bgSize="cover"
                bgPosition="top"
                overflow="hidden"
                borderBottom="1px solid rgb(33, 193, 134 ,0.16)"
                bgImage={{ base: 'none', md: "url('/background/banner.webp')" }}>
                <Box p="20px 30px">
                    <Box fontSize="40px" fontWeight="600" lineHeight="62px">
                        Staking
                    </Box>
                    <Box display="flex" mt="20px">
                        <HStack spacing={{ base: '1.4rem', md: '3.75rem' }}>
                                <Box>
                                    <Title>Total Staked</Title>
                                    <Value color="#ffab00">
                                           {/* {numberFormat(totalStakedAmount)}   ksc */}
                                        KSC
                                       </Value>
                                </Box>
                            <Box>
                                <Title>Total Value Locked</Title>
                                <Value color="#00aed6">
                                     {/* $ {numberFormat(totalStakedAmount * kscPrice)} */}
                                     KSC
                                   
                                </Value>
                            </Box>
                            <Box>
                                <Title>Price KSC</Title>
                                <Value color="#c3fb12">
                                    ${kscPrice}
                                    </Value>
                            </Box>
                        </HStack>
                    </Box>
                </Box>
            </Box>
    )
}
