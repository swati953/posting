import "./App.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import PostJobPage from "./components/PostJobPage";
function App() {
  return (
    <ChakraProvider>
      
      <PostJobPage/>
    </ChakraProvider>
  );
}

export default App;
