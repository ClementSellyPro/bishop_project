import Header from "./components/Header";
import Hero from "./components/page/Home/Hero";
import Container from "./components/shared/Container";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <Container theme="light">
        <p>TEST</p>
      </Container>

      <Container theme="dark">
        <p>TEST</p>
      </Container>

      <Container theme="light">
        <p>TEST</p>
      </Container>
    </div>
  );
}
