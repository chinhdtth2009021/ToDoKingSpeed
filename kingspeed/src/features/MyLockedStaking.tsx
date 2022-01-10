import React, { useState } from "react";
import { Table, Tr, Th, Tbody, TableCaption } from '@chakra-ui/react'
import styled from '@emotion/styled'
import NoData from "../components/NoData";
export default function MyLockedStaking() {
    const [stakes, setStakes] = useState([])
    const THItem = styled(Th)`
        padding: 10px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        border-bottom: none;
        font-family: inherit;
        margin-left: 20px;
        color: #8d9fb9;
    `

    return (
        <Table>
            <Tr bgColor="#011921" p="10px 100px" borderRadius="3px">
                <THItem>Package</THItem>
                <THItem>Total Amount</THItem>
                <THItem w="160px">APY</THItem>
                <THItem>Stake Date</THItem>
                <THItem>Locked Days</THItem>
                <THItem>Interest End Date</THItem>
                <THItem>Accrue Days</THItem>
                <THItem>Estimated Interests</THItem>
                <THItem></THItem>
            </Tr>

            {stakes.length > 0 ? (
                <Tbody>
                    {stakes.map((stake, index) => {
                        return
                        // <MyLockedItem key={index} stake={stake} updateStaked={updateStaked} />
                    })}
                </Tbody>
            ) : (
                <TableCaption>
                    <NoData />
                </TableCaption>
            )}
        </Table>
    )
}
