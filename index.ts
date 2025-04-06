import * as fs from 'fs'

const moveLines: string[] = []
const moves: { index: string; moves: { white: string; black: string } }[] = []
const jsonProperties: { [reis: string]: string }[] = []

process.stdout.write('Enter PGN (type "exit" to finish):\n')
function readPgnLine(line: string): { [reis: string]: string } | undefined {
  if (line.startsWith('[')) {
    const keyValue = line.replace('[', '').replace(']', '').split(' "')
    const key = keyValue[0].trim().toLowerCase()
    const value = keyValue[1].replace('"', '').trim()
    return {
      [key]: value
    }
  } else {
    moveLines.push(line.trim())
    return undefined
  }
}

for await (const line of console) {
  if (line === 'exit') {
    break
  }
  const lineResult = readPgnLine(line)
  if (lineResult) {
    jsonProperties.push(lineResult)
  }
}

let moveNotations = ''

moveLines.forEach(line => {
  moveNotations = moveNotations + ' ' + line
})

const splitted = moveNotations.split(' ')
splitted.forEach((str, i, array) => {
  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  if (numbers.find(num => num === Number(str[0]))) {
    moves.push({
      index: str[0],
      moves: {
        white: array[i + 1],
        black: array[i + 2]
      }
    })
  }
})

fs.mkdirSync('outputs', { recursive: true })
const outputCount = fs.readdirSync('outputs').length
fs.writeFileSync(`outputs/output${outputCount + 1}.json`, JSON.stringify({
  ...jsonProperties.reduce((acc, obj) => ({ ...acc, ...obj }), {}),
  moves: moves
}, null, 2))