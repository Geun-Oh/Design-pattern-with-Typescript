const zombie = {
    eatBrains(){
          return 'yum ๐ง '
    }
  }
  
  const chad = Object.create(zombie, {name: {value: 'chad'}});
  
  console.log(chad) // {name: 'chad'}
  
  chad.eatBrains(); // 'yum ๐ง '
  // console์๋ ๋์ค์ง ์๋ ๋ฉ์๋๊ฐ ์ถ๋ ฅ๋๋ค. 
  // ์ด๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ํ๋กํ ํ์ ์ฒด์ธ์ด ์๊ธฐ ๋๋ฌธ ๊ฐ๋ฅํ ์ผ
  
  // ์๋์ฒ๋ผ proto๋ฅผ ๊ฐ์ ธ์ค๋ฉด eatBrains๋ผ๋ ๋ฉ์๋๋ฅผ ๊ฐ์ ธ์ฌ ์ ์์ง๋ง 
  // ์ ์์ธ ๋ฐฉ๋ฒ์ getPrototypeOf ๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋ ๊ฒ!
  
  chad.__proto__; // {eatBrains: f}
  Object.getPrototypeOf(chad)

  // ํ๋กํ ํ์ ํ์ฅํ๊ธฐ
  chad.prototype.bad = function() {
      console.log("im bad")
  }
  
  chad.bad()