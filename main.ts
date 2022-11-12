/**
 * Cada Pino armazena valor em sua variável
 */
input.onPinPressed(TouchPin.P0, function () {
    pontos_p0 += 1
})
/**
 * Botão A limpa pontuação!
 */
input.onButtonPressed(Button.A, function () {
    pontos_p0 = 0
    pontos_p1 = 0
    pontos_p2 = 0
})
input.onPinPressed(TouchPin.P2, function () {
    pontos_p2 += 1
})
input.onPinPressed(TouchPin.P1, function () {
    pontos_p1 += 1
})
let pontos_p2 = 0
let pontos_p1 = 0
let pontos_p0 = 0
pontos_p0 = 0
pontos_p1 = 0
pontos_p2 = 0
/**
 * Bloco sempre mostra soma dos valores armazenados nas variáveis
 */
basic.forever(function () {
    basic.showNumber(pontos_p2 + (pontos_p1 + pontos_p0))
})
