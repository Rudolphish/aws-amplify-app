import "./App.css";
import BlogPage from "./Components/Pages/BlogPage";
import Homepage from "./Components/Pages/Homepage";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const initialURL =
    "https://partner.steam-api.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=ED4872AB9B4A13F3F7A80D3F97ACB5BD&steamid=76561198160300187&count=0"; //endpoint
  const [loading, setLoading] = useState(true); //最初にloading出したいのでtrue
  const [steamData, setSteamData] = useState([{}]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      let res = await getSteamData(initialURL);
      // 詳細データを取得
      loadSteam(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadSteam = async (data) => {
    let _steamData = await Promise.all(
      // Promise.all(配列)、全部とってくるまで待つ
      data.map((steam) => {
        let pokemonRecord = getSteamData(steam.url);
        return pokemonRecord;
      })
    );
    setSteamData(_steamData);
    console.log(_steamData); //もしコンソールの結果がPromise {<pending>}というものなら、async-awaitつけ忘れ
  };
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const getSteamData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, { mode: "cors" })
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};
export default App;
