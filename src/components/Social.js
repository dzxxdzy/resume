/*
 * @Description: Social
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2020-05-15 17:24:25
 * @LastEditors: Song
 */
import React from 'react';
export default (props) => {
    return (
        <section className="social">
            {props.social.map(function (item) {
                //如果有icon 优先使用icon
                if (!item.icon) {
                    return (
                        <a className={'fa fa-' + item.type} href={item.link} key={item.type + item.link} >
                            <span></span>
                        </a>
                    )
                }
                return (
                    <a href={item.link} key={item.type + item.link}>
                        <img alt='' src={item.icon} />
                    </a>
                )

            })}
        </section>
    );
}

