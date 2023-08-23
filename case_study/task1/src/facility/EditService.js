export function EditService() {
    return (
        <div className="mx-5 px-5 pt-3 mt-5">
            <h2 className="text-center fw-bold ">Edit Services</h2>
            <div className="d-flex justify-content-center">
                <form
                    className="w-50 border border-2 border-success p-3 rounded formCSS"
                    noValidate="novalidate"
                >
                    <div className="form-group">
                        <label htmlFor="code" className="h6">
                            Service Name
                        </label>
                        <div className="input-group">
                            <input type="text" id="code" className="form-control" />
                            <span className="input-group-text">
                                <i className="fa-solid fa-person-circle-question" />
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="h6">
                            Service area
                        </label>
                        <div className="input-group">
                            <input type="text" id="name" className="form-control" />
                            <span className="input-group-text">
                                <i className="fa-solid fa-person-circle-question" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 form-group">
                        <div className="choose">
                            <label htmlFor="rent-type">
                                choose rental type:
                            </label>
                            <div></div>
                            <select id="rent-type" name="rent-type">
                                <option value="daily">Date</option>
                                <option value="weekly">Week</option>
                                <option value="monthly">Month</option>
                                <option value="yearly">Year</option>
                            </select>
                            <span className="input-group-text">
                                <i className="fa-solid fa-ranking-star" />
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="anh" className="h6">
                            Capacity
                        </label>
                        <div className="input-group">
                            <input type="text" id="anh" className="form-control" />
                            <span className="input-group-text">
                                <i className="fa-solid fa-person-circle-question" />
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bichs" className="h6">
                            Pool Area
                        </label>
                        <p style={{ color: "red" }} if="" />
                        <div className="input-group">
                            <input type="text" id="bichs" className="form-control" />
                            <span className="input-group-text">
                                <i className="fa-solid fa-person-circle-question" />
                            </span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bich" className="h6">
                            Price
                        </label>
                        <p style={{ color: "red" }} if="" />
                        <div className="input-group">
                            <input type="text" id="bich" className="form-control" />
                            <span className="input-group-text">
                                <i className="fa-solid fa-person-circle-question" />
                            </span>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <button className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                            -- Save <i className="fa-solid fa-floppy-disk" /> --
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}