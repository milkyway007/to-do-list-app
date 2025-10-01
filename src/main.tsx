import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bulma/css/bulma.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMagnifyingGlass, faCalendarDay, faCalendarDays, faCircleCheck, faTags} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)
library.add(faMagnifyingGlass)
library.add(faCalendarDay)
library.add(faCalendarDays)
library.add(faCircleCheck)
library.add(faTags)

console.log('Here!')
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
