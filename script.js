function one(){
    let div=document.createElement("div")
   
    div.setAttribute("id","one")
    div.setAttribute("class","mass")
    div.innerHTML="10"
    document.body.append(div)
  
 tow()
}
function tow(){
   setTimeout(()=>{ 
    let div=document.createElement("div")
    
    document.getElementById("one").innerHTML=" "
    div.setAttribute("id","tow")
    div.setAttribute("class","mass")
    div.innerHTML="9"
    
    document.body.append(div)},1000)
    three()
  }

  function three(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("tow").innerHTML=""
    div.setAttribute("id","three")
    div.setAttribute("class","mass")
    div.innerHTML="8"
   
    document.body.append(div)},2000)
    
   four()
  }

  function four(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("three").innerHTML=""
    div.setAttribute("id","four")
    div.setAttribute("class","mass")
    div.innerHTML="7"
    document.body.append(div)},3000)
    
   five()
  }

  function five(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("four").innerHTML=""
    div.setAttribute("id","five")
    div.setAttribute("class","mass")
    div.innerHTML="6"
    document.body.append(div)},4000)
   six()
  }

  function six(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("five").innerHTML=""
    div.setAttribute("id","six")
    div.setAttribute("class","mass")
    div.innerHTML="5"
    document.body.append(div)},5000)
   sevev()
  }

  function sevev(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("six").innerHTML=""
    div.setAttribute("id","seven")
    div.setAttribute("class","mass")
    div.innerHTML="4"
    document.body.append(div)},6000)
   eiat()
  }
  function eiat(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("seven").innerHTML=""
    div.setAttribute("id","eiat")
    div.setAttribute("class","mass")
    div.innerHTML="3"
    document.body.append(div)},7000)
   neyan()
  }
  function neyan(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("eiat").innerHTML=""
    div.setAttribute("id","nayan")
    div.setAttribute("class","mass")
    div.innerHTML="2"
    document.body.append(div)},8000)
   ten()
  }
  function ten(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("nayan").innerHTML=""
    div.setAttribute("id","ten")
    div.setAttribute("class","mass")
    div.innerHTML="1"
    document.body.append(div)},9000)
   day()
  }

  function day(){
    setTimeout(()=>{ let div=document.createElement("div")
    document.getElementById("ten").innerHTML=""
    div.setAttribute("id","day")
    div.setAttribute("class","title")
    div.innerHTML="HAPPY INDEPENDENCE DAY"
    document.body.append(div)},10000) 
  }

one()
