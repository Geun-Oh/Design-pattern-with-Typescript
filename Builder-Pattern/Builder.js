"use strict";
// API 클래스
class API {
    constructor(builder) {
        this.url = builder.url;
        this.method = builder.method;
        this.body = builder.body;
        this.responseDataDepth = builder.responseDataDepth;
    }
    fetch() {
        console.log(this.url);
        console.log(this.method);
        console.log(this.body);
        console.log(this.responseDataDepth);
        return `${this.url}, ${this.method}, ${this.body}, ${this.responseDataDepth}`;
    }
}
// APIBuilder 클래스
// 필수 인자들은 생성자 (constructor)를 통해 받을 수 있고,
// setBody()와 setResponseDataDepth()라는 메소드를 통해 optional인 인자들을 설정한다.
// 마지막으로 build()를 통해 API 객체를 생성한다.
class APIBuilder {
    constructor(reqURL, reqMethod) {
        this.url = reqURL;
        this.method = reqMethod;
    }
    setBody(body) {
        this.body = body;
        return this;
    }
    setResponseDataDepth(depth) {
        this.responseDataDepth = depth;
        return this;
    }
    build() {
        return new API(this);
    }
}
const productListAPI = new APIBuilder("/product-list", "GET") // required
    .setBody({ cutePower: 100 }) // Request Body 설정
    .build(); //빌드! (위에서 설정한 파라미터를 통해 API 객체 생성 후 Return)
productListAPI.fetch();
