Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            mailArray: []
        },
        methods: {

            // devo fare una funzione che prende 10 mail dall'API e le 
            // inserisce all'interno di mailArray
            
        }
    }
);


// API per le mail
// https://flynn.boolean.careers/exercises/api/random/mail