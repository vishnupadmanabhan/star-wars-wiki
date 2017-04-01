new Vue({
    el: '#root',

    data: {
        films: []
    },

    mounted() {
        axios.get('http://swapi.co/api/people/1').then(response => this.films = response.data.films);
    }
})