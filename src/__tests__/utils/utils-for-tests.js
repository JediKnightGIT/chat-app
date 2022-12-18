import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

import store from '../../redux/redux-store'

// REDO

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
