function submitReview(event) {
    const div = document.createElement('div')
    div.className = "review"

    const pName = document.createElement('p')
    pName.innerHTML = `Name: ${event.currentTarget.firstname.value}`
    div.appendChild(pName)

    const pReview = document.createElement('p')
    pReview.innerHTML = `${event.currentTarget.review.value}`
    div.appendChild(pReview)

    const reviewContainer = document.querySelector('.review-container')
    reviewContainer.appendChild(div)
}

const mainForm = document.querySelector('.main-form')
mainForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitReview(e)
    mainForm.reset()
})