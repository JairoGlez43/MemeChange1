export const fetcher = async<T>(url:string):Promise<T|unknown> => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        //const items = await data.items
        return data;
    }catch(error){
        if(error instanceof Error){
            throw {message: error.message}
        }
        throw {message: 'Unknown error'};
    };
}

