$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

document.addEventListener("mousemove", function(event) {
  var circle = document.querySelector(".neon-circle");
  var x = event.clientX - circle.offsetWidth / 2;
  var y = event.clientY - circle.offsetHeight / 2;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
});

const button = document.getElementById('download-resume');
button.addEventListener('click', () => {
  const fileUrl = 'https://www.dropbox.com/s/yuwyubyshs39c61/K.%20Sri%20Sai%20Sri%20Vamsi%20Krishna_BMU.pdf?dl=0'; // Replace with your file URL
  const fileName = 'file.pdf'; // Replace with your desired file name
  
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.target = '_blank';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
