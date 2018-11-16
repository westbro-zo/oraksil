import '@babel/polyfill' // 이 라인을 지우지 말아주세요!

const templates = {
}

const rootEl = document.querySelector('.root')

// 페이지 그리는 함수 작성 순서
// 1. 템플릿 복사
// 2. 요소 선택
// 3. 필요한 데이터 불러오기
// 4. 내용 채우기
// 5. 이벤트 리스너 등록하기
// 6. 템플릿을 문서에 삽입

// 할일 목록
const CalenderEl = document.querySelector('.calender')
CalenderEl.addEventListener('click', e => {
  console.log(CalenderEl)
  e.preventDefault();
  alert("test")
  goTodoList();
 })
 function goTodoList(){
  window.open("https://nifty-wiles-1e30e5.netlify.com/", '_blank');
 }
