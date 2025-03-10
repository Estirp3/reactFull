import { root } from '@lynx-js/react'

import { App } from './App.jsx'
import { primerComponente } from './component/primerComponente.js'

root.render(<App />)
root.render(<primerComponente />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
