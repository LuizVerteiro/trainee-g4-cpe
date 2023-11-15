import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "./Styles";
function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default AppLayout;
