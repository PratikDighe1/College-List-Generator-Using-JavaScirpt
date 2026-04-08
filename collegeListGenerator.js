let url= "http://universities.hipolabs.com/search?name=";

let btn= document.querySelector('button');
btn.addEventListener('click', async ()=> {
    let country= document.querySelector('input').value;
    console.log(country);

    let clgCount= document.querySelector('#count').value;

    getColleges(country, clgCount);
});

async function getColleges(country, clgCount) {
    try {
        
        let p= document.querySelector('p');
        
        
        let res= await axios.get(url + country); // Directly return JSON object.
        for(let i=0; i<=clgCount; i++){
            console.log(res.data[i].name);
            p.innerHTML+= "<b>"+res.data[i].name+"</b>";
            p.innerHTML+= "<br>" ;
        }
    }
    catch(e) {
        console.log('ERR=', e);
        return [];
    }
}