# Tutorial

## 프로젝트 설정 및 웹팩 구성하기

이 튜토리얼에서는 Node.js 프로젝트를 설정하고 웹팩을 사용하여 모듈을 번들링하는 방법을 단계별로 학습합니다.

### 1. 프로젝트 초기화

1. 새로운 디렉토리를 생성하고 프로젝트를 초기화합니다:
```bash
mkdir training-2025-03-24
cd training-2025-03-24
npm init -y
```

2. 생성된 `package.json` 파일 확인:
```json
{
  "name": "training-2025-03-24",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

3. 기본 `app.js` 파일 생성:
```javascript
// 모듈 가져오기
// 중괄호를 사용하는 방식은 모듈에서 여러 개의 값을 가져오는 경우에 사용
import { a, aPlus } from "./src/modules/a.js";
import { b } from "./src/modules/b.js";

// 기본 내보내기는 중괄호를 사용하지 않음
import c from "./src/modules/c.js";

console.log(a());
console.log(aPlus());
console.log(b());
console.log(c());
```

### 2. 웹팩 설정

1. 필요한 웹팩 관련 패키지 설치:
```bash
npm install webpack webpack-cli --save-dev
```

2. `webpack.config.js` 파일 생성 및 설정:
```javascript
import path from 'path';

const config = {
  // 진입점: 웹팩이 번들링을 시작할 파일
  entry: './app.js',
  
  // 출력: 번들링된 파일을 어디에 저장할지 설정
  output: {
    filename: 'app.bundle.js',  // 번들링된 파일 이름
    path: path.resolve(process.cwd(), 'dist')  // 출력 디렉토리
  }
};

export default config;
```

3. 웹팩 빌드 실행:
```bash
npx webpack
```

### 모듈 구조 설명

프로젝트는 다음과 같은 모듈 구조를 가집니다:

```
training-2025-03-24/
├── src/
│   └── modules/
│       ├── a.js
│       ├── b.js
│       └── c.js
├── app.js
├── package.json
└── webpack.config.js
```

### 결과물

- `dist/app.bundle.js` 파일이 생성됩니다.
- 이 파일은 웹팩이 모든 모듈의 의존성을 분석하고 하나의 파일로 번들링한 결과물입니다.
- 모든 모듈이 하나의 파일로 번들링되어 브라우저에서 실행할 수 있는 형태로 변환됩니다.

## 학습 포인트

1. **NPM 프로젝트 초기화**
   - `package.json` 파일의 역할과 구조 이해
   - NPM 스크립트 작성 방법

2. **모듈 시스템**
   - ES6 모듈 시스템 사용 방법
   - 이름 있는 내보내기와 기본 내보내기의 차이
   - 모듈 가져오기 문법

3. **웹팩 기초**
   - 진입점(entry) 설정
   - 출력(output) 설정
   - 웹팩 설정 파일 작성 방법

## 다음 단계

- 추가적인 웹팩 로더 설정 (예: babel-loader, css-loader)
- 개발 서버 구성 (webpack-dev-server)
- 프로덕션 빌드 최적화
- 다중 진입점 설정
- 코드 분할(Code Splitting) 적용


