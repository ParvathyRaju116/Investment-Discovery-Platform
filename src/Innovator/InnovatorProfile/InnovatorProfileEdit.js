import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InnovatorProfileEdit() {

   

    return (
        <div className="container ">
            <div className="border m-3 p-3">
                <h1 className="">Edit Profile</h1>

                <Row className="mt-5">
                    <Col lg={4}>
                        <div className="text-center ">
                            <label htmlFor="edit-profile-img" className="edit-profile-img">
                                <img
                                className="edit-profile-img"
                                    src= "https://i.postimg.cc/fb7Z35cV/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg"
                                    alt=""
                                />
                                <input
                                    id="edit-profile-img"
                                    type="file"
                                    accept="image/*"
                                    // onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                            </label>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <input
                            type="text"
                            className="input-field w-100 mt-4"
                            placeholder="Name"
                        />
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="input-field mt-2 w-100"
                                    placeholder="Designation"
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="input-field mt-2 w-100"
                                    placeholder="Location"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="input-field mt-2 w-100"
                                    placeholder="Date Of Birth"
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="input-field w-100 mt-2"
                                    placeholder="Gender"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <textarea
                    type="text"
                    className="input-field w-100 mt-2"
                    placeholder="Bio"
                />
                <br />
                <label htmlFor="">
                    <b>Contact</b>
                </label>
                <br />

                <Row>
                    <Col>
                        <input
                            type="text"
                            className="input-field w-100 mt-2"
                            placeholder="Phone Number"
                        />
                    </Col>
                    <Col>
                        <input
                            type="text"
                            className="input-field w-100  mt-2"
                            placeholder="Email"
                        />
                    </Col>
                </Row>

                <textarea
                    type="text"
                    className="input-field mt-2 w-100"
                    placeholder="Address"
                />
                <br />
                <br />
                <label htmlFor="">
                    <b>Links</b>
                </label>
                <Row>
                    <Col>
                        <input
                            type="text"
                            className="input-field mt-2 w-100"
                            placeholder="Instagram"
                        />
                    </Col>
                    <Col>
                        <input
                            type="text"
                            className="input-field mt-2 w-100"
                            placeholder="Twitter"
                        />
                    </Col>
                    <Col>
                        <input
                            type="text"
                            className="input-field mt-2 w-100"
                            placeholder="LinkedIn"
                        />
                    </Col>
                    <Col>
                        <input
                            type="text"
                            className="input-field mt-2 w-100"
                            placeholder="Website"
                        />
                    </Col>
                </Row>
                <br />
                <hr />
                <div className="text-end">
                    <button variant=" button" className="button p-1">
                        <b> Save Changes</b>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InnovatorProfileEdit
