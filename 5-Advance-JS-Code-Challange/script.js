/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
DONE

2. Create a couple of questions using the constructor DONE

3. Store them all inside an array DONE

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var Question = function(questionItem, answers, numberQuestion,  correctAnswer) {
    this.questionItem = questionItem;
    this.answers = answers;
    this.numberQuestion = numberQuestion;
    this.correctAnswer = correctAnswer;
}

/*
Question.prototype.showQuestion = function() {
    var score = Math.random() * 10;
    console.log(score);
}
*/

console.log(Math.random()*3);

var question1 = new Question('First president of Indonesia?', ['Soekarno', 'Soeharto', 'Gusdur'], 0, 0);

var question2 = new Question('Capital city of Indonesia?', ['Surabaya', 'Yogyakarta', 'Jakarta'], 1, 2);

var question3 = new Question('Delocoious food from Indonesia?', ['Pizza', 'Rendang', 'Burger'], 2, 1);

console.log(question1.showQuestion);

// Answer No. 4

var listQuestion = [question1, question2, question3];

// console.log(listQuestion);

