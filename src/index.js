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

// 할일 목록-연제
const CalenderEl = document.querySelector('.calender')
CalenderEl.addEventListener('click', e => {
  e.preventDefault();
  goTodoList();
})
function goTodoList(){
  window.open("https://nifty-wiles-1e30e5.netlify.com/", '_blank');
}
// 팀원 소개 -연제
const infoEl = document.querySelector('.emergency-box')
const teamInfo = document.querySelector('.team-info')
infoEl.addEventListener('click', e=>{
  e.preventDefault();
  // 1. 템플릿 복사
  // 2. 요소 선택
  // const teamInfo = document.querySelector('.team-info')
  // 3. 필요한 데이터 불러오기
  // 4. 내용 채우기
  // teamInfo.classList.add('active')

  teamInfo.style.display="block";
  // 5. 이벤트 리스너 등록하기
  // 6. 템플릿을 문서에 삽입
})

const deleteEl = document.querySelector('.delete-btn')


deleteEl.addEventListener('click', e=>{
  e.preventDefault();
  // alert('삭제')
  // 1. 템플릿 복사
  // 2. 요소 선택
  // 3. 필요한 데이터 불러오기
  // 4. 내용 채우기
  console.log('눌림')
  // teamInfo.classList.remove('active')
  teamInfo.style.display="none";
  // 5. 이벤트 리스너 등록하기
  // 6. 템플릿을 문서에 삽입
})
