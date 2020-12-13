let sidebartoggle = document.querySelector('body');
let sidebar = document.querySelector('.sidebar');
sidebartoggle.addEventListener('click', ev => {
  if (ev.target.classList.contains('fa-bars')) {
    sidebar.style.width = '100%';
    document.querySelector('body').style.overflow = 'hidden';
  } else if (ev.target.classList.contains('fa-times')) {
    sidebar.style.width = 0;
    document.querySelector('body').style.overflow = 'auto';
  }
});

document.addEventListener('scroll', ev => {
  let moveuparrow = document.querySelector('.moveuparrow');
  if (window.pageYOffset > 100) {
    moveuparrow.style.opacity = 1;
  } else {
    moveuparrow.style.opacity = 0;
  }
});

let moveuparrow = document.querySelector('.moveuparrow');
moveuparrow.addEventListener('click', evt => {
  window.scrollTo(0, 0);
});

let departments = [
  {
    name: 'Cardiology',
    title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
    content: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
    image: 'image3',
  },
  {
    name: 'neurology',
    title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
    content: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
    image: 'image7',
  },
  {
    name: 'hepatology',
    title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
    content: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
    image: 'image8',
  },
  {
    name: 'pediatrics',
    title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
    content: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
    image: 'image9',
  },
  {
    name: 'eye care',
    title: 'Est eveniet ipsam sindera pad rone matrelat sando reda',
    content: 'Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel',
    image: 'image10',
  },
];

let a = document.getElementById('a9').querySelector('.left-section');
a.addEventListener('click', evt => {
  if (evt.target.tagName === 'P') {
    Array.from(a.children).forEach(value => {
      if (value.classList.contains('active')) {
        value.classList.remove('active');
      }
    });
    evt.target.classList.add('active');
    let data = departments.find((value, index) => value.name.toLowerCase() ===
        evt.target.textContent.toLowerCase());

    renderdepartment(data);

  }
});

function renderdepartment(data) {

  let snippet = `
                
                <div class="info-wrapper">

                    <h3>${data.name}</h3>
                    <p>${data.content}</p>

                </div>

                <div class="image-wrapper" style="background-image: url(assets/images/${data.image}.jpg)"></div>
                
                `;

  document.getElementById('a9').
      querySelector('.right-section').innerHTML = snippet;

}

let b = document.getElementById('a11');
b.addEventListener('click', ev => {
  if (ev.target.classList.contains('question')) {
    ev.target.nextElementSibling.classList.toggle('hide');
    ev.target.lastElementChild.firstElementChild.classList.toggle('hide');
    ev.target.lastElementChild.lastElementChild.classList.toggle('hide');
  }
});

let images = [
  'image6',
  'image11',
  'image12',
  'image13',
  'image14',
  'image15',
  'image16',
  'image17'];

let c = document.getElementById('a13').querySelector('.bottom-section');
images.forEach((value, index) => {
  let snippet = `
                
             <div class="image-wrapper">
                <div class="box" style="background-image: url(assets/images/${value}.jpg)"></div>
            </div>

                `;
  c.innerHTML += snippet;
});

let d = document.querySelector('.navlinks-wrapper');
d.addEventListener('click', evt => {
  if (evt.target.tagName === 'A') {
    sidebar.style.width = 0;
    document.querySelector('body').style.overflow = 'auto';
  }
});

let testimonialindex = 0;

function testimonialslider() {

  let slides = Array.from(
      document.getElementById('a12').querySelectorAll('.wrapper > .box'));

  let dots = Array.from(document.getElementById('a12').
      querySelector('.dot-wrapper').
      querySelectorAll('.small-dot'));

  slides.forEach(value => {
    value.style.display = 'none';
  });

  dots.forEach(value => {
    value.classList.remove('active');
  });

  if (testimonialindex > slides.length - 1) {
    testimonialindex = 0;
  }

  if (window.innerWidth >= 768) {

    if (testimonialindex > slides.length - 2) {
      slides[testimonialindex].style.display = 'flex';
      slides[0].style.display = 'flex';
    } else {
      slides[testimonialindex].style.display = 'flex';
      slides[testimonialindex + 1].style.display = 'flex';
    }

  } else {
    slides[testimonialindex].style.display = 'flex';
  }

  dots[testimonialindex].classList.add('active');

  testimonialindex++;

  setTimeout(testimonialslider, 4000);

}

testimonialslider();


