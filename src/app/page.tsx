import { Container, Filter } from "@/components";
import { Header } from "@/components/header";
import { TopBar } from "@/components/top-bar";
import Image from "next/image";

export default function Home() {
  return (

    <>
      <Header title={""} />
      <TopBar />
      <Container>
        <Filter className="max-w-[245px]" />
      </Container>
    </>
  );
}
