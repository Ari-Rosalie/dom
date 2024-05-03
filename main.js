
const firstTask = document.querySelector('section');

firstTask.classList.add('featured');




const secondTask = document.createElement('article');
secondTask.innerHTML = `<article>
<img
  src="./images/paul-gilmore-unsplash.jpg"
  alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
  You -- yes you! You're an over-planner, I can tell. It's time to stop
  planning so much and instead focusing on relaxing. Taking a break at all is
  so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
  <p>
    <span><strong>Read Time:</strong> 4 Minutes</span
    ><a href="#">Read more...</a>
  </p>
</aside>
</article>
`

const partTwo = document.querySelector('section.posts');

partTwo.after(secondTask);

// didnt know if instructions wanted it as siblings or child
// postsSection.appendChild(secondTask);

// didnt work
// postsSection.insertBefore(articles[1], articles[0]);


const articles = partTwo.querySelectorAll('article');

const firstArticle = articles[0];
firstArticle.remove();

    
const secondArticle = articles[1];
secondArticle.after(firstArticle);


const thirdTask = document.querySelector('header nav ul');
nav.removeChild(nav.firstElementChild);

const fourthTask = articles[0];
const partFour = fourthTask.querySelector('aside p span');
partFour.remove();

const lastArticle = partTwo.lastElementChild;
partTwo.removeChild(lastArticle);




