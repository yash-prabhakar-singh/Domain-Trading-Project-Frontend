import axios from 'axios'
const api_url= "http://localhost:8080"

class apiservice{

    getDomains(ID)
    {
return axios.get(`${api_url}/domains/${ID}`)
    }

    getNegotiations(ID)
    {
return axios.get(`${api_url}/getnegotiations/${ID}`)
    }

    getNegotiation(ID)
    {
return axios.get(`${api_url}/getnegotiation/${ID}`)
    }

    uploadDomain(ID, domainName, BITN)
    {
        let dp={
            domainName : domainName,
            BITN : BITN
        }
        return axios.post(`${api_url}/uploaddomain/${ID}`,dp)
    }

    uploadNegotiation(ID, sdomain, price)
    {
        let negotiation= {
            domainName : sdomain,
            offeredAt : price
        }

        return axios.post(`${api_url}/negotiation/${ID}`,negotiation);

    }

}

export default new apiservice();