new Vue({
  el: '.app',

  data: function() {
    return {
      information: {},
      pick: '',
      name: 'Ryan',
    };
  },

  mounted: function() {
    this.reset();
  },

  methods: {
    choose: function(choice) {
      this.pick = choice;
    },

    reset: function() {
      this.pick = '';

      fetch('http://nashville-pokemon.herokuapp.com/whos-that')
        .then((response) => response.json())
        .then((information) => {
          this.information = information;
          console.log(information);
        });
    }
  }
})
