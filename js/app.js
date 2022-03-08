const $ = document
function _Query(name) {
    return $.querySelector(name)
}


const form_head = $.querySelectorAll('.form-head-text')
const form_p = $.querySelectorAll('.form-p-text')

let form_head_text_in = `Welcome Back`
let form_p_text_in = `if you already have account pleas login <br>
to keep connected with us.`
let form_head_text_up = `Hello Friend`
let form_p_text_up = `Don't have account ? Please sign up with <br>
your personal details to connect with us !`

let Funcchengformtext_in = (head, p) => {
    let setinter_form = ''
    let indexform = 0

    let setinterForForm = () => {

        form_head.forEach(item => {
            item.innerHTML = head.slice(0, indexform)
        })
        form_p.forEach(item => {
            item.innerHTML = p.slice(0, indexform)
        })
        indexform++
        if (indexform > p.length) {
            clearInterval(setinter_form)
        }
    }
    setinter_form = setInterval(setinterForForm, 50);
}




const btnchengform = $.querySelectorAll('.cheng-form-login')
const textchengform = $.querySelectorAll('.text-cheng-form')
const chengform = $.querySelectorAll('.cheng-form')
const formMain = _Query('.form-main')
let indexed = 0

btnchengform.forEach(item => {

    item.onclick = () => {

        if ((indexed % 2) == 0) {
            formMain.style.transition = 'transform .4s linear'
            formMain.classList.add('activeL')
            textchengform.forEach(item => {
                item.style.transition = 'transform .4s linear'
                item.classList.add('activeR')
            })
            Funcchengformtext_in(form_head_text_up, form_p_text_up)
        } else {
            textchengform.forEach(item => {
                item.classList.remove('activeR')
            })
            formMain.classList.remove('activeL')
            Funcchengformtext_in(form_head_text_in, form_p_text_in)
        }
        indexed++

        setTimeout(() => {
            textchengform.forEach(item => {
                item.classList.toggle('d-flex')
                item.classList.toggle('d-none')
            })
            chengform.forEach(item => {
                item.classList.toggle('d-flex')
                item.classList.toggle('d-none')
            })
        }, 200);
    }
})



// tooltip form
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        delay: { show: 300, hide: 100 }
    })
})



const EmailInput = $.querySelectorAll('.Email-input')
const PasswordInput = $.querySelectorAll('.Password-input')
const pattern = /^([a-zA-Z0-9\-._]+)@([a-z]+)(.[a-z]{2,5})(.[a-z]{2,3})?$/ // regex101.com
EmailInput.forEach(item => {
    item.onkeyup = () => {
        if (pattern.test(item.value)) {
            item.style.borderBottom = '1px solid green'
        } else {
            item.style.borderBottom = '1px solid red'
        }
        if (item.value === '') {
            item.style.borderBottom = ''
        }
    }
})
PasswordInput.forEach(item => {
    item.onkeyup = () => {
        if (item.value.length > 8) {
            item.style.borderBottom = '1px solid green'
        } else {
            item.style.borderBottom = '1px solid red'
        }
        if (item.value === '') {
            item.style.borderBottom = ''
        }
    }
})








// let num = 16

// let sum = x => {
//     return x * 2
// }

// export default sum
// export {num, sum}



















