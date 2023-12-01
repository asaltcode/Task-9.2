function elements(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

const h1 = elements("h1", "", "title", "DOM Manipulation with Forms");
const p = elements(
  "p",
  "",
  "description",
  "All data entered in this form will be displayed in a table"
);
let br = document.createElement("br");
let br1 = document.createElement("br");
let br2 = document.createElement("br");

const form = elements("form", "", "form", "");
form.setAttribute("name", "output");

//first name input fild
const fnameLabel = elements("label", "", "", "First name : ");
const fname = elements("input", "", "first-name", "");
const fnameDiv = elements("div", "form-group", "", "");
fname.setAttribute("required", "");
fname.setAttribute("placeholder", "First name");
fnameDiv.append(fnameLabel, fname);

//Last name input fild
const lnameLabel = elements("label", "", "", "Last name : ");
const lname = elements("input", "", "last-name", "");
const lnameDiv = elements("div", "form-group", "", "");
lname.setAttribute("required", "");
lname.setAttribute("placeholder", "Last name");
lnameDiv.append(lnameLabel, lname);

//adddress input fild
const addressLabel = elements("label", "", "", "Address : ");
const address = elements("textarea", "", "address", "");
const addressDiv = elements("div", "form-group", "", "");
address.setAttribute("placeholder", "Address");
addressDiv.append(addressLabel, address);

//pincode input fild
const pincodeLabel = elements("label", "", "", "Pincode : ");
const pincode = elements("input", "", "pincode", "");
const pincodeDiv = elements("div", "form-group", "", "");
pincode.setAttribute("required", "");
pincode.setAttribute("placeholder", "Pincode");
pincodeDiv.append(pincodeLabel, pincode);

const genderLabel = elements("label", "", "", "Gender : ");
const genderDiv = elements("div", "from-group", "", "");
const male = elements("input", "", "male", "");
male.name = "gender";
male.type = "radio";
male.value = "male";
const female = elements("input", "", "femal", "");
female.name = "gender";
female.type = "radio";
female.value = "female";
const other = elements("input", "", "other", "");
other.name = "gender";
other.type = "radio";
other.value = "other";
genderDiv.append(genderLabel, "Male", male, " Female", female, " Other", other);

const foodLabel = elements("label", "", "", "Food : ");
foodLabel.setAttribute("for", "foods");
const selects = elements("select", "", "foods", "");
selects.name = "foods";
selects.setAttribute("multiple", "multiple");

let option1 = elements("option", "", "", "Butter Chicken");
option1.value = "Butter chicken";

let option2 = elements("option", "", "", "Chapati");
option2.value = "Chapati";

let option3 = elements("option", "", "", "Pani puri");
option3.value = "Pani puri";

let option4 = elements("option", "", "", "Paratha");
option4.value = "Paratha";

let option5 = elements("option", "", "", "Samosa");
option5.value = "Samosa";

selects.append(option1, option2, option3, option4, option5);

const stateLabel = elements("label", "", "", "State : ");
const state = elements("input", "", "state", "");
const stateDiv = elements("div", "form-group", "", "");
stateDiv.append(stateLabel, state);

const countryLabel = elements("label", "", "", "Country : ");
const country = elements("input", "", "country", "");
const countryDiv = elements("div", "form-group", "", "");
countryDiv.append(countryLabel, country);

const submit = elements(
  "button",
  "btn btn-primary",
  "submit",
  "submit all my inputs"
);

//It is append in the form
form.append(
  fnameDiv,
  lnameDiv,
  addressDiv,
  pincodeDiv,
  genderDiv,
  foodLabel,
  selects,
  br,
  stateDiv,
  countryDiv,
  br1,
  submit
);

let hr = document.createElement("hr");

//___________________________________________________________________________________________________________________
const tableDiv = elements("div", "tableDiv", "", "");
const detailTable = elements("table", "table", "", "");
const tHead = elements("thead", "", "", "");
const tBody = elements("tbody", "", "", "");
let trHead = elements("tr", "", "", "");
let trBody = elements("tr", "", "bodyTr", "");
let headingList = [
  "First name",
  "Last name",
  "Address",
  "Pincode",
  "Gender",
  "Food",
  "State",
  "Country",
];

function tableHeads(heading) {
  let tH = elements("th", "", "", heading);
  return tH;
}
for (a of headingList) {
  trHead.append(tableHeads(a));
}

tableDiv.append(detailTable);
detailTable.append(tHead, tBody);
tHead.append(trHead);
tBody.append(trBody);

document.body.append(h1, p, form, hr, tableDiv);
let ip = document.getElementById("pincode");

let formFild = document.getElementById("form");

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let Address = document.getElementById("address");
let Pincode = document.getElementById("pincode");
let Gender = document.output.gender;
let food = document.getElementById("foods");
let State = document.getElementById("state");
let Country = document.getElementById("country");
// let firstName = document.getElementById("first-name")

let bodyTr = document.getElementById("bodyTr");
// bodyTr.children(list.remove(td))

console.log(bodyTr.childNodes);
formFild.addEventListener("submit", (e) => {
  e.preventDefault();
  //this code more selections find
  let selected = [];
  for (let option of food.options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }
  bodyTr.innerHTML = `<td>${firstName.value}</td>
  <td>${lastName.value}</td>
  <td>${Address.value}</td>
  <td>${Pincode.value}</td>
  <td>${Gender.value}</td>
  <td>${selected.join(", ")}</td>
  <td>${State.value}</td>
  <td>${Country.value}</td>`;

  form.reset();
});
