/*
 * @Description: Experience
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2019-08-09 16:58:01
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <section className="experience">
                <div className="clearfix item">
                    {(function (icon) {
                        if (icon && icon !== '') {
                            return (
                                <div className="icon fl">
                                    <img alt='' src={icon} />
                                </div>
                            )
                        }
                    })(this.props.experience.icon)}

                    <div className="fl name-title">
                        <div className="name">
                            {!this.props.experience.name_link ?
                                <span>{this.props.experience.name}</span> :
                                <a href={this.props.experience.name_link}>{this.props.experience.name}</a>
                            }
                            {!this.props.experience.name_link ? "" :
                                <i className="fa fa-link"></i>
                            }
                        </div>
                        <div className="title">
                            {this.props.experience.title}
                        </div>
                    </div>
                    <div className="fr time-location">
                        <div className="time">
                            {this.props.experience.time}
                        </div>
                        <div className="location">
                            {!this.props.experience.location ? "" :
                                <div>
                                    <i className="fa fa-map-marker"></i>
                                    {this.props.experience.location}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {!this.props.experience.description ? "" :
                    <div className="description">
                        {this.props.experience.description}
                    </div>
                }
            </section>
        );
    }
}

