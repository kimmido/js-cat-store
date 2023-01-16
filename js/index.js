window.onload = function() {

    const itemBox = document.getElementById("itemBox");
    const billItem = document.querySelectorAll("tbody tr");

    const total = document.getElementById("total");
    const sum = document.getElementById("sum");
    const cash = document.getElementById("cash");
    const change = document.getElementById("change");

    
    function numberReplace(element) {
        let result = Number(element.innerText.replace(/,/g, ""));
        return result;
    }

    
    let name;
    let item;
    let itemPrice;
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

            itemPrice = item.querySelector(".price");
            totalPrice += numberReplace(itemPrice);

            itemQTY = Number(item.querySelector(".qty").innerText);
            itemQTY += 1;
            totalQTY++;
            
            item.querySelector(".qty").innerText = itemQTY;
            total.innerText = totalPrice.toLocaleString('ko-KR');
            sum.innerText = totalQTY;
            console.log(sum.innerText);
        }
    }
    


    const moneyWrap = document.getElementById("moneyWrap");
    let money = 0;
    let target;

    moneyWrap.addEventListener("click", function(e) {
        if(e.target.matches(".click")) {
            target = e.target.querySelector(".num")
            money += numberReplace(target);
            cash.innerText = money.toLocaleString('ko-KR');
        }
    })

    moneyWrap.addEventListener("mouseover", function(e) {
        if(e.target.matches(".click")) {
            setTimeout(function() {
                e.target.querySelector(".txt").classList.add("on");
            }, 400)
        }
    })

    moneyWrap.addEventListener("mouseout", function(e) {
        if(e.target.matches(".click")) {
            e.target.querySelector(".txt").classList.remove("on");
        }
    })


    
    const pay = document.getElementById("pay");
    
    pay.onclick = function() {
        if(Number(sum.innerText)) {
            let calc = Number(cash.innerText) - Number(total.innerText);
            change.innerText = calc;

            if(calc >= 0) {
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
            if(item.className == "on") {
                item.classList.remove("on");
                item.querySelector(".qty").innerText = 0;
            }
        });
        total.innerText = 0;
        sum.innerText = 0;
        cash.innerText = 0;
        change.innerText = 0;
    }
}