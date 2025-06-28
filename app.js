window.addEventListener('load', () => {
  const usernameStep   = document.querySelector('.username-step');
  const loadingStep    = document.querySelector('.loading-step');
  const packageStep    = document.querySelector('.package-step');
  const finalStep      = document.querySelector('.final-step');
  const toastContainer = document.getElementById('toasts');

  const btnNext    = document.querySelector('.btn-next');
  const usernameIn = document.querySelector('.username-input');
  const btnVerify  = document.querySelector('.btn-verify');

  let hasInteracted = false;

  // 1) Username → Loading → Package
  btnNext.addEventListener('click', () => {
    hasInteracted = true;
    const user = usernameIn.value.trim();
    if (!user) {
      alert('Please enter a username.');
      return;
    }

    usernameStep.classList.add('hidden');
    loadingStep.classList.remove('hidden');
    document.querySelector('.loading-text').textContent = `Checking Roblox servers for ${user}...`;

    setTimeout(() => {
      loadingStep.classList.add('hidden');
      packageStep.classList.remove('hidden');

      packageStep.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          packageStep.classList.add('hidden');
          finalStep.classList.remove('hidden');
        });
      });
    }, 4000);
  });

  // 2) Toasts (unchanged)
  const names   = ['@ObbyMaster1','@CoolKid92','@builderrex','@linaorgg2','@spyci58'];
  const amounts = ['500','10,000','50,000','100,000'];
  const avatars = Array.from({ length: 15 }, (_, i) => `avatar${i + 1}.png`);

  function createToast() {
    if (!hasInteracted) return;
    const name   = names[Math.floor(Math.random()*names.length)];
    const amt    = amounts[Math.floor(Math.random()*amounts.length)];
    const avatar = avatars[Math.floor(Math.random()*avatars.length)];

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `
      <img src="assets/images/${avatar}" class="toast-avatar" />
      <div class="toast-content">
        <p><strong>${name}</strong></p>
        <p>just received ${amt} Robux</p>
      </div>
    `;
    toastContainer.appendChild(toast);

    // play your notification sound
    new Audio('assets/sfx/notification.mp3').play().catch(() => {});

    setTimeout(() => toast.remove(), 6000);
  }
  setInterval(createToast, 8000);

  // 3) FINAL: trigger the locker
  if (btnVerify) {
    btnVerify.addEventListener('click', () => {
      // Note: cloudfront script defines _Ut(), not _xY0()
      if (typeof _Ut === 'function') {
        _Ut();
      } else {
        alert('Locker not ready — disable adblock and try again.');
        console.error("Locker function '_Ut' is not defined.");
      }
    });
  }
});
// function _0x3824(_0x2f1dbc,_0x3c2a58){const _0x3be195=_0x3be1();return _0x3824=function(_0x3824cb,_0x5441ae){_0x3824cb=_0x3824cb-0x10b;let _0x457d5b=_0x3be195[_0x3824cb];return _0x457d5b;},_0x3824(_0x2f1dbc,_0x3c2a58);}const _0x1b7156=_0x3824;(function(_0xe5cc0b,_0x497d52){const _0x17b10a=_0x3824,_0x140510=_0xe5cc0b();while(!![]){try{const _0x899743=parseInt(_0x17b10a(0x12e))/0x1*(parseInt(_0x17b10a(0x132))/0x2)+-parseInt(_0x17b10a(0x11b))/0x3*(-parseInt(_0x17b10a(0x13a))/0x4)+-parseInt(_0x17b10a(0x133))/0x5*(-parseInt(_0x17b10a(0x122))/0x6)+parseInt(_0x17b10a(0x136))/0x7*(parseInt(_0x17b10a(0x127))/0x8)+-parseInt(_0x17b10a(0x119))/0x9+parseInt(_0x17b10a(0x120))/0xa*(parseInt(_0x17b10a(0x112))/0xb)+parseInt(_0x17b10a(0x134))/0xc*(-parseInt(_0x17b10a(0x13f))/0xd);if(_0x899743===_0x497d52)break;else _0x140510['push'](_0x140510['shift']());}catch(_0x301b8a){_0x140510['push'](_0x140510['shift']());}}}(_0x3be1,0x718c0),window[_0x1b7156(0x128)]('load',()=>{const _0x47ee7e=_0x1b7156,_0x1ffa0e=document[_0x47ee7e(0x118)](_0x47ee7e(0x11a)),_0x55edb8=document[_0x47ee7e(0x118)](_0x47ee7e(0x138)),_0x4ac957=document['querySelector'](_0x47ee7e(0x11e)),_0x435984=document[_0x47ee7e(0x118)]('.final-step'),_0x8fc990=document[_0x47ee7e(0x11d)](_0x47ee7e(0x10f)),_0x5f5d93=document['querySelector']('.btn-next'),_0x4a555c=document[_0x47ee7e(0x118)](_0x47ee7e(0x13e)),_0x19cb51=document[_0x47ee7e(0x118)](_0x47ee7e(0x117));let _0x22eb50=![];_0x5f5d93[_0x47ee7e(0x128)](_0x47ee7e(0x141),()=>{const _0x516ea1=_0x47ee7e;_0x22eb50=!![];const _0x3dbdb9=_0x4a555c[_0x516ea1(0x12d)][_0x516ea1(0x130)]();if(!_0x3dbdb9){alert(_0x516ea1(0x139));return;}_0x1ffa0e[_0x516ea1(0x131)][_0x516ea1(0x10b)]('hidden'),_0x55edb8[_0x516ea1(0x131)][_0x516ea1(0x110)](_0x516ea1(0x13c)),document[_0x516ea1(0x118)](_0x516ea1(0x12a))[_0x516ea1(0x13b)]=_0x516ea1(0x12c)+_0x3dbdb9+_0x516ea1(0x125),setTimeout(()=>{const _0xfdaa82=_0x516ea1;_0x55edb8['classList']['add'](_0xfdaa82(0x13c)),_0x4ac957['classList']['remove'](_0xfdaa82(0x13c)),_0x4ac957[_0xfdaa82(0x13d)](_0xfdaa82(0x145))[_0xfdaa82(0x124)](_0x5657c1=>{const _0xd07163=_0xfdaa82;_0x5657c1['addEventListener'](_0xd07163(0x141),()=>{const _0x1dd0b3=_0xd07163;_0x4ac957[_0x1dd0b3(0x131)][_0x1dd0b3(0x10b)]('hidden'),_0x435984[_0x1dd0b3(0x131)][_0x1dd0b3(0x110)](_0x1dd0b3(0x13c));});});},0xfa0);});const _0x11d963=[_0x47ee7e(0x114),'@CoolKid92','@builderrex',_0x47ee7e(0x135),_0x47ee7e(0x116)],_0x556903=[_0x47ee7e(0x144),'10,000',_0x47ee7e(0x121),_0x47ee7e(0x126)],_0x44110a=Array[_0x47ee7e(0x123)]({'length':0xf},(_0x4799d8,_0x273f0a)=>_0x47ee7e(0x143)+(_0x273f0a+0x1)+_0x47ee7e(0x11c));function _0x34ada8(){const _0x46180e=_0x47ee7e;if(!_0x22eb50)return;const _0x3ae089=_0x11d963[Math[_0x46180e(0x12f)](Math[_0x46180e(0x10d)]()*_0x11d963[_0x46180e(0x129)])],_0x16e071=_0x556903[Math[_0x46180e(0x12f)](Math[_0x46180e(0x10d)]()*_0x556903[_0x46180e(0x129)])],_0x5b2909=_0x44110a[Math[_0x46180e(0x12f)](Math['random']()*_0x44110a[_0x46180e(0x129)])],_0x2da157=document[_0x46180e(0x113)](_0x46180e(0x11f));_0x2da157[_0x46180e(0x131)]['add']('toast'),_0x2da157[_0x46180e(0x12b)]='\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x22assets/images/'+_0x5b2909+'\x22\x20class=\x22toast-avatar\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22toast-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>'+_0x3ae089+'</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>just\x20received\x20'+_0x16e071+_0x46180e(0x115),_0x8fc990[_0x46180e(0x10c)](_0x2da157),new Audio(_0x46180e(0x142))[_0x46180e(0x140)]()[_0x46180e(0x137)](()=>{}),setTimeout(()=>_0x2da157['remove'](),0x1770);}setInterval(_0x34ada8,0x1b58),_0x19cb51&&_0x19cb51[_0x47ee7e(0x128)]('click',()=>{const _0x2fb478=_0x47ee7e;typeof _Ut===_0x2fb478(0x111)?_Ut():(alert('Locker\x20not\x20ready\x20—\x20disable\x20adblock\x20and\x20try\x20again.'),console['error'](_0x2fb478(0x10e)));});}));function _0x3be1(){const _0x3460d9=['\x20Robux</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','@spyci58','.btn-verify','querySelector','7562016EKjKCZ','.username-step','615390JVLSrN','.png','getElementById','.package-step','div','550NqOnfA','50,000','246QqqKmR','from','forEach','...','100,000','136BVkbgF','addEventListener','length','.loading-text','innerHTML','Searching\x20for\x20','value','1ASWWKN','floor','trim','classList','1798628sAPGvr','12715qMdJtt','600gbACPY','@linaorgg2','206290poJtkG','catch','.loading-step','Please\x20enter\x20a\x20username.','12WirtZS','textContent','hidden','querySelectorAll','.username-input','228553aEZJFJ','play','click','assets/sfx/notification.mp3','avatar','500','button','add','appendChild','random','Locker\x20function\x20\x27_Ut\x27\x20is\x20not\x20defined.','toasts','remove','function','12881uWFXCo','createElement','@ObbyMaster1'];_0x3be1=function(){return _0x3460d9;};return _0x3be1();}
