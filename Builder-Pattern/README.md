## 빌더 패턴

- 클래스의 구축을 단순화하고 사용자가 전문지식 없이 클래스를 구축할 때 사용하는 패턴.
- 생성 패턴의 일종이다.

복잡한 객체를 단계별로 구성해 빌드할 수 있는 창작 디자인 패턴으로, 패턴을 사용하면 `동일한 구성 코드를 사용`하여 객체의 `다양한 유형과 표현을 생성`할 수 있다.

일반적으로 함수가 여러 인자를 받고 있어 직접 고려하며 입력할 인자가 많을 경우에 사용한다(인자에 `null`값이 있는 경우).

예제 코드는 빌더패턴을 통해 구현한 APIBuilder인데, 이는 아래의 인자들을 통해 API Request를 위한 인자를 꾸려나간다.

1. url(Request URL): string required
2. method(Request Method): string required
3. body(Request Body): any optional
4. ResponseDataDepth(response에서 내가 원하는 데이터의 위치.): string optional