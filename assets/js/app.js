console.log("hello World saint jo");

const prenom  = "mattéo";
let year2 = 2024; //number
const dob = 2002;
const isAdmin = false; //boolean
const apprenants = ["mattéo","florian"] //tableau
const sac = {livre: "bd de tintin" ,trousse: "1", skills:["bagarre", "game",] } //objet
const disque = document.querySelector(".disque");
const btnPause =document.getElementById("btnPause");
const paragraphe =document.querySelector(".div1 p");

setTimeout(() => {
    paragraphe.style.backgroundColor = "red"
}, 1000);

btnPause.addEventListener("click",()=>{
    disque.classList.toggle("pause");

    if (disque.classList.contains("pause")){
        btnPause.textContent = "play";
    }else{
        btnPause.textContent = "Pause";
    }
});

console.log(disque);
console.log(`bonjour ${prenom}`); //concaténation


console.log(apprenants[1]); 
console.log(sac.skills[0]);

apprenants.forEach(
    data => {
        console.log(`bonjour ${data}`)
    }
)

const calculeAge = ()=>{
    const age = year2 - dob;

   /* if(age > 18){
        console.log("rentre bonhomme.")
    }else{
        console.log("dehors mauviette")
    }
    console.log(`je connais ton age : ${age} ans.`);*/
    age > 18 ? console.log("rentre bonhomme.") : console.log("dehors mauviette");
}
calculeAge();

