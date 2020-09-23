// function getCurrentLocation(options) {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, ({code, message}) =>
//       reject(Object.assign(new Error(message), {name: "PositionError", code})),
//       options);
//     });
// };

// export async function inout() {
//   try {
//     console.log(await getCurrentLocation({
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0
//     }));
//   } catch (e) {
//     if (e.name === 'PositionError') {
//       console.log(e.message + ". code = " + e.code);
//     }
//   }
// }

// inout().catch(e => console.log(e)); // User denied geolocation prompt. code = 1

export async function setLocation(setVote, setErr, setCountry) {
  const region = await fetchLocation(setErr, setCountry);
  setVote(prevVote => ({...prevVote, state: region}));
}

async function fetchLocation(setErr, setCountry) {
  const url = `https://freegeoip.app/json/`;
  // const ress = await fetch(url)
  //   .then(res => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   });
  // console.log(results);
  try{
    const res = await fetch(url);
    const results = await res.json();
    setCountry(results.country_code)
    return results.region_code;
  }catch(err){
    console.log(err);
    setErr(true);
    if(err === 'TypeError: Failed to fetch') {
      console.log('booya');
    }
  }
  // if(results.status === 'success'){
  //   // console.log(results);
  //   // console.log(results.region_code);
  //   // setErr(true);
  //   return results.region;
  // } else {
  //   console.log(results);
  //   console.log(results.message)
  //   setErr(true);
  // }
}