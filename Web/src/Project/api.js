import axios  from "axios";

const port=3000
const baseUrl=`http://localhost:${port}`

//Advertiser
export const getAllAdvertiser=()=>{
    return axios.get(`${baseUrl}/Advertiser`)
}
export const check=()=>{
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)

}
export const signIn=(advertise)=>{
    debugger
    return axios.post(`${baseUrl}/Advertiser/signIn`,advertise)
}

export const login=(advertise)=>{
    return axios.post(`${baseUrl}/Advertiser/login`,advertise)
}

//Apartments
export const getAllApartments=()=>{
    return axios.get(`${baseUrl}/Apartment`)
}

export const getApartmentById=()=>{
    return axios.get(`${baseUrl}/Apartment/:id`)
}

export const getApartmentByCodeCategory=()=>{
    return axios.get(`${baseUrl}/Apartment/category/:codeCategory`)
}

export const getApartmentByCodeAdvertiser=()=>{
    return axios.get(`${baseUrl}/Apartment/advertiser/:codeAdvertiser`)
}

export const getApartmentByCodeCity=()=>{
    return axios.get(`${baseUrl}/Apartment/city/:codeCity`)
}

export const getApartmentByCountBeds=()=>{
    return axios.get(`${baseUrl}/Apartment/num/:min/:max`)
}

export const getApartmentByPrice=()=>{
    return axios.get(`${baseUrl}/Apartment/price/:min/:max`)
}

export const createApartment=(apartment)=>{
    return axios.post(`${baseUrl}/Apartment`,apartment)
}

export const deleteApartment=()=>{
    return axios.delete(`${baseUrl}/Apartment/:id/:codeAdvertiser`)
}

export const updateApartment=()=>{
    return axios.patch(`${baseUrl}/Apartment/:id/:codeAdvertiser`)
}

//Category

export const getAllCategory=()=>{
    return axios.get(`${baseUrl}/Category`)
}

export const createCategory=(category)=>{
    return axios.post(`${baseUrl}/Category`,category)
}

//City

export const getAllCity=()=>{
    return axios.get(`${baseUrl}/City`)
}

export const createCity=(city)=>{
    return axios.post(`${baseUrl}/City`,city)
}
