class StarRater extends HTMLElement 
{
    constructor(){
        super()
        this.build()
    }
    
    build(){
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.styles())

        const rater = this.createRater()
        this.stars = this.createStars()

        this.stars.forEach(star => rater.appendChild(star))

        this.ResetRating()

        shadow.appendChild(rater)
    }
    
    createRater(){
        const rater = document.createElement('div')
        rater.classList.add('star-rater')
        rater.addEventListener('mouseout', this.ResetRating.bind(this))
        return rater
    }

    createStars(){
        const createStar = (_, i) => {
            const star = document.createElement('span')
            star.classList.add('star')
            star.setAttribute('data-value', Number(i) + 1)
            star.innerHTML = '&#9733;'

            star.addEventListener('click', this.SetRating.bind(this))
            star.addEventListener('mouseover', this.RatignHover.bind(this))
            return star
        }

        return Array.from({length: 5}, createStar)
    }

    SetRating(event){
        this.setAttribute('data-rating', event.currentTarget.getAttribute('data-value'))
    }

    RatignHover(event){
        this.currentRatingValue = event.currentTarget.getAttribute('data-value')    
        this.highlight()
    }

    highlight(){
        this.stars.forEach(star => {
            // if(starIndex >= star.getAttribute('data-value'))
            //     star.style = `color: yellow`
            // else
            //     star.style = "color: #272727"

            star.style.color = 
            this.currentRatingValue >= star.getAttribute('data-value')?
            'yellow':
            '#272727'
        })
    }

    ResetRating(){
        this.currentRatingValue = this.getAttribute('data-rating') || 0
        this.highlight()
    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `
        .star{
            font-size: 5rem;
            cursor: pointer;
        }`

        return style
    }
}

customElements.define('star-rater', StarRater)