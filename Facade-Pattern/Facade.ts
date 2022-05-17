// 리모컨을 조작하는 클래스이다. 복잡한 서브 클래스들 중 하나.
class RemoteControl {
    public turnOn = (): void => {
        console.log("TV를 켜다.");
    }

    public turnOff = (): void => {
        console.log("TV를 끄다.");
    }
}

// 영화 재생과 관련된 클래스이다. 마찬가지로 복잡한 서브클래스 중 하나.
class Movie {
    constructor(private name: string) {
        this.name = name;
    }

    public SearchMovie = (): void => {
        console.log(`${this.name} 영화를 찾다.`);
    }

    public ChargeMovie = (): void => {
        console.log("영화를 결제하다.");
    }

    public PlayMovie = (): void => {
        console.log("영화 재생.");
    }
}

// 음료를 제공하는 클래스이다. 복잡한 서브클래스 중 하나.
class Beverage {
    constructor(private name: string) {
        this.name = name;
    }

    public Prepare = (): void => {
        console.log(`${this.name} 음료 준비 완료.`)
    } 
}

// Facade 클래스. 복잡한 서브클래스들에 대한 인스턴스를 가지며 복잡한 호출 방식에 대하여 viewMovie 메서드 내에서 구현을 하도록 함.
class Facade {
    constructor(private beverageName: string, private movieName: string) {
        this.beverageName;
        this.movieName;
    }

    public viewMovie = () => {
        const beverage: Beverage = new Beverage(this.beverageName);
        const remote: RemoteControl = new RemoteControl();
        const movie: Movie = new Movie(this.movieName);

        beverage.Prepare();
        remote.turnOn();
        movie.SearchMovie();
        movie.ChargeMovie();
        movie.PlayMovie();
    }
}

// 사용자 입장에서는 이제 서브 클래스를 알 이유가 없다. 단지 퍼사드 객체를 이용해 영화 보는 함수를 호출하면 된다.
class FacadeInstance {
    public view = (): void => {
        const facade: Facade = new Facade("콜라", "어벤져스");
        facade.viewMovie();
    }
}