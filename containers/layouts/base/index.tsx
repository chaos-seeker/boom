import { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export default function LayoutBase(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
