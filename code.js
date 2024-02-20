// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

                counterSlide:2,
            
                slides: [
                {
                    image: '01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: '02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: '03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: '04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: '05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ]
                

        }
    },
    methods: {
        // applicazione degli eventi alle freccie 
        nextSlide(){
            // usato per bersagliare il contatore
            this.counterSlide++;
            // confronto tra il contatore e la lunghezza del nostro array
            if(this.counterSlide>= this.slides.length)
            {
                // valore di ritorno
                this.counterSlide=0;
            }
        },
         // applicazione degli eventi alle freccie 
        previusSlide(){
            // usato per bersagliare il contatore
            this.counterSlide--;
            // confronto tra il contatore e la lunghezza del nostro array
            if(this.counterSlide< 0)
            {
                // valore di ritorno 
                this.counterSlide=4;
            }
            
        },
            
    },
}).mount('#app');