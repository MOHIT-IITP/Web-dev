const box = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
  box.innerHTML = `
<div>
  <table>
    <tr>
      <td>Key</td>
      <td>keycode</td>
      <td>Code</td>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  </div>
`;
});
