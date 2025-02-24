var ctx = document.getElementById('myChart');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut', // 차트 종류: 도넛 차트
    data: {
        labels: ["Python", "DB", "JAVA", "JS", "C", "HTML & CSS"], // 데이터 라벨
        datasets: [
            {
                //          "Python", "DB", "JAVA", "JS", "C", "HTML & CSS"
                data: [15, 13, 10, 9, 7, 4], // 각 데이터에 해당하는 값
                backgroundColor: ["#FF9999", "#FFCC99", "#FFFF99", "#CCFF99", "#99CCFF", "#9999FF"], // 파스텔 톤으로 설정
            }
        ]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#000000', // 데이터 레이블의 글자 색상을 검은색으로 설정
                font: {
                    size: 16 // 데이터 레이블의 글자 크기를 16로 설정
                },
                anchor: 'end', // 데이터 레이블을 도넛 차트의 끝에 위치하도록 설정
                align: 'end', // 데이터 레이블을 도넛 차트의 끝에 위치하도록 설정
                offset: 20 // 데이터 레이블의 위치를 조정
            }
        },
        tooltips: {
            enabled: true // 툴팁 비활성화
            ,font: {size : 30}
        }
    }
});


//-----------------------------------------------------------------------
// 초기에는 chart-box 요소가 보이도록 설정
var chartContainer = document.getElementById("chartContainer");
var greetingText = document.getElementById("greetingText");
chartContainer.classList.add("show");
greetingText.classList.add("hide");

// 버튼 클릭 시 chart-box와 text-box 요소의 가시성을 토글하는 함수
function toggleElements() {
  chartContainer.classList.toggle("hide");
  greetingText.classList.toggle("hide");
}

// 버튼 요소를 가져와서 클릭 이벤트 핸들러를 추가
var toggleGraphBtn = document.getElementById("toggleGraphBtn");
toggleGraphBtn.addEventListener("click", toggleElements);
//-----------------------------------------------------------------------

function showModal(imageSrc, description) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modal-image");
  var modalDescription = document.getElementById("modal-description");

  modal.style.display = "flex";
  modalImg.src = imageSrc;
  modalDescription.innerHTML = description.replace(/\n/g, '<br>');

}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modal-image");
  
  if (event.target == modal ) {
      modal.style.display = "none";

      if(modalImg.src.endsWith("ai_elevator.png")){
      var nextModal = document.getElementById("myModal");
      nextModal.style.display = "none";
      }

  }
}


//-----------------------------------------------------------------------
// 페이드 업
document.addEventListener('scroll', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('active');
        }
    });
});

//-----------------------------------------------------------------------
// 리모컨

// 리모컨 버튼 클릭 시 해당 섹션으로 스크롤
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".remote-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
