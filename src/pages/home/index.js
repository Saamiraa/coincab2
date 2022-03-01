import { useEffect, useState } from "react";
import DefaultLayOut from "components/layout/defaultLayOut";
import api from 'utilies/api';
import { Link } from "react-router-dom";
import { Table } from "antd";
export function Home(){
    const [loading,setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [limit,setLimit] = useState(10);
    const [offset,setOffset] = useState(0);
    const columnsObject = [
        {
            title: "name",
            dataIndex:"id",
            key:"id",
            render:text => <Link to={`/crypto/${text}`}>{text}</Link>
        },
        {
            title: "rank",
            dataIndex:"rank",
            key:"rank"
        },
        {
            title: "maxSupply",
            dataIndex:"maxSupply",
            key:"maxSupply",
            render: text=> <p className="maxSupply">{Math.round(text)}</p>
        },
        {
            title: "changePercent24Hr",
            dataIndex:"changePercent24Hr",
            key:"changePercent24Hr",
            render: text=> <p className="changePercent24Hr">{Math.round(text)}</p>
        },
    ]
    useEffect(function(){
        async function getApi(){
            try{
                setLoading(true);
                const response = await api.get('assets', {limit:limit, offset:offset});
                setAssets(response.data.data);
                setLoading(false);
            }catch(e){
                setLoading(false);
            }
        }
        getApi()
    },[])
    function renderFarm(){
        return assets.map(function(item){
            return(
                <li key={item.id}><Link to ={`/crypto/${item.id}`}>{item.id}</Link></li>
            )
        })
    }
    async function loadMore(){
        try{
            setOffset(offset+10)
            const response = await api.get('assets', {limit:limit, offset:offset + 10})
            setAssets(assets.concat(response.data.data))

        }catch(e){

        }
    }

    return(
        <DefaultLayOut>
        <div style={{display: loading ? "block": "none"}}>Loading...</div>
        <p>Home</p>
        <Table columns={columnsObject} dataSource={assets}/>

        <button onClick={loadMore}>Load More</button>
        </DefaultLayOut>
        )
}

export default Home;