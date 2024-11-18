import { useAppContext } from "AppContext";
import { useState } from "react";
import "./CadastroPaciente.css";

export function CadastroPaciente() {
  const { pexelsApiKey } = useAppContext();
  const { pacientes, setPacientes } = useAppContext();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const fotoPerfil = await getPhoto();
  
      // Atualiza a lista de pacientes
      setPacientes([...pacientes, { nome, email, senha, cep, endereco, numero, complemento, cidade, estado, foto: fotoPerfil }]);
  
      // Limpa os campos do formulário
      setNome('');
      setEmail('');
      setSenha('');
      setCep('');
      setEndereco('');
      setNumero('');
      setComplemento('');
      setCidade('');
      setEstado('');
    } catch (error) {
      console.error("Erro ao salvar médico:", error);
    }
  };

  const getPhoto = async () => {
    const queries = ["patient", "hospital patient"];
    const randomQuery = queries[Math.floor(Math.random() * queries.length)];

    // Página aleatória para obter imagens variadas
    const page = Math.floor(Math.random() * 100) + 1; // Aleatorizando a página de resultados

    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${randomQuery}&per_page=1&page=${page}`, {
        headers: {
          Authorization: pexelsApiKey,
        },
      });
      const data = await response.json();

      // Verifica se há fotos e define a URL
      if (data.photos && data.photos.length > 0) {
        return data.photos[0].src.medium;
      }
    } catch (error) {
      console.error("Erro ao buscar imagem:", error);
    }
    return "";
  };

  const handleCepChange = async (e) => {
    const cepValue = e.target.value.replace(/\D/g, '');
    setCep(cepValue);

    if (cepValue.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          setEndereco(data.logradouro);
          setCidade(data.localidade);
          setEstado(data.uf);
        } else {
          alert("CEP não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
        alert("Erro ao buscar o endereço. Tente novamente.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Cadastrar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do paciente"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail do paciente"
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha do paciente"
          required
        />

        <h3>Endereço</h3>
        <input
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="CEP"
          required
        />
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          placeholder="Endereço"
          required
        />
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Número"
          required
        />
        <input
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
          placeholder="Complemento"
        />
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          placeholder="Estado"
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
