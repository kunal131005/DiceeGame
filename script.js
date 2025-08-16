window.onload = function(){
        const p1 = Math.floor(Math.random()*6+1);
        const p2 = Math.floor(Math.random()*6+1);
        
        if(p1>p2)document.querySelector("h1").innerText = "Player1 Won 🎉!";
        else if(p1==p2)document.querySelector("h1").innerText = "OOPS, Its a Draw! 😑";
        else document.querySelector("h1").innerText = "Player2 Won 🎉!";
        
        const dice1 = document.querySelectorAll(".dice1 p")
        dice1.forEach(dot=>dot.classList.remove("filled"))
        
        const pattern1 = [[4],[2, 6],[2, 4, 6],[0, 2, 6, 8],[0, 2, 4, 6, 8], [0, 2, 3, 5, 6, 8]]
        
        pattern1[p1-1].forEach(i=>dice1[i].classList.add("filled"))
        
        const dice2 = document.querySelectorAll(".dice2 p")
        dice2.forEach(dot=>dot.classList.remove("filled"))
        
        const pattern2 = [[4],[2, 6],[2, 4, 6],[0, 2, 6, 8],[0, 2, 4, 6, 8], [0, 2, 3, 5, 6, 8]]
        
        pattern2[p2-1].forEach(i=>dice2[i].classList.add("filled"))
    
}
