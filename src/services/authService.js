class AuthService {
    constructor() {
        this.api_url = 'User/';
        this.base_url = "https://localhost:7272/api/"
    }  

    async GetToken(username, password){
        let response = null;
        try {
            let request =  await fetch(`${this.base_url}${this.api_url}GetToken`, 
                                        {
                                            method:"POST", 
                                            headers: {'Content-Type': 'application/json'},
                                            body: JSON.stringify({username: username, password: password}),
                                            credentials: "include"
                                        });
            let data = await request.json();
            response = data;
            return response;
        }
        catch (error) {
            console.log(error);
            return response;
        }
    }
}

export {AuthService}