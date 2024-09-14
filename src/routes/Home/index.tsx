import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="ml40 pad-top30">
          <div className="container">
            <h1>Desafio Github API</h1>
            <p>DevSuperior - Escola de programação</p>
          </div>
          <Link to="/before">
            <Button text="Começar" />
          </Link>
        </div>
      </main>
      <Outlet />
    </>
  );
}
