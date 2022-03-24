import { Flex, Stack, Button} from "@chakra-ui/react";
import { Input } from "../components/Form/input"
export default function SignIn() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360} // 360px
        bg="gray.800"
        p="8" // 2rem ou 32px
        borderRadius={8} // 8px
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" >Entrar</Button>
      </Flex>
    </Flex>
  );
}
