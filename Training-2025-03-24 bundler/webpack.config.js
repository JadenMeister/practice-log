import path from 'path';

const config = {
  mode: 'development', // 개발용으로 번들링
  // 진입점: 웹팩이 번들링을 시작할 파일
  entry: './app.js',
  
  // 출력: 번들링된 파일을 어디에 저장할지 설정
  // 파일 이름과 어디에 저장할 것인지 설정하는 것에서 
  // 관용적으로

  // .bundle.js 파일을 dist 폴더에 저장
  // 여기서 .bundle 은 '번들링된 파일이라는 의미'
  // 여기서 /dist 는 '번들링된 파일을 저장할 폴더'로 distribute(배포) 라는 의미
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(process.cwd(), 'dist')
  }
};

export default config;

// * 추가 설명

// ? path.resolve()
// 현재 프로젝트의 루트 디렉토리를 반환
// ? process.cwd()
// 현재 프로젝트의 루트 디렉토리를 반환
// ? path.resolve(process.cwd(), 'dist')
// 현재 프로젝트의 루트 디렉토리와 dist 폴더를 결합하여 새로운 경로를 생성

