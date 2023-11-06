import { component$, useSignal } from '@builder.io/qwik'

import qwikLogo from './assets/qwik.svg'
import viteLogo from '/vite.svg'
import './app.css'

export const App = component$(() => {
  const count = useSignal(0)
//A change to trigger labeler = ON 2
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://qwik.builder.io" target="_blank">
          <img src={qwikLogo} class="logo qwik" alt="Qwik logo" />
        </a>
      </div>
      <h1>Vite + Qwik</h1>
      <div class="card">
        <button onClick$={() => count.value++}>Count's count is {count.value}</button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
        <img src='https://upload.wikimedia.org/wikipedia/en/2/29/Count_von_Count_kneeling.png'></img>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Qwik logos to learn more
      </p>
    </>
  )
})
