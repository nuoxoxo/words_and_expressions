import { useState, useEffect } from "react"

const sourcePath =
  "https://raw.githubusercontent.com/crazywhalecc/idiom-database/master/data/idiom.json"

interface Idiom {
  word: string
}

var PrinterIDM = () => {
  const [names, setNames] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [textColor, setTextColor] = useState(getRandomTextColor())

  const fetchData = async () => {
    try {
      const resp = await fetch(sourcePath)

      const data: Idiom[] = await resp.json()

      const extractedNames = data
        .map((line: Idiom) => line.word)
        .filter((name: string) => name.length === 4)

      setNames(extractedNames)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error)
      setLoading(false)
    }
  }

  // console.log(names.length, names[1]) // testing

  useEffect(() => {
    fetchData()
  }, [])

  const [name, setSingleName] = useState<string>(() => {
    if (names.length === 0) return ""
    return names[Math.floor(Math.random() * names.length)]
  })

  useEffect(() => {
    if (names.length > 0) {
      const res = names[Math.floor(Math.random() * names.length)]
      setSingleName(res)
    }
  }, [names])

  // console.log(name) // testing

  function getRandomTextColor() {
    const offset = 42
    const offsetInverted = 255 - offset
    return {
      color:
        "rgb(" +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        "1)",
      fontWeight: "bold",
    }
  }

  var handleOnClick = () => {
    setTextColor(getRandomTextColor())
    if (names.length === 0) return
    setSingleName(names[Math.floor(Math.random() * names.length)])
  }

  // console.log(textColor['color']) // test

  return (
    <>
      <div className="main-body-lower" onClick={handleOnClick}>
        <div className="div-text">
          {loading ? (
            <span>Loading...</span>
          ) : (
            <>
              <span
                className="span-text"
                title="click me !!!"
                // onClick={handleOnClick}
                style={textColor}
              >
                {name}
              </span>
              <br />
              <span>{names.length > 0 && names.indexOf(name)}</span>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PrinterIDM
