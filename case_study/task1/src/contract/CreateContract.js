export function CreateContract(){
    return(
        <>
  {/* Section: Design Block */}
  <section className="text-center">
    {/* Background image */}
    <div
      className="p-5 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
        height: 300
      }}
    />
    {/* Background image */}
    <div
      className="card mx-4 mx-md-5 shadow-5-strong"
      style={{
        marginTop: "-100px",
        background: "#addccf",
        backdropFilter: "blur(30px)"
      }}
    >
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center fw-bold">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Contract</h2>
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Some contracts
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control"
                />
              </div>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1">
                      Contract start day
                    </label>
                    <input
                      type="date"
                      id="form3Example1"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example2">
                      Contract end date
                    </label>
                    <input
                      type="date"
                      id="form3Example2"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Advance deposit amount
                </label>
                <input
                  type="number"
                  id="form3Example3"
                  className="form-control"
                />
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example4">
                  Total payment amount
                </label>
                <input
                  type="number"
                  id="form3Example4"
                  className="form-control"
                />
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Create contract
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</>

    )
}