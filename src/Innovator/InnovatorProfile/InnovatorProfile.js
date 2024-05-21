import React from "react";
import "./InnovatorProfile.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


function InnovatorProfile() {
  return (
    <div className="profile-body ">
      <div className="box"></div>
      <Row className="profile container w-100">
        <Col
          lg={4}
          className="  d-flex align-item-center justify-content-center"
        >
          <div>
            <img
              className="Profile-Img"
              src="https://i.postimg.cc/fb7Z35cV/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg"
              alt=""
            />
          </div>{" "}
        </Col>
        <Col lg={8} className="details">
          <Row className="">
            <Col lg={9} className="">
              <h1>Parvathy Raju</h1>
              <h5>Entrepreneur</h5>
              <p>
                <i class="fa-solid fa-location-dot"></i> Kochi, Kerala
              </p>
            </Col>
            <Col lg={3} className="align-item-center justify-content-center ">
              <div className="fs-3 d-flex mt-2 social-media-icons ">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-square-x-twitter ms-4"></i>
                <i class="fa-brands fa-linkedin ms-4"></i>
                <i class="fa-solid fa-link ms-4"></i>
              </div>
              <div className="text-center mt-4">
               <Link to={'/innovator/profile-edit'} style={{textDecoration:'none'}}>
                  <button className="button p-1" >
                    <b>Edit Profile</b>
                  </button>
               </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="about container w-100 mt-4">
        <span className="about-head">
          <h3>Professional Bio{"   "}</h3>
        </span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          provident quasi dolore? Voluptatum nihil cum minus rerum, itaque
          maiores libero perspiciatis numquam at iste consequatur optio sequi et
          facere quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Hic obcaecati temporibus quidem excepturi officiis possimus
          necessitatibus numquam distinctio incidunt, iusto cumque deleniti
          dicta, odio cupiditate libero ea magnam enim quisquam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptates aliquid,
          cumque sapiente libero quas blanditiis fugit minus fuga ea officiis
          facilis earum, iusto iste reiciendis aut fugiat voluptas doloremque
          id!
        </p>
        <Row className="mt-4">
          <Col>
            <span className="about-head">
              <h3>Contact{"   "}</h3>
            </span>

            <p>
              Phone :<b>+91 85890 73071</b>
            </p>
            <p>
              Email :<b>@parvathyraju116@gmail.com</b>
            </p>
            <p>
              Address : <b>123, abcd Street, Kochi - 682001, Kerala, India.</b>
            </p>
          </Col>
          <Col>
            <span className="about-head">
              <h3>Basic Details{"   "}</h3>
            </span>
            <p>
              Date Of Birth :<b> 18/09/2002 </b>
            </p>
            <p>
              Gender :<b> Female</b>
            </p>
          </Col>
        </Row>
      </div>



    
    </div>
  );
}

export default InnovatorProfile;
