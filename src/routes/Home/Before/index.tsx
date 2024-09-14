import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Searchbox from "../../../components/Searchbox";
import "./styles.css";
import { useState } from "react";

export default function Before() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  
  return (
    <>
      <Header />
      <main>
        <div>
          <div className="before-container pad-left30 pad-top30">
            <div>
              <h3>Encontre um perfil Github</h3>
            </div>
            <div className="search-box">
              <Searchbox onChange={handleInputChange} />
            </div>
            <Link to={`/after/${username}`}>
              <div className="button-search">
                <button type="submit">Encontrar</button>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}