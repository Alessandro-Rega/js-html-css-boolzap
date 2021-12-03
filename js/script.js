const app = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                selezionato: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    elimina: false,
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    elimina: false,
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                selezionato: false,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent',
                    elimina: false,
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    elimina: false,
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                selezionato: false,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    elimina: false,
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                selezionato: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent',
                    elimina: false,
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
        id: -1,
        ricerca: "",
        testo_messaggio: "",
    },
    watch: {
        ricerca: function(){
            for(let i = 0; i < this.contacts.length; i++){
                const rec = this.ricerca.toUpperCase();
                const nome = this.contacts[i].name.toUpperCase();
                if(nome.includes(rec))this.contacts[i].visible = true;
                else this.contacts[i].visible = false;
            }
        }
    },
    methods: {
        selezione: function(pos){
            for(let i = 0; i < this.contacts.length; i++){
                if(i != pos)this.contacts[i].selezionato = false;
            }
            // if(this.contacts[pos].selezionato == false)this.contacts[pos].selezionato = true;
            // else this.contacts[pos].selezionato = false;
            if(this.contacts[pos].selezionato != true)this.contacts[pos].selezionato = !this.contacts[pos].selezionato;
        },
        inviaMessaggio: function(){
            if(this.testo_messaggio == "")return;
            this.contacts[this.id].messages.push({
                date: this.getDate(),
                message: this.testo_messaggio,
                status: 'sent',
                elimina: false
            });
            this.testo_messaggio = "";
        },
        getDate: function(x) {
            const today = new Date();
            const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
            let ora = today.getHours();
            let minuti = today.getMinutes();
            let secondi = today.getSeconds();
            if(secondi < 10)secondi = '0' + secondi;
            if(minuti < 10)minuti = '0' + minuti;
            if(ora < 10)ora = '0' + ora;
            const time = ora + ":" + minuti + ":" + secondi;
            // const dateTime = date +' '+ time;
            if(x == 'ore') return time;
            else return date +' '+ time;
        },
        eliminaMessaggio: function(i_messaggio){
            this.contacts[this.id].messages.splice(i_messaggio, 1);
        }
    }
});