import { Poster } from "@utils/Poster";
import { Header } from "@shared/Header";
import { Wrapper } from "@shared/Wrapper";
import { Areas } from "@shared/Areas";

export const Outlet = () => (
  <div>
    <Poster />
    <Header />
    <Wrapper />
    <Areas />
  </div>
);
