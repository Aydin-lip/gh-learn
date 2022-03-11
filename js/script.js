const $ = document;
function _Query(name) {
    return $.querySelector(name)
}




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


