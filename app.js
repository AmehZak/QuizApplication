const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const qstnContainerElement = document.getElementById('question-container')
const questionElmt = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let randomQstns, currentQstnIndex
startButton.addEventListener('click' , startGame)
nextButton.addEventListener('click' , () =>{
    currentQstnIndex++
    setNextQstn()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    randomQstns = questions.sort(()=> Math.random() - .5)
    currentQstnIndex = 0
    qstnContainerElement.classList.remove('hide')
    setNextQstn()
}

function setNextQstn(){
    resetCardQuestions()
    showQestion(randomQstns[currentQstnIndex])
}

function resetCardQuestions(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function showQestion(question){
    questionElmt.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) button.dataset.correct = answer.correct
        button.addEventListener('click' , slctAnswer)
        answerButtonsElement.appendChild(button)
    });
}


function slctAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })
    if(randomQstns.length > currentQstnIndex +1)
        nextButton.classList.remove('hide')
    else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    }
function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct)
        element.classList.add('correct')
    else
        element.classList.add('wrong')
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question : 'What is 2 + 2',
        answers : [
            {text : '8' , correct : false},
            {text : '4' , correct : true}
        ]
    },
    {
        question : 'What is 3 + 2',
        answers : [
            {text : '10' , correct : false},
            {text : '5' , correct : true}
        ]
    },
    {
        question : 'What is 2 * 2',
        answers : [
            {text : '4' , correct : true},
            {text : '8' , correct : false}
        ]
    },
    {
        question : 'What is 2 - 2',
        answers : [
            {text : '0' , correct : true},
            {text : '20' , correct : false}
        ]
    },
    {
        question : 'is 30 > 45',
        answers : [
            {text : 'Nooo' , correct : true},
            {text : 'Yess' , correct : false}
        ]
    },
]