$(document).ready(function () {
    $('.menu-icons').click(function () {
        $(this).toggleClass('toggle');
        $('.menu').toggleClass('toggle');
        $('.menu-item').toggleClass('toggle');
        $('.social-nav').toggleClass('toggle')
        $('.extra-nav').toggleClass('toggle')
    });
});

$(window).scroll(function (e){
    parallax();
});

function parallax(){
    let scrolled = $(window).scrollTop();
    $('.carousel-inner').css('bottom', -(scrolled / 2) + 'px');

    $('.experience-text').css('bottom', -(scrolled / 32) + 'px');

    $('footer').css('top', (scrolled / 10) + 'px');
}


// Other Section scrollmagic

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
	triggerElement: ".event.event-rec",
	triggerHook: "onEnter",
	duration: "100%"
}).setPin(".other-row .event.event-retreat .pinWrapper",{
	pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".event.event-rec",
	triggerHook: "onEnter",
	duration: "200%"
}).setPin(".other-row .event.event-rec .pinWrapper",{
	pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".event.event-wellness",
	triggerHook: "onEnter",
	duration: "200%"
}).setPin(".other-row .event.event-wellness .pinWrapper",{
	pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
	triggerElement: ".event.event-bootcamp",
	triggerHook: "onEnter",
	duration: "100%"
}).setPin(".other-row .event.event-bootcamp .pinWrapper",{
	pushFollowers: false
}).addTo(controller);


const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = testimonialsContainer.querySelector('.testimonial');
const logo = testimonialsContainer.querySelector('.logo');
const username = testimonialsContainer.querySelector('.username');
const role = testimonialsContainer.querySelector('.role');

const testimonials = [
    {
        "name": "Miyah Myles",
        "position": "Marketing",
        "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
		"text": "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    {
        "name": "June Cha",
        "position": "Software Engineer",
        "photo": "https://randomuser.me/api/portraits/women/44.jpg",
		"text": "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
    },
    {
        "name": "Iida Niskanen",
        "position": "Data Entry",
        "photo": "https://randomuser.me/api/portraits/women/68.jpg",
		"text": "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
    },
    {
        "name": "Renee Sims",
        "position": "Receptionist",
        "photo": "https://randomuser.me/api/portraits/women/65.jpg",
		"text": "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
    },
    {
        "name": "Jonathan Nunfiez",
        "position": "Graphic Designer",
        "photo": "https://randomuser.me/api/portraits/men/43.jpg",
		"text": "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
    },
    {
        "name": "Sasha Ho",
        "position": "Accountant",
        "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
		"text": "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
    },
    {
        "name": "Veeti Seppanen",
        "position": "Director",
        "photo": "https://randomuser.me/api/portraits/men/97.jpg",
		"text": "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
    }
];
let idx = 1;


function updateTestimonial() {
	let { name, position, photo, text } = testimonials[idx];
	
	testimonial.innerHTML = text;
	logo.src  = photo;
	username.innerHTML = name;
	role.innerHTML = position;
	
	idx++;
	if(idx > testimonials.length -1 ) {
		idx = 0;
	}
}

setInterval(updateTestimonial, 10000);





