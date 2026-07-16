import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Seo } from '../components/seo/Seo'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { LegalPage } from '../pages/LegalPage'
import { LessonsPage } from '../pages/LessonsPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { RentalPage } from '../pages/RentalPage'

export function App() { return <><Seo /><Routes><Route element={<Layout />}><Route index element={<HomePage />} /><Route path="lezioni" element={<LessonsPage />} /><Route path="noleggio" element={<RentalPage />} /><Route path="chi-siamo" element={<AboutPage />} /><Route path="contatti" element={<ContactPage />} /><Route path="privacy-policy" element={<LegalPage type="privacy" />} /><Route path="cookie-policy" element={<LegalPage type="cookie" />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes></> }
