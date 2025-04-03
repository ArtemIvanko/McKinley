import { Poster } from "@utils/Poster";
import { Header } from "@shared/Header";
import { Wrapper } from "@shared/Wrapper";
import { Areas } from "@shared/Areas";
import { Banner } from "@shared/Banner";
import { RecentArticles } from "@shared/RecentArticles";

export const Outlet = () => (
  <div>
    <Poster />
    <Header />
    <Wrapper />
    <Areas />
    <Banner />
    <RecentArticles />
  </div>
);
