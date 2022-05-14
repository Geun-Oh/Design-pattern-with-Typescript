"use strict";
//어린이표에 대한 전략을 세운다.
class ChildTicketStrategy {
    constructor() {
        this.getPrice = () => 1000;
        this.getUserCount = () => 1;
        this.isAvailableChildAttraction = () => true;
    }
}
//어른 1인 표에 대한 전략을 세운다.
class AdultTicketStrategy {
    constructor() {
        this.getPrice = () => 3000;
        this.getUserCount = () => 1;
        this.isAvailableChildAttraction = () => false;
    }
}
//어른 2인 동반 표에 대한 전략을 세운다.
class PairTicketStrategy {
    constructor() {
        this.getPrice = () => 5000;
        this.getUserCount = () => 2;
        this.isAvailableChildAttraction = () => false;
    }
}
//Ticket을 구현한다.
class Ticket {
    constructor(strategy) {
        this.getPrice = () => this.strategy.getPrice();
        this.getUserCount = () => this.strategy.getUserCount();
        this.isAvailableChildAttraction = () => this.strategy.isAvailableChildAttraction();
        this.strategy = strategy;
    }
}
/**
 * 위와 같은 구현을 통해 코드를 구현하면 새로운 표가 등장하더라도
 * 개별 전략을 늘리는 방식을 통해 대응이 가능하다.
 *
 * 한마디로 티켓 변경과 추가 요구에 대한 유지보수가 쉬워진다!
 */ 
