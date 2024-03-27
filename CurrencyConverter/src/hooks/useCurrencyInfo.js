


import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

        .then((res) => res.json())    //the data loking as json but if we check its type it will in string so we have converted in json.
                                        

        .then((res) => setData(res[currency]))  //we are trying to access res.currency i.e use or inr ...

        console.log(data);  //output of api
    }, [currency])
    
    console.log(data);
    return data  //inr or usd ==> currency
}

export default useCurrencyInfo;