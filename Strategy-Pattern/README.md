## 전략 패턴

전략 패턴은 알고리즘군을 정의하고 캡슐화해서 각각의 알고리즘군을 수정해서 쓸 수 있도록 해주는 패턴이다. 전략 패턴을 사용하면 클라이언트로부터 알고리즘을 분리해서 독립적으로 변경이 가능하다.

전략 패턴에서는 전략이 될 부분을 클래스 집합으로 만들어둔다.
이휴 전략을 변경하고 싶으면 집합 내의 전략 방법을 스위칭하는 방식으로 대응한다.

### 예제

다음 놀이공원 표가 있다고 가정하자.

- 종류는 성인표, 어린이표, 2인표(성인2명)
- 성인표 3000원, 어린이표 1000원, 2인표 5000원
- 어린이 놀이시설은 어린이표만 이용 가능

이때 위의 상황을 전략 패턴 없이 구현하면 

`switch` 문장을 많이 사용해야하거나, 
카테고리별로 조기 할인표를 추가하거나,
성인 전용 놀이시설이 있어 구분짓고 싶다.

처럼 새로운 카테고리와 처리가 늘어나면서 유지보수가 어려워진다.
현실에서도 '노년표', '단체표', '인터넷 예약표' 와 같이 다양한 종류가 있어 이러한 상황 추가에 대응해야한다.

이를 해결하기 위해 등장한 전략 패턴을 코드로 알아보자.

전략 패턴에 대한 예시는
[전략 패턴](https://intrepidgeeks.com/tutorial/ts-strategic-model-i-cant-hear-right-now)
이곳에서 따왔습니다.