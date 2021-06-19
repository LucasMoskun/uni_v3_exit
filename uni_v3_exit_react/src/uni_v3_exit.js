import titleImg from './img/title.png'
import './style.css'

import {useEffect, useState } from 'react';
import {onboard, logAddress} from './components/onboard'
import {queryV3Pool} from './components/open_api'
import { Interval } from './components/utils';

function UNISWAP_V3_EXIT()
{
    const [intervalRate, setIntervalRate] = useState(5000);

    //connect wallet
    useEffect(() => {
    
        //Test Onbaord    
        const ConnectWallet = async() => {

            const connected = await onboard.walletSelect();
            if(connected)
            {
                await onboard.walletCheck();
                await logAddress(); 
            }
        }
        ConnectWallet();
    }, [])

    //query pool
    Interval(() => {

        //query v3 pool possition through open API
        const QueryPosition = async() => {
            await queryV3Pool();
        }
        QueryPosition();

    }, intervalRate);

    
  return(
    <div className="Home">
    <header className="Home-header">

      <img src={titleImg} alt="title"/>
    </header>
    </div>
  );
}

export default UNISWAP_V3_EXIT;
