import { Poster } from "@utils/Poster";
import { Header } from "@shared/Header";
import { Wrapper } from "@shared/Wrapper";
import { Areas } from "@shared/Areas";
import { Banner } from "@shared/Banner";
import { AdviceSection } from "@shared/AdviceSection";
import { RecentArticles } from "@shared/RecentArticles";
import { SignUp } from "@shared/SignUp";
import { Footer } from "@shared/Footer";

export const Outlet = () => (
  <div>
    <Poster />
    <Header />
    <Wrapper />
    <Areas />
    <Banner />
    <RecentArticles />
    <AdviceSection />
    <SignUp />
    <Footer />
  </div>
);
