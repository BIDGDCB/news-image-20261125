# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/BIDGDCB/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/BIDGDCB/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Sum up 25 November's world news in one image — entry for the make.fun
competition [news-image-20261125](https://make.fun/bounty/news-image-20261125)
($100 prize pool, entries close 2026-11-27T00:00:00Z).

`main.ts` (Node 22, standard library only) validates the repository's
`entry.png` — a 1024x1024 PNG front page — and copies it to
`/output/entry.png`.

## The six stories — Wednesday 25 November 2026

1. **Tankers hit by mines in Hormuz** — Iran says two tankers struck
   mines and caught fire in the Strait of Hormuz. (Reuters)
2. **Houthis claim new Saudi strikes** — the Houthis say they attacked
   Saudi Arabia's Ras Tanura oil refinery and Riyadh's financial
   district, a day after a drone strike wounded 11 at the PIF Tower.
   (Reuters)
3. **Pakistan's first astronaut in orbit** — Shenzhou-24 docks at
   China's Tiangong space station, carrying Muhammad Zeeshan Ali, the
   first foreign astronaut to visit it. (Reuters / Xinhua)
4. **Cartagena hostages freed** — Colombian special forces storm an
   Éxito supermarket early on Wednesday and free all remaining
   hostages; one gunman is killed. (Reuters / AFP)
5. **Asian stocks slide on AI doubts** — Japan's Nikkei falls 2.8% and
   the S&P 500 drops 0.5% as doubts about the AI boom return.
   (OneTurn)
6. **Solomons signs treaty with Australia** — Solomon Islands names
   Australia its primary security partner and pledges no foreign
   military bases on its soil. (AP / Australian PM's office)

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
