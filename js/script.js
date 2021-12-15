Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            mailArray: [],
            mailQuantity: 10,
        },
        methods: {
            
        },

        created: function() {

            // devo fare una funzione che prende 10 mail dall'API e le 
            // inserisce all'interno di mailArray
            for( let i = 0; i < this.mailQuantity; i++ ) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const singleMail = (response.data.response);
                    this.mailArray.push(singleMail);
                });
            }
            
        }

    }
);