import { useState, useEffect } from "react"
import { getRandomColorCSS } from "./GetRandomStuff"

const sourcePath =
  "https://raw.githubusercontent.com/nuoxoxo/in/main/idiom.json"

interface Idiom {
  word: string
}

var PrinterIDM = () => {
  const [names, setNames] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [textColor, setTextColor] = useState(getRandomColorCSS())

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

  var handleOnClick = () => {
    setTextColor(getRandomColorCSS())
    if (names.length === 0) return
    setSingleName(names[Math.floor(Math.random() * names.length)])
  }

  return (
    <>
      <div className="lower" onClick={handleOnClick}>
        <div className="div-text div-text-idm">
          {loading ? (
            <span>(加載中)</span>
          ) : (
            <>
              <span className="span-text" title="click me" style={textColor} >
                { name }
              </span>
              <br />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PrinterIDM
