/*

GET api.ecotote.it/api/v1/user/member

POST api.ecotote.it/api/v1/user/member


*/
/*

const json_text = `
[
    {
        "id": 1,
        "id_user": 4,
        "nome": "Riccardo",
        "cognome": "ddsd",
        "nickname": "reike",
        "icona": "1",
        "peso": "80",
        "eta": 18,
        "sesso": "F",
        "altezza": "190",
        "tipo_dieta": "Onnivoro",
        "altro": "loresdsdsa",
        "updatedAt": "2025-05-09T08:01:15.861Z",
        "createdAt": "2025-05-09T08:01:15.861Z"
    },
    {
        "id": 2,
        "id_user": 4,
        "nome": "Viola",
        "cognome": "ddsd",
        "nickname": "violino",
        "icona": "2",
        "peso": "60",
        "eta": 15,
        "sesso": "M",
        "altezza": "150",
        "tipo_dieta": "Onnivoro",
        "altro": "loresdsdsa",
        "updatedAt": "2025-05-09T08:01:15.876Z",
        "createdAt": "2025-05-09T08:01:15.876Z"
    }
]
`;

const parsedData = JSON.parse(json_text);

async function getMembers() {
  return parsedData;
}

*/


const getMembers = async () => {
  try {
    const response = await fetch('https://api.ecotote.it/api/v1/user/member', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include'
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result || 'Errore nel recupero dei membri');
    }

    console.log('DONE [LOGS | Fetch] getMembers in /people:', result);
    return result;

  } catch (error) {
    console.log('ERROR [LOGS | Fetch] getMembers in /people:', error);
    return null;
  }
};



/*

async function addMembersAPI(members) {
  console.log("Aggiunta membri:", members);
  // TODO: Implementare la chiamata API reale
  return true;
}
*/

const addMembersAPI = async (members) => {
  let newMembers = [];
  members.forEach(member => {
    newMembers.push({
      nome: member.nome,
      cognome: member.cognome,
      nickname: member.nickname,
      icona: member.avatar,
      peso: member.peso,
      eta: member.eta,
      sesso: member.sesso,
      altezza: member.altezza,
      tipo_dieta: member.dieta,
      altro: member.altro
    })
  });
  try {
    const response = await fetch('https://api.ecotote.it/api/v1/user/member', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(newMembers)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result || 'Errore nel recupero dei membri');
    }

    console.log('DONE [LOGS | Fetch] addMembersAPI in /people:', result);
    return result;

  } catch (error) {
    console.log('ERROR [LOGS | Fetch] addMembersAPI in /people:', error);
    return null;
  }
};



/*
async function updateMembersAPI(members) {
  console.log("Aggiornamento membri:", members);
  
}
*/



async function updateMembersAPI(members) {
  for (const member of members) {
    try {
      const response = await fetch(`https://api.ecotote.it/api/v1/user/member/${member.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          icona: member.avatar,
          nome: member.nome,
          cognome: member.cognome,
          nickname: member.nickname,
          altezza: member.altezza,
          peso: member.peso,
          eta: member.eta,
          sesso: member.sesso,
          tipo_dieta: member.dieta,
          altro: member.altro
        })
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result || 'Errore nel recupero dei membri');
      }
  
      console.log('DONE [LOGS | Fetch] updateMembersAPI in /people:', result);
    } catch (error) {
      console.log('ERROR [LOGS | Fetch] updateMembersAPI in /people:', error);
      return null;
    }
  }
  return true;
}

export { addMembersAPI, updateMembersAPI };
export default getMembers;
