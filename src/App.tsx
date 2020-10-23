import * as React from "react";
import { PagedList } from "./PagedList";
import "normalize.css";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>Rick & Morty Characters</h1>
      <PagedList />
    </div>
  );
}
