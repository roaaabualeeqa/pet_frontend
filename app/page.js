'use client';
import Hero from "./components/Hero";
import Form from "./components/Form";
import PetCards from "./components/petCards";
import Head from "./head";
import LoginForm from "./components/LoginForm";
import { useContext } from "react";
import { AuthContext } from "./context/auth";
import PetList from "./components/petList";
import AddPet from "./components/addPet";

// export const metadata = {
//   title: "About us page",
//   description : "welcome to about us page"
// }

export default function Home() {

  const { tokens } = useContext(AuthContext)

  return (
    <div>
      <Head title="Pets App" />

      {tokens ? <><Hero /> <Form /> <PetCards /> <PetList /> <AddPet /> </> : <LoginForm />}

    </div>
  );
}
