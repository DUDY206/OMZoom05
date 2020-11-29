import React, {useEffect, useState, Component} from 'react';
import axios from 'axios';
import ScriptTag from 'react-script-tag';
import "../../assets/css/bootstrap-dark.min.css"
import "../../assets/css/icons.min.css"
import "../../assets/css/app-dark.min.scss"
const Home = () => {
    // const [users,setUsers] = useState([]);
    // useEffect(async ()=>{
    //     await axios.get('http://localhost:5000/api/users').then(res => {
    //         setUsers(res.data);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // })


    return (
        <div className="page-chat">
            <div className="layout-wrapper d-lg-flex">
                <div className="side-menu flex-lg-column mr-lg-1">
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="../../assets/images/logo.svg" alt="" height="30" />
                        </span>
                        </a>

                        <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="../../assets/images/logo.svg" alt="" height="30" />
                        </span>
                        </a>
                    </div>

                    <div className="flex-lg-column my-auto">
                        <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
                            <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Chats">
                                <a className="nav-link active" id="pills-chat-tab" data-toggle="pill" href="#pills-chat" role="tab" >
                                    <i className="ri-message-3-line"></i>
                                </a>
                            </li>
                            <li className="nav-item" data-toggle="tooltip" data-trigger="hover" data-placement="top" title="Settings">
                                <a className="nav-link" id="pills-setting-tab" data-toggle="pill" href="#pills-setting" role="tab">
                                    <i className="ri-settings-2-line"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                                <a className="nav-link dropdown-toggle" href="javascript: void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="../../assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-right text-muted"></i></a>
                                    <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-right text-muted"></i></a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log out <i className="ri-logout-circle-r-line float-right text-muted"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-lg-column d-none d-lg-block">
                        <ul className="nav side-menu-nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" id="light-dark" href="#" data-toggle="tooltip" data-trigger="hover" data-placement="right" title="Dark / Light Mode">
                                    <i className="ri-sun-line theme-mode-icon"></i>
                                </a>
                            </li>

                            <li className="nav-item btn-group dropup profile-user-dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="../../assets/images/users/avatar-1.jpg" alt="" className="profile-user rounded-circle" />
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Profile <i className="ri-profile-line float-right text-muted"></i></a>
                                    <a className="dropdown-item" href="#">Setting <i className="ri-settings-3-line float-right text-muted"></i></a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log out <i className="ri-logout-circle-r-line float-right text-muted"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="chat-leftsidebar mr-lg-1" style={{overflow: 'scroll' }}>

                    <div className="tab-content">

                        <div className="tab-pane fade show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
                            <div>
                                <div className="px-4 py-4">
                                    <h4 className="mb-4">Chats</h4>
                                    <div className="search-box chat-search-box">
                                        <div className="input-group mb-3 bg-light  input-group-lg rounded-lg">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-link text-muted pr-1 text-decoration-none" type="button">
                                                    <i className="ri-search-line search-icon font-size-18"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control bg-light" placeholder="Search messages or users" />
                                        </div>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <h5 className="mb-3 px-3 font-size-16">Recent</h5>

                                    <div className="chat-message-list" data-simplebar>

                                        <ul className="list-unstyled chat-list chat-user-list">
                                            <li>
                                                <a href="#">
                                                    <div className="media">

                                                        <div className="chat-user-img online align-self-center mr-3">
                                                            <img src="../../assets/images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                                                                <span className="user-status"></span>
                                                        </div>

                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Patrick Hendricks</h5>
                                                            <p className="chat-user-message text-truncate mb-0">Hey! there I'm available</p>
                                                        </div>
                                                        <div className="font-size-11">05 min</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className="unread">
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img away align-self-center mr-3">
                                                            <img src="../../assets/images/users/avatar-3.jpg" className="rounded-circle avatar-xs" alt="" />
                                                                <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Mark Messer</h5>
                                                            <p className="chat-user-message text-truncate mb-0"><i className="ri-image-fill align-middle mr-1"></i> Images</p>
                                                        </div>
                                                        <div className="font-size-11">12 min</div>

                                                        <div className="unread-message">
                                                            <span className="badge badge-soft-danger badge-pill">02</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img align-self-center mr-3">
                                                            <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                G
                                                            </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">General</h5>
                                                            <p className="chat-user-message text-truncate mb-0">This theme is awesome!</p>
                                                        </div>
                                                        <div className="font-size-11">20 min</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className="active">
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img online align-self-center mr-3">
                                                            <img src="../../assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                                                                <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Doris Brown</h5>
                                                            <p className="chat-user-message text-truncate mb-0">Nice to meet you</p>
                                                        </div>
                                                        <div className="font-size-11">10:12 AM</div>

                                                    </div>
                                                </a>
                                            </li>
                                            <li className="unread">
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img align-self-center mr-3">
                                                            <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                D
                                                            </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Designer</h5>
                                                            <p className="chat-user-message text-truncate mb-0">Next meeting tomorrow 10.00AM</p>
                                                        </div>
                                                        <div className="font-size-11">12:01 PM</div>
                                                        <div className="unread-message">
                                                            <span className="badge badge-soft-danger badge-pill">01</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img away align-self-center mr-3">
                                                            <img src="../../assets/images/users/avatar-6.jpg" className="rounded-circle avatar-xs" alt="" />
                                                                <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Steve Walker</h5>
                                                            <p className="chat-user-message text-truncate mb-0"><i className="ri-file-text-fill align-middle mr-1"></i> Admin-A.zip</p>
                                                        </div>
                                                        <div className="font-size-11">03:20 PM</div>

                                                    </div>
                                                </a>
                                            </li>
                                            <li className="typing">
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img align-self-center online mr-3">
                                                            <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                A
                                                            </span>
                                                            </div>
                                                            <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Albert Rodarte</h5>
                                                            <p className="chat-user-message text-truncate mb-0">typing<span className="animate-typing">
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                        </span></p>
                                                        </div>
                                                        <div className="font-size-11">04:56 PM</div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img align-self-center online mr-3">
                                                            <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                M
                                                            </span>
                                                            </div>
                                                            <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Mirta George</h5>
                                                            <p className="chat-user-message text-truncate mb-0">Yeah everything is fine</p>
                                                        </div>
                                                        <div className="font-size-11">12/07</div>

                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img away align-self-center mr-3">
                                                            <img src="../../assets/images/users/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
                                                                <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Paul Haynes</h5>
                                                            <p className="chat-user-message text-truncate mb-0">Good morning</p>
                                                        </div>
                                                        <div className="font-size-11">12/07</div>

                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img align-self-center online mr-3">
                                                            <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                J
                                                            </span>
                                                            </div>
                                                            <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Jonathan Miller</h5>
                                                            <p className="chat-user-message text-truncate mb-0">Hi, How are you?</p>
                                                        </div>
                                                        <div className="font-size-11">12/07</div>

                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img away align-self-center mr-3">
                                                            <img src="../../assets/images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
                                                                <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Ossie Wilson</h5>
                                                            <p className="chat-user-message text-truncate mb-0">I've finished it! See you so</p>
                                                        </div>
                                                        <div className="font-size-11">11/07</div>

                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="media">
                                                        <div className="chat-user-img align-self-center online mr-3">
                                                            <div className="avatar-xs">
                                                            <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                S
                                                            </span>
                                                            </div>
                                                            <span className="user-status"></span>
                                                        </div>
                                                        <div className="media-body overflow-hidden">
                                                            <h5 className="text-truncate font-size-15 mb-1">Sara Muller</h5>
                                                            <p className="chat-user-message text-truncate mb-0">Wow that's great</p>
                                                        </div>
                                                        <div className="font-size-11">11/07</div>

                                                    </div>
                                                </a>
                                            </li>


                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="tab-pane" id="pills-setting" role="tabpanel" aria-labelledby="pills-setting-tab">
                            <div>
                                <div className="px-4 pt-4">
                                    <h4 className="mb-0">Settings</h4>
                                </div>

                                <div className="text-center border-bottom p-4">
                                    <div className="mb-4 profile-user">
                                        <img src="../../assets/images/users/avatar-1.jpg" className="rounded-circle avatar-lg img-thumbnail" alt="" />
                                            <button type="button" className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <i className="ri-pencil-fill"></i>
                                            </button>
                                    </div>

                                    <h5 className="font-size-16 mb-1 text-truncate">Patricia Smith</h5>
                                    <div className="dropdown d-inline-block mb-1">
                                        <a className="text-muted dropdown-toggle pb-1 d-block" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Available <i className="mdi mdi-chevron-down"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Available</a>
                                            <a className="dropdown-item" href="#">Busy</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 user-profile-desc" data-simplebar>

                                    <div id="profile-setting-accordion" className="custom-accordion">
                                        <div className="card shadow-none border mb-2">
                                            <a href="#profile-setting-personalinfocollapse" className="text-dark" data-toggle="collapse"
                                               aria-expanded="true"
                                               aria-controls="profile-setting-personalinfocollapse">
                                                <div className="card-header" id="profile-setting-personalinfoheading">
                                                    <h5 className="font-size-14 m-0">
                                                        Personal Info
                                                        <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                                                    </h5>
                                                </div>
                                            </a>

                                            <div id="profile-setting-personalinfocollapse" className="collapse show"
                                                 aria-labelledby="profile-setting-personalinfoheading" data-parent="#profile-setting-accordion">
                                                <div className="card-body">

                                                    <div className="float-right">
                                                        <button type="button" className="btn btn-light btn-sm"><i className="ri-edit-fill mr-1 align-middle"></i> Edit</button>
                                                    </div>

                                                    <div>
                                                        <p className="text-muted mb-1">Name</p>
                                                        <h5 className="font-size-14">Patricia Smith</h5>
                                                    </div>

                                                    <div className="mt-4">
                                                        <p className="text-muted mb-1">Email</p>
                                                        <h5 className="font-size-14">adc@123.com</h5>
                                                    </div>

                                                    <div className="mt-4">
                                                        <p className="text-muted mb-1">Time</p>
                                                        <h5 className="font-size-14">11:40 AM</h5>
                                                    </div>

                                                    <div className="mt-4">
                                                        <p className="text-muted mb-1">Location</p>
                                                        <h5 className="font-size-14 mb-0">California, USA</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card shadow-none border mb-2">
                                            <a href="#profile-setting-privacycollapse" className="text-dark collapsed" data-toggle="collapse"
                                               aria-expanded="false"
                                               aria-controls="profile-setting-privacycollapse">
                                                <div className="card-header" id="profile-setting-privacyheading">
                                                    <h5 className="font-size-14 m-0">
                                                        Privacy
                                                        <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                                                    </h5>
                                                </div>
                                            </a>
                                            <div id="profile-setting-privacycollapse" className="collapse" aria-labelledby="profile-setting-privacyheading"
                                                 data-parent="#profile-setting-accordion">
                                                <div className="card-body">
                                                    <div className="py-3">
                                                        <div className="media align-items-center">
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Profile photo</h5>

                                                            </div>
                                                            <div className="dropdown ml-2">
                                                                <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button" data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                    Everyone <i className="mdi mdi-chevron-down"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Everyone</a>
                                                                    <a className="dropdown-item" href="#">selected</a>
                                                                    <a className="dropdown-item" href="#">Nobody</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-3 border-top">
                                                        <div className="media align-items-center">
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Last seen</h5>

                                                            </div>
                                                            <div className="ml-2">
                                                                <div className="custom-control custom-switch">
                                                                    <input type="checkbox" className="custom-control-input" id="privacy-lastseenSwitch"  />
                                                                        <label className="custom-control-label" htmlFor="privacy-lastseenSwitch"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="py-3 border-top">
                                                        <div className="media align-items-center">
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Status</h5>

                                                            </div>
                                                            <div className="dropdown ml-2">
                                                                <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button" data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                    Everyone <i className="mdi mdi-chevron-down"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Everyone</a>
                                                                    <a className="dropdown-item" href="#">selected</a>
                                                                    <a className="dropdown-item" href="#">Nobody</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="py-3 border-top">
                                                        <div className="media align-items-center">
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Read receipts</h5>

                                                            </div>
                                                            <div className="ml-2">
                                                                <div className="custom-control custom-switch">
                                                                    <input type="checkbox" className="custom-control-input" id="privacy-readreceiptSwitch"  />
                                                                        <label className="custom-control-label" htmlFor="privacy-readreceiptSwitch"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="py-3 border-top">
                                                        <div className="media align-items-center">
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Groups</h5>

                                                            </div>
                                                            <div className="dropdown ml-2">
                                                                <button className="btn btn-light btn-sm dropdown-toggle w-sm" type="button" data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                    Everyone <i className="mdi mdi-chevron-down"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Everyone</a>
                                                                    <a className="dropdown-item" href="#">selected</a>
                                                                    <a className="dropdown-item" href="#">Nobody</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="card shadow-none border mb-2">
                                            <a href="#profile-setting-securitynoticollapse" className="text-dark collapsed" data-toggle="collapse"
                                               aria-expanded="false"
                                               aria-controls="profile-setting-securitynoticollapse">
                                                <div className="card-header" id="profile-setting-securitynotiheading">
                                                    <h5 className="font-size-14 m-0">
                                                        Security
                                                        <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                                                    </h5>
                                                </div>
                                            </a>
                                            <div id="profile-setting-securitynoticollapse" className="collapse" aria-labelledby="profile-setting-securitynotiheading"
                                                 data-parent="#profile-setting-accordion">
                                                <div className="card-body">

                                                    <div>
                                                        <div className="media align-items-center">
                                                            <div className="media-body overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">Show security notification</h5>

                                                            </div>
                                                            <div className="ml-2">
                                                                <div className="custom-control custom-switch">
                                                                    <input type="checkbox" className="custom-control-input" id="security-notificationswitch" />
                                                                        <label className="custom-control-label" htmlFor="security-notificationswitch"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card shadow-none border mb-2">
                                            <a href="#profile-setting-helpcollapse" className="text-dark collapsed" data-toggle="collapse"
                                               aria-expanded="false"
                                               aria-controls="profile-setting-helpcollapse">
                                                <div className="card-header" id="profile-setting-helpheading">
                                                    <h5 className="font-size-14 m-0">
                                                        Help
                                                        <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                                                    </h5>
                                                </div>
                                            </a>
                                            <div id="profile-setting-helpcollapse" className="collapse" aria-labelledby="profile-setting-helpheading"
                                                 data-parent="#profile-setting-accordion">
                                                <div className="card-body">

                                                    <div>
                                                        <div className="py-3">
                                                            <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">FAQs</a></h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">Contact</a></h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0"><a href="#" className="text-body d-block">Terms & Privacy policy</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="user-chat w-100" style={{overflow: 'scroll',height:100 + 'vh' }}>
                    <div className="d-lg-flex">

                        <div className="w-100">
                            <div className="p-3 p-lg-4 border-bottom">
                                <div className="row align-items-center">
                                    <div className="col-sm-4 col-8">
                                        <div className="media align-items-center">
                                            <div className="d-block d-lg-none mr-2">
                                                <a href="javascript: void(0);" className="user-chat-remove text-muted font-size-16 p-2"><i className="ri-arrow-left-s-line"></i></a>
                                            </div>
                                            <div className="mr-3">
                                                <img src="../../assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs" alt="" />
                                            </div>
                                            <div className="media-body overflow-hidden">
                                                <h5 className="font-size-16 mb-0 text-truncate"><a href="#" className="text-reset user-profile-show">Doris Brown</a> <i
                                                    className="ri-record-circle-fill font-size-10 text-success d-inline-block ml-1"></i></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-4">
                                        <ul className="list-inline user-chat-nav text-right mb-0">

                                            <li className="list-inline-item">
                                                <div className="dropdown">
                                                    <button className="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-search-line"></i>
                                                    </button>
                                                    <div className="dropdown-menu p-0 dropdown-menu-right dropdown-menu-md">
                                                        <div className="search-box p-2">
                                                            <input type="text" className="form-control bg-light border-0" placeholder="Search.." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="list-inline-item d-none d-lg-inline-block">
                                                <button type="button" className="btn nav-btn user-profile-show">
                                                    <i className="ri-user-2-line"></i>
                                                </button>
                                            </li>

                                            <li className="list-inline-item">
                                                <div className="dropdown">
                                                    <button className="btn nav-btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="ri-more-fill"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item d-block d-lg-none user-profile-show" href="#">View profile <i className="ri-user-2-line float-right text-muted"></i></a>
                                                        <a className="dropdown-item" href="#">Archive <i className="ri-archive-line float-right text-muted"></i></a>
                                                        <a className="dropdown-item" href="#">Muted <i className="ri-volume-mute-line float-right text-muted"></i></a>
                                                        <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src="../../assets/images/users/avatar-4.jpg" alt="" />
                                            </div>

                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0">
                                                            Good morning
                                                        </p>
                                                        <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">10:00</span></p>
                                                    </div>
                                                    <div className="dropdown align-self-start">
                                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="conversation-name">Doris Brown</div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="right">
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src="../../assets/images/users/avatar-1.jpg" alt="" />
                                            </div>

                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0">
                                                            Good morning, How are you? What about our next meeting?
                                                        </p>
                                                        <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">10:02</span></p>
                                                    </div>

                                                    <div className="dropdown align-self-start">
                                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="conversation-name">Patricia Smith</div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="chat-day-title">
                                            <span className="title">Today</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src="../../assets/images/users/avatar-4.jpg" alt="" />
                                            </div>

                                            <div className="user-chat-content">

                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0">
                                                            Yeah everything is fine
                                                        </p>
                                                        <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">10:05</span></p>
                                                    </div>
                                                    <div className="dropdown align-self-start">
                                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0">
                                                            & Next meeting tomorrow 10.00AM
                                                        </p>
                                                        <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">10:05</span></p>
                                                    </div>
                                                    <div className="dropdown align-self-start">
                                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="conversation-name">Doris Brown</div>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="right">
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src="../../assets/images/users/avatar-1.jpg" alt="" />
                                            </div>

                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0">
                                                            Wow that's great
                                                        </p>
                                                        <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">10:06</span></p>
                                                    </div>
                                                    <div className="dropdown align-self-start">
                                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="conversation-name">Patricia Smith</div>
                                            </div>

                                        </div>
                                    </li>

                                    <li>
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src="../../assets/images/users/avatar-4.jpg" alt="" />
                                            </div>

                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">

                                                    <div className="ctext-wrap-content">
                                                        <ul className="list-inline message-img  mb-0">
                                                            <li className="list-inline-item message-img-list">
                                                                <div>
                                                                    <a className="popup-img d-inline-block m-1" href="../../assets/images/small/img-1.jpg" title="Project 1">
                                                                        <img src="../../assets/images/small/img-1.jpg" alt="" className="rounded border" />
                                                                    </a>
                                                                </div>
                                                                <div className="message-img-link">
                                                                    <ul className="list-inline mb-0">
                                                                        <li className="list-inline-item">
                                                                            <a href="#">
                                                                                <i className="ri-download-2-line"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li className="list-inline-item dropdown">
                                                                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ri-more-fill"></i>
                                                                            </a>
                                                                            <div className="dropdown-menu">
                                                                                <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                                                <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                                                <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                                                <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>

                                                            <li className="list-inline-item message-img-list">
                                                                <div>
                                                                    <a className="popup-img d-inline-block m-1" href="../../assets/images/small/img-2.jpg" title="Project 2">
                                                                        <img src="../../assets/images/small/img-2.jpg" alt="" className="rounded border" />
                                                                    </a>
                                                                </div>
                                                                <div className="message-img-link">
                                                                    <ul className="list-inline mb-0">
                                                                        <li className="list-inline-item">
                                                                            <a href="#">
                                                                                <i className="ri-download-2-line"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li className="list-inline-item dropdown">
                                                                            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="ri-more-fill"></i>
                                                                            </a>
                                                                            <div className="dropdown-menu">
                                                                                <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                                                <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                                                <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                                                <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">10:09</span></p>
                                                    </div>

                                                    <div className="dropdown align-self-start">
                                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="conversation-name">Doris Brown</div>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="right">
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src="../../assets/images/users/avatar-1.jpg" alt="" />
                                            </div>

                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">

                                                    <div className="ctext-wrap-content">
                                                        <div className="card p-2 mb-2">
                                                            <div className="media align-items-center">
                                                                <div className="avatar-sm mr-3">
                                                                    <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                                                        <i className="ri-file-text-fill"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="text-left">
                                                                        <h5 className="font-size-14 mb-1">admin_v1.0.zip</h5>
                                                                        <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                                                    </div>
                                                                </div>

                                                                <div className="ml-4">
                                                                    <ul className="list-inline mb-0 font-size-20">
                                                                        <li className="list-inline-item">
                                                                            <a href="#" className="text-muted">
                                                                                <i className="ri-download-2-line"></i>
                                                                            </a>
                                                                        </li>
                                                                        <li className="list-inline-item dropdown">
                                                                            <a className="dropdown-toggle text-muted" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                                                               aria-expanded="false">
                                                                                <i className="ri-more-fill"></i>
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="#">Share <i className="ri-share-line float-right text-muted"></i></a>
                                                                                <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">10:16</span></p>
                                                    </div>

                                                    <div className="dropdown align-self-start">
                                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">Copy <i className="ri-file-copy-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Save <i className="ri-save-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Forward <i className="ri-chat-forward-line float-right text-muted"></i></a>
                                                            <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted"></i></a>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="conversation-name">Patricia Smith</div>
                                            </div>

                                        </div>
                                    </li>

                                    <li>
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src="assets/images/users/avatar-4.jpg" alt="" />
                                            </div>

                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0">
                                                            typing
                                                            <span className="animate-typing">
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                            <span className="dot"></span>
                                                        </span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="conversation-name">Doris Brown</div>
                                            </div>

                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div className="p-3 p-lg-4 border-top mb-0" style={{position:'fixed',bottom:0,width:65+'%',background:'#303841'}}>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <div>
                                            <input type="text" className="form-control form-control-lg bg-light border-light" placeholder="Enter Message..." />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="chat-input-links ml-md-2">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect" data-toggle="tooltip" data-placement="top"
                                                            title="Emoji">
                                                        <i className="ri-emotion-happy-line"></i>
                                                    </button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect" data-toggle="tooltip" data-placement="top"
                                                            title="Attached File">
                                                        <i className="ri-attachment-line"></i>
                                                    </button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button type="submit" className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light">
                                                        <i className="ri-send-plane-2-fill"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/js/libs/jquery/jquery.min.js"/>*/}
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/libs/bootstrap/js/bootstrap.bundle.min.js"/>*/}
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/libs/simplebar/simplebar.min.js"/>*/}
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/libs/node-waves/waves.min.js"/>*/}
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/libs/magnific-popup/jquery.magnific-popup.min.js"/>*/}
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/libs/owl.carousel/owl.carousel.min.js"/>*/}
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/js/pages/index.init.js"/>*/}
            {/*<ScriptTag isHydrating={true} type="text/javascript" src="http://localhost:3000/assets/js/app.js"/>*/}
        </div>
   )
}

export default Home;