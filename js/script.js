const $ = document;
function _Query(name) {
    return $.querySelector(name)
}


// const autowriteheader = _Query('header h4')
// let textautowrite = 'Uncover the best places to eat, drink, and shop nearest to you.'
// let indexwrite = 0
// let setinter = ''
// let autowrite = () => {
//     autowriteheader.innerHTML = textautowrite.slice(0, indexwrite)
//     indexwrite++
//     let chengcolor = autowriteheader.style.textShadow = `2px 2px 5px ${colortext()}`
//     if (indexwrite > textautowrite.length) {
//         clearInterval(setinter)
//         let chengcolor = autowriteheader.style.textShadow = `1px 1px white`
//     }
// }
// setinter = setInterval(autowrite, 100);

// let colortext = () => {
//     return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// }



// const brand = _Query('.navbar-brand')
// brand.onmouseover = () => {
//     brand.style.transform = 'scale(1.08)'
// }
// brand.onmouseout = () => {
//     brand.style.transform = 'scale(1)'
// }




(function () {
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }



                form.classList.add('was-validated')
            }, false)
        })
})()



// navbar dropdown animation
const dropdownmenu = $.querySelectorAll('.animation')
dropdownmenu.forEach(item => {
    item.onclick = event => {
        let nextElem = event.target.nextElementSibling
        console.log(item.classList)
        if (item.classList.length = 5) {
            nextElem.style.transform = 'translateY(25px)'
            nextElem.style.opacity = 0
        }
        setInterval(() => {
            if (item.classList.length = 4) {
                nextElem.style.transform = 'translateY(0)'
                nextElem.style.opacity = 1
            }
        }, 100);
    }
})
// tooltip footer network
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        delay: { show: 300, hide: 100 }
    })
})




// const num = x => {
//     const sum = y => {
//         return y + x
//     }
//     return sum
// }


// let func = num(5)
// func(3)

// console.dir(func)



// let obj = {name: 'aydin'}

// try {
//     const name = 'matrix'
//     name = 'aydin'
//     console.log(name)

// } catch (err) {
//     console.log('pleas fix the Error ' + err.name)
// } finally {
//     console.log('fixed error ?!')
// }  


// (function() {
//     console.log('hi :)')
// })()



// function respons(x) {
//     let number = setTimeout(() => {
//          (x + 3)
//     }, 1000);
//     // return number
//     console.log(number)
// }
// respons(2)

// async function result() {
//     let poop = await respons(2)
//     let plus = poop + 3
//     console.log(plus)
// }

// result()




// let sum = {
//     name: 'Mahdi',
//     age: 16,
//     city: 'Malard'
// }
// let num = {
//     name: 'Aydin',
//     age: 16,
//     city: 'Robat Karim',
//     print(id) {
//         console.log(`my name is ${this.name} and my ${this.age} years old. my life in ${this.city}. my Id ${id}`)
//     }
// }

// num.print.call(sum, 3)
// num.print.apply(sum, [5])
// let saved = num.print.bind(sum, 6)

// saved()





// class creat {
//     constructor(Fname, Lname, email) {
//         this.Fname = Fname
//         this.Lname = Lname
//         this.email = email
//     }
//     login() {
//         console.log(this.Fname, this.Lname, 'is login')
//     }
//     logout() {
//         console.log(this.email, 'is logout')
//     }
// }

// let user = new creat('Aydin', 'Lip', 'example@gmail.com')
// console.log(player)
// player.login()
// player.logout()

// class players extends creat {
//     constructor(Fname, Lnaem, email, number, team) {
//         super(Fname, Lnaem, email)
//         this.number = number
//         this.team = team
//     }
//     teamed() {
//         console.log(`my team ${this.team}`)
//     }
//     numberPlayer() {
//         console.log(`my number for game ${this.number}`)
//     }
// }
// let player = new players('Amir Mohammad', 'Mesbahi', 'example2@gmail.com', 7, 'Tractor')
// player.login()
// player.teamed()
// player.numberPlayer()
// player.logout()






// let num = [3, 5, 2, 7, 8]
// let sum = num.reduce((prev, next) => {
//     console.log(prev, next)
//     return prev + next
// })
// console.log(sum)








// import {num as number, sum as func} from './app.js'
// import * as ulity from './app.js'
// import sum from './app.js'

// console.log(ulity.num)




























































































/////////////////////////////////////timer...calculator...godzilaGame...weather///////////////////////////////////

// const hours = _Query('.hours')
// const min = _Query('.min')
// const secend = _Query('.secend')
// const timerNumber = _Query('.timerNumber')

// let deg = 6
// setInterval(() => {
//     let time = new Date()

//     let hour = time.getHours() * 30
//     let minn = time.getMinutes() * 6
//     let sec = time.getSeconds() * 6

//     if (time.getSeconds() < 10) {
//         timerNumber.innerHTML = time.getHours() + ' : ' + time.getMinutes() + ' : 0' + time.getSeconds()
//     } else {
//         timerNumber.innerHTML = time.getHours() + ' : ' + time.getMinutes() + ' : ' + time.getSeconds()
//     }

//     hours.style.transform = 'rotateZ(' + ((hour) + (minn / 12)) + 'deg)'
//     min.style.transform = 'rotateZ(' + minn + 'deg)'
//     secend.style.transform = 'rotateZ(' + sec + 'deg)'
// });

// const calc = _Query('.inputcalculet')

// let clickcalculetorbtn = event => {
//     event.preventDefault()
//     let btnvalue = event.target.value
//     if (btnvalue == 'C') {
//         calc.value = ''
//         return false
//     } else if (btnvalue == '=') {
//         calc.value = eval(calc.value)
//         return false
//     }
//     calc.value += btnvalue
// }



// const godzila = _Query('.godzila')
// const khar = _Query('.khar')
// const game = _Query('.game')
// const btngame = _Query('.clickgame')
// const iconagain = _Query('i')
// const scoreText = _Query('.scoreText')
// const scoreNum = _Query('.scoreNum')
// const godzilaimg = _Query('.godzilaimg')

// let score = 0

// const stopgame = () => {
//     started = false
//     godzilaimg.src = './Screenshot (4).png'
//     khar.classList.remove('kharanimation')
//     iconagain.style.display = 'block'
//     btngame.classList.remove('btnstartgame')
//     btngame.innerHTML = 'Start Again'
//     btngame.style.left = '8.5rem'
//     alert('GAME OVER \n' + 'score : ' + score)
//     scoreText.style.display = 'none'
//     godzila.style.left = '0px'
//     score = 0
//     run = false
// }

// setInterval(() => {
//     let godzilatop = Number(window.getComputedStyle(godzila).getPropertyValue('top').slice(0, 3))
//     let kharleft = Number(window.getComputedStyle(khar).getPropertyValue('left').slice(0, 3))
//     if (godzilatop > 130 && kharleft < 60) {
//         stopgame()
//     }
//     rungodzila()
// }, 100);

// let run = false
// const rungodzila = () => {
//     if (!run) {
//         return
//     }
//     if (godzilaimg.src === 'file:///C:/Users/ClickRayaneh/Desktop/proje/Screenshot%20(2).png') {
//         godzilaimg.src = './Screenshot (1).png'
//     } else if (godzilaimg.src === 'file:///C:/Users/ClickRayaneh/Desktop/proje/Screenshot%20(1).png') {
//         godzilaimg.src = './Screenshot (2).png'
//     }
// }

// let godzilajamp = () => {
//     godzila.classList.add('godzilaanimation')
//     godzilaimg.src = './Screenshot (4).png'
//     setTimeout(() => {
//         godzila.classList.remove('godzilaanimation')
//         godzilaimg.src = './Screenshot (2).png'
//     }, 500);
//     scoreNum.innerHTML = ++score
// }

// let rungame = () => {
//     khar.classList.add('kharanimation')
//     godzilajamp()
// }

// let btnstarted = () => {
//     btngame.classList.add('btnstartgame')
//     btngame.style.left = '0px'
//     btngame.innerHTML = 'Space'
//     godzila.style.transition = 'left .5s linear'
//     godzila.style.left = '25px'
//     scoreText.style.display = 'block'
//     iconagain.style.display = 'none'
//     run = true
//     setTimeout(() => {
//         khar.classList.add('kharanimation')
//     }, 300);
//     godzilajamp()
// }

// let started = false
// btngame.onclick = () => {
//     btnstarted()
//     started = true
// }

// iconagain.onclick = () => {
//     btnstarted()
//     started = true
// }

// window.onkeydown = event => {
//     if (event.code === 'Space' && started) {
//         event.preventDefault()
//         godzilajamp()
//     }
// }






// const locpersenFunc = async () => {
//     const url = `http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone,query`

//     const Response = await fetch(url)
//     const data = await Response.json()
//     return data
// }

// const weatherFunc = async (lat, lon) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=888ed2612eb942a86a34dbf702865802`

//     const Response = await fetch(url)
//     const data = await Response.json()
//     return data
// }

// const timedayweather = () => {
//     const time = new Date()
//     let t;
//     if (time.getHours() >= 6 && time.getHours() <= 19) {
//         t = 'Day'
//     } else {
//         t = 'Night'
//     }
//     return t
// }

// const iconweather = now => {
//     let icon = `${timedayweather()}.svg`
//     switch (now) {
//         case 'Clouds':
//             icon = `${now}.svg`
//             break
//         case 'Rain':
//             icon = `${now}.svg`
//             break
//         case 'Snow':
//             icon = `${now}.svg`
//             break
//         case 'Thunderstorm':
//             icon = `${now}.svg`
//             break
//         case 'Drizzle', 'Clear', 'Atmosphere':
//             icon = `${timedayweather()}.svg`
//             break
//     }
//     return icon
// }

// const eaditdeg = deg => {
//     K = deg
//     C = deg - 273.15
//     F = C * 1.8 + 32
//     return deg = { Kel: Math.floor(K), Can: Math.floor(C), Fan: Math.floor(F) }
// }

// const ip = _Query('.ipspan')
// const city = _Query('.namecity')
// const iconimg = _Query('.imgicon')
// const degNum = _Query('.damadiv h2')
// const degName = _Query('.damadiv span')
// const nameweather = _Query('.nameweather')
// const damadiv = _Query('.damadiv')

// locpersenFunc().then(data => {
//     ip.innerHTML = data.query
//     city.innerHTML = data.timezone
//     return weatherFunc(data.lat, data.lon)
// }).then(weather => {
//     iconimg.src = `./animated/${iconweather(weather.weather[0].main)}`
//     nameweather.innerHTML = weather.weather[0].description
//     degNum.innerHTML = Math.floor(weather.main.temp)
//     damadiv.onclick = () => {
//         if (degName.innerHTML === 'K') {
//             degNum.innerHTML = eaditdeg(weather.main.temp).Can
//             degName.innerHTML = 'C'
//         } else if (degName.innerHTML === 'C') {
//             degNum.innerHTML = eaditdeg(weather.main.temp).Fan
//             degName.innerHTML = 'F'
//         } else {
//             degNum.innerHTML = eaditdeg(weather.main.temp).Kel
//             degName.innerHTML = 'K'
//         }
//     }
// })



/////////////////////////profile///////////////////////

// const btn = $.querySelectorAll('.btn')
// btn.forEach(item => {
//     item.onclick = event => {
//         document.documentElement.style.setProperty('--team-color', event.target.style.backgroundColor)
//     }
// })


//////////////////////////////////////////////////Add a Contact///////////////////////////////////////////////

// const ul = _Query('.ul')
// const inputtext = _Query('.addName')
// const inputNumber = _Query('.addNumber')
// const spanName = _Query('.spanName')
// const spanNumber = _Query('.spanNumber')

// var Num = 0
// var Sum = 0
// for (let In = 0; In < localStorage.length; In++) {
//     Sum++
//     const li =  document.createElement('li')
//     li.innerHTML = localStorage.key(In) + ' : ' + localStorage.getItem(localStorage.key(In))
//     ul.append(li)
//     li.ondragstart = dragstartFunc
//     li.draggable = "true"
//     li.classList.add('li')
//     li.setAttribute('id', 'local' + Sum)
//     const i = document.createElement('i')
//     li.append(i)
//     i.classList.add('far', 'fa-trash-alt')
//     inputtext.value = ''
// }
// function onClick() {
//     Num++
//     if (inputNumber.value.length < 1) {
//         spanNumber.innerHTML = '*'
//     } else {
//         spanNumber.innerHTML = ''
//     }
//     if (inputtext.value.length < 1) {
//         spanName.innerHTML = '*'
//     } else {
//         spanName.innerHTML = ''
//     }
//     if (inputNumber.value.length > 0) {
//         if (inputtext.value.length > 0) {
//             localStorage.setItem(inputtext.value, inputNumber.value)
//             const li =  document.createElement('li')
//             li.innerHTML = inputtext.value + ' : ' + inputNumber.value
//             ul.append(li)
//             li.ondragstart = dragstartFunc
//             li.draggable = "true"
//             li.classList.add('li')
//             li.setAttribute('id', 'new' + Num)
//             const i = document.createElement('i')
//             li.append(i)
//             i.classList.add('far', 'fa-trash-alt')
//             inputtext.value = ''
//             inputNumber.value = ''
//             // console.log(inputNumber, inputtext.value)
//             // console.log(document.getElementById('new' + Num))
//         }
//     }
//     // console.log(Num)
// }

// function dragstartFunc(event) {
//     event.dataTransfer.setData('Elemid', event.target.id)
// }
// function dropFunc(event) {
//     let div = event.dataTransfer.getData('Elemid')
//     document.getElementById(div).style.display = 'none'
// }
// function onclickFunc() {
//     for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
//         document.getElementsByTagName('li')[i].style.display = 'none'
//     }
//     localStorage.clear()
// }


// const section = _Query('.section')
// const h1 = _Query('.h1')
// const addNa = _Query('.addName')
// const addNu = _Query('.addNumber')
// const liN = _Query('.li')
// const button = _Query('.button')
// const submit = _Query('.submit')
// const mod = _Query('.mod')


// // nightMode()

// if (localStorage.getItem('mod') == 'on') {
//     section.classList.add('night-section')
//     h1.classList.add('night-h1')
//     addNa.classList.add('night-addName')
//     addNu.classList.add('night-addNumber')
//     liN.classList.add('night-li')
//     button.classList.add('night-button')
//     submit.classList.add('night-submit')
//     mod.classList.add('night-mod')
//     mod.innerHTML = 'Mod'
// }
// if (localStorage.getItem('mod') == 'off') {
//     section.classList.remove('night-section')
//     h1.classList.remove('night-h1')
//     addNa.classList.remove('night-addName')
//     addNu.classList.remove('night-addNumber')
//     liN.classList.remove('night-li')
//     button.classList.remove('night-button')
//     submit.classList.remove('night-submit')
//     mod.classList.remove('night-mod')
//     mod.innerHTML = 'Night Mod'
// }
// // console.log(localStorage.getItem('mod'))
// var Mood = 0
// function modclick() {
//     Mood++
//     // console.log('ok')
//     if (Mood%2 == 1) {
//         localStorage.setItem('mod', 'on')
//         section.classList.add('night-section')
//         h1.classList.add('night-h1')
//         addNa.classList.add('night-addName')
//         addNu.classList.add('night-addNumber')
//         liN.classList.add('night-li')
//         button.classList.add('night-button')
//         submit.classList.add('night-submit')
//         mod.classList.add('night-mod')
//         mod.innerHTML = 'Mod'
//     } else {
//         localStorage.setItem('mod', 'off')
//         section.classList.remove('night-section')
//         h1.classList.remove('night-h1')
//         addNa.classList.remove('night-addName')
//         addNu.classList.remove('night-addNumber')
//         liN.classList.remove('night-li')
//         button.classList.remove('night-button')
//         submit.classList.remove('night-submit')
//         mod.classList.remove('night-mod')
//         mod.innerHTML = 'Night Mod'
//     }

// }

///////////////////////////////////////////// موس موو //////////////////////////////////////////////////

// document.onmousemove = mouseMove
// function mouseMove(event) {
//     let circle = $.createElement('div')
//     circle.setAttribute('class', 'circle')
//     circle.style.top = event.clientY + 'px'
//     circle.style.left =  event.clientX + 'px'
//     document.body.append(circle)

//     let Colors = ['red', 'blue', 'yellow', 'orange', 'rgb(200, 255, 2)', 'rgb(2, 255, 2)', 'rgb(2, 255, 188)', 'rgb(171, 2, 255)', 'rgb(255, 2, 234)' ]
//     let Color = Colors[Math.trunc(Math.random() * Colors.length)]
//     circle.style.borderColor = Color
//     circle.style.top = circle.offsetTop - 30 + 'px'
//     circle.style.left = circle.offsetLeft - 30 + 'px'
//     circle.style.opacity = 0
//     // console.log(event)
// }


/* //////////////////////////////////////////////اسلایدر عکس//////////////////////////////////////////// */

// let conection = 1;
// function slider(index) {
//     conection = index;
//     let slider = $.getElementsByClassName("slider-img")
//     let dots = $.getElementsByClassName("dots")
//     if (conection > slider.length) {
//         conection = 1;
//     }
//     if (conection < 1) {
//         conection = slider.length;
//     }
//     for (let i = 0; i < slider.length; i++) {
//         slider[i].style.display = "none"
//         dots[i].className = dots[i].className.replace("active", " ")
//     }
//     slider[conection - 1].style.display = "flex"
//     dots[conection - 1].className = "dots active"

// }
// slider(1)


/* ///////////////////////////////////////////////////////فرم ثبت نام و لاگین/////////////////////////////////// */

// let formsingupPassword = $.querySelector(".input-singup-password")
// let formsingupPasswordConfrim = $.querySelector(".input-singup-password-confrim")
// let formloginPassword = $.querySelector(".input-login-password")
// let formPsingupEror = $.querySelector(".form-singup-eror")
// let formPloginEror = $.querySelector(".form-login-eror")
// function singupPassword() {
//     if (formsingupPassword.value.length < 8) {
//         formPsingupEror.innerHTML = "لطفا پسوردی بیشتر از 8 کاراکتر انتخاب کنید *"
//     } else {
//         formPsingupEror.innerHTML = " "
//     }
// }
// function singupPasswordConfrim() {
//     if (formsingupPasswordConfrim.value.length < 8) {
//         formPsingupEror.innerHTML = "لطفا دقت فرمایید *"
//     } else {
//         formPsingupEror.innerHTML = " "
//     }
// }
// function loginpassword() {
//     if (formloginPassword.value.length < 8) {
//         formPloginEror.innerHTML = "لطفا دقت فرمایید *"
//     } else {
//         formPloginEror.innerHTML = " "
//     }
// }

// let FGsingupB = $.querySelector(".f-singup-b")
// let FGloginB = $.querySelector(".f-login-b")
// $.querySelector(".formbox").style.display = "none"
// function goLogin() {
//     $.querySelector(".formbox2").style.display = "block"
//     $.querySelector(".formbox").style.display = "none"
// }
// function goSingup() {
//     $.querySelector(".formbox").style.display = "block"
//     $.querySelector(".formbox2").style.display = "none"
// }