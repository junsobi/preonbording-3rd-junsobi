배포 주소 :

# 🚀 프리온보딩 프론트엔드 인턴십 [12th] - Week 3

> - 불필요한 API 호출을 줄이고 로컬 캐싱을 적용하여 최적의 검색어 추천 기능을 구현하는 과제입니다.

</br>

## 🗓️ 진행 기간

### 2023.09.05 ~ 2023.09.08

</br>

## 🔧 프로젝트 실행방법

```shell
git clone https://github.com/junsobi/preonbording-3rd-junsobi.git
cd search-app
npm install
npm start
```

</br>

## 🎥 데모 영상

**[배포 링크](https://preonbording-3rd-junsobi.vercel.app/)**
</br>

## 📂 프로젝트 구조

```bash
📦src
 ┣ 📂assets
 ┃ ┗ 📜background-removebg.png
 ┣ 📂components
 ┃ ┣ 📂Buttons
 ┃ ┃ ┣ 📜ListMagnifier.tsx
 ┃ ┃ ┗ 📜RemoveButton.tsx
 ┃ ┣ 📂SearchBar
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┣ 📜useClickOutside.ts
 ┃ ┃ ┃ ┣ 📜useControlHelper.ts
 ┃ ┃ ┃ ┣ 📜useEscapeKey.ts
 ┃ ┃ ┃ ┣ 📜useSearchHandler.ts
 ┃ ┃ ┃ ┗ 📜useSubmitHandler.ts
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┣ 📂SearchModal
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜EmptySearchMessage.tsx
 ┃ ┃ ┃ ┣ 📜HighlightedText.tsx
 ┃ ┃ ┃ ┣ 📜NoResultsMessage.tsx
 ┃ ┃ ┃ ┣ 📜RecentSearches.tsx
 ┃ ┃ ┃ ┣ 📜ResultsList.tsx
 ┃ ┃ ┃ ┣ 📜SearchHistoryList.tsx
 ┃ ┃ ┃ ┗ 📜SearchResults.tsx
 ┃ ┃ ┗ 📜SearchModal.tsx
 ┃ ┗ 📜HeadLine.tsx
 ┣ 📂contexts
 ┃ ┗ 📜SearchContext.tsx
 ┣ 📂layouts
 ┃ ┣ 📜SearchBarLayout.tsx
 ┃ ┣ 📜SearchModalLayout.tsx
 ┃ ┗ 📜SearchPageLayout.tsx
 ┣ 📂pages
 ┃ ┗ 📜SearchPage.tsx
 ┣ 📂services
 ┃ ┗ 📂api
 ┃ ┃ ┗ 📜sickApi.ts
 ┣ 📂utils
 ┣ 📜.DS_Store
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```

</br>

## ✨ 주요 기능 목표 및 구현 설명

### Assignment 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

#### 구현

- 과제 api를 배포해서 프론트단에서 편하게 사용하도록함

- api 호출 : getSickList 함수에서 작동하며 axios를 통해 비동기적으로 api요청
- highlight : 사용자가 입력한 검색어와 일치하는 부분을 강조하기 위한로직

  - 질환명(sickNm)을 split 함수와 정규식을 이용해 배열로 분리,
  - 분리한 각부분을 순회하며 원래의 검색어와 비교
  - 일치하는 경우 굵게 표시

- 인터렉션 처리 : 각항목 클릭시 Onclickitem 함수가 실행 - 외부경로로 이동

</br>

---

### Assignment 2. API 호출별로 로컬 캐싱 구현

#### 구현

cache객체 : 검색어(query)를 키로 하고 응답결과를 값으로가짐
cacheExpiration 객체 : 검색어(query)를 키로하고 만료시간을 값으로 가짐

getSickList 함수가 호출되면 입력된 검색어를 기준으로 캐시에 해당 검색어의 결과가 있는지 확인

[검색결과가 있는 경우]
cache[query]가 존재하고 해당캐시의 만료시간이 지나지 않았다면 이전에 저장된 결과값을 반환
[검색결과가 없는 경우]
그렇지 않은경우 api요청을 수행한후 응답데이터를 cache[query]에 저장
현재시간에서 5분을 더한값을 계산하여 cacheExpiration[query]에 저장
api응답 데이터를 반환(response.data)

</br>

---

### Assignment 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

#### 구현

- 검색처리를 담당하는 커스텀훅 (useSearchHandler)에 디바운스적용
- useSearchHandler는 searchContext에서 필요한 상태와 함수들을 가져오는 훅

- debounceTimer라는 변수를 useRef로 생성하여 현재 디바운스 타이머값을 저장
- DEBOUNCE_TIME 상수를 정의하여 디바운스 시간(입력후 대기 시간) 설정

useEffect를 사용하여 query값이 변경될때마다 실행되는 로직

- 이전에 설정된 디바운스 타이머가 있다면 clearTimeout으로 초기화
- setTimeout 함수를 사용하여 DEBOUNCE_TIME만큼 대기후
  query값이 비어있지않다면 getSickList 함수를 호출하여 Api요청 수행
- 수행후 컨텍스트의 setResults함수를 사용하여 업데이트
  </br>

---

### Assignment 4. API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

#### 구현

실제 요청시 (calling api) 콘솔 노출
캐싱데이터를 꺼내와서 데이터 노출시 (캐싱으로 반환된 결과값)이라는 콘솔 찍히도록 구현

</br>

---

### Assignment 5. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- context에 controlHelper라는 state 생성(초기값 : -1)
- Input창의 포커스 여부를 저장하는 isFocussed state 생성(모달 노출시 사용)

- isFocussed가 true일때 버튼 동작을 감지하는 커스텀훅(useControlHelper)생성

- arrowdown 시 controlHelper+1
- arrowup 시 controlHelper-1
- enter 시 현재 controlHelper의 값과 같은 (검색결과 or 최근검색어) index 의 값을 참고해
  외부 사이트 https://clinicaltrialskorea.com/studies?conditions={query} 로 연결
