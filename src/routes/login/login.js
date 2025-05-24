const sendLogin = async (userData) => {
    try {
      const response = await fetch('https://api.ecotote.it/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include',
        mode: 'cors',
      });
  
      const result = await response.text();
  
      if (!response.ok) {
        throw new Error(result || 'Errore durante il login');
      }
  
      return {
        success: true,
        message: "Login completato",
        subMessage: "Benvenuto in EcoTote!"
      };
  
    } catch (error) {
      return {
        success: false,
        message: "Errore di login",
        subMessage: error.message || "Si è verificato un errore durante il login"
      };
    }
  };
  
  export default sendLogin;