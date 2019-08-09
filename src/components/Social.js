/*
 * @Description: Social
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2019-08-09 16:59:56
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
export default class Social extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <section className="social">
                {this.props.social.map(function (item) {
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
}

