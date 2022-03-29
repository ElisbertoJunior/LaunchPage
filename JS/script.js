const Modal = {

    open(){

        document.querySelector(".modal-overlay")
        .classList.add('active')

    },

    close(){

        document.querySelector(".modal-overlay")
        .classList.remove('active')

    }

}

    const secondsContainer = document.querySelector('#seconds')
    const minutesContainer = document.querySelector('#minutes')
    const hoursContainer = document.querySelector('#hours')
    const daysContainer = document.querySelector('#days')

    const Year =  new Date().getFullYear()
    const specialDate = new Date(`April 21 ${Year} 20:00:00`)

    const updateCountdown = () => {
        currentTime = new Date()
        difference = specialDate - currentTime
        days = Math.floor(difference / 1000 / 60 / 60 / 24) 
        hours = Math.floor(difference / 1000 / 60 / 60) % 24
        minutes = Math.floor(difference / 1000 / 60 ) % 60
        seconds = Math.floor(difference / 1000 ) % 60

        insertCount()
       
    }

    const insertCount = () => {
       secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
       minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
       hoursContainer.textContent = hours < 10 ? '0' + hours : hours
       daysContainer.textContent = days < 10 ? '0' + days : days
    }

   setInterval(updateCountdown, 1000)
    

