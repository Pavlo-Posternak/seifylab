import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Image, Modal, ModalCloseButton, ModalContent, ModalOverlay, Text, Textarea } from "@chakra-ui/react";
import * as React from "react";
import { useRouter } from "next/router";
import { DatePicker, DatePickerCalendar, DatePickerDialog, DatePickerTimeField, DateRangePicker, DateRangePickerCalendar } from "@saas-ui/date-picker";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Project = () => {

    const router = useRouter();
    const link = router.query.link;
    const [token, setToken] = React.useState('SOL')
    const [open, setOpen] = React.useState(false);
    const [step, setStep] = React.useState(1);

    return (
        <Container px="8" py="32" maxW="container.2xl">
            <Flex direction={`column`} alignItems={"center"} gap={16} textAlign={"center"} mt={'10'}>
                <Heading size={'xl'}>Project Proposal</Heading>
                <Flex justify={'space-between'} alignItems={'start'} gap={32}>
                    <Flex direction={'column'} alignItems={'start'} gap={2}>
                        <Text fontSize={'2xl'}>Scope of Work</Text>
                        <Textarea h={'200px'} w={'400px'}></Textarea>

                        <Text fontSize={'2xl'}>Scope of Work</Text>
                        <Text fontSize={'lg'} mt={'-2'}>Give details about the project</Text>
                        <Textarea h={'200px'} w={'400px'}></Textarea>
                    </Flex>
                    <Flex direction={'column'} align={'start'} gap={12}>
                        <Grid gridTemplateColumns={'1fr 1fr'} gap={'20px 64px'} textAlign={"left"}>
                            <GridItem>
                                <Text fontSize={'2xl'}>Payer Wallet</Text>
                                <Text fontSize={'lg'}>Wallet Connected: 8Y1s...YQ1Y</Text>
                            </GridItem>
                            <GridItem>
                                <Text fontSize={'2xl'}>Payee Wallet</Text>
                                <Text fontSize={'lg'}>Wallet Connected: 8Y1s...YQ1Y</Text>
                            </GridItem>
                            <GridItem>
                                <Text fontSize={'2xl'}>Amount to be paid</Text>
                                <Flex border={`1px solid white`} borderRadius={8} py={1} px={2} gap={4} width={'max-content'}>
                                    <Text>{`13`} {`SOL`}</Text>
                                    <Image
                                        src={`/static/images/${token === "USDC" ? "usdc": token === "ETH" ? "ethereum": token === "SOL" ? "solana" : "bitcoin"}.svg`}
                                        alt={token}
                                        h={6}
                                        w={6}
                                        borderRadius={`full`}
                                        border={`2px solid white`}
                                    />
                                </Flex>
                            </GridItem>
                        </Grid>
                        <Flex direction={'column'} align={'start'} gap={2}>
                            <Text fontSize={'2xl'}>Timeline</Text>
                            <Text fontSize={'lg'} mt={'-2'}>By when should payee deliver the work?</Text>
                            <Box bg={'#171717'} p={4}>
                                <DatePicker>
                                    <DatePickerCalendar />
                                    <DatePickerTimeField />
                                </DatePicker>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex alignItems={"center"} justify={'end'} gap={4} w={'full'} mt={'8'}>
                    <Button fontSize={'medium'} p={4} colorScheme="purple" onClick={() => setOpen(true)}>Accept</Button>
                    <Button fontSize={'medium'} p={4} colorScheme="purple" onClick={() => {
                        router.push("/dashboard")
                    }}>Reject</Button>
                </Flex>
                <Modal isOpen={open} onClose={() => {
                    setOpen(false);
                    setStep(1);
                    router.push("/dashboard");
                }}>
                    <ModalOverlay />
                    <ModalContent maxW={'600px'} mt={64} borderRadius={16}>
                        <ModalCloseButton />
                        {step === 1 ? (
                            <Flex direction={'column'} alignItems={"center"} gap={2} m={10}>
                                <Text fontSize={'2xl'}>Accept Proposal</Text>
                                <hr style={{borderTop: "1px solid white", width: "100px", marginBottom: "12px"}}/>
                                <Flex direction={'column'} align={'start'} gap={2}>
                                    <Text fontSize={'lg'} mt={'-2'}>Connect wallet to assign payee address</Text>
                                    <HStack my={4} gap={6}>
                                        <Button
                                            leftIcon={<Image src="/static/images/phantom.png" h={8} alt="Phantom"/>} 
                                            size={'lg'}
                                            p={4}
                                            colorScheme="whiteAlpha"
                                            variant="solid"
                                            onClick={() => {}}
                                        ><Text fontSize={'lg'} color={'black'}>Phantom</Text></Button>
                                        <Button
                                            leftIcon={<Image src="/static/images/metamask.png" h={8} alt="MetaMask"/>} 
                                            size={'lg'}
                                            p={4}
                                            colorScheme="whiteAlpha"
                                            variant="solid"
                                            onClick={() => {}}
                                        ><Text fontSize={'lg'} color={'black'}>Metamask</Text></Button>
                                    </HStack>
                                    <Text fontSize={'md'}>Wallet Connected: 8Y1s...YQ1Y</Text>
                                    <Text fontSize={'md'} color="#8952e0">{token} Balance: 145 {token}</Text>
                                </Flex>
                                <Button fontSize={'medium'} p={4} colorScheme="purple" onClick={() => setStep(2)}>Accept</Button>
                            </Flex>
                        ) : (
                            <Flex direction={'column'} alignItems={"center"} gap={6} m={10}>
                                <Text fontSize={'2xl'}>Proposal Accepted</Text>
                                <CheckCircleIcon color={'green'} boxSize={20}/>
                                <Button fontSize={'medium'} p={4} colorScheme="purple" onClick={() => {
                                    setOpen(false);
                                    setStep(1);
                                    router.push("/dashboard");
                                }}>Close</Button>
                            </Flex>
                        )}
                    </ModalContent>
                </Modal>
            </Flex>
        </Container>
    )
}

export default Project;