// Kodilla task 11_5 


function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		
		this.$element = $('<button>');
		this.$element.text(this.text);
		
		this.$element.click(function() {
			alert(self.text);
		});

		$('body').append(this.$element,'\xa0\xa0\xa0\xa0'); //​ lub '&nbsp; &nbsp;'
	}
}

var btn1 = new Button('Button 1');
btn1.create();

var btn2 = new Button('Button 2');
btn2.create();

var btn3 = new Button('Botton 3');
btn3.create();
















