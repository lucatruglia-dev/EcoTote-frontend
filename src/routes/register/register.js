const sendRegister = async (userData) => {
  try {
    const response = await fetch('https://api.ecotote.it/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    const result = await response.text();

    if (!response.ok) {
      throw new Error(result || 'Errore durante la registrazione');
    }

    return {
      success: true,
      message: "Registrazione completata con successo"
    };

  } catch (error) {
    return {
      success: false,
      message: "Errore durante la registrazione",
      subMessage: error.message || "Si è verificato un errore durante la registrazione"
    };
  }
};

export default sendRegister;