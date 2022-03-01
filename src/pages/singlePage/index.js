import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "utilies/api";
import DefaultLayOut from "components/layout/defaultLayOut";
import { Descriptions } from "antd";


export function SinglePage(){
    const [item,setItem]=useState({});
    const {id} = useParams()
    useEffect(function(){
        async function getApi(){
            try{
                const response = await api.get(`assets/${id}`)
                setItem(response.data.data)
            }catch(e){

            }
        }
        getApi()
    },[])
    return(
        <DefaultLayOut>
        <p>single page</p>
        <Descriptions title="User Info" bordered={true} layout="vertical">
        <Descriptions.Item label="price">{item.priceUsd}</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
        <Descriptions.Item label="symbol">{item.symbol}</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
        </Descriptions>
        </DefaultLayOut>
    )
}
export default SinglePage;