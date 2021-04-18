const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

function shadow(e) {
  // Get size of thing being hovered over
  // const width = hero.offsetWidth;
  const { offsetWidth: width, offsetHeight: height } = hero;
  // Get location of cursor
  let { clientX: x, clientY: y } = e;
  // let { offsetX: x, offsetY: y } = e;

  // If check below no longer necessary since changed to use clientX and clientY
  // clientX/clientY: Gives us coordinates relative to top left corner of browser window (what we want)
  // offsetX/offsetY: Give us coordinates relative to top left corner of target element
  // // Despite listening to mousemove on hero, if there are children elements being hovered over, will get x and y of those elements; must do normalization - if thing being hovered over is h1 instead of hero, modify x and y values so they're consistent
  // // e.target is thing it triggered on, whereas this is thing being listened on (hero)
  // if (this !== e.target) {
  //   x = x + e.target.offsetLeft;
  //   y = y + e.target.offsetTop;
  // }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
