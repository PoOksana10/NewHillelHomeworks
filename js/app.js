document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".alert").classList.add('hidden')
})

document.querySelector(".btn-success").addEventListener('click', () => {alertUser()})


document.getElementById('dateFormatBtn').addEventListener('click', () => {validationData()})

document.getElementById('showMyDate').addEventListener('click', () => {showMyDOB()})

document.getElementById('reset').addEventListener('click', () => {
    resetDOB()
})