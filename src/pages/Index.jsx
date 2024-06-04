import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      <Flex as="main" direction={{ base: "column", md: "row" }} p={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Main Article</Heading>
          <Image src="https://via.placeholder.com/800x400" alt="Main article image" mb={4} />
          <Text fontSize="lg" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
          <Text>
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </Text>
        </Box>

        <Box flex="1" p={4} bg="gray.100">
          <Heading as="h3" size="lg" mb={4}>Sidebar</Heading>
          <VStack spacing={4}>
            <Box bg="white" p={4} shadow="md" width="100%">
              <Heading as="h4" size="md" mb={2}>Advertisement</Heading>
              <Image src="https://via.placeholder.com/300x250" alt="Ad image" />
            </Box>
            <Box bg="white" p={4} shadow="md" width="100%">
              <Heading as="h4" size="md" mb={2}>Additional Content</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      <Flex as="footer" bg="gray.900" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text>&copy; 2023 Financial Times</Text>
        <HStack spacing={4}>
          <Link href="#" color="white"><FaTwitter /></Link>
          <Link href="#" color="white"><FaFacebook /></Link>
          <Link href="#" color="white"><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;