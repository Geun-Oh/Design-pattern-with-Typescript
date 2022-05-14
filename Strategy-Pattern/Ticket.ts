//기본적으로 전략에 포함되어야하는 내용들이다. 개별 전략별로 필수적인 요소들만 있고, 추가적인 것들을 각각의 전략을 구현할 때 추가하도록 한다.
interface TicketStrategy {
    getPrice(): number;
    getUserCount(): number;
    isAvailableChildAttraction(): boolean;
}

//어린이표에 대한 전략을 세운다.
class ChildTicketStrategy implements TicketStrategy {
    getPrice = (): number => 1000;
    getUserCount = (): number => 1;
    isAvailableChildAttraction = (): boolean => true;
}

//어른 1인 표에 대한 전략을 세운다.
class AdultTicketStrategy implements TicketStrategy {
    getPrice = (): number => 3000;
    getUserCount = (): number => 1;
    isAvailableChildAttraction = (): boolean => false;
}

//어른 2인 동반 표에 대한 전략을 세운다.
class PairTicketStrategy implements TicketStrategy {
    getPrice = (): number => 5000;
    getUserCount = (): number => 2;
    isAvailableChildAttraction = (): boolean => false;
}

//Ticket을 구현한다.
class Ticket {
    private strategy: TicketStrategy;
    constructor(strategy: TicketStrategy) {
        this.strategy = strategy;
    }

    getPrice = (): number => this.strategy.getPrice();
    getUserCount = (): number => this.strategy.getUserCount();
    isAvailableChildAttraction = (): boolean => this.strategy.isAvailableChildAttraction();
}

/**
 * 위와 같은 구현을 통해 코드를 구현하면 새로운 표가 등장하더라도
 * 개별 전략을 늘리는 방식을 통해 대응이 가능하다.
 * 
 * 한마디로 티켓 변경과 추가 요구에 대한 유지보수가 쉬워진다!
 */