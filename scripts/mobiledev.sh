ipaddress="$(ipconfig getifaddr en0)"

echo ${ipaddress}
npm run dev -- -H ${ipaddress}