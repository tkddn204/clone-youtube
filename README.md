<p align="center">
  <a href="https://tkddn204.github.io/clone-youtube" rel="noopener">
  <img width=200px height=200px src="./assets/logos/logo-icon.svg" alt="Project logo"></a>
</p>

<h3 align="center">유투부</h3>

<a href="https://tkddn204.github.io/clone-youtube" rel="noopener"><h4 align="center">홈페이지</h4></a>

<div align="center">

  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
    <a href="https://youtube.com" rel="nofollow">Youtube 사이트</a> 클론 프로젝트
    <br>
</p>

## 📝 Table of Contents
- [About](#about)
- [Development](#development)
- [Running the tests](#tests)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
공부 목적으로 개발 중입니다.
어떤 내용을 공부했는지는 [링크](https://www.notion.so/rightpair/135cdcd8144248a8bfa27607e16521ba)를 참조해주세요.

## 🔨 Development <a name = "development"></a>

youtube data api(v3)의 **api key**를 `.env`의 `REACT_APP_YOUTUBE_API_KEY`에 입력해주세요.

  ```console
  cp .env_example .env
  # .env
  # REACT_APP_YOUTUBE_API_KEY=API키입력
  ```

의존성 설치 후 개발 서버나 스토리북을 켜서 개발해주면 됩니다.

  ```console
  # dependencies 설치
  yarn

  # 개발 서버(dev server)
  yarn start

  # 스토리북(storybook)
  yarn storybook
  ```

## 🔧 Running the tests <a name = "tests"></a>

(개발중)

```console
yarn test
```

## ⛏️ Built Using <a name = "built_using"></a>
- [create-react-app](https://create-react-app.dev/)
- [typescript](https://www.typescriptlang.org/)
- [redux-toolkit](https://redux-toolkit.js.org/)
- [storybook](https://storybook.js.org/)
- ...etc([package.json](https://github.com/tkddn204/clone-youtube/blob/master/package.json#L5))

## ✍️ Authors <a name = "authors"></a>
- [@tkddn204](https://github.com/tkddn204) - Idea & Initial work

## 🧾 License

MIT
