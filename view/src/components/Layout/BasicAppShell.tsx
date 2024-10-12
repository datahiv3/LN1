import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }} padding="lg">
      <AppShell.Header className="flex gap-5 px-12 items-center">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
        <Header />
      </AppShell.Header>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
      <AppShell.Navbar onClick={toggle} p="lg">
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
