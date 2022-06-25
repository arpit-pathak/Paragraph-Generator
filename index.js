const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n)=>{
    let text="";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXZY";

    for(let i =0; i<n; i++){
        // (letters.length-1) this will give 25 
        const random =  (Math.random()* (letters.length-1)).toFixed(0);
        text += letters[random];
    }

    return text;
};


const generatePara = ()=>{
   const numOfWords = Number(input.value);
   console.log(numOfWords);
   
   
   const para = document.createElement("p");
   
   let data = "";

   for(let i=0; i<numOfWords; i++){
        const randomNumber = (Math.random()* 15).toFixed(0);
       data += generateWord(randomNumber);
       data += " ";
   }

   para.innerText = data;

   para.setAttribute("class","para");

    container.append(para);
};