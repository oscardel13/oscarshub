const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/v1";

export const getAPI = async (path, body) => {
    const response = await fetch(`${API_URL}${path}`,{
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}

export const postAPI = async (path, body) => {
    const response = await fetch(`${API_URL}${path}`,{
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}