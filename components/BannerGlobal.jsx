import styles from '../styles/Style.module.css'
import {SpaceBr, SpaceBrBr} from '../components/Space' 
import Button from './Button'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const BannerGlobal =(props)=>{
    
    return(
        <ul>
          <li>
            <section className={[styles.mainBanner] +" "+ "para"} style={{ backgroundImage: [props.BackgroundImage]}}>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-md-7">
                    <div className={styles.BannerContent}>
                      <h1>{props.Title}</h1>
                      <SpaceBr/>
                      <p>{props.Para}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </li>
        </ul>
    )
}
export default BannerGlobal;