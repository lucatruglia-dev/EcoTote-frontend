/*DELETE api.ecotote.it/api/v1/user/member/:id */

const deleteMemberAPI = async (id) => {
  const response = await fetch(`https://api.ecotote.it/api/v1/user/member/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
  });
  return response.json();
};

export { deleteMemberAPI };