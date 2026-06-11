(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
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
`,document.getElementById(`calcBtn`).addEventListener(`click`,()=>{let e=Number(document.getElementById(`focal`).value),t=Number(document.getElementById(`aperture`).value),n=(Number(document.getElementById(`distance`).value)*1e3/(e*t)).toFixed(2);document.getElementById(`result`).innerHTML=`簡易被写界深度指数: ${n}`});