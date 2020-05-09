var item = document.getElementById('listTestimonials')

item.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) item.scrollLeft += 50;
  else item.scrollLeft -= 50;
});