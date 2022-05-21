## 프록시 패턴

특정 객체를 사용하고자 할 때, 객체를 직접 참조하는 것이 아닌 해당 객체를 대행하는 객체를 통해 접근하는 방식이다.
이를 사용하면, 해당 객체가 메모리에 존재하지 않아도 기본적인 정보를 참조할 수 있고, 실제 객체의 기능이 반드시 필요한 시점까지 객체의 생성을 미룰 수 있다.

#### 프록시 패턴의 장점

- 사이즈가 큰 객체가 로딩되기 전에도 프록시를 통해 참조가 가능하다.
- 실제 객체의 public, protected 메소드를 숨기고 인터페이스를 통해 노출시킬 수 있다.
- 로컬에 있지 않고 떨어져있는 객체를 사용할 수 있다.
- 원래 객체의 접근에 대해 사전처리를 할 수 있다.

#### 프록시 패턴의 단점

- 객체를 생성할 때 한 단계를 거치게 되므로, 빈번한 객체 생성이 필요한 경우 성능이 저하될 수 있다.
- 프록시 내부에서 객체 생성을 위헤 스레드가 생성, 동기화가 구현되어야 하는 경우 성능이 저하될 수 있다.
- 로직이 난해해 가독성이 떨어질 수 있다.

### 프록시 패턴의 종류

#### 가상 프록시

꼭 필요로 하는 시점가지 객체의 생성을 연기하고, 해당 객체가 생성된 것처럼 동작하도록 만들고 싶을 때 사용하는 패턴이다. 프록시 클래스에서 작은 단위의 작업을 처리하고 리소스가 많이 요구되는 작업들이 필요할 경우에만 주체 클래스를 사용하도록 구현한다.

#### 원격 프록시

서로 다른 주소 공간에 있는 객체에 대해 마치 같은 주소 공간에 있는 것처럼 동작하게 ㅁ나드는 패턴이다. 에시로 Google Docs를 들 수 있다. 브라우저는 브라우저대로 필요한 자원을 로컬에 가지고 있고 또 다른 자원은 Google 서버에 존재하는 형태이다.

#### 보호 프록시

주체 클래스에 대한 접근을 제엉하기 위한 경우 객체에 대한 접근 권한을 제어하거나 객체마다 접근 권한을 달리하고 싶으 때 사용하는 패턴이다. 프록시 클래스에서 클라이언트가 주체 클래스에 대한 접근을 허용할지 말지 결정하도록 할 수 있다.

### 예제

예제에서는 다음과 같은 상황을 가정한다.

용량이 큰 이미지와 글이 같이 있는 문서를 화면에 띄운다고 가정했을 때, 텍스트는 용량이 작아서 빠르게 나타나지만 이미지는 용량이 크기 때문에 느리게 로딩되는 것을 확인할 수 있다. 만일 이렇게 처리되지 않고 텍스트와 이미지 로딩이 모두 끝난 후 홤녀이 나온다면 사용자는 로딩이 끝날때까지 기다려야 한다.

따라서, 로딩이 먼저 끝난 텍스트를 먼저 나오게 하는 것이 좋다. 이와 같은 방식을 가지려면 텍스트 처리용 프로세스, 이미지 처리용 프로세스를 별도로 운영하면 된다.

예제의 코드에서는 ProxyPattern 클래스에서 RealImage 클래스에 직접 접근하지 않고 ProxyImage 클래스에서 객체를 생섣하여 대신 일을 수행하는 것을 확인할 수 있다.