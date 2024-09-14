import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Before from "../Before";
import "./styles.css";

export default function After() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          setUser(response.data);
          setError(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar o usuário", error);
          setError(true);
          setUser(null);
        });
    }
  }, [username]);

  return (
    <>
      <Before />
      <main>
        <section>
          <div className="after-container pad-top30">
            {error ? (
              <div className="error-message">
                <h4>Erro ao buscar usuário</h4>
              </div>
            ) : user ? (
              <div className="max-content">
                <img
                  className="pad-left30 pad-right30"
                  src={user.avatar_url}
                  alt={`Avatar de ${user.name}`}
                />
                <div className="result-container">
                  <h3>Informações</h3>
                  <div className="result-info">
                    <p>
                      <strong>Perfil: </strong> {user.url}
                    </p>
                  </div>
                  <div className="result-info">
                    <p>
                      <strong>Nome: </strong> {user.name}
                    </p>
                  </div>
                  <div className="result-info">
                    <p>
                      <strong>Seguidores: </strong> {user.followers}
                    </p>
                  </div>
                  <div className="result-info">
                    <p>
                      <strong>Localidade: </strong> {user.location}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p>Carregando informações...</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
