/*DELETE api.ecotote.it/api/v1/list/:id */

const deleteListAPI = async (id) => {
    const response = await fetch(`https://api.ecotote.it/api/v1/list/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    });
  
    window.location.reload();
    return response.json();
  };
  
  export { deleteListAPI };