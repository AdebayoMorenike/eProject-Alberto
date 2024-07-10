const tabs = document.querySelectorAll('[data-tab-target]');
const activeClass = 'bg-brown-200';

// Select the first tab as default
tabs[0].classList.add(activeClass);
document.querySelector('#tab1').classList.remove('hidden');

// Add event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetContent = document.querySelector(tab.dataset.tabTarget);
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    targetContent.classList.remove('hidden');
    tabs.forEach(t => t.classList.remove(activeClass));
    tab.classList.add(activeClass);
  });
});
function getVisitorCount() {
  // Check if 'visitorCount' exists in sessionStorage
  if (sessionStorage.getItem('visitorCount')) {
      // Count has been initialized for this session
      return parseInt(sessionStorage.getItem('visitorCount'));
  } else {
      // Initialize count to 1 for this session
      sessionStorage.setItem('visitorCount', 1);
      return 1;
  }
}

// Update the visitor counter on the page
function updateVisitorCounter() {
  let counterElement = document.getElementById('visitor-counter');
  let count = getVisitorCount();
  counterElement.textContent = "You are visitor number: " + count;
}

// Call updateVisitorCounter function when the page loads
window.onload = function() {
  updateVisitorCounter();
};


let btns = document.querySelectorAll(".btns")
let Close = document.getElementById("Close")
let popUp = document.querySelectorAll(".popUp")

Close.onclick = function(){
    popUp.classList.add("hidden")
}



