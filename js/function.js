function alertUser() {
    const alertInfo = document.querySelector('.alert-success').classList
    if (alertInfo.contains('hidden')) {
        alertInfo.remove('hidden')
    } else {
        alertInfo.add('hidden')
    }
}

function changeDateFormat(data) {
    let userDate = '';
    data.forEach(element => {
        if (data.indexOf(element) == (data.length - 1)) {
            userDate += element.value
        } else {
            userDate += element.value + '/'
        }
    })
    const dateInfo = document.getElementById('newFormat')
    let newFormat = moment(userDate).format("MMMM Do YYYY")
    dateInfo.classList.remove('hidden')
    dateInfo.innerText = 'Your date of birth is ' + newFormat
}

function validationData() {
    const data = inputData
    let count = data.length
    const infoAlert = document.querySelector('.alert-danger')
    infoAlert.innerHTML = ""
    data[1].max_value = setMaxDays()
    data.forEach(element => {
        const entry = document.getElementById(element.id)
        element.value = entry.value
        if (entry.value === '' || !(entry.value.match(element.pattern)) || parseInt(element.value) > element.max_value) {
            entry.classList.add('error')
            if (infoAlert.classList.contains('hidden')) {
                infoAlert.classList.remove('hidden')
            }
            infoAlert.innerHTML += `<p>Incorrect format of ${element.errorMessage}</p>`
            entry.style.borderColor = 'red'
        } else {
            entry.style.borderColor = 'black'
            entry.setAttribute('readonly', 'readonly')
            count -= 1
        }
    })

    if (count == 0) {
        infoAlert.innerHTML = ""
        infoAlert.classList.add('hidden')
        changeDateFormat(data)
    }
}

function showMyDOB() {
    const infoDateOfB = document.getElementById('myDate')
    const birthday = '06/10/1990'
    let birthdayNewFormat = moment(birthday).format('MMMM Do YYYY')
    infoDateOfB.classList.remove('hidden')
    infoDateOfB.innerText = birthdayNewFormat
}

function resetDOB() {
    inputData.forEach(element => {
        const resetData = document.getElementById(element.id)
        resetData.value = ''
        resetData.removeAttribute('readonly')
        resetData.style.borderColor = 'black'
        document.querySelector('.alert-primary').classList.add('hidden')
        document.querySelector('.alert-danger').classList.add('hidden')
    })
}

function setMaxDays() {
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    return new Date(year, month, 0).getDate()
}