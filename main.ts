function 從抽獎名單隨機選擇一位中獎者顯示然後把他從抽獎名單移除 () {
    中獎的索引值 = randint(0, 抽獎名單.length - 1)
    中獎者 = 抽獎名單[中獎的索引值]
    抽獎名單.removeAt(中獎的索引值)
    basic.showString("" + (中獎者))
    basic.pause(500)
    basic.showNumber(抽獎名單.length)
    basic.pause(100)
    basic.clearScreen()
}
function 顯示心跳動畫 (心跳次數: number) {
    for (let index = 0; index < 心跳次數; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(抽獎名單.length)
})
input.onButtonPressed(Button.AB, function () {
    嘗試從抽獎名單中抽一名中獎者()
})
radio.onReceivedString(function (receivedString) {
    basic.showArrow(ArrowNames.South)
    basic.clearScreen()
    if (receivedString == "go") {
        嘗試從抽獎名單中抽一名中獎者()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 抽獎名單.length - 1; index++) {
        basic.showString("" + (抽獎名單[index]))
    }
})
function 嘗試從抽獎名單中抽一名中獎者 () {
    if (抽獎名單.length != 0) {
        顯示心跳動畫(1)
        從抽獎名單隨機選擇一位中獎者顯示然後把他從抽獎名單移除()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
}
let 中獎者 = ""
let 中獎的索引值 = 0
let 抽獎名單: string[] = []
radio.setGroup(99)
抽獎名單 = ["a", "b", "c", "d", "e", "f"]
basic.showString("Total:" + convertToText(抽獎名單.length))
