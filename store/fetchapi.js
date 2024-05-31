let bas_url = "https://fakestoreapi.com/";
//  let eanpoint =
export async function getData(endpoint){
    // const rs = await fetch(`${bas_url}${endpoint}`);
    // const rt = await rs.json();
    // return rt;
    try{
        const rs = await fetch(`${bas_url}${endpoint}`,{
            method: "GET",
            headers:{
                "content-Type": "application.json"
            }
        });
        const rt = await rs.json();
        return rt;
        }
        catch(error){
        console.log(error);
    }
}