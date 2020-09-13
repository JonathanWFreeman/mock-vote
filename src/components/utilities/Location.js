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

export async function setLocation(setVote, setErr) {
  const region = await fetchLocation(setErr);
  setVote(prevVote => ({...prevVote, state: region}));
}

async function fetchLocation(setErr) {
  const url = `https://api.ipdata.co/?api-key=${process.env.REACT_APP_IPDATA_API_KEY}`;
  // const ress = await fetch(url)
  //   .then(res => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   });
  const res = await fetch(url);
  const results = await res.json();
  if(res.status === 200){
    // console.log(results);
    // console.log(results.region_code);
    // setErr(true);
    return results.region_code;
  } else {
    console.log(results);
    console.log(results.message)
    setErr(true);
  }
}