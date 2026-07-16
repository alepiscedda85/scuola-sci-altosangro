export type Teacher = {
  name: string
  image: string
}

const imagePath = '/images/teachers/'

export const teachers: Teacher[] = [
  { name: 'Loris Pompei', image: `${imagePath}pompei-loris.jpg` },
  { name: 'Francesca Di Vito', image: `${imagePath}francesca-di-vito.jpg` },
  { name: 'Mirco Cordisco', image: `${imagePath}cordisco-mirco.jpg` },
  { name: 'Marco Peluso', image: `${imagePath}marco-peluso.jpg` },
  { name: 'Ivan Notarantonio', image: `${imagePath}ivan-notarantonio.jpg` },
  { name: 'Giuseppe Di Padova', image: `${imagePath}di-padova-giuseppe.jpg` },
  { name: 'Simona Di Padova', image: `${imagePath}di-padova-simona.jpg` },
  { name: 'Armando Di Tola', image: `${imagePath}di-tola-armando.jpg` },
  { name: 'Mario Alberto Di Tola', image: `${imagePath}di-tola-mario-alberto.jpg` },
  { name: 'Gianluca Museo', image: `${imagePath}museo-gianluca.jpg` },
  { name: 'Luca Nori', image: `${imagePath}nori-luca.jpg` },
  { name: 'Fabrizio Scarpitti', image: `${imagePath}scarpitti-fabrizio.jpg` },
  { name: 'Riccardo Maria Scarpitti', image: `${imagePath}scarpitti-riccardo-maria.jpg` },
  { name: 'Antonio Zappa', image: `${imagePath}zappa-antonio.jpg` },
  { name: 'Nicola Antonucci', image: `${imagePath}antonucci-nicola.jpg` },
  { name: 'Samuel Cordisco', image: `${imagePath}teacher-placeholder.jpg` },
  { name: 'Gianluca Mancinelli', image: `${imagePath}teacher-placeholder.jpg` },
]
