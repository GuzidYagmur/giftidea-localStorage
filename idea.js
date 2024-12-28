let ideas = [];
if(localStorage.students){
    ideas = JSON.parse(localStorage.ideas);
}

const idea = prompt("Hediye fikriniz nedir?");
ideas.push(idea);
localStorage.ideas=JSON.stringify(ideas);
console.log(ideas);