import './style.css'
import initChoiser from './choiser'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>¿Me quieres? 🤨</h1>
    <div class="card">
      <button type="button" id="yes">Si</button>
      <button type="button" id="no">No</button>
    </div>
    <p class="read-the-docs">
      Presiona el botón que quieras
    </p>
  </div>
`
document.addEventListener("DOMContentLoaded", function(){

  const yes = document.querySelector("button#yes");
  const no = document.querySelector("button#no");

  if(yes instanceof HTMLButtonElement && no instanceof HTMLButtonElement){
    initChoiser(yes, no);
  }

});