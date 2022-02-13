import { apiKey2, urlBase } from "./Uls";

export const ShowDetails = async( key ) =>{
    //document.getElementById("pruebita").style.display="block";                         
    const resp = await fetch( urlBase+'movie/'+key+apiKey2+'&append_to_response=videos' );
        const data = await resp.json();
                    
        const {
            id, 
            poster_path, 
            original_title, 
            overview, 
            release_date, 
            vote_average, 
            runtime, 
            videos,
            genres
        } = data
        console.log(data);
        const video_key = videos.results[0]?.key;
        console.log(video_key);
        const new_genres = genres[0].name;
        let new_runtime;
        if (runtime > 60) {
            new_runtime = Number(runtime)-60
            // eslint-disable-next-line no-useless-concat
            new_runtime = "1h"+' '+String(new_runtime)+"min"
                        
        }else{
            new_runtime = Number(runtime)
            // eslint-disable-next-line no-useless-concat
            new_runtime = "0h"+' '+String(new_runtime)+"min"
                        
            }
        let detalle = {
            id,
            poster_path,
            original_title,
            overview,
            release_date,
            vote_average,
            new_runtime,
            video_key,
            new_genres
        }   
        return detalle                                           
}

export const closeDetails = () => {
    document.getElementById( 'details').style.display="none";
}