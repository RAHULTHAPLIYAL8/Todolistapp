const inputbox=document.getElementById("search-1");
const listcontainer=document.getElementById("list-container");
function addfunc()
{
    if(inputbox.value==='')
    {
        alert("You must write something");
    }
    else
    {
       let li=document.createElement("li");
       li.innerHTML=inputbox.value;
       let span=document.createElement("span");
        span.innerHTML="\u00d7";
      li.appendChild(span);
       listcontainer.appendChild(li);
       savedata();
       inputbox.value="";
       }
}
listcontainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("right");
        savedata();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
}
,false);
function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function getdata()
{
   listcontainer.innerHTML=localStorage.getItem("data");
}
getdata();



