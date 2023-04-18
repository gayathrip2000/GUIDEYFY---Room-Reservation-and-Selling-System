import React, { useState, useEffect } from 'react';
import Footer from '../../USER/footer/Footer';
import Usernavbarblog from '../../USER/userNavbarblog/Usernavbarblog'
import './sellerregister.css'
import { Modal, Input, Form, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SlidingPanel1 = ({ email, setEmail, onNext, className }) => {
    return (
        <div className={`sellReg-slidingpane1 sellReg-slidingpane ${className}`}>
            <div className="sr-wrapper-cbox-1">
                {/* Header */}
                <div className="sr-cbox-header-wrapper">
                    <div className="srheaer-title">
                        <h1 >Create your seller account</h1>
                    </div>
                    <div className="srheader-subtitle">
                        <h3 >Create an account to list and manage your property.</h3>
                    </div>
                </div>
                {/* Email Box */}
                <div className="srbemailbox-wrapper">
                    <div className="sremailinput-wrapper">
                        <Form>
                            <Form.Item
                                className='formsigninto-txt-custom'
                                label="Email Address"
                                name="email"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input className="signinmodal-custom-input"
                                    value={email}

                                />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="sremail-continue-btn">
                        <button className='reg-btn-continue' onClick={onNext} >
                            Continue
                        </button>
                    </div>
                    <hr />
                </div>
                {/* Footer */}
                <div className="srb-footer-wrapper">
                    <h3 >Already a seller ?</h3>
                </div>
                <div className="srb-footer-Signin">
                    <button className="srb-footer-Signin-btn">
                        Sign in
                    </button>
                </div>
                <div className="srb-footer-terms">

                    <p className="srb-footer-terms-text">
                        By signing in or creating an account, you agree with our{' '}
                        <a href="/terms" target="_blank" rel="noopener noreferrer">
                            Terms & conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer">
                            Privacy statement
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const SlidingPanel2 = ({ onNext, onPrev, className }) => {
    return (
        <div className={`sellReg-slidingpane2 sellReg-slidingpane ${className}`}>
            <div className="sr-wrapper-cbox">
                <div className='back-button-seller-reg-wrap'>
                    <FontAwesomeIcon
                        className="back-button-seller-reg"
                        icon={faArrowLeft}
                        onClick={onPrev}
                    />
                </div>
                {/* Header */}
                <div className="sr-cbox-header-wrapper">
                    <div className="srheaer-title">
                        <h1 >Contact Details</h1>
                    </div>
                    <div className="srheader-subtitle">
                        <h3 >Your full name and phone number are needed to ensure the security of your GUIDEYFY account.</h3>
                    </div>
                </div>
                {/* First Name */}
                <div className="srbemailbox-wrapper">
                    <div className="sremailinput-wrapper">
                        <Form>
                            <Form.Item
                                className='formsigninto-txt-custom'
                                label="First Name"
                                name="fname"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Please input your First Name!' }]}
                            >
                                <Input className="signinmodal-custom-input"


                                />
                            </Form.Item>
                        </Form>
                    </div>
                    {/* Last Name */}
                    <div className="sremailinput-wrapper-1">
                        <Form>
                            <Form.Item
                                className='formsigninto-txt-custom'
                                label="Last Name"
                                name="lname"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Please input your Last Name!' }]}
                            >
                                <Input className="signinmodal-custom-input"


                                />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="sremailinput-wrapper-1">
                        <Form>
                            <Form.Item
                                className='formsigninto-txt-custom'
                                label="Phone Number"
                                name="email"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input className="signinmodal-custom-input"


                                />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="sremail-continue-btn">
                        <button className='reg-btn-continue' onClick={onNext} >
                            Continue
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

const SlidingPanel3 = ({ onNext, onPrev, className }) => {
    return (
        <div className={`sellReg-slidingpane3 sellReg-slidingpane ${className}`}>
            <div className="sr-wrapper-cbox">
                <div className='back-button-seller-reg-wrap'>
                    <FontAwesomeIcon
                        className="back-button-seller-reg"
                        icon={faArrowLeft}
                        onClick={onPrev}
                    />
                </div>
                {/* Header */}
                <div className="sr-cbox-header-wrapper">
                    <div className="srheaer-title">
                        <h1 >Payment Details</h1>
                    </div>
                    <div className="srheader-subtitle">
                        <h3 >Stripe email required for secure payment processing in Payment Details via payment gateway, Stripe.</h3>
                    </div>
                </div>
                {/* Email Box */}
                <div className="srbemailbox-wrapper-2">
                    <div className="sremailinput-wrapper">
                        <Form>
                            <Form.Item
                                className='formsigninto-txt-custom'
                                label="Stripe Username"
                                name="email"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input className="signinmodal-custom-input"


                                />
                            </Form.Item>
                        </Form>
                        <Form>
                            <Form.Item
                                className='formsigninto-txt-custom'
                                label="Stripe Email"
                                name="email"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input className="signinmodal-custom-input"


                                />
                            </Form.Item>
                        </Form>
                    </div>

                    <div className="sremail-continue-btn">
                        <button className='reg-btn-continue' onClick={onNext} >
                            Continue
                        </button>
                    </div>
                    <hr />
                </div>
                {/* Footer */}
                <div className="srb-footer-wrapper">
                    <h3 >Don’t have a Stripe Account ?</h3>
                </div>
                <div className="srb-footer-Signin">
                    <button className="srb-footer-Signin-btn-1">
                        Create Stripe Account
                    </button>
                </div>

            </div>
        </div>
    );
};

const SlidingPanel4 = ({ onPrev, className }) => {
    return (
        <div className={`sellReg-slidingpane4 sellReg-slidingpane ${className}`}>
            <div className="sr-wrapper-cbox">
                <div className='back-button-seller-reg-wrap'>
                    <FontAwesomeIcon
                        className="back-button-seller-reg"
                        icon={faArrowLeft}
                        onClick={onPrev}
                    />
                </div>
                {/* Header */}
                <div className="sr-cbox-header-wrapper">
                    <div className="srheaer-title">
                        <h1 >Security</h1>
                    </div>
                    <div className="srheader-subtitle">
                        <h3 >We require you to set a strong password to protect and secure your GUIDEYFY account information.</h3>
                    </div>
                </div>
                {/* Email Box */}
                <div className="srbemailbox-wrapper">
                    <div className="sremailinput-wrapper">
                        <Form>
                            <Form.Item
                                className='form-txt-custom'
                                label="Password"
                                name="password"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Please input your password.' }]}
                            >
                                <Input.Password
                                    className="regmodal-custom-input"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>


                            <Form.Item
                                className='form-txt-custom'
                                label="Confirm Password"
                                name="confirmPassword"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                dependencies={['password']}
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords do not match.'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    className="regmodal-custom-input"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="sremail-agree-btn">
                        <button className='reg-btn-agree'  >
                            Agree and continue
                        </button>
                    </div>
                </div>
                {/* Footer */}
                <div className="srb-footer-terms">

                    <p className="srb-footer-terms-text">
                        By signing in or creating an account, you agree with our{' '}
                        <a href="/terms" target="_blank" rel="noopener noreferrer">
                            Terms & conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" target="_blank" rel="noopener noreferrer">
                            Privacy statement
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};


function SellerRegister() {

    const [email, setEmail] = useState('')
    const [activePanel, setActivePanel] = useState(1);
    const [prevPanel, setPrevPanel] = useState(null);

    const handleNext = () => {
        setPrevPanel(activePanel);
        setActivePanel(activePanel + 1);
    };

    const handlePrev = () => {
        setPrevPanel(activePanel);
        setActivePanel(activePanel - 1);
    };




    return (
        <div className='sellerRegister'>
            <Usernavbarblog />
            <div className="sellerRegister-wrapper">
            <SlidingPanel1
                    email={email}
                    setEmail={setEmail}
                    onNext={handleNext}
                    className={`${
                        activePanel === 1 ? "active slide-in-from-right" : activePanel < 1 ? "slide-out-right" : "slide-out-left"
                    }`}
                />
                <SlidingPanel2
                    onNext={handleNext}
                    onPrev={handlePrev}
                    className={`${
                        activePanel === 2 ? "active slide-in-from-right" : activePanel < 2 ? "slide-out-right" : "slide-out-left"
                    }`}
                />
                <SlidingPanel3
                    onNext={handleNext}
                    onPrev={handlePrev}
                    className={`${
                        activePanel === 3 ? "active slide-in-from-right" : activePanel < 3 ? "slide-out-right" : "slide-out-left"
                    }`}
                />
                <SlidingPanel4
                    onPrev={handlePrev}
                    className={`${
                        activePanel === 4 ? "active slide-in-from-right" : "slide-out-right"
                    }`}
                />

            </div>
            <Footer />
        </div>
    )
}

export default SellerRegister