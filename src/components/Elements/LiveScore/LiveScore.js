import './LiveScore.css';
import React from "react"

export default function LiveScore(){
    return<>
        <div className="ls-container">
            <div className='ls-head'>
                <h3>Live Score</h3>
                <p>63'</p>
            </div>
            <div className='ls-result'>
                <img src={`https://media.api-sports.io/flags/MA.svg`}></img>
                <div className='result-value'>
                    <p>2 - 2</p>
                </div>
                <img src={`https://media.api-sports.io/flags/ES.svg`}></img>
            </div>
            <div className='ls-stat'>
                <h3>Shoot on Target</h3>
                <div className='stat-num'>
                    <div className='left-stat'>
                        <h4>7</h4>
                        <div className='progress-container'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='right-stat'>
                        <h4>5</h4>
                        <div className='progress-container'>
                            <div className='progress'></div>
                        </div>
                    </div>
                </div>
                <h3>Shoot</h3>
                <div className='stat-num'>
                    <div className='left-stat'>
                        <h4>12</h4>
                        <div className='progress-container'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='right-stat'>
                        <h4>7</h4>
                        <div className='progress-container'>
                            <div className='progress'></div>
                        </div>
                    </div>
                </div>
                <h3>Fouls</h3>
                <div className='stat-num'>
                    <div className='left-stat'>
                        <h4>7</h4>
                        <div className='progress-container'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='right-stat'>
                        <h4>5</h4>
                        <div className='progress-container'>
                            <div className='progress'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}