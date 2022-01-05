import React from 'react';
import logo from './logo.svg';
import { Box, Flex } from '@chakra-ui/react'
import Staking from './features/Staking';

function App() {
  return (
      <>
          <Box mt="40px" minW="1070px" overflowX="scroll">
              <Flex alignItems="center" justifyContent="center">
                  <Box
                      textTransform="uppercase"
                      fontSize="18px"
                      lineHeight="50px"
                      padding="0 30px"
                      cursor="pointer"
                      fontWeight="700"
                      // color={selectTab === 'STAKE' ? '#ffffff' : '#8d9fb9'}
                      // borderBottom={selectTab === 'STAKE' ? '1px solid #00aed6' : 'none'}
                      // onClick={() => handleClickTab('STAKE')}
                  >
                      Staking
                  </Box>
                  <Box
                      textTransform="uppercase"
                      fontSize="18px"
                      lineHeight="50px"
                      padding="0 30px"
                      cursor="pointer"
                      fontWeight="700"
                      // color={selectTab === 'LOCKED' ? '#ffffff' : '#8d9fb9'}
                      // borderBottom={selectTab === 'LOCKED' ? '1px solid #00aed6' : 'none'}
                      // onClick={() => handleClickTab('LOCKED')}
                  >
                      My Locked Staking
                  </Box>
              </Flex>

              <Box
                  padding={{ base: '20px 10px 10px', xl: '20px 30px 10px' }}
                  borderRadius="10px"
                  border="1px solid rgba(0, 174, 214, 0.33)"
              >
                  {/* {selectTab === 'STAKE' ?  */}
                  <Staking />
                   {/* :  */}
                   {/* <MyLockedStaking /> */}
                   {/* } */}
              </Box>
          </Box>

          {/* {isLoading && <ModalOverlay />} */}
      </>
  )
}


export default App;
