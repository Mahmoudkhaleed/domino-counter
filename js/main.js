let add = document.querySelector('.add');

let count = document.querySelector('.count');

let refresh = document.querySelector('.refresh')

let resetScore = document.querySelector(`.res`);

let scoreOfScr1 = document.querySelector('.scr1');

let scoreOfScr2 = document.querySelector('.scr2');

let sub1 = document.querySelector('.sub1');

let sub2 = document.querySelector('.sub2');

let j = 0;

let v = 0;

resetScore.addEventListener('click', () => {

  if (scoreOfScr1.value >= 71 && scoreOfScr1.value > scoreOfScr2.value) {

    sub1.setAttribute('data-totalscore', `${j+=1}`);

    window.localStorage.setItem('j', `${j}`);

  } else if (scoreOfScr2.value >= 71 && scoreOfScr2.value > scoreOfScr1.value) {

    sub2.setAttribute('data-totalscore', `${v+=1}`)

    window.localStorage.setItem('v', `${v}`)

  }

})

if (window.localStorage.getItem('j') || window.localStorage.getItem('v')) {

  sub1.setAttribute('data-totalscore', `${window.localStorage.getItem('j')}`);

  sub2.setAttribute('data-totalscore', `${window.localStorage.getItem('v')}`);

  if (window.localStorage.getItem('v') === null) {

    sub2.setAttribute('data-totalscore', `0`)

  }

}

for (let i = 0; i < 2; i++) {

  // add click event to every buttons

  let incr = document.querySelector(`.in${[i + 1]}`);

  let decr = document.querySelector(`.de${[i + 1]}`);

  let scr = document.querySelector(`.scr${[i + 1]}`);

  let doubleIncr = document.querySelector(`.doublein${[i + 1]}`);

  let doubleDecr = document.querySelector(`.doublede${[i + 1]}`);

  let triIncr = document.querySelector(`.triin${[i + 1]}`);

  let triDecr = document.querySelector(`.tride${[i + 1]}`);

  let teNa = document.querySelector(`.teNa${[i + 1]}`);

  let findScr = scr.classList.contains(`scr${[i + 1]}`);

  let resall = document.querySelector(`.resall`);

  incr.addEventListener('click', () => {

    scr.value++

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, scr.value) : window.localStorage.setItem(`score${[i + 1]}`, scr.value)

  });

  decr.addEventListener('click', () => {

    scr.value--

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, scr.value) : window.localStorage.setItem(`score${[i + 1]}`, scr.value)

  });

  doubleIncr.addEventListener('click', () => {

    scr.value = +scr.value + 2;

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, scr.value) : window.localStorage.setItem(`score${[i + 1]}`, scr.value)

  });

  doubleDecr.addEventListener('click', () => {

    scr.value -= 2;

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, scr.value) : window.localStorage.setItem(`score${[i + 1]}`, scr.value)

  });

  triIncr.addEventListener('click', () => {

    scr.value = +scr.value + 3;

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, scr.value) : window.localStorage.setItem(`score${[i + 1]}`, scr.value)

  });

  triDecr.addEventListener('click', () => {

    scr.value -= 3;

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, scr.value) : window.localStorage.setItem(`score${[i + 1]}`, scr.value)

  });

  resetScore.addEventListener('click', () => {

    scr.value = 0;

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, 0) : window.localStorage.setItem(`score${[i + 1]}`, 0);

  });

  resall.addEventListener('click', () => {

    teNa.value = '';

    scr.value = 0;

    window.localStorage.setItem(`name${[i + 1]}`, '');

    findScr ? window.localStorage.setItem(`score${[i + 1]}`, 0) : window.localStorage.setItem(`score${[i + 1]}`, 0);

    teNa.removeAttribute('disabled');

    window.localStorage.removeItem(`disabled`);

    window.localStorage.removeItem(`j`);

    window.localStorage.removeItem(`v`);

    sub1.setAttribute('data-totalscore', 0);

    sub2.setAttribute('data-totalscore', 0)

  });

  // store scores in the localstorage

  if (window.localStorage.getItem(`disabled`)) {

    teNa.setAttribute("disabled", window.localStorage.getItem(`disabled`))

  }

  let reg = /\w+/ig;

  teNa.onblur = () => {

    teNa.value.match(reg) !== null ? teNa.setAttribute("disabled", '') : teNa.value.match(reg);

    window.localStorage.setItem(`name${[i + 1]}`, `${teNa.value.match(reg) !== null ? teNa.value : ''}`);

    teNa.value.match(reg) !== null ? window.localStorage.setItem(`disabled`, "disabled") : '';

    

  };

  // set the value to screen from local storage

  if (window.localStorage.getItem(`score${[i + 1]}`)) {

    findScr ? scr.value = window.localStorage[`score${[i + 1]}`] : scr.value = window.localStorage[`score${[i + 1]}`];

  } else if (window.localStorage.getItem(`score${[i + 1]}`) === null) {

    findScr ? scr.value = 0 : scr.value = 0

  }

  // add results to local storage

  if (window.localStorage.getItem(`name${[i + 1]}`)) {

    teNa.value = window.localStorage[`name${[i + 1]}`];

  } else if (window.localStorage.getItem(`name${[i + 1]}`) === null) {

    teNa.value = "";

  }

}

