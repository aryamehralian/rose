const data = {};

// Accessing the length of the obj array in the data
const objLength = data.obj.length;

// Sending a request for each item in the obj array
for (let i = 0; i < objLength; i++) {
  // Extracting information related to each item
  const upload = data.obj[i].up;
  const download = data.obj[i].down;
  const total = data.obj[i].total;
  const remark = data.obj[i].remark;
  const status = data.obj[i].enable;
  const time = data.obj[i].expiryTime;
  const port = data.obj[i].port;
  const id = data.obj[i].settings.clients[0].id;

  // Setting fetch request options
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,fa-IR;q=0.8,fa;q=0.7",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "proxy-connection": "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    mode: "cors",
    credentials: "include",
    referrer: "https://a.domain.com:54321/xui/inbounds",
    referrerPolicy: "strict-origin-when-cross-origin",
    // Creating the request body using extracted information
    body: `up=${upload}&down=${download}&total=${total}&remark=${remark}&enable=${status}&expiryTime=${time}&listen=&port=${port}&protocol=vless&settings={"clients": [{"id": "${id}","flow": "xtls-rprx-direct"}],"decryption": "none","fallbacks": []}&streamSettings={"network": "ws","security": "none","wsSettings": {"path": "/","headers": {}}}&sniffing={"enabled": true,"destOverride": ["http","tls"]}`,
  };

  // Sending the fetch request to the specified address
  fetch("https://a.domain.com:54321/xui/inbound/add", requestOptions);
}
