import React from "react";
import AppHeader from './AppHeader'
import { Box } from '@chakra-ui/react'
import Banner from "../components/Banner";
interface Props {
    children: JSX.Element[] | JSX.Element
}

export default function Layout({ children }: Props) {
    return (
        <Box padding={{ base: '20px 10px', xl: '20px 100px' }}>
            <AppHeader />
            <Banner />

            {children}
        </Box>
    )
}

