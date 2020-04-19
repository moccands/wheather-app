let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip='
let apiKey = '&appid=7410715a75a449f7c6e0c4f207575f6e'

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newZip =  document.getElementById('zip').value;
  const newuserResponse =  document.getElementById('feelings').value;
  getZip(baseURL,newZip, apiKey).then(function(data){
    postData('/meteo',{  temperature: data.list[0].main.temp, date: data.list[0].dt_txt, userResponse: newuserResponse });
  })
  


}
const getZip = async (baseURL, zip, key)=>{

  const res = await fetch(baseURL+zip+key)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
  
  // TODO-Call Function
  

  console.log("post data")