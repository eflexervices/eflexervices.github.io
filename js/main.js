jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

	//Include html
	//$(function(){
     // $("#includedContent1").load(""); 
    //});
	
      //Ajax contact
			$(".contact-form").submit(function() {
			var rd = this;
			var url = "sendemail.php"; // the script where you handle the form input.
			$.ajax({
			type: "POST",
			url: url,
			data: $(".contact-form").serialize(), // serializes the form's elements.
			success: function(data)
			{
			//alert("Mail sent!"); // show response from the php script.
			$(rd).prev().text("Email sent!").fadeIn().delay(3000).fadeOut();
			}
			});
			return false; // avoid to execute the actual submit of the form.
			});

	
	/*Ajax contact
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});*/
	

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 400);
	});

	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});

	//Isotope
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
});

document.querySelector( "#navbt-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

  var menu_elements = document.querySelectorAll('.menu>li'),
    menu_length = menu_elements.length;
for (var i = 0; i < menu_length; i++) {
    menu_elements[i].addEventListener('click', function (e) {
        var target = document.querySelector('.container>.' + e.target.classList[0]); // clicked element
        Array.prototype.filter.call(target.parentNode.children, function (siblings) {
            siblings.style.display = 'none'; // hide sibling elements
        });
        target.style.display = 'block'; // show clicked element
    });
}