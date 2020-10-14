async function fetchIp() {
  const url = `https://api.ipify.org/?format=json`;
  const res = await fetch(url);
  return await res.json();
}

export async function fetchLocation() {
  const ip = await fetchIp();
  const url = `https://freegeoip.app/json/${ip.ip}`;
  const res = await fetch(url);
  return await res.json();
}