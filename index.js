function generateRandomNumber()
{
    var one=Math.random()*6;
    one=Math.floor(one)+1;
    
    document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+one+".png");

    var two=Math.random()*6;
    two=Math.floor(two)+1;

    document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+two+".png");

    if(one>two)
    {
        document.querySelector("h1").textContent="⛳ Player1 wins";
    }
    else if(one<two)
    {
        document.querySelector("h1").textContent="Player2 wins ⛳";
    }
    else
    {
        document.querySelector("h1").textContent="Draw !";
    }


}

