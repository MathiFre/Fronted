class PostService {
    constructor() {
        this.api_url = 'Post/';
        this.base_url = "https://localhost:7272/"
    }  

    async GetPosts () {
        let response = null;
        try {
            let request =  await fetch(`${this.base_url}${this.api_url}`, 
                                        {
                                            method:"GET", 
                                            headers: {'Content-Type': 'application/json'},
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

export {PostService}