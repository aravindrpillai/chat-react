import AppProperties from '../util/Properties'

/**
 * GET Method.
 * @param  url 
 * @returns 
 */
 export default async function get(url) {
    let token = window.sessionStorage.getItem("auth_token")
    if(token=== null || token=== ""){
        getToken()
        token = window.sessionStorage.getItem("auth_token")
        if(token=== null || token=== ""){
            throw Error("Empty token when retried.")
        }
    }
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '.concat(token) },
    };
    let response = await fetch(url, requestOptions);
    if(response.status === 417){
        getToken()
        token = window.sessionStorage.getItem("auth_token")
        if(token=== null || token=== ""){
            throw Error("Empty token when retried (expired).")
        }
        response = await fetch(url, requestOptions);;
    }
    const data = await response.json();
    //console.log("GET URL : ", url )
    //console.log("GET response object: ",data)
    if (response.status < 200 || response.status > 299) {
        let message = "Service Failed"
        try{message = data["message"] }catch(e){}
        throw new Error(message)
    } 
    
    return data
}


/**
 * POST method
 * @param {*} url 
 * @param {*} requestBody 
 * @returns 
 */
export async function post(url, requestBody) {
    let token = window.sessionStorage.getItem("auth_token")
    if(token=== null || token=== ""){
        getToken()
        return post(url, requestBody)
    }
    //console.log("POST URL : ", url )
    //console.log("POST Request object : ", JSON.stringify(requestBody))
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '.concat(token) },
        body: requestBody ? JSON.stringify(requestBody) : "{}"
    };
    const response = await fetch(url, requestOptions);
    if(response.status === 417){
        getToken()
        return post(url, requestBody)
    }
    
    const data = await response.json();
    console.log("POST response object : ",data)
    if (response.status < 200 || response.status > 299) {
        let message = "Service Failed"
        try{message = data["message"] }catch(e){}
        throw new Error(message)
    } 
    
    return data
}



/**
 * POST method
 * @param {*} url 
 * @param {*} requestBody 
 * @returns 
 */
 export async function patch(url, requestBody) {
    let token = window.sessionStorage.getItem("auth_token")
    if(token=== null || token=== ""){
        getToken()
        return patch(url, requestBody)
    }
    //console.log("Patch URL : ", url )
    //console.log("Patch Request object : ", JSON.stringify(requestBody))
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '.concat(token) },
        body: requestBody ? JSON.stringify(requestBody) : "{}"
    };
    const response = await fetch(url, requestOptions);
    if(response.status === 417){
        getToken()
        return post(url, requestBody)
    }
    const data = await response.json();
    console.log("Patch response object : ",data)
    if (response.status < 200 || response.status > 299) {
        let message = "Service Failed"
        try{message = data["message"] }catch(e){}
        throw new Error(message)
    } 
    
    return data
}


/**
 * Token is valid for 1 hr
 * @returns Token
 */
async function getToken(){
    const _tokenUrl =AppProperties.BaseURL.concat('account/authenticate')
    const body ={
        hostName: "amukherjee-hexaware-configeditor.co.sandbox.socotra.com",
        username: "alice.lee",
        password: "socotra"
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    const response = await fetch(_tokenUrl, requestOptions);
    if (response.status !== 200) {
        throw new Error("Token service failed")
    } 
    const data = await response.json();
    if(data["authorizationToken"] === null || data["authorizationToken"] === ""){
        throw Error("Invalid Token received")
    }
    window.sessionStorage.setItem("auth_token", data["authorizationToken"]);
}
