export async function fetchLocation() {
  const url = `https://freegeoip.app/json/`;
  const res = await fetch(url);
  return await res.json();
}