const carousel = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideWidth = carousel.clientWidth;

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex < carousel.childElementCount - 1) {
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

document.getElementById('searchInput').addEventListener('input', function() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td');
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break;
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }
});

if (localStorage.getItem("clickCount")) {
  // Retrieve the stored click count and update the display
  var count = parseInt(localStorage.getItem("clickCount"));
  document.getElementById("clickCount").textContent = "Total Clicks: " + count;
}

   
    document.getElementById('searchInput2').addEventListener('input', function() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('searchInput2');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable2');
    tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td');
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                    break;
                } else {
                    tr[i].style.display = 'none';
                }
            }
        }
    }
});
   
   // Initialize the ticker position and index
var position = document.getElementById("ticker").offsetWidth;
var index = 0;
var tickerItems = document.getElementsByClassName("ticker-item");
var tickerWidth = Array.from(tickerItems).reduce(function(totalWidth, item) {
  return totalWidth + item.offsetWidth;
}, 0);

// Function to update the ticker text and scroll it
function updateTicker() {
  if (position <= -tickerWidth) {
    // Move to the next item
    index = (index + 1) % tickerItems.length;
    position = document.getElementById("ticker").offsetWidth;
  } else {
    // Scroll the ticker by decrementing the position
    position--;
  }

  // Move the ticker to the left
  document.getElementById("ticker").style.transform = "translateX(" + position + "px)";

  requestAnimationFrame(updateTicker);
}

// Start the ticker
updateTicker();
 //!!!!!!!!!!!!!!!!!!!!!!!!!HERE ALANA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   //       Function to handle button click and increase the upvote count
function datas(){
  const counterBtns = document.querySelectorAll('.upvote-btn');
  counterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.innerHTML++;
      localStorage.setItem(btn.id, btn.innerHTML);
    });
    if(localStorage.getItem(btn.id)){
      btn.innerHTML = localStorage.getItem(btn.id);
    }
  });
}
AOS.init();

// Initialize variables
var lastClickTime = null;
var totalClicks = 0;

function handleClick() {
  var currentTime = new Date().getTime();

  // Check if enough time has passed since the last click (1 hour = 3,600,000 milliseconds)
  if (lastClickTime === null || currentTime - lastClickTime >= 3600000) {
      lastClickTime = currentTime;
      totalClicks++;

      document.getElementById('clickCount').textContent = totalClicks;
      document.getElementById('lastClickTime').textContent = new Date(lastClickTime).toLocaleString();
  } else {
      alert("You can upvote again in 1 hour.");
  }
}

    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });