const json_data = `
[
    {
      "nome": "Lista Onnivoro 1",
      "categoria": "onnivoro",
      "tags":["carne","verdura","pasta"],
      "id": 1,
      "durata": 6,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 1,
          "nome": "Fusilli",
          "tipologia": "pasta",
          "link": "https://www.esselunga.it/fusilli",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 2,
          "nome": "Petto di pollo",
          "tipologia": "carne",
          "link": "https://www.esselunga.it/pollo",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "600g"
          }
        },
        {
          "id": 3,
          "nome": "Mozzarella",
          "tipologia": "latticini",
          "link": "https://www.esselunga.it/mozzarella",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "2 pezzi"
          }
        },
        {
          "id": 4,
          "nome": "Insalata mista",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/insalata",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1 busta"
          }
        },
        {
          "id": 5,
          "nome": "Pane integrale",
          "tipologia": "pane",
          "link": "https://www.esselunga.it/pane-integrale",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        }
      ]
    },
    {
      "nome": "Lista Onnivoro 2",
      "categoria": "onnivoro",
      "tags":["pesce","verdura","pasta"],
      "id": 2,
      "durata": 7,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 6,
          "nome": "Spaghetti",
          "tipologia": "pasta",
          "link": "https://www.esselunga.it/spaghetti",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 7,
          "nome": "Tonno in scatola",
          "tipologia": "pesce",
          "link": "https://www.esselunga.it/tonno",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "3 lattine"
          }
        },
        {
          "id": 8,
          "nome": "Uova",
          "tipologia": "uova",
          "link": "https://www.esselunga.it/uova",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "6"
          }
        },
        {
          "id": 9,
          "nome": "Piselli surgelati",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/piselli",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "450g"
          }
        },
        {
          "id": 10,
          "nome": "Frutta mista",
          "tipologia": "frutta",
          "link": "https://www.esselunga.it/frutta",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1kg"
          }
        }
      ]
    },
    {
      "nome": "Lista Onnivoro 3",
      "categoria": "onnivoro",
      "tags":["pesce","verdura","riso"],
      "id": 3,
      "durata": 8,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 11,
          "nome": "Riso basmati",
          "tipologia": "cereale",
          "link": "https://www.esselunga.it/riso-basmati",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 12,
          "nome": "Salmone affumicato",
          "tipologia": "pesce",
          "link": "https://www.esselunga.it/salmone",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "200g"
          }
        },
        {
          "id": 13,
          "nome": "Zucchine",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/zucchine",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 14,
          "nome": "Yogurt greco",
          "tipologia": "latticini",
          "link": "https://www.esselunga.it/yogurt",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "2 vasetti"
          }
        },
        {
          "id": 15,
          "nome": "Carote",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/carote",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        }
      ]
    },
    {
      "nome": "Lista Vegetariano 1",
      "categoria": "vegetariano",
      "tags":["legumi","verdura","pasta"],
      "id": 4,
      "durata": 6,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 16,
          "nome": "Penne integrali",
          "tipologia": "pasta",
          "link": "https://www.esselunga.it/penne-integrali",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 17,
          "nome": "Ricotta",
          "tipologia": "latticini",
          "link": "https://www.esselunga.it/ricotta",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "250g"
          }
        },
        {
          "id": 18,
          "nome": "Melanzane",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/melanzane",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "400g"
          }
        },
        {
          "id": 19,
          "nome": "Fagioli cannellini",
          "tipologia": "legumi",
          "link": "https://www.esselunga.it/fagioli",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "400g"
          }
        },
        {
          "id": 20,
          "nome": "Banane",
          "tipologia": "frutta",
          "link": "https://www.esselunga.it/banane",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1kg"
          }
        }
      ]
    },
    {
      "nome": "Lista Vegetariano 2",
      "categoria": "vegetariano",
      "tags":["latticini","verdura","riso"],
      "id": 5,
      "durata": 7,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 21,
          "nome": "Riso venere",
          "tipologia": "cereale",
          "link": "https://www.esselunga.it/risovenere",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 22,
          "nome": "Zucchine",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/zucchine",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 23,
          "nome": "Formaggio grana",
          "tipologia": "latticini",
          "link": "https://www.esselunga.it/grana",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "200g"
          }
        },
        {
          "id": 24,
          "nome": "Ceci cotti",
          "tipologia": "legumi",
          "link": "https://www.esselunga.it/ceci",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "400g"
          }
        },
        {
          "id": 25,
          "nome": "Patate",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/patate",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1kg"
          }
        }
      ]
    },
    {
      "nome": "Lista Vegetariano 3",
      "categoria": "vegetariano",
      "tags":["legumi","verdura","uova"],
      "id": 6,
      "durata": 8,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 26,
          "nome": "Lenticchie cotte",
          "tipologia": "legumi",
          "link": "https://www.esselunga.it/lenticchie",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "300g"
          }
        },
        {
          "id": 27,
          "nome": "Uova",
          "tipologia": "uova",
          "link": "https://www.esselunga.it/uova",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "4"
          }
        },
        {
          "id": 28,
          "nome": "Pomodori",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/pomodori",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "600g"
          }
        },
        {
          "id": 29,
          "nome": "Cavolfiore",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/cavolfiore",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 30,
          "nome": "Pere",
          "tipologia": "frutta",
          "link": "https://www.esselunga.it/pere",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1kg"
          }
        }
      ]
    },
    {
      "nome": "Lista Vegano 1",
      "categoria": "vegano",
      "tags":["legumi","verdura","pane"],
      "id": 7,
      "durata": 6,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 31,
          "nome": "Ceci secchi",
          "tipologia": "legumi",
          "link": "https://www.esselunga.it/ceci",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 32,
          "nome": "Latte di avena",
          "tipologia": "bevanda vegetale",
          "link": "https://www.esselunga.it/avena",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1L"
          }
        },
        {
          "id": 33,
          "nome": "Broccoli",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/broccoli",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 34,
          "nome": "Pane di segale",
          "tipologia": "pane",
          "link": "https://www.esselunga.it/segale",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 35,
          "nome": "Tofu",
          "tipologia": "proteine vegetali",
          "link": "https://www.esselunga.it/tofu",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "300g"
          }
        }
      ]
    },
    {
      "nome": "Lista Vegano 2",
      "categoria": "vegano",
      "tags":["riso","verdura","frutta"],
      "id": 8,
      "durata": 7,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 36,
          "nome": "Riso integrale",
          "tipologia": "cereale",
          "link": "https://www.esselunga.it/risointegrale",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 37,
          "nome": "Spinaci",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/spinaci",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "400g"
          }
        },
        {
          "id": 38,
          "nome": "Lenticchie rosse",
          "tipologia": "legumi",
          "link": "https://www.esselunga.it/lenticchie-rosse",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 39,
          "nome": "Latte di soia",
          "tipologia": "bevanda vegetale",
          "link": "https://www.esselunga.it/soia",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1L"
          }
        },
        {
          "id": 40,
          "nome": "Mele",
          "tipologia": "frutta",
          "link": "https://www.esselunga.it/mele",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1kg"
          }
        }
      ]
    },
    {
      "nome": "Lista Vegano 3",
      "categoria": "vegano",
      "tags":["cereali","verdura","snack"],
      "id": 9,
      "durata": 8,
      "persone": null,
      "id_user": 11,
      "createdAt": "2025-05-07T14:33:18.000Z",
      "updatedAt": "2025-05-07T14:33:18.000Z",
      "Aliments": [
        {
          "id": 41,
          "nome": "Farro",
          "tipologia": "cereale",
          "link": "https://www.esselunga.it/farro",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 42,
          "nome": "Zucchine",
          "tipologia": "verdura",
          "link": "https://www.esselunga.it/zucchine",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "500g"
          }
        },
        {
          "id": 43,
          "nome": "Tempeh",
          "tipologia": "proteine vegetali",
          "link": "https://www.esselunga.it/tempeh",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "200g"
          }
        },
        {
          "id": 44,
          "nome": "Frutta secca mista",
          "tipologia": "snack",
          "link": "https://www.esselunga.it/fruttasecca",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "200g"
          }
        },
        {
          "id": 45,
          "nome": "Latte di mandorla",
          "tipologia": "bevanda vegetale",
          "link": "https://www.esselunga.it/mandorla",
          "createdAt": "2025-05-04T19:52:46.000Z",
          "updatedAt": "2025-05-04T19:52:46.000Z",
          "ListAliment": {
            "qt": "1L"
          }
        }
      ]
    }
  ]
`


const json_parsed = JSON.parse(json_data)


const getDefaultList = async () => {
    return json_parsed
}

export { getDefaultList }

export async function getNearbySupermarkets(latitude, longitude) {
  try {
    // Query per trovare i supermercati nel raggio di 5km
    const query = `
      [out:json][timeout:25];
      (
        node["shop"="supermarket"](around:5000,${latitude},${longitude});
        node["shop"="convenience"](around:5000,${latitude},${longitude});
      );
      out body;
      >;
      out skel qt;
    `;

    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: query
    });

    const data = await response.json();
    
    if (data.elements && data.elements.length > 0) {
      return data.elements.map(place => ({
        id: place.id,
        name: place.tags.name || 'Supermercato',
        distance: calculateDistance(latitude, longitude, place.lat, place.lon),
        icon: place.tags.shop === 'supermarket' 
          ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lidl_logo.png/960px-Lidl_logo.png'
          : 'https://play-lh.googleusercontent.com/qhCk-KOnqgRbly6nRGwlRC9NP1g83zPKR2s5rX_jtRIjfMHh-0AkQoAMmb26hhAavA',
        location: {
          lat: place.lat,
          lng: place.lon
        }
      })).sort((a, b) => {
        // Ordina per distanza
        const distA = parseFloat(a.distance);
        const distB = parseFloat(b.distance);
        return distA - distB;
      });
    }
    return [];
  } catch (error) {
    console.error('Error fetching nearby supermarkets:', error);
    return [];
  }
}

// Helper function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; // Distance in km
  
  if (distance < 1) {
    return Math.round(distance * 1000) + 'm';
  }
  return Math.round(distance * 10) / 10 + 'km';
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}