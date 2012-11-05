function Book() {
	this.currentPage = 0;
	this.totalPages = 2;
	var self = this;

	this.setup = function() {
		$(document).bind("swipeleft", function(){
			if (self.currentPage < self.totalPages-1) {
				self.currentPage++;
				self.stopAudio();
				$.mobile.changePage('#page-'+self.currentPage);
				self.updateAudio();
				self.startAudio();
			}
		});

		$(document).bind("swiperight", function(){
			if (self.currentPage > 0) {
				self.currentPage--;
				self.stopAudio();
				$.mobile.changePage('#page-'+self.currentPage);
				self.updateAudio();
				self.startAudio();
			}

		});

		this.audioElement = new Audio("");
		document.body.appendChild(this.audioElement);

		this.updateAudio();
		this.startAudio();
		console.log("start it");
	}

	this.updateAudio = function() {
		//$('#audioplayer source').attr('src', $('#canvas-'+self.currentPage).attr('audio'));
		self.audioElement.src = $('#canvas-'+self.currentPage).attr('audio');
	}

	this.startAudio = function() {
		self.audioElement.play();
	}
	this.stopAudio = function() {
		self.audioElement.pause();
	}
}

console.log("start it....");
var book = new Book();
book.setup();