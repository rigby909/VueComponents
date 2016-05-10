document.addEventListener("DOMContentLoaded", function(){
	Vue.component('letter', {
		data: function() {
			return {visible:false};
		},
		template: '<div class="letter" v-on:click="open"><div class="letter-content" v-show="visible">\{{word}}</div></div>',
		props: ['word'],
		methods: {
			open: function() {
				if(this.visible != true) {
					this.$emit('opened');
				}
				this.visible = true;
			}
		}
	})
	new Vue ({
		el: "#game",
		data: function() {
			return {letters: [], counter:0
			};
		},
		ready: function() {
			var word = "Привет";
			this.letters = word.split('');
		},
		methods: {
			onOpen: function() {
				this.counter++;
			}
		}
	})
	
});