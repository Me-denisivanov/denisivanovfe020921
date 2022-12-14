export function getNickUser(userArr: { nickname: string }[], value: string) {
    return userArr.findIndex((elementNick) => elementNick.nickname === value);
}
