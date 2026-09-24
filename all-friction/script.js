document.documentElement.classList.add('js');
var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Typewriter on the home title (irregular timing, feels hand-typed)
var el = document.getElementById('typed');
if (el && !reduce) {
  var text = el.textContent, i = 0;
  el.textContent = '';
  (function type() {
    if (i < text.length) { el.textContent += text.charAt(i++); setTimeout(type, 90 + Math.random() * 150); }
  })();
}

// Pop-up on scroll: anything with class "pop"; set style="--i:n" to stagger
var pops = document.querySelectorAll('.pop');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.2 });
  pops.forEach(function (p) { io.observe(p); });
} else { pops.forEach(function (p) { p.classList.add('in'); }); }

// Feedback form placeholder (not connected to a server yet)
var form = document.getElementById('feedback');
if (form) form.addEventListener('submit', function (e) {
  e.preventDefault(); form.style.display = 'none';
  document.getElementById('thanks').style.display = 'block';
});


const levels = document.querySelectorAll(".level");

levels.forEach(level => {
    level.addEventListener("click", () => {

        // Toggle the button's open state
        level.classList.toggle("open");

        // Get the content immediately after this button
        const content = level.nextElementSibling;

        if (level.classList.contains("open")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0px";
        }
    });
});