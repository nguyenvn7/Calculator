var btn = document.querySelector('.modify')
var r = document.querySelector(':root')
var number = document.querySelectorAll(".number")
var display = document.querySelector('#display')
var key = document.querySelectorAll('.key')
var equal = document.querySelector(".equal")
var body = document.querySelector("body")

var dot = document.querySelector(".dot")
var num1 = ""
var check_dot = null
var total = null
var operator = null
var check_press = null

r.style.setProperty('--position','0px')

btn.onclick = function(e){
    if(e.clientX <=915){
        r.style.setProperty('--position','0px')
        r.style.setProperty('--C_body','hsl(222, 26%, 31%)')
        r.style.setProperty('--toggle_keypad','hsl(223, 31%, 20%)')
        r.style.setProperty('--screenbackground','hsl(224, 36%, 15%)')
        r.style.setProperty('--C_key','hsl(225, 21%, 49%)')
        r.style.setProperty('--C_boxshadowKey','hsl(224, 28%, 35%)')
        r.style.setProperty('--C_number','hsl(30, 25%, 89%)')
        r.style.setProperty('--C_shadowNumber','hsl(28, 16%, 65%)')
        r.style.setProperty('--C_equal','hsl(6,63%,50%)')
        r.style.setProperty('--C_boxshadowEqual','hsl(6, 70%, 34%)')
        r.style.setProperty('--color','white')
    }else if(e.clientX <=931){
        r.style.setProperty('--position','19px')
        r.style.setProperty('--C_body','hsl(0, 0%, 90%)')
        r.style.setProperty('--toggle_keypad','hsl(0, 5%, 81%)')
        r.style.setProperty('--screenbackground','hsl(0, 0%, 93%)')
        r.style.setProperty('--C_key','hsl(185, 42%, 37%)')
        r.style.setProperty('--C_boxshadowKey','hsl(185, 58%, 25%)')
        r.style.setProperty('--C_number','hsl(45, 7%, 89%)')
        r.style.setProperty('--C_shadowNumber','hsl(35, 11%, 61%)')
        r.style.setProperty('--C_equal','hsl(25, 98%, 40%)')
        r.style.setProperty('--C_boxshadowEqual','hsl(25, 99%, 27%)')
        r.style.setProperty('--color','#333')

    }else{
        r.style.setProperty('--position','38px')
        r.style.setProperty('--C_body','hsl(268, 75%, 9%)')
        r.style.setProperty('--toggle_keypad','hsl(268, 71%, 12%)')
        r.style.setProperty('--screenbackground','hsl(268, 71%, 12%)')
        r.style.setProperty('--C_key','hsl(281, 89%, 26%)')
        r.style.setProperty('--C_boxshadowKey','hsl(285, 91%, 52%)')
        r.style.setProperty('--C_number','hsl(268, 47%, 21%)')
        r.style.setProperty('--C_shadowNumber','hsl(290, 70%, 36%)')
        r.style.setProperty('--C_equal','hsl(176, 100%, 44%)')
        r.style.setProperty('--C_boxshadowEqual','hsl(177, 92%, 70%)')
        r.style.setProperty('--color','hsl(52, 100%, 62%)')
    }
    
}
 
number.forEach(data =>{
    data.onclick = function(){
        var data_text =  data.getAttribute('data-text')
        if(isNaN(data_text) && data_text !="."){
            if(total == null){
                total = +num1
            }
            if(check_press != false)
                {   if((operator == "x" || operator == "/")){
                    var att = display.getAttribute("data-text")
                    display.setAttribute("data-text","("+att.slice(0,att.length-1)+")"+operator)
                    }
                    if(check_press == null && data_text != "="){
                        display.setAttribute("data-text","")
                        check_press = true
                        num1 = total
                    }else{
                        cal()
                    }
               
                }
            

            if(data_text != "="){
                operator = data_text
            }else if(check_press == false){
                cal()
                check_press = null
            }

        if(check_press == false){
            var att = display.getAttribute("data-text")
            display.setAttribute("data-text",att.slice(0,att.length-1)+operator)
        }else{
            if(check_press == null){
                display.setAttribute("data-text",display.textContent+operator+convertString(num1.toString())+"=")
            }else{
                if(data_text == "="){
                    check_press = null
                }else
                    check_press = false
                    display.setAttribute("data-text",display.getAttribute("data-text")+display.textContent+(data_text=="="? "=":operator))
            }
        }
            display.textContent = (total != null? convertString(total.toString()):display.textContent)
        }else{
            if(check_press == false){
                display.textContent = ""
                num1 = ""
            }else if(check_press == null){
                display.textContent = ""
                display.setAttribute("data-text","")
                num1 = ""
                total = null
                check_press = null
                operator = null
            }
            
                check_press = true
                num1 += data_text
                display.textContent = convertString(num1)

            
        }

        data.style.setProperty('--posi','4px')
        setTimeout(()=>{
        data.style.setProperty('--posi','0px')
        },150)

    }
})

function convertString(numS){
    var striing =""

    if(check_dot == true || numS.indexOf(".")){
        var a,b
        var dot = numS.indexOf(".")
        a = numS.slice(dot+1,numS.length)
        b = numS.slice(0,dot)
        if(a.length >3){
            a = substr(a)
            console.log(a.length)
        }
        if(b.length >3)
        {

            b = substr(b)
            console.log(a.length)
        }
        striing = b+"."+a
    }
    else{
        striing = substr(numS)
    }
    return striing
  
}

function substr(string){
    var striing =""
    for(var i=0,j=string.length; i<string.length/3;++i,j-=3){
        striing = ','+string.slice((j-3)>0? j-3:0,j)+striing  
    }
    return striing.slice(1,striing.length)
}

function cal(){
    var num;
  if(!Number.isInteger(+num1)){
      num = Number.parseFloat(+num1)
  }else{
      num = +num1
  }
    switch(operator){
        case "+":
            total += num
            break;
        case "-":
            total -= num
            break;
        case "x":
            total *= num
            break;
        case "/":
            total /= num
            break;
    }
    check_dot = false
}



key[0].onclick =()=>{
    console.log(num1)
    if(num1.slice(num1.length-1,num1.length))
        {
            check_dot = false
        }
   num1 = num1.slice(0,num1.length-1)
   display.textContent = convertString(num1)
}

key[1].onclick = ()=>{
    display.textContent =""
    num1 = null
    check = false
    total = null
    operator = null
    display.setAttribute("data-text","")
    check_dot = false
    check_press = null
    key[1].style.setProperty('--posi','4px')
    setTimeout(()=>{
    key[1].style.setProperty('--posi','0px')
    },150)
}

dot.onclick = ()=>{
    if(check_dot != true){
        num1 += "."
         display.textContent += "."
         check_dot = true
    }
    dot.style.setProperty('--posi','4px')
    setTimeout(()=>{
    dot.style.setProperty('--posi','0px')
    },150)
}

