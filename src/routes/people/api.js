/*

GET api.ecotote.it/api/v1/user/member

POST api.ecotote.it/api/v1/user/member

[
    {
        "icona": "stringa",
        "nome": "Riccardo",
        "cognome": "ddsd",
        "nickname":  "reike",
        "altezza": "190",
        "peso": "80",
        "sesso":"F",
        "eta":18,
        "tipo_dieta":"Onnivoro",
        "altro":"loresdsdsa"
    },
    {
        "icona": "stringa",
        "nome": "Viola",
        "cognome": "ddsd",
        "nickname":  "violino",
        "altezza": "150",
        "peso": "60",
        "sesso":"M",
        "eta":15,
        "tipo_dieta":"Onnivoro",
        "altro":"loresdsdsa"
    }
]

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

    console.log('Members:', result);
    return result;

  } catch (error) {
    console.error('Error fetching members:', error);
    return null;
  }
};

export default getMembers;

