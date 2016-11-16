# subsetfont
subset font server


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```
git clone https://github.com/pg-ito/subsetfont .
npm install
```

## Usage

### start subsetfont server
```
node index.js 
```

### request subsetfont
get subsetfont for 'はい、こんにちは東京' 
```
curl http://localhost:8080/?str=%E3%81%AF%E3%81%84%E3%80%81%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%E6%9D%B1%E4%BA%AC
```

## Contribute

PRs accepted.

## License

MIT