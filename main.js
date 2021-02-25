const questionsCollection = [{
        ques: "Which type of JavaScript language is ?",
        a: 'Object-Oriented',
        b: 'Object-Based',
        c: 'Assembly-language',
        d: 'High-level',
        answer: 'b',
    },
    {
        ques: "In JavaScript, what is a block of statement?",
        a: 'Conditional block',
        b: 'block that combines a number of statements into a single compound statement',
        c: 'both conditional block and a single statement',
        d: 'block that contains a single statement',
        answer: 'b',
    },
    {
        ques: "The \"function\" and \" var\" are known as:",
        a: 'Keywords',
        b: 'Data types',
        c: 'Declaration statements',
        d: 'Prototypes',
        answer: 'c',
    },
    {
        ques: "Which of the following variables takes precedence over the others if the names are the same?",
        a: 'Global variable',
        b: 'The local element',
        c: 'The two of the above',
        d: 'None of the above',
        answer: 'b',
    },

];



const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', next);

const ques = document.querySelector('#ques'); //question holder
//choices
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');

//shows ques

let count = 0;
showQues();

function showQues() {

    const questionList = questionsCollection[count];
    //console.log(questionsCollection[countQues]);
    ques.textContent = questionList.ques;
    a.textContent = questionList.a;
    b.textContent = questionList.b;
    c.textContent = questionList.c;
    d.textContent = questionList.d;
    //count++;


}

//showQues();
let score = 0;

//loads next ques
function next() {
    //count++;
    selected();

    if (ans === questionsCollection[count].answer) {
        score++;
    }
    count++;
    if (count < questionsCollection.length) {
        showQues();
    } else {
        let res = document.querySelector('.container');
        res.textContent = `Your final score is : ${score}`;
        res.style.padding = '10px';

    }



}
let ans = undefined;

function selected() {

    const elements = document.querySelectorAll('.answer');
    elements.forEach((el) => {

        if (el.checked) {
            ans = el.value; //returns the value of radio button
            console.log(ans);
        }
        return ans;
    });
}