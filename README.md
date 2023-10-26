# 타입스크립트, 리엑트, 장고를 이용한 영화사이트

## 기술스택
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1698289763662?alt=media&token=fd723b54-e66e-4969-9e8e-d2a0731e5188)](https://github.com/msdio/stackticon)

## 컴포넌트 구조도
![컴포넌트 구조도](./front_end/../컴포넌트_구조도.drawio.png)

## 프론트엔드 개발
타입스크립트, 리엑트, Axios를 사용하여 개발을 진행했습니다.

타입스크립트를 처음 사용하다 보니, 부모 컴포넌트에서 자식 컴포넌트로 data를 보내는 과정에서 타입처리가 힘들었습니다.
interface.ts에 데이터 타입을 정리하여 해결하였습니다.

Axios로 TMDB의 open API와 통신을 하여 영화 데이터를 가져왔습니다. 영화 데이터의 타입을 interface.ts에 정의하여 사용했습니다.