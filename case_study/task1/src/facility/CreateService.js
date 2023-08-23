export function CreateService() {
    return (
        <div className="body">
        <div className="form">
            <div className="form-header">Add Service</div>
            <form className="create__form">
                <div className="form__input-content">
                    <div className="div">
                        <label htmlFor="name">Service Name</label>
                        <input type="text" className="form__input" id="name" />
                    </div>
                    <div className="div">
                        <label htmlFor="time">Service Area</label>
                        <input type="number" className="form__input" id="time" />
                    </div>
                </div>
                <div className="form__input-content">
                    <div className="div">
                        <label htmlFor="di">Capacity</label>
                        <input type="number" className="form__input" id="di" />
                    </div>
                    <div className="div">
                        <label htmlFor="date">Pool Area</label>
                        <input type="number" className="form__input" id="date" />
                    </div>
                </div>
                <div className="form__input-content">
                    <div className="div">
                        <label htmlFor="price">Price</label>
                        <input type="number" className="form__input" id="price" />
                    </div>
                    <div className="div">
                        <label>Choose Rental Type</label>
                        <select>
                            <option className="option" value="">
                                --Choose--
                            </option>
                            <option className="option" value="date">
                                Date
                            </option>
                            <option className="option" value="week">
                                Week
                            </option>
                            <option className="option" value="month">
                                Month
                            </option>
                            <option className="option" value="year">
                                Year
                            </option>
                        </select>
                    </div>
                </div>
                <div className="end-buttons">
                    <button className="my-button">Add</button>
                </div>
            </form>
        </div>
        </div>
    )
}