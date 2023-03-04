const p = document.getElementById("loan_amount");
const r = document.getElementById("loan_interest");
const n = document.getElementById("loan_tenure");
const submit = document.querySelector(".calculator-btn");
const loan = document.querySelector(".loan_emi");
const differnce = document.querySelector(".loan_interest_rate")
const total = document.querySelector(".loan_total")
const type = document.querySelector("#types")
const yrbtn = document.querySelector(".yr")
const monthbtn = document.querySelector(".m")

submit.addEventListener("click",()=>{
    if(p.value==""||r.value==""||n.value==""){
        alert("please enter value")
    }
})

yrbtn.addEventListener("click",()=>{
    if (n.value !=="") {
        n.value= n.value/12
        let n3= Number(n.value)*12
        yrbtn.style.backgroundColor="#57dba0"
        monthbtn.style.backgroundColor="rgb(10, 136, 147)"
        submit.addEventListener("click", () => {
            if (p.value && r.value && n.value !== "") {
                let r1 = r.value / 1200
                let e = 1 + r1
                let firstmethod = p.value * r1 * ((e) ** n3)
                let secondmethod = ((e) ** n3 - 1)
                let result = Math.round(Number(firstmethod / secondmethod))
                let result1 =Number(firstmethod / secondmethod)
                loan.innerText = "Rs."+ result.toLocaleString()
                let differnce1 = Math.round(result1 * n3) -Number(p.value)
                differnce.innerText = "Rs."+ differnce1.toLocaleString();
                let totalamount = Number(p.value) + Number(differnce1)
                total.innerText = "Rs."+ totalamount.toLocaleString();
            }
            else {
                alert("Please Enter the Values")
            }
        })
    }
   else{
    alert("Please Enter the Period")
   }
})
monthbtn.addEventListener("click",(e)=>{
    if (n.value !=="") {
        n.value= n.value*12
        n1 = n.value;
        monthbtn.style.backgroundColor="#57dba0"
        yrbtn.style.backgroundColor ="rgb(10, 136, 147)"
           submit.addEventListener("click", () => {
               if (p.value && r.value && n.value !== "") {
                   let r1 = r.value / 1200
                   let firstmethod = p.value * r1 * ((1 + r1) ** n1)
                   let secondmethod = ((1 + r1) ** n1 - 1)
                   let result = Math.round(Number(firstmethod / secondmethod))
                   let result1 = (Number(firstmethod/secondmethod));
                   loan.innerText = "Rs."+ result.toLocaleString();
                   let differnce1 = Math.round(result1 * n1 - p.value)
                   differnce.innerText = "Rs."+ differnce1.toLocaleString();
                   let totalamount = Number(p.value) + Number(differnce1)
                   total.innerText ="Rs."+totalamount.toLocaleString();
               }
               else{
                   alert("please enter the values")
               }
           }) 
        }
    else {
        alert("Please Enter the period")
    }
})
