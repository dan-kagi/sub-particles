const questions = [
  {
    id: 1,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'Na',
        proton: 11,
        neutron: 12,
        eletron: 11,
        massNumber: 23,
        charge: 0,
      },
    ],
    answer: [11, 12, 11, 0],
  },
  {
    id: 2,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'Mg',
        proton: 12,
        neutron: 14,
        eletron: 12,
        massNumber: 26,
        charge: 0,
      },
      {
        atom: 'P',
        proton: 15,
        neutron: 11,
        eletron: 15,
        massNumber: 31,
        charge: 0,
      },
    ],
    answer: [12, 15, 14, 16, 12, 15, 0, 0],
  },
  {
    id: 3,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        id: 'O16',
        atom: 'O',
        proton: 8,
        neutron: 8,
        eletron: 8,
        massNumber: 16,
        charge: 0,
      },
      {
        id: 'O17',
        atom: 'O',
        proton: 8,
        neutron: 9,
        eletron: 8,
        massNumber: 17,
        charge: 0,
      },
      {
        id: 'O18',
        atom: 'O',
        proton: 8,
        neutron: 10,
        eletron: 8,
        massNumber: 18,
        charge: 0,
      },
    ],
    answer: [8, 8, 8, 8, 9, 10, 8, 8, 8, 0, 0, 0],
  },
  {
    id: 4,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'C',
        proton: 6,
        neutron: 6,
        eletron: 6,
        massNumber: 12,
        charge: 0,
      },
      {
        atom: 'C',
        proton: 6,
        neutron: 7,
        eletron: 6,
        massNumber: 13,
        charge: 0,
      },
      {
        atom: 'C',
        proton: 6,
        neutron: 8,
        eletron: 6,
        massNumber: 14,
        charge: 0,
      },
    ],
    answer: [6, 6, 6, 6, 7, 8, 6, 6, 6, 0, 0, 0],
  },
  {
    id: 5,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'O',
        proton: 8,
        neutron: 8,
        eletron: 8,
        massNumber: 16,
        charge: 0,
      },
      {
        atom: 'O',
        proton: 8,
        neutron: 8,
        eletron: 10,
        massNumber: 16,
        charge: '-2',
      },
    ],
    answer: [8, 8, 8, 8, 8, 10, 0, -2],
  },
  {
    id: 6,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'Na',
        proton: 11,
        neutron: 12,
        eletron: 10,
        massNumber: 23,
        charge: '+1',
      },
      {
        atom: 'Cl',
        proton: 17,
        neutron: 18,
        eletron: 18,
        massNumber: 35,
        charge: '-1',
      },
    ],
    answer: [11, 17, 12, 18, 10, 18, 1, -1],
  },
  {
    id: 7,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'Ga',
        proton: 31,
        neutron: 38,
        eletron: 28,
        massNumber: 69,
        charge: '+3',
      },
      {
        atom: 'S',
        proton: 16,
        neutron: 16,
        eletron: 18,
        massNumber: 32,
        charge: '-2',
      },
    ],
    answer: [31, 16, 38, 16, 28, 18, +3, -2],
  },
  {
    id: 8,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'I',
        proton: 53,
        neutron: 74,
        eletron: 54,
        massNumber: 127,
        charge: '-1',
      },
      {
        atom: 'N',
        proton: 7,
        neutron: 7,
        eletron: 10,
        massNumber: 14,
        charge: '-3',
      },
    ],
    answer: [53, 7, 74, 7, 54, 10, -1, -3],
  },
  {
    id: 9,
    question: 'Determine o número de prótons, nêutrons, elétrons e a carga.',
    elements: [
      {
        atom: 'Ca',
        proton: 20,
        neutron: 20,
        eletron: 18,
        massNumber: 40,
        charge: '+2',
      },
      {
        atom: 'Fe',
        proton: 26,
        neutron: 30,
        eletron: 23,
        massNumber: 56,
        charge: '+3',
      },
    ],
    answer: [20, 26, 20, 30, 18, 23, +2, +3],
  },
];

const messages = [
  { emoji: '&#128512;', msg: 'Parabéns, Você Acertou!!!!' },
  { emoji: '&#128546;', msg: 'Errado, Refaça o Exercício!!!!' },
];

function createCard(question) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', question.id);
  const pEmoji = document.createElement('p');
  pEmoji.innerHTML = 'Preencha as lacunas.';
  const pQuestion = document.createElement('p');
  pQuestion.innerHTML = `<span>${question.id} - </span>${question.question}`;
  const table = document.createElement('table');
  const lines = [];
  for (let i = 0; i < 5; i++) {
    const line = document.createElement('tr');
    lines.push(line);
  }

  for (let j = 0; j < question.elements.length + 1; j++) {
    const th = document.createElement('th');
    if (j === 0) {
      th.textContent = 'Partículas';
    } else {
      if (question.elements[j - 1].charge === 0) {
        th.innerHTML = `<sub>${question.elements[j - 1].proton}</sub>${
          question.elements[j - 1].atom
        }<sup>${question.elements[j - 1].massNumber}</sup>`;
      } else {
        th.innerHTML = `<sub>${question.elements[j - 1].proton}</sub>${
          question.elements[j - 1].atom
        }<sup>${question.elements[j - 1].charge}</sup> (A = ${
          question.elements[j - 1].massNumber
        })`;
      }
    }
    lines[0].appendChild(th);
  }

  for (let line of lines) {
    table.appendChild(line);
  }
  const rowInfo = ['Prótons', 'Nêutrons', 'Elétrons', 'Carga'];
  for (let k = 0; k < 4; k++) {
    for (let w = 0; w < question.elements.length + 1; w++) {
      const td = document.createElement('td');
      if (w === 0) {
        td.textContent = rowInfo[k];
      } else {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        td.appendChild(input);
      }
      lines[k + 1].appendChild(td);
    }
  }

  card.appendChild(pEmoji);
  card.appendChild(pQuestion);
  card.appendChild(table);
  const button = document.createElement('button');
  button.textContent = 'Checar Resposta';
  button.addEventListener('click', () => {
    const card = document.getElementById(question.id);
    const inputs = card.querySelectorAll('input');
    for (let h = 0; h < inputs.length; h++) {
      const check = checkResult(inputs[h].value, question.answer[h]);
      if (!check) {
        pEmoji.innerHTML = messages[1].emoji + messages[1].msg;
        if (pEmoji.className === 'pEmojiCorrect') {
          pEmoji.classList.remove('pEmogiCorrect');
        }
        pEmoji.setAttribute('class', 'pEmojiError');
        return;
      }
    }
    if (pEmoji.className === 'pEmojiError') {
      pEmoji.classList.remove('pEmogiError');
    }
    pEmoji.setAttribute('class', 'pEmojiError');
    pEmoji.innerHTML = messages[0].emoji + messages[0].msg;
    pEmoji.setAttribute('class', 'pEmojiCorrect');
  });
  card.appendChild(button);
  return card;
}

function checkResult(input, stored) {
  if (Number(input.trim()) === stored) {
    return true;
  } else {
    return false;
  }
}

for (let question of questions) {
  const card = createCard(question);
  const main = document.querySelector('main');
  main.appendChild(card);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
