import React from "react";
import {
    Box,
    Flex,
    Link,
    Image,
    SimpleGrid,
    Button,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import NumberFormat from 'react-number-format'

const UNLIMITED_KSC = 200000000
const PACKAGE_SILVER = 1
const PACKAGE_GOLD = 2
const PACKAGE_RUBY = 3
const PACKAGE_DIAMOND = 4
const OPTION_7_DAYS = 1
const OPTION_30_DAYS = 2
const OPTION_90_DAYS = 3
const OPTION_180_DAYS = 4

const URL_BUY_KSC =
    'https://pancakeswap.finance/swap?outputCurrency=0x3ac0f8cecc1fb0ee6c2017a072d52e85b00c6694'

export default function StakeDetail({ option, packageItem }: any) {


    return (
        <Box padding="20px 0" maxW="670px" margin="0 auto">
            <Box
                display="flex"
                justifyContent="space-between"
                padding="10px 20px"
                borderStyle="solid"
                borderWidth="0.6px"
                borderRadius="5px"
                background="linear-gradient(to left, rgba(3, 170, 20, 0.46), rgba(0, 174, 214, 0.12))"
            >
                <Box>
                    <Box fontSize="12px" fontWeight="600">
                        Total Staked
                    </Box>
                    <Box mt="6px" fontSize="20px" color="#ffab00" fontWeight="700">
                        {/* {numberFormat(totalStakedByOption)}  */}
                        KSC
                    </Box>
                </Box>
                <Box textAlign="right">
                    <Box color="#8d9fb9" fontSize="12px" fontWeight="600" textTransform="uppercase">
                        Pool Limit
                    </Box>
                    <Box
                        w="200px"
                        display="flex"
                        justifyContent={
                            option?.poolLimit === UNLIMITED_KSC ? 'flex-end' : 'space-between'
                        }
                        fontSize="16px"
                        fontWeight="600"
                        mt="5px"
                    >
                        {option?.poolLimit !== UNLIMITED_KSC && (
                            <Box>
                                {/* {percentPool?.toFixed(2)} */}
                                %</Box>
                        )}
                        <Box className="amount">
                            {/* {poolLimit} */}
                            </Box>
                    </Box>
                    {option?.poolLimit !== UNLIMITED_KSC && (
                        <Box
                            fontSize="21px"
                            lineHeight="33px"
                            textTransform="uppercase"
                            borderRadius="2px"
                            flex="1"
                            mt="10px"
                            borderBottom="7px solid rgb(0, 174, 214, 0.16)"
                            className="progress"
                        >
                            <Box
                                // w={percentPool}
                                borderRadius="3px"
                                borderBottom="7px solid #ffffff"
                                mb="-7px"
                                className="progress-detail"
                            ></Box>
                        </Box>
                    )}
                </Box>
            </Box>

            <SimpleGrid columns={2} spacing={16} mt="20px">
                <Box>
                    <Flex justify="space-between" align="center">
                        <Box fontSize="22px" fontWeight="700" color="#c3fb12">
                            STAKE
                        </Box>
                        <Link href={URL_BUY_KSC} isExternal>
                            <Flex align="center" justify="flex-end" cursor="pointer">
                                <Box
                                    color="#21c186"
                                    fontSize="14px"
                                    mt="3px"
                                    fontWeight="700"
                                    mr="10px"
                                >
                                    Buy KSC
                                </Box>

                                <Image src="./icon/icon-buy.svg" alt="icon-buy" />
                            </Flex>
                        </Link>
                    </Flex>
                    <Flex justify="space-between" alignItems="center" mt="10px">
                        <Box fontSize="14px">Stake amount</Box>
                        <Box fontSize="14px">Available amount:
                         {/* {numberFormat(balanceKSC)}  */}
                         KSC</Box>
                    </Flex>
                    <Box
                        // border={
                        //     balanceKSC < packageItem.minStake || disableConfirm
                        //         ? '1px solid #ee2737'
                        //         : '1px solid #003947'
                        // }
                        borderRadius={4}
                        mt="5px"
                        p="5px 10px"
                    >
                        <Flex justify="space-between" align="center">
                            <NumberFormat
                                style={{
                                    backgroundColor: '#000000',
                                }}
                                // value={stakeAmount}
                                min={packageItem.minStake}
                                max={packageItem.maxStake}
                                thousandSeparator={true}
                                decimalScale={4}
                                allowNegative={false}
                                // disabled={isLoading || isDisable()}
                                // onValueChange={(values) => handleStakeAmount(values)}
                            />
                            <Flex justify="center" align="center">
                                <Box as="span" fontWeight="600" fontSize="20px">
                                    KSC
                                </Box>
                                <Box
                                    padding="5px 10px"
                                    fontWeight="600"
                                    fontSize="16px"
                                    color="#21c186"
                                    background="rgba(33, 193, 134, 0.19)"
                                    borderRadius="5px"
                                    cursor="pointer"
                                    ml={4}
                                    // onClick={handleMaxKSC}
                                >
                                    Max
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>

                    {/* {errorMessage && ( */}
                        <Box color="#ee2737" fontSize="13px" mt="10px" fontWeight="600">
                            {/* {errorMessage} */}
                        </Box>
                    {/* )} */}

                    {/* {balanceKSC < packageItem.minStake && ( */}
                        <Box color="#ee2737" fontSize="13px" mt="10px" fontWeight="600">
                            {/* {`The available amount can not be lower than ${numberFormat(
                                packageItem.minStake
                            )} KSC`} */}
                        </Box>
                    {/* )} */}

                    {/* {transactionInfo.transactionHash && ( */}
                        <Box mt="10px">
                            {/* <AlertHashTransaction
                                transactionInfo={transactionInfo}
                                closeTransactionHash={closeTransactionHash}
                            /> */}
                        </Box>
                    {/* )} */}
                </Box>
                <Box className="stake-info">
                    <Box fontSize="18px" fontWeight="600">
                        SUMMARY
                    </Box>
                    <Flex alignItems="center" justify="space-between" mt="5px">
                        <Box fontSize="16px">Stake Date</Box>
                        <Box fontSize="16px">
                            {/* {formatDateYYYYMMDDHHMMSS(stakeDate)} */}
                            </Box>
                    </Flex>
                    <Flex alignItems="center" justify="space-between" mt="5px">
                        <Box fontSize="16px">Interest End Date</Box>
                        <Box fontSize="16px">
                            {/* {formatDateYYYYMMDDHHMMSS(dayjs(stakeDate).add(option.duration, 'day'))} */}
                        </Box>
                    </Flex>
                    <Flex alignItems="center" justify="space-between" mt="5px">
                        <Box fontSize="16px">Withdrawal Delay Time</Box>
                        <Box fontSize="16px">None</Box>
                    </Flex>

                    <Box border="1px solid rgba(0, 174, 214, 0.33)" mt="10px" mb="10px"></Box>

                    <Flex alignItems="center" justify="space-between" mt="5px">
                        <Box fontSize="16px" fontWeight="700" color="white">
                            APY
                        </Box>
                        <Box fontSize="16px" fontWeight="700" color="white">
                            {option.rateDisplay}%
                        </Box>
                    </Flex>
                    <Flex alignItems="center" justify="space-between" mt="5px">
                        <Box fontSize="16px" fontWeight="700" color="white">
                            Estimated Interests
                        </Box>
                        <Box fontSize="16px" fontWeight="700" color="white">
                            {/* {calculateRate().toFixed(3)} KSC */}
                        </Box>
                    </Flex>
                    <Button
                        // onClick={handleConfirmStake}
                        color="#000000"
                        fontWeight="700"
                        background="#ffab00"
                        mt="10px"
                        // isLoading={isLoading}
                        // disabled={isDisable() || disableConfirm || isLoading}
                        loadingText="Loading"
                        fontSize="20px"
                        p="20px 100px"
                        w="100%"
                        _hover={{
                            color: '#000000',
                            background: '#ffab00',
                        }}
                    >
                        Confirm
                    </Button>
                </Box>
            </SimpleGrid>
        </Box>
    )
}

