window.onload = function() {

    const itemBox = document.getElementById("itemBox");
    const billItem = document.querySelectorAll("tbody tr");

    const total = document.getElementById("total");
    const sum = document.getElementById("sum");
    const cash = document.getElementById("cash");
    const change = document.getElementById("change");

    
    let item;
    let itemPrice = 0;
    let name;
    let totalPrice = 0;
    let totalQTY = 0;

    itemBox.onclick = function(e) {
        if(e.target.tagName == 'IMG') {
            name = e.target.getAttribute("alt");
            switch(name) {
                case "스크래쳐" : item = billItem[0]
                break;
                case "츄르" : item = billItem[1];
                break;
                case "쥐돌이" : item = billItem[2];
                break;
                case "깃털 낚시대" : item = billItem[3];
                break;
                case "숨숨박스" : item = billItem[4];
                break;
            }

            item.classList.add("on");

            itemPrice += Number(item.querySelector(".price").innerText);
            item.querySelector(".qty").innerText++;

            // totalPrice += Number(itemPrice);
            totalQTY++;
            
            total.innerText = itemPrice;
            sum.innerText = totalQTY;
            console.log(sum.innerText);
        }
    }


    const moneyWrap = document.getElementById("moneyWrap");
    let money = 0;
    // let money

    moneyWrap.onclick = function(e) {
        console.log(e.target);
        if(e.target.matches(".click")) {
            money += Number(e.target.querySelector("span").innerText);
            cash.innerText = money;
        }
    }


    const pay = document.getElementById("pay");
    
    pay.onclick = function() {
        if(Number(sum.innerText)) {
            change.innerText = Number(cash.innerText) - Number(total.innerText);
            if(change.innerText >= 0) {
                alert("감사합니다. 또 방문해주세요");
            } else {
                alert("금액이 부족합니다.");
            }
        } else {
            alert("상품을 선택해주세요.");
        }
    }

    
    const reset = document.getElementById("reset");

    reset.onclick = function() {
        billItem.forEach(item => {
            item.classList.remove("on");
            item.querySelector(".qty").innerText = 0;
        });
        total.innerText = 0;
        sum.innerText = 0;
        cash.innerText = 0;
        change.innerText = 0;
    }
}