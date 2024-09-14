import "./styles.css";

export default function Searchbox({ onChange }) {
  return (
    <form className="searchbox">
      <div>
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          onChange={onChange}
        />
      </div>
    </form>
  );
}
