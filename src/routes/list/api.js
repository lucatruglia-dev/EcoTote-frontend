/*

let json_test = `
[
    {
        "id": 6,
        "nome": "Lista per scemi",
        "categoria": "onnivoro",
        "durata": 5,
        "persone": 5,
        "id_user": 11,
        "createdAt": "2025-05-07T14:33:18.000Z",
        "updatedAt": "2025-05-07T14:33:18.000Z",
        "Aliments": [
            {
                "id": 1,
                "nome": "Fusilli",
                "tipologia": "pasta",
                "link": "link esselunga ...",
                "createdAt": "2025-05-04T19:52:46.000Z",
                "updatedAt": "2025-05-04T19:52:46.000Z",
                "ListAliment": {
                    "qt": "10g"
                }
            }
        ]
    },
    {
        "id": 7,
        "nome": "Lista Wella",
        "categoria": "onnivoro",
        "durata": 5,
        "persone": 7,
        "id_user": 11,
        "createdAt": "2025-05-07T14:36:09.000Z",
        "updatedAt": "2025-05-07T14:36:09.000Z",
        "Aliments": [
            {
                "id": 2,
                "nome": "Zucchine",
                "tipologia": "verdura",
                "link": "link esselunga ...",
                "createdAt": "2025-05-04T19:52:46.000Z",
                "updatedAt": "2025-05-04T19:52:46.000Z",
                "ListAliment": {
                    "qt": "150g"
                }
            },
            {
                "id": 3,
                "nome": "Pomodoro",
                "tipologia": "frutta/verdura",
                "link": "https://www.esselunga.it/pomodoro",
                "createdAt": "2025-05-07T14:36:10.000Z",
                "updatedAt": "2025-05-07T14:36:10.000Z",
                "ListAliment": {
                    "qt": "200g"
                }
            },
            {
                "id": 4,
                "nome": "Spaghetti",
                "tipologia": "pasta",
                "link": "https://www.esselunga.it/spaghetti",
                "createdAt": "2025-05-07T14:36:10.000Z",
                "updatedAt": "2025-05-07T14:36:10.000Z",
                "ListAliment": {
                    "qt": "300g"
                }
            },
            {
                "id": 5,
                "nome": "Pollo al埋 keto",
                "tipologia": "carne",
                "link": "https://www.esselunga.it/pollosenzaossa",
                "createdAt": "2025-05-07T14:36:10.000Z",
                "updatedAt": "2025-05-07T14:36:10.000Z",
                "ListAliment": {
                    "qt": "500g"
                }
            },
            {
                "id": 6,
                "nome": "Mozzarella",
                "tipologia": "latticini",
                "link": "https://www.esselunga.it/mozzarella-bio",
                "createdAt": "2025-05-07T14:36:10.000Z",
                "updatedAt": "2025-05-07T14:36:10.000Z",
                "ListAliment": {
                    "qt": "200g"
                }
            },
            {
                "id": 7,
                "nome": "Riso arancino",
                "tipologia": "cereali",
                "link": "https://www.esselunga.it/riso-arancino",
                "createdAt": "2025-05-07T14:36:10.000Z",
                "updatedAt": "2025-05-07T14:36:10.000Z",
                "ListAliment": {
                    "qt": "250g"
                }
            },
            {
                "id": 8,
                "nome": "Avanzi di pollo per insalata ",
                "tipologia": "carne",
                "link": "",
                "createdAt": "2025-05-07T14:36:10.000Z",
                "updatedAt": "2025-05-07T14:36:10.000Z",
                "ListAliment": {
                    "qt": "0"
                }
            }
        ]
    }
]
`

let json_test_parsed = JSON.parse(json_test);
const getListAPI = async () => {
    return json_test_parsed;
}

*/


const getListAPI = async () => {
  

  try {
    const response = await fetch('https://api.ecotote.it/api/v1/list', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      });
    console.log('DONE [LOGS | Fetch] getListAPI in /list or /lista_specifica:', result);
    return response.json();
} catch (error) {
    console.log('ERROR [LOGS | Fetch] getListAPI in /list or /lista_specifica:', error);
    return null;
  }
};


export default getListAPI;