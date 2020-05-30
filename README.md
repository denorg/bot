# 🤖 Denorg Bot

[![Tweet CI](https://github.com/denorg/bot/workflows/Tweet/badge.svg)](https://github.com/denorg/bot/actions)
[![GitHub](https://img.shields.io/github/license/denorg/bot)](https://github.com/denorg/bot/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/bot)](https://github.com/denorg/bot/graphs/contributors)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/bot)

## ⭐ How it works

Every hour, GitHub Actions runs the [mod.ts](./mod.ts) file:

```bash
deno run --unstable --allow-read --allow-write --allow-net --allow-env mod.ts
```

The script fetches a list of Denorg's repositories, and all their releases. If there has been a new release within the past hour, it sends out a tweet on https://twitter.com/_denorg.

### Configuration

Required permissions:

1. `--allow-read`
1. `--allow-write`
1. `--allow-net`
1. `--allow-env`

<img alt="Screenshot of tweet" src="https://raw.githubusercontent.com/denorg/bot/master/tweet.png" width="600">

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
