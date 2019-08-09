/*
 * @Description: BasicInfo
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2019-08-09 14:44:02
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
export default class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <section className="basicinfo" >
                <div className="text-info name">
                    {this.props.basicinfo.name}
                </div>
                <div className="text-info description">
                    {this.props.basicinfo.description}
                </div>
                <div className="text-info">
                    <i className="fa fa-university"></i>
                    {this.props.basicinfo.school}·{this.props.basicinfo.profession}
                </div>
                <div className="text-info">
                    <i className="fa fa-user"></i>
                    {this.props.basicinfo.sex}·{this.props.basicinfo.education}·{this.props.basicinfo.workage}
                </div>
                <div className="phone text-info inline-block">
                    {!this.props.basicinfo.phone ? "" :
                        <div>
                            <i className="fa fa-phone"></i>
                            <a href={"tel:" + this.props.basicinfo.phone}>{this.props.basicinfo.phone}</a>
                        </div>
                    }
                </div>
                <div className="email text-info inline-block">
                    {!this.props.basicinfo.email ? "" :
                        <div>
                            <i className="fa fa-envelope-o"></i>
                            <a href={"mailto:" + this.props.basicinfo.email}>{this.props.basicinfo.email}</a>
                        </div>
                    }
                </div>
            </section>
        );
    }
}

