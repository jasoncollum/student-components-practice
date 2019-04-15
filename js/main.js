console.log('main.js');

const studentArticle = document.querySelector('#container');
const messageArticle = document.querySelector('#messages');

// Create student function
// const createStudentComponent = (name, subject, info) => {
//     return `
//         <div class="student">
//             <h1>${name}</h1>
//             <section>${subject}</section>
//             <aside>${info}</aside>
//         </div>
//     `
// }



// for (const student of students) {
//     let studentComponent = '';
//     if (student.score >= 60) {
//         studentComponent = `
//             <div class="student">
//                 <h1 class="xx-large passing">${student.name}</h1>
//             `
//     } else {
//         studentComponent = `
//             <div class="student">
//                 <h1>${student.name}</h1>
//             `
//     }
//     studentComponent += `
//             <section class="bordered dashed section--padded">${student.subject}</section>
//             <aside class="pushRight">${student.info}</aside>
//         </div>
//         `;
//     studentArticle.innerHTML += studentComponent;
// }

// ---------

// Function to create student components breaking out each element to it's own function

// function createStudentH1(student) {
//     if (student.score >= 60) {
//         return `
//             <div class="student">
//                 <h1 class="xx-large passing">${student.name}</h1>
//             `
//     } else {
//         return `
//             <div class="student">
//                 <h1>${student.name}</h1>
//             `;
//     }
// }

// function createStudentSection(student) {
//     return `
//             <section class="bordered dashed section--padded">${student.subject}</section>`;
// }

// function createStudentAside(student) {
//     return `
//             <aside class="pushRight">${student.info}</aside>
//         </div >
//         `;
// }

// function createStudentComponents(student) {
//     let studentComponent = '';
//     studentComponent +=  createStudentH1(student);

//     studentComponent += createStudentSection(student); 

//     studentComponent += createStudentAside(student)
            
//     studentArticle.innerHTML += studentComponent;
// }

// students.forEach((student) => {
//     createStudentComponents(student)
// });

// ---------

// Function to create element 

function element(el, elContent, elClass) {
    return `<${el} class="${elClass}">"${elContent}"</${el}>`;
};

// const createStudentComponent = (student) => {
//     return `
//     <div id="student">
//         ${element("h1", student.name, "xx-large passing")}
//         ${element("section", student.subject, "bordered dashed section--padded")}
//         ${element("aside", student.info, "pushRight")}
//     </div>
//     `
// };

// students.forEach((student) => {
//     const studentComponent = createStudentComponent(student);
//     studentArticle.innerHTML += studentComponent;
// });

// ---------

// createEl and appendChild

const list = document.createElement('ul');

const listItem = document.createElement('li');
listItem.className = 'president';
listItem.textContent = 'George Bush';

list.appendChild(listItem);
console.log(list);

const messages = [
    `Are we doing fireworks this year?`,
    `After last year's "tree incident", should we?`,
    'The fire fighters put it out in like a minute.',
    'We can set them off in the street.',
    `Our neighbors' houses are flammable, too`
]

// messages.forEach((message) => {
//     let messageEl = document.createElement('section');
//     messageEl.classList = 'message';
//     messageEl.textContent = message;
//     messageArticle.appendChild(messageEl);
// })

// ---------

const fragment = document.createDocumentFragment();

const messageFrags = []
messages.forEach((message) => {
    let messageEl = document.createElement('section');
    messageEl.classList = 'message';
    messageEl.textContent = message;
    fragment.appendChild(messageEl);
});

messageArticle.appendChild(fragment);
