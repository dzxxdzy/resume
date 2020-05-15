/*
 * @Description: BasicInfo
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2020-05-15 17:22:20
 * @LastEditors: Song
 */
import React from 'react';
export default (props) => {
    return (
        <section className="basicinfo" >
            <div className="text-info name">
                {props.basicinfo.name}
            </div>
            <div className="text-info description">
                {props.basicinfo.description}
            </div>
            <div className="text-info">
                <i className="fa fa-university"></i>
                {props.basicinfo.school}·{props.basicinfo.profession}
            </div>
            <div className="text-info">
                <i className="fa fa-user"></i>
                {props.basicinfo.sex}·{props.basicinfo.education}·{props.basicinfo.workage}
            </div>
            <div className="phone text-info inline-block">
                {!props.basicinfo.phone ? "" :
                    <div>
                        <i className="fa fa-phone"></i>
                        <a href={"tel:" + props.basicinfo.phone}>{props.basicinfo.phone}</a>
                    </div>
                }
            </div>
            <div className="email text-info inline-block">
                {!props.basicinfo.email ? "" :
                    <div>
                        <i className="fa fa-envelope-o"></i>
                        <a href={"mailto:" + props.basicinfo.email}>{props.basicinfo.email}</a>
                    </div>
                }
            </div>
        </section>
    );
}

