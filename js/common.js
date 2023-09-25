console.log('JS');
const searchEl = document.querySelector('.search');
// searchEl 요소들에서 input을 검색
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
  // SearchInput요소를 클릭하면 focus
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  // SearchInput요소가 포커싱될 때
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  // SearchInput요소가 포커싱될 때
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();      // 현재 해의 Full 숫자를 가져오고 이를 this-year 클래스에 삽입.