import axios from "axios"
import qs from 'qs';
import { useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";

export const BASE_URL = 'http://45.120.177.132:6002'//'http://168.119.124.65:7000'
const baseURL = BASE_URL;
export const client = axios.create({
    BASE_URL
})
const login = async e => {
    try {
        const { data } = await axios.post(`${baseURL}/token`,
            qs.stringify(e),
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            })
        return { data }
    }
    catch (error) {
        return { error }
    }
}
const signup = async e => {
    try {
        const params = new URLSearchParams()
        params.append('username', e.username)
        params.append('password', e.password)
        const { data } = await axios.post(`${baseURL}/users`, {}, { params })
        return { data }
    }
    catch (error) {
        return { error }
    }
}

const logout = async e => {
    try {
        const { data } = await client.get(`${baseURL}/logout`, e)
        return { data }
    }
    catch (error) {
        return { error }
    }
}

const user = async () => {
    try {
        const { data } = await client.get(`${baseURL}/manage_user?get_user`)
        return { data }
    }
    catch (error) {
        return { error }
    }
}

const refresh = async () => {
    try {
        const { data } = await client.post(`${baseURL}/refresh`, { 'refresh': access_token })
        return { data }
    }
    catch (error) {
        return { error }
    }
}

const transcribe = async (access_token, e, setUploadProgress) => {

    try {
        const d = await axios.post(`${baseURL}/transcribe`,
            e,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
                'content-type': 'multipart/form-data',
                onUploadProgress: progressEvent => {
                    let percentComplete = progressEvent.loaded / progressEvent.total
                    percentComplete = parseInt(percentComplete * 100);
                    setUploadProgress(percentComplete);
                }
            })
        return { data: d };
    }
    catch (ex) {
        signOut()
        return { error: ex }
    }
}
const transcribeFromUrl = async (access_token, { url }) => {
    var params = new URLSearchParams()
    params.append('url', url)
    const d = await axios.post(`${baseURL}/transcribeFromURL`, {
    }, {
        params,
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return d;
}

const findAnswer = async (access_token, e) => {
    try {

        try {
            const data = await axios.post(`${baseURL}/findAnswer`,
                e,
                {
                    headers: {
                        accept: "application/json",
                        'content-type': 'application/json',
                        Authorization: `Bearer ${access_token}`,
                    },
                })
            return { data };
        }
        catch (ex) {
            if (ex.response.status === 401)
                signOut()
            return { error: ex }
        }
    }
    catch (error) {
        return { error }
    }
}

const getQAModels = async () => {
    try {
        const { data } = await client.get(`${baseURL}/QAModels`)
        return { data }
    }
    catch (error) {
        return { error }
    }
}
export {
    login,
    user,
    refresh,
    logout,
    signup,

    transcribe,
    transcribeFromUrl,
    findAnswer,
    getQAModels

}
