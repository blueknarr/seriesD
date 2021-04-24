//main.js의 exports -> main 변수
const main = require('./main') //.js 생략가능

test(
    'main.js sum() test',
    function () {
        expect(main.sum(10,20)).toBe(30)
    }
)

function testFunction(email) {
    // '===':
    if(typeof email === 'string'){
        if(email.includes('@')) return true
    }
    return false

}

test(
    'test email',
    function(){
        expect(testFunction('test@test.com')).toBe(true)
    }
)

test(
    'test email',
    function(){
        expect(testFunction('testtest.com')).toBe(false)
    }
)

test(
    'test email',
    function(){
        expect(testFunction(100)).toBe(false)
    }
)

test(
    'calculateSum test',
    function (){
        expect(main.calculateSum(10)).toBe(45)
    }
)

test(
    'countBerry test',
    function (){
        //fixture : 테스트를 위해 미리 생성해놓는 데이터
        let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
        expect(main.countBerry(fruitsBasket)).toBe(2)
    }
)

test(
    'countBerry test(no berry)',
    function (){
        //fixture : 테스트를 위해 미리 생성해놓는 데이터
        let fruitsBasket = ['사과','감','감','배','포도','포도','포도','감','수박']
        expect(main.countBerry(fruitsBasket)).toBe(0)
    }
)

test(
    'countAir test',
    function (){
        //list 비교는 toEqual 사용
        expect(main.countAir(main.cityAir)).toEqual([
            '중구', '종로구', '용산구', '광진구', '성동구', '노원구', '구로구', '양천구', '강동구'
        ])
    }
)