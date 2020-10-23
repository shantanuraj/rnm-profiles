import * as React from "react";
import { PagedList } from "./PagedList";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div>Rick & Morty Characters</div>
      <PagedList />
    </div>
  );
}
