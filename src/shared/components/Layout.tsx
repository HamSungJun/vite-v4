import Header from "@app/shared/components/Header";
import Navigation from "@app/shared/components/Navigation";
import Footer from "@app/shared/components/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { HEADER_HEIGHT } from "../constants";

interface ILayout {}
export default function Layout({}: ILayout) {
  return (
    <>
      <Header height={HEADER_HEIGHT} />
      <div className="flex min-h-[calc(100vh-50px)]">
        <Navigation />
        <main className="p-[20px]">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  );
}
