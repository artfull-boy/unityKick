import './RankRow.css';
import React from "react"

export default function RankRow(props){
    let bg;
    if(props.rank == 1 || props.rank == 2){
        bg={
            backgroundColor:'#F2F0F9'
        }
    }else{
        bg={
            backgroundColor:'rgba(254, 230, 235, 1)'
        }
    }
    return <>
        <div className='rank-row' style={bg}>
            <div className='rr-team'>
                <p>{props.rank}</p>
                <img src={props.flag}></img>
                <p>{props.team}</p>
            </div>
            <div className='rr-right'>
                <div className='rr-point'>
                    <p>{props.win}</p>
                    <p>{props.draw}</p>
                    <p>{props.lost}</p>
                    <p>{props.win*3+props.draw*1}</p>
                </div>
                <div className='rr-history'>
                    {props.history.map((result)=>{
                        if(result=='W'){
                            return(<i class="fa-solid fa-check" style={{backgroundColor:'rgba(36, 167, 0, 1)'}}></i>)
                        }else if(result=='L'){
                            return(<i class="fa-solid fa-x" style={{backgroundColor:'rgba(255, 0, 0, 1)'}}></i>)
                        }else{
                            return(<i class="fa-solid fa-minus" style={{backgroundColor:'rgba(250, 224, 66, 1)'}}></i>)
                        }
                    })}
                </div>
            </div>
        </div>
    </>
}