# Simple Pgn Analyzer

No dependency were used during development. Uses [Bun](https://bun.sh/) as runtime.

## Usage

Run using ``bun .`` or ``bun run index.ts``, paste the pgn directly as a multi-line string, type exit in a new line when done. Outputs a json file in a new directory called outputs.

## Example Output

```json
{
  "event": "Live Chess",
  "site": "Chess.com",
  "date": "2025.04.05",
  "round": "?",
  "white": "nu1ldev",
  "black": "Luoth2",
  "result": "1-0",
  "timecontrol": "600",
  "whiteelo": "1821",
  "blackelo": "1518",
  "termination": "nu1ldev won by resignation",
  "eco": "B90",
  "endtime": "22:42:34 GMT+0000",
  "link": "https://www.chess.com/game/live/138206442355",
  "moves": [
    {
      "index": "1",
      "moves": {
        "white": "e4",
        "black": "c5"
      }
    },
    {
      "index": "2",
      "moves": {
        "white": "Nf3",
        "black": "d6"
      }
    },
    {
      "index": "3",
      "moves": {
        "white": "d4",
        "black": "cxd4"
      }
    },
    ...
  ]
}
```