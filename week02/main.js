// list
let list = [10, 20, 30]
console.log(list)

// dict
let dict = {'title': 10, 'isbn': 20}
console.log(dict['title'])

//var, let 차이: hoisting, var는 code를 훓어보고 변수들을 뽑아놓는다. 변수 initializing하기 전에
console.log(a) //undefined
var a = 100

//const: 고정값
const CONST_VAL = 100
console.log('const val: ', CONST_VAL)

function sum(num1, num2) {
    console.log('num1: ', num1, 'num2: ', num2)
    return num1 + num2
}

//외부에서 sum 함수를 사용할 수 있게 하겠다.
exports.sum = sum

let temp;
let result = []

temp = sum(3, 5)
console.log(temp)

result.push(temp)
console.log(result[0])

//true, false 리턴하는 방식
if (sum(10, 20) < 50) {
    console.log('true')
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) console.log(i)
}

let list2 = [10, 20, 30, 40]
for (let i = 0; i < list2.length; i++) {
    console.log(list2[i])
}

for (let i of list2) {
    console.log(i)
}

let scores = [
    {'name': '철수', 'score': 90},
    {'name': '영희', 'score': 85},
    {'name': '민수', 'score': 70},
    {'name': '형준', 'score': 50},
    {'name': '기남', 'score': 68},
    {'name': '동희', 'score': 30},
]

for (let i of scores){
    console.log(i['name'])
}

function calculateSum(n) {
    let sum = 0
    for(let i =1; i<n; i++) sum+=i
    return sum
}

exports.calculateSum = calculateSum

function countBerry(basket){
    let count = 0
    for (let i of basket)
        if(i === '딸기') count+=1

    return count
}

exports.countBerry = countBerry

let cityAir = [
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "중구",
    PM10: 22,
    PM25: 14,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "종로구",
    PM10: 24,
    PM25: 18,
    O3: 0.013,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "도심권",
    MSRSTE_NM: "용산구",
    PM10: 0,
    PM25: 15,
    O3: 0.012,
    NO2: 0.027,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "은평구",
    PM10: 36,
    PM25: 14,
    O3: 0.019,
    NO2: 0.018,
    CO: 0.5,
    SO2: 0.005,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "서대문구",
    PM10: 28,
    PM25: 9,
    O3: 0.018,
    NO2: 0.015,
    CO: 0.6,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서북권",
    MSRSTE_NM: "마포구",
    PM10: 26,
    PM25: 8,
    O3: 0.012,
    NO2: 0.021,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "광진구",
    PM10: 17,
    PM25: 9,
    O3: 0.018,
    NO2: 0.016,
    CO: 0.6,
    SO2: 0.001,
    IDEX_NM: "좋음",
    IDEX_MVL: 31,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성동구",
    PM10: 21,
    PM25: 12,
    O3: 0.018,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 33,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "중랑구",
    PM10: 27,
    PM25: 10,
    O3: 0.015,
    NO2: 0.019,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "동대문구",
    PM10: 26,
    PM25: 9,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 34,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "성북구",
    PM10: 27,
    PM25: 8,
    O3: 0.022,
    NO2: 0.014,
    CO: 0.5,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "도봉구",
    PM10: 25,
    PM25: 12,
    O3: 0.024,
    NO2: 0.011,
    CO: 0.3,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "강북구",
    PM10: 30,
    PM25: 15,
    O3: 0.022,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동북권",
    MSRSTE_NM: "노원구",
    PM10: 21,
    PM25: 14,
    O3: 0.017,
    NO2: 0.016,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 36,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "강서구",
    PM10: 36,
    PM25: 16,
    O3: 0.021,
    NO2: 0.013,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "구로구",
    PM10: 23,
    PM25: 10,
    O3: 0.022,
    NO2: 0.016,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "O3",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "영등포구",
    PM10: 29,
    PM25: 15,
    O3: 0.01,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "동작구",
    PM10: 29,
    PM25: 15,
    O3: 0.012,
    NO2: 0.023,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "관악구",
    PM10: 27,
    PM25: 12,
    O3: 0.012,
    NO2: 0.022,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 37,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "금천구",
    PM10: 25,
    PM25: 15,
    O3: 0.015,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.004,
    IDEX_NM: "좋음",
    IDEX_MVL: 43,
    ARPLT_MAIN: "PM25",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "서남권",
    MSRSTE_NM: "양천구",
    PM10: 0,
    PM25: 14,
    O3: 0.016,
    NO2: 0.017,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "점검중",
    IDEX_MVL: -99,
    ARPLT_MAIN: "점검중",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강남구",
    PM10: 31,
    PM25: 16,
    O3: 0.018,
    NO2: 0.018,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "서초구",
    PM10: 34,
    PM25: 13,
    O3: 0.024,
    NO2: 0.019,
    CO: 0.3,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 41,
    ARPLT_MAIN: "PM10",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "송파구",
    PM10: 25,
    PM25: 6,
    O3: 0.014,
    NO2: 0.025,
    CO: 0.4,
    SO2: 0.003,
    IDEX_NM: "좋음",
    IDEX_MVL: 42,
    ARPLT_MAIN: "NO2",
  },
  {
    MSRDT: "201912052100",
    MSRRGN_NM: "동남권",
    MSRSTE_NM: "강동구",
    PM10: 24,
    PM25: 14,
    O3: 0.016,
    NO2: 0.02,
    CO: 0.4,
    SO2: 0.002,
    IDEX_NM: "좋음",
    IDEX_MVL: 39,
    ARPLT_MAIN: "PM25",
  },
];

function countAir(cityAir) {
    let result = []
    for(let i of cityAir)
        if(i['PM10'] < 25) result.push(i['MSRSTE_NM'])

    return result
}

countAir(cityAir)
exports.countAir = countAir
exports.cityAir = cityAir

function printAir(cityAir) {
    let result = countAir(cityAir)
    console.log(result)
}
printAir(cityAir)
