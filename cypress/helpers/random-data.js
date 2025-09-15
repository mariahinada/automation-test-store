export const RandomDataHelper = {
    randomNumber(digits = 3) {
        return Math.floor(Math.random() * Math.pow(10, digits))
    },

    randomEmail() {
        const num = this.randomNumber(4)
        return `usuario${num}@exemplo.com`
    },

    randomLogin() {
        const num = this.randomNumber(4)
        return `usuario${num}`
    }
}
