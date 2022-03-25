function addList(){

    document.getElementById(`errorMessage`).innerHTML=""

    let mySearch=document.getElementById(`mySearch`).value;
    if (mySearch==``){

        document.getElementById(`errorMessage`).innerHTML="Please Enter First"
    } else  {
        let boxResult =document.getElementById(`boxResult`);
        let  tr =document.createElement(`tr`);
        tr.textContent=mySearch;

        boxResult.appendChild(tr);

        let position= boxResult.firstElementChild;
        console.log(position);

        let a =document.createElement(`a`);
        a.textContent="X";
        a.href=("javascript:void(0)");
        a.className="remove";
        tr.appendChild(a);


        if (position==null){

            boxResult.appendChild(tr);
        }
        else {
            boxResult.insertBefore(tr,position);
        }

    }

    document.getElementById(`mySearch`).value="";

}

let btnRmAll= document.querySelector(`ul`);
btnRmAll.addEventListener(`click`,function (e)
    {
    let boxResult=document.getElementById(`boxResult`);
    let tr=e.target.parentNode;
    boxResult.removeChild(tr);

    }
)
