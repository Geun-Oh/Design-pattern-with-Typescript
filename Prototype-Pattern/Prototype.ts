const zombie = {
    eatBrains() {
        return 'YUM!'
    }
}

const chad = Object.create(zombie, {name: {value: "chad"}});

console.log(chad) // {name: "chad"}

chad.eatBrains(); // "YUM!"

/**
 * 콘솔에는 나오지 않던 메소드가 출력된다.
 * 이는 js의 프로토타입 체인이 있기 때문에 가능한 일이다.
 * 
 * 아래처럼 proto를 가져오면 eatBrains라는 메소드를 가져올 수 있지만
 * 정석인 방법은 getPrototypeOf 메소드를 사용하는 것이다.
 */

chad.__proto__; //{eatBrains: f}
Object.getPrototypeOf(chad)

//프로토타입 확장하기(아직 해결 안 됨.)
// Array.prototype.bad = function(){
//     console.log('im bad')
//   }

// [].bad();