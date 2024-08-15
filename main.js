let TestData = [
    {
        id: 1,
        quiz: "Navoiy qachon tugilgan ?",
        answer1: "1090",
        answer2: "1021",
        answer3: "1441",
        answer4: "2002",
        right_answer: "1441",
        ball: 10,
    },
    {
        id: 2,
        quiz: "Sening isming kim ?",
        answer1: "Ali",
        answer2: "Rano",
        answer3: "Botir",
        answer4: "Gulsanamxon",
        right_answer: "Gulsanamxon",
        ball: 10,
    },
    {
        id: 3,
        quiz: "Qayerdansan",
        answer1: "Andijon",
        answer2: "Toshkent",
        answer3: "Namangan",
        answer4: "Faeg'ona",
        right_answer: "Andijon",
        ball: 10,
    },
    {
        id: 4,
        quiz: "She __ a girl",
        answer1: "are",
        answer2: "is",
        answer3: "can",
        answer4: "don't",
        right_answer: "is",
        ball: 10,
    },
];

let Quiz = document.getElementById("quiz");
let Option1 = document.getElementById("option1");
let Option2 = document.getElementById("option2");
let Option3 = document.getElementById("option3");
let Option4 = document.getElementById("option4");

let Savol_index = 0;
let Ball = 0;
let tanlanib_boldi = false;

function start_test() {
    Quiz.innerHTML = TestData[Savol_index].quiz;
    Option1.innerHTML = TestData[Savol_index].answer1;
    Option2.innerHTML = TestData[Savol_index].answer2;
    Option3.innerHTML = TestData[Savol_index].answer3;
    Option4.innerHTML = TestData[Savol_index].answer4;
}

function Tanla(kelayotgan_element) {
    if (tanlanib_boldi === true) {
        alert("tanlab bo'ldizku yoki ikkita javob tanlamoqchimidiz");
    } else {
        let qiymat = kelayotgan_element.textContent;
        reset();
        if (TestData[Savol_index].right_answer === qiymat) {
            kelayotgan_element.style.backgroundColor = "green";
            Ball = Ball + TestData[Savol_index].ball;
        } else {
            kelayotgan_element.style.backgroundColor = "red";
        }
    }
    tanlanib_boldi = true;
}

start_test();

function Next() {
    if (TestData.length === Savol_index + 1) {
        document.getElementById("wrapper").innerHTML = `
            <div class='center'>
                <h1>Your Score is ${Ball}</h1>
                <button onclick="Boshi()">Boshidan</button>
            </div>
        `;
    } else {
        Savol_index = Savol_index + 1;
        start_test();
        reset();
        tanlanib_boldi = false;
    }
}

function Boshi() {
    window.location.reload()
}

function reset() {
    Option1.style.backgroundColor = "rgb(157, 157, 255)";
    Option2.style.backgroundColor = "rgb(157, 157, 255)";
    Option3.style.backgroundColor = "rgb(157, 157, 255)";
    Option4.style.backgroundColor = "rgb(157, 157, 255)";
}
