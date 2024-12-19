import {isLuhnValid} from "../utils/validation.js";
import chip from "../assets/icons/chip.png";

export default function () {
    const content = document.createElement('div');
    content.innerHTML = `
    <p class="mini-title">Today: </p>
    <hr />
    <div class="box-wrapper">
        <form action="" id="apply-card-form">
            <div class="inputs-wrapper">
                <div>
                    <label for="accountNumber">Enter account number</label>
                    <input type="text" name="accountNumber" id="accountNumber" maxlength="16" class="input">
                </div>
                <div>
                    <label for="accountType">Enter account type</label>
                    <input type="text" name="accountType" id="accountType" class="input">
                </div>
                <button>Apply</button>
            </div>
        </form>
    </div>
    
    <div class="cards">
        <div class="card">
            <div class="card-title">
                <h4>Credit card</h4>
                <h3>VISA</h3>
            </div>
            <div>
                <img src="${chip}" alt="chip" width="48px">
                <h1>98234293847298347928342</h1>
            </div>
            <div>
                <div class="card-date">
                    <p>Issue: 12/23/1200</p>
                    <p>Exp: 12/232/422</p>
                </div>
                <h6>Name</h6>
            </div>
        </div>
<div class="card-back">
<p class="card-p">When found return it to the nearest branch</p>
<div class="black-sign"></div>
<div class="signature" /> </div>
<div class="footer-card">
<h3>AUTHOTIZED SIGNATURE NOT TRANSFERRABLE</h3>
<p>Not valid for payment in foreign countries.</p>
</div>
</div>
    </div>
    
  `;

    const form = content.querySelector("#apply-card-form");
    form.addEventListener("submit", handleFormSubmit);

    return content;
}


function handleFormSubmit(event) {
    event.preventDefault();

    const accountNumber = document.querySelector("#accountNumber").value;
    const accountType = document.querySelector("#accountType").value;

    if(!isLuhnValid(accountNumber)) {
        console.error("Invalid account number");
    }

    const newCard = {
        accountNumber: accountNumber,
        accountType: accountType
    }


    console.log(newCard);

}