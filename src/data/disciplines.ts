import type { Discipline } from '../types/content'
import { publicAsset } from '../lib/assets'

export const disciplines: Discipline[] = [
  { name: 'Sci alpino', description: 'Dai primi passi al perfezionamento tecnico, con percorsi adatti al livello dell’allievo.', image: publicAsset('/images/lessons.jpg') },
  { name: 'Snowboard', description: 'Lezioni per imparare il controllo della tavola e progredire in sicurezza.', image: publicAsset('/images/snowboard.jpg') },
  { name: 'Telemark e sci di fondo', description: 'Discipline presenti nell’offerta della scuola, disponibili su richiesta e previa conferma.', image: publicAsset('/images/about.jpg') },
  { name: 'Freeride e sci adattato', description: 'Attività indicate nel sito storico: disponibilità e requisiti sono da verificare in segreteria.', image: publicAsset('/images/hero.jpg') },
]
