function Book() {
	this.currentPage = -1;
	this.totalPages = 11;
	var self = this;

	this.setup = function() {
		
		$(document).bind("swipeleft", function(){
			if (self.currentPage < self.totalPages-1) {
				self.currentPage++;
				self.stopAudio();
				$.mobile.changePage('#page-'+self.currentPage, { transition: "slide"});
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


		this.audioElement = document.getElementById("audio");
		this.updateAudio();

		this.startAudio();

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

$(document).ready(function(){
	height = $(window).height();
	width = $(window).width();

	$('.page-wrapper').attr('style',"height:"+height+";width:"+width);
	var book = new Book();
	book.setup();
});