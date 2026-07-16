import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

describe('routing', () => {
  it.each([
    ['/', 'La montagna.'], ['/lezioni', 'Lezioni di sci e snowboard a Roccaraso'], ['/noleggio', 'Noleggio sci e snowboard ad Aremogna'], ['/chi-siamo', 'La Scuola Sci Alto Sangro'], ['/contatti', 'Contatta la Scuola Sci Alto Sangro'],
  ])('renders %s with one h1', (path, heading) => {
    render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1, name: new RegExp(heading) })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('renders a useful 404', () => {
    render(<MemoryRouter initialEntries={['/url-inesistente']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Questa pista non porta qui')
  })
})
