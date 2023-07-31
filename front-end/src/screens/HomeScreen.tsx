import state from "../store/store";
import { useSnapshot } from "valtio";
import LoginScreen from "./LoginScreen";
import FormContainer from "../components/FormContainer";

const HomeScreen = () => {
  const snap = useSnapshot(state);
  return (
    <FormContainer className="d-flex justify-content-center">
      <h1 className="text-center mb-4">Mern Authentication</h1>
      <p className="text-center mb-4">
        Welcome to the homepage, {snap.user.name}!!
      </p>
    </FormContainer>
  );
};

export default HomeScreen;
