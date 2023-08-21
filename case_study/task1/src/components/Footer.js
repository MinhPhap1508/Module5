function Footer() {
    return (
        <div className="container-fluid pt-5" style={{ marginLeft: "10rem" }}>
            <div className="row px-xl-5 pt-5">
                <div className="col">
                    <h3 style={{ color: "#cbbe73" }}>Travel Guide</h3>
                    <p>
                        Furama Resort is the premier base from which to explore one of Asia's
                        most exciting destinations. Just a short drive from Da Nang are four
                        UNESCO World Heritage Sites:
                    </p>
                    <h5 className=" text-uppercase mb-4" style={{ color: "#cbbe73" }}>
                        {" "}
                        Address
                    </h5>
                    <div className="d-flex flex-column justify-content-start">
                        <p>
                            1. The ancient capital of Hue <span>2 hours</span>
                        </p>
                        <p>
                            2. Hoi An Ancient Town <span>30 minutes</span>
                        </p>
                        <p>
                            3. My Son Sanctuary <span>90 minutes</span>
                        </p>
                        <p>
                            4. Phong Nha Cave <span>3 hours</span>
                        </p>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="row">
                        <div className="col-md-3 mb-5">
                            <h5 className=" text-uppercase mb-4" style={{ color: "#cbbe73" }}>
                                Furama
                            </h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className=" mb-2" href="#" style={{ textDecoration: "none" }}>
                                    <i className="fa-solid fa-circle" style={{ color: "#046056" }} />
                                    Public price
                                </a>
                                <a className=" mb-2" href="#" style={{ textDecoration: "none" }}>
                                    <i className="fa-solid fa-circle" style={{ color: "#046056" }} />
                                    Lifestyle Blog
                                </a>
                                <a className=" mb-2" href="#" style={{ textDecoration: "none" }}>
                                    <i className="fa-solid fa-circle" style={{ color: "#046056" }} />
                                    Recruitment
                                </a>
                                <a className=" mb-2" href="#" style={{ textDecoration: "none" }}>
                                    <i className="fa-solid fa-circle" style={{ color: "#046056" }} />
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <h5 className=" text-uppercase mb-4" style={{ color: "#cbbe73" }}>
                                {" "}
                                Contact
                            </h5>
                            <p className="mb-2">
                                <i
                                    className="fa-sharp fa-solid fa-location-dot"
                                    style={{ color: "#046056" }}
                                />{" "}
                                103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                                District, Danang City, Vietnam <br />
                                <i className="fa-solid fa-phone" style={{ color: "#046056" }} />
                                Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666 <br />
                                <i
                                    className="fa-solid fa-envelope"
                                    style={{ color: "#046056" }}
                                />{" "}
                                Email: reservation@furamavietnam.com * www.furamavietnam.com GDS
                                Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236, Sabre-GD 032771,
                                Worldspan- GD DADFU
                            </p>
                            <div className="d-flex">
                                <a
                                    className="btn btn-light btn-square mr-2"
                                    href="#"
                                    style={{ textDecoration: "none" }}
                                >
                                    <i className="fa-brands fa-facebook" />
                                </a>
                                <a
                                    className="btn btn-light btn-square mr-2"
                                    href="#"
                                    style={{ textDecoration: "none" }}
                                >
                                    <i className="fa-brands fa-instagram" />
                                </a>
                                <a
                                    className="btn btn-light btn-square mr-2"
                                    href="#"
                                    style={{ textDecoration: "none" }}
                                >
                                    <i className="fa-brands fa-square-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Footer