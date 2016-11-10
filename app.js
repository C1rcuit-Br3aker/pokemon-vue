new Vue({
  el: '.app',

  data: function() {
    return {
      pick: null,
      choices: [],
      whosThat: {},
    };
  },

  mounted: function() {
    this.reset();
  },

  methods: {
    reset: function() {
      this.pick = null;
      var component = this;
      fetch('http://nashville-pokemon.herokuapp.com/whos-that')
        .then(function(res) { return res.json() })
        .then(function (info) {
          console.log(info);
          component.whosThat = info.whosThat;
          component.choices = info.choices;
        });
    },
    choose: function(choice) {
      this.pick = choice;
    }
  }
})
