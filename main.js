'use strict';
const Data = [
  {
    Colu: 1,
    Name: 'スペイン王国',
    Sta: new Date(1479, 0, 20),
    End: new Date(1873, 2, 19),
    color: 'orange',
  },
  {
    Colu: 1,
    Name: 'スペイン王国',
    Sta: new Date(1975,10,22),
    End: new Date(2020, 0),
    color: 'orange',
  },
  {
    Colu: 2,
    Name: '西フランク王国',
    Sta: new Date(843, 0),
    End: new Date(987, 0),
    color: 'pink',
  },
  {
    Colu: 2,
    Name: 'フランス王国',
    Sta: new Date( 987, 0),
    End: new Date(1792, 0),
    color: 'pink',
  },
  {
    Colu: 2,
    Name: 'フランク王国',
    Sta: new Date( 481, 0),
    End: new Date( 840, 0),
    color: 'pink',
  },
  {
    Colu: 3,
    Name: 'フランク王国',
    Sta: new Date( 481, 0),
    End: new Date( 840, 0),
    color: 'pink',
  },
  {
    Colu: 3,
    Name: '神聖ローマ帝国',
    Sta: new Date( 962, 0),
    End: new Date(1806, 0),
    color: 'gray',
  },
];
let Grow = 0.3
function CreateBaseLay() {
  let StYe = 200
  let Intv = 100
  let EdYe = 2100
  let Scal = 10000000 * (1 / Grow)
  let Repe = (EdYe - StYe) / Intv + 1
  let Se01 = new Date(StYe, 0).getTime() / 1000;
  let Se02 = new Date(StYe + Intv, 0).getTime() / 1000;
  let Heig = (Se02 - Se01) / Scal;
  for (let i = 1; i <= Repe; i++) {
    function CreateTimeBox() {
      const Cdiv = document.createElement('div');
      Cdiv.classList.add('LeftTimeBox');
      Cdiv.textContent = `${StYe}年`;
      Cdiv.style.height = `${Heig}px`;
      const TimeArea = document.getElementById('TimeArea');
      TimeArea.appendChild(Cdiv);
    }
    function CreateDataBox() {
      const Cdiv = document.createElement('div');
      Cdiv.classList.add('MainTimeBox');
      Cdiv.textContent = '';
      Cdiv.style.height = `${Heig}px`;
      const DataArea = document.getElementById('DataArea');
      DataArea.appendChild(Cdiv);
    }
    CreateTimeBox();
    CreateDataBox();
    StYe += Intv;
  }
}
function CreateDataLay() {
  let StYe = 200
  let Intv = 100
  let EdYe = 2100
  let Scal = 10000000 * (1 / Grow)
  let Repe = (EdYe - StYe) / Intv + 1
  let Se01 = new Date(StYe, 0).getTime() / 1000;
  let Se02 = new Date(StYe + Intv, 0).getTime() / 1000;
  let Heig = (Se02 - Se01) / Scal;
  for (let i = 0; i < Data.length; i++) {
    let DaSt = (Data[i].Sta.getTime() / 1000)
    let DaEd = (Data[i].End.getTime() / 1000)
    let Heig = (DaEd - DaSt) / Scal;
    let Posi = (DaSt - Se01) / Scal;
    
    const Cdiv = document.createElement('div');
    
    Cdiv.innerHTML = `
    <p class="Sta">${Data[i].Sta.getFullYear()}年</p>
    <p class="Txt">${Data[i].Name}</p>
    <p class="End">${Data[i].End.getFullYear()}年</p>
    `;
    Cdiv.classList.add('DataBox');
    Cdiv.style.height = `${Heig}px`;
    Cdiv.style.background = `${Data[i].color}`
    Cdiv.style.position = 'absolute';
    Cdiv.style.top = `${Posi}px`;
    Cdiv.style.gridColumn = Data[i].Colu;
    const Dlay = document.querySelector('.DataLay');
    Dlay.appendChild(Cdiv);
  }
}
CreateBaseLay();
CreateDataLay();
//ボタンクリックで縮尺を変更する
{
  const Gbtn = document.getElementById('Gbtn');
  Gbtn.addEventListener('click', () => {
    const LBox = document.querySelectorAll('#TimeArea > div');
    LBox.forEach((div) => {
      div.remove();
    });
    const MBox = document.querySelectorAll('#DataArea > div');
    MBox.forEach((div) => {
      div.remove();
    });
    const DBox = document.querySelectorAll('.DataLay > div');
    DBox.forEach((div) => {
      div.remove();
    });
    Grow += 0.1;
    CreateBaseLay();
    CreateDataLay();
  });
  const Sbtn = document.getElementById('Sbtn');
  Sbtn.addEventListener('click', () => {
    const LBox = document.querySelectorAll('#TimeArea > div');
    LBox.forEach((div) => {
      div.remove();
    });
    const MBox = document.querySelectorAll('#DataArea > div');
    MBox.forEach((div) => {
      div.remove();
    });
    const DBox = document.querySelectorAll('.DataLay > div');
    DBox.forEach((div) => {
      div.remove();
    });
    Grow -= 0.1;
    CreateBaseLay();
    CreateDataLay();
  });
}
