import { useState, useEffect } from "react"
import { getRandomColorCSS } from "./GetRandomStuff"

const sourcePath =
  "https://raw.githubusercontent.com/nuoxoxo/in/main/hsk1.json"

interface Word {
  words: string
  simplified: string
  traditional: string
}

var PrinterHSK = () => {
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const resp = await fetch(sourcePath)
      const data = await resp.json()
      // setWords(data['words'])
      setWords(data.words)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [textColor, setTextColor] = useState(getRandomColorCSS())

  const [name, setSingleName] = useState<string>(() => {
    if (words.length === 0) return ""
    let word = words[Math.floor(Math.random() * words.length)]
    return word.traditional + ' - ' + word.simplified
  })

  useEffect(() => {
    if (words.length > 0) {
      let word = words[Math.floor(Math.random() * words.length)]
      const res = word.traditional + ' - ' + word.simplified
      setSingleName(res)
    }
  }, [words])

  var handleOnClick = () => {
    setTextColor(getRandomColorCSS())
    if (words.length === 0) return
    let word = words[Math.floor(Math.random() * words.length)]
    setSingleName(word.traditional + ' - ' + word.simplified)
  }

  return (
    <>
      <div className="lower" onClick={handleOnClick}>
        <div className="div-text div-text-hsk">
          {loading ? (
            <span>(加載中)</span>
          ) : (
            <>
              <span className="span-text" title="click me" style={textColor}>{name}</span>
              <br />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default PrinterHSK
