import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="xl"
        color="red"
      >
        <Heading fontSize="4xl" fontFamily="Work sans">
            ChatHive
        </Heading>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="xl"
        borderWidth="1px"
        boxShadow="xl"
      >
        <Tabs variant="enclosed-colored" colorScheme="teal">
          <TabList mb="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack spacing={4}>
                <Login />
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack spacing={4}>
                <Signup />
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
