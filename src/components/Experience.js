/*
 * @Description: Experience
 * @Author:dzxxdzy
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2020-05-15 17:20:54
 * @LastEditors: Song
 */
import React from 'react';
export default (props) => {
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
                })(props.experience.icon)}

                <div className="fl name-title">
                    <div className="name">
                        {!props.experience.name_link ?
                            <span>{props.experience.name}</span> :
                            <a href={props.experience.name_link}>{props.experience.name}</a>
                        }
                        {!props.experience.name_link ? "" :
                            <i className="fa fa-link"></i>
                        }
                    </div>
                    <div className="title">
                        {props.experience.title}
                    </div>
                </div>
                <div className="fr time-location">
                    <div className="time">
                        {props.experience.time}
                    </div>
                    <div className="location">
                        {!props.experience.location ? "" :
                            <div>
                                <i className="fa fa-map-marker"></i>
                                {props.experience.location}
                            </div>
                        }
                    </div>
                </div>
            </div>
            {!props.experience.description ? "" :
                <div className="description">
                    {props.experience.description}
                </div>
            }
        </section>
    );
}

