const generateListAPI = async (data) => {
    console.log(data);
    const response = await fetch("https://api.ecotote.it/api/v1/list", {
        method: "POST",
        body: JSON.stringify(data)
    });

    if (response.status === 401) {
        window.location.href = "/login";
        return;
    }


    console.log("DONE [LOGS | Fetch] generateListAPI in /new_list");
    

    const json = await response.json();
    return {id: json.id};
}


export {generateListAPI}