import { Container, Box, Heading, Text, VStack, HStack, IconButton, Link, Image, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      {/* Header */}
      <Box textAlign="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1712847331947-9460dd2f264b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTgwNjA4Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
        <Heading as="h1" size="2xl" mt={4}>
          John Doe
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Full Stack Developer
        </Text>
        <HStack spacing={4} justify="center" mt={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="mailto:johndoe@example.com" isExternal>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
          </Link>
        </HStack>
      </Box>

      <Divider />

      {/* About Section */}
      <Box my={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="md" color="gray.700">
          Hello! I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in building web applications. I love working with modern technologies and continuously improving my skills.
        </Text>
      </Box>

      <Divider />

      {/* Skills Section */}
      <Box my={10}>
        <Heading as="h2" size="xl" mb={4}>
          Skills
        </Heading>
        <VStack align="start" spacing={2}>
          <Text fontSize="md" color="gray.700">
            - JavaScript (ES6+)
          </Text>
          <Text fontSize="md" color="gray.700">
            - React & Redux
          </Text>
          <Text fontSize="md" color="gray.700">
            - Node.js & Express
          </Text>
          <Text fontSize="md" color="gray.700">
            - MongoDB & SQL
          </Text>
          <Text fontSize="md" color="gray.700">
            - HTML & CSS
          </Text>
          <Text fontSize="md" color="gray.700">
            - Git & GitHub
          </Text>
        </VStack>
      </Box>

      <Divider />

      {/* Contact Section */}
      <Box my={10}>
        <Heading as="h2" size="xl" mb={4}>
          Contact
        </Heading>
        <Text fontSize="md" color="gray.700">
          Feel free to reach out to me via email at{" "}
          <Link href="mailto:johndoe@example.com" color="teal.500">
            johndoe@example.com
          </Link>{" "}
          or connect with me on LinkedIn.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;
