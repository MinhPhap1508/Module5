import './list.css';
export function EditCustomer(){
    return(
        <div class="body">
        <div class="form">
            <div class="form-header">Edit customer</div>
            <form class="create__form">
                <div class="form__input-content">
                    <div class="div">
                        <label for="name">Customer Name</label>
                        <input type="text" class="form__input" id="name"/>
                    </div>
                    <div class="div">
                        <label for="time">Id Card</label>
                        <input type="number" class="form__input" id="time"/>
                    </div>
                </div>
        
                <div class="form__input-content">
                    <div class="div">
                        <label for="di">Number Phone</label>
                        <input type="text" class="form__input" id="di"/>
                    </div>
                    <div class="div">
                        <label for="date">Date Of Birth</label>
                        <input type="date" class="form__input" id="date"/>
                    </div>
                </div>
        
                <div class="form__input-content">
                    <div class="div">
                        <label for="email">Email</label>
                        <input type="text" class="form__input" id="email"/>
                    </div>
                    <div class="div">
                        <label>Gender</label>
                        <select>
                            <option class="option" value="">--Gender--</option>
                            <option class="option" value="male">Male</option>
                            <option class="option" value="famale">Famale</option>
                            <option class="option" value="other">Other</option>
                        </select>
                    </div>
                </div>
    
                <div class="form__input-content">
                    <div class="div">
                        <label for="add">Address</label>
                        <input type="text" class="form__input" id="add"/>
                    </div>
                    <div class="div">
                        <label>Customer Type</label>
                        <select>
                            <option class="option" value="">--Customer Type--</option>
                            <option class="option" value="diamond">Diamond</option>
                            <option class="option" value="platinum">Platinum</option>
                            <option class="option" value="gold">Gold</option>
                            <option class="option" value="silver">Silver</option>
                            <option class="option" value="member">Member</option>
                        </select>
                    </div>
                </div>
                <div class="end-buttons">
                    <button class="my-button">Edit</button>
                </div>
            </form>
        </div>
    </div>
    )
}