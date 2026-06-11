import './style.css'

document.querySelector('#app').innerHTML = `
  <div style="padding:20px; font-family:sans-serif;">
    <h1>📷 撮影シミュレーター</h1>

    <h2>カメラ設定</h2>

    <label>センサーサイズ</label><br>
    <select id="sensor">
      <option>フルサイズ</option>
      <option>APS-C</option>
      <option>マイクロフォーサーズ</option>
    </select>

    <br><br>

    <label>焦点距離(mm)</label><br>
    <input type="number" id="focal" value="50">

    <br><br>

    <label>F値</label><br>
    <input type="number" id="aperture" value="1.8" step="0.1">

    <br><br>

    <label>撮影距離(m)</label><br>
    <input type="number" id="distance" value="2" step="0.1">

    <br><br>

    <button id="calcBtn">計算</button>

    <h2>結果</h2>

    <div id="result">
      計算待機中
    </div>
  </div>
`;

document.getElementById("calcBtn").addEventListener("click", () => {
  const focal = Number(document.getElementById("focal").value);
  const aperture = Number(document.getElementById("aperture").value);
  const distance = Number(document.getElementById("distance").value);

  const score = ((distance * 1000) / (focal * aperture)).toFixed(2);

  document.getElementById("result").innerHTML =
    `簡易被写界深度指数: ${score}`;
});