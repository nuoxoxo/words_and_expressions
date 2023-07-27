import { useState, useEffect } from 'react'

const sourcePath =
  'https://raw.githubusercontent.com/crazywhalecc/idiom-database/master/data/idiom.json'

interface Idiom {
  word: string
}

var PrinterIDM = () => {
  /*
  const names: string[] = [
      'Wahou !',
      'L\’ultima notte di Amore',
      'The Pope\'s Exorcist',
      'Le principal',
      'About My Father',
      'Sick of Myself',
      'The Boogeyman',
      'L\'amour et les forêts',
      'Umami',
      'Jeanne du Barry',
      'No Hard Feelings',
      'Asteroid City'
  ]
  */

  // Define state variables to keep track of the current name and style

  const [names, setNames] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {

    try {

      // const resp = await fetch('../_chengyu_database_/data/idiom.json')
      const resp = await fetch(sourcePath)

      const data: Idiom[] = await resp.json()

      const extractedNames = data
        .map(
          (line: Idiom) => line.word
        )
        .filter(
          (name: string) => name.length === 4
        )

      setNames(extractedNames)
      setLoading(false)
    } catch (error) {

      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  // console.log(names.length, names[1]) // testing

  useEffect(() => {

    fetchData()
  }, [])

  const [textColor, setTextColor] = useState(getRandomTextColor())

  const [name, setSingleName] = useState<string>(() => {
    if (names.length === 0)
      return ''
    return names[Math.floor(Math.random() * names.length)]
  })

  useEffect(() => {
    if (names.length > 0) {

      const res = names[Math.floor(Math.random() * names.length)]
      setSingleName(res)
    }
  }, [names])

  // console.log(name) // testing

  // Function to generate a random text color
  function getRandomTextColor() {
    const offset = 42
    const offsetInverted = 255 - offset
    return {
      color:
        'rgb(' +
        Math.round(Math.random() * offsetInverted + offset) +
        ',' +
        Math.round(Math.random() * offsetInverted + offset) +
        ',' +
        Math.round(Math.random() * offsetInverted + offset) +
        ',' +
        '1)',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  }

  // Function to handle the click event
  var handleOnClick = () => {
    setTextColor(getRandomTextColor())
    if (names.length === 0)
      return
    setSingleName(names[Math.floor(Math.random() * names.length)])
  }

  // console.log(textColor['color']) // test

  return (
    <>
      { loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <span className='text' title='click me !!!'
            onClick={ handleOnClick }
            style={ textColor }
          >{ name }</span>
          <br/>
          <span>{ names.length > 0 && names.indexOf(name) }</span>
        </>
      )}
    </>
  )
}

export default PrinterIDM
