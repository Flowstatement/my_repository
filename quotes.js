const quotes = [
    {
        "author": "존 셰필드",
        "quote": "서로를 용서하는 것이야 말로 가장 아름다운 사랑의 모습이다.",
    },
    {
        "author": "찰리 채플린",
        "quote": "사람들이 너를 내버려두면 삶은 아름다울 거야",
    },
    {
        "author": "헬렌 켈러",
        "quote": "내가 가진 감각들이 아니라, 그것으로 하는 무엇인가가 나의 세계다.",
    },
    {
        "author": "오프라 윈프리",
        "quote": "저는 미래가 어떻게 전개될지는 모르지만, 누가 그 미래를 결정하는지는 압니다.",
    },
    {
        "author": "윌리엄 셰익스피어",
        "quote": "우리는 사랑하는 친구들에 의해서만 알려진다.",
    },
    {
        "author": "장 폴 리히터",
        "quote": "인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.",
    },
    {
        "author": "척 사이거스",
        "quote": "달력은 열정적인 이들이 아니라, 신중한 이들을 위한 것이다.",
    },
    {
        "author": "캘빈 쿨리지",
        "quote": "나는 중요한 일을 이루려 노력할 때 사람들의 말에 너무 신경쓰지 않는 것이 바람직하다는 사실을 깨달았다. 예외 없이 이들은 안된다고 공언한다. 하지만 바로 이 때가 노력할 절호의 시기이다.",
    },
    {
        "author": "윈스턴 처칠",
        "quote": "나로 말할 것 같으면 긍정주의자인데, 다른 사람이 돼 봤자 별 쓸모가 없는 것 같기 때문이다.",
    },
    {
        "author": "제임스 딘",
        "quote": "존재의 가장 중요한 이유, 세상을 사는 이유는 발견이다",
    },
    {
        "author": "노먼 빈센트 필",
        "quote": "자신을 믿어라. 자신의 능력을 신뢰하라. 겸손하지만 합리적인 자신감없이는 성공할 수도 행복할 수도 없다.",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todays_quote = quotes[Math.floor((Math.random() * quotes.length))];
console.log(todays_quote);

quote.innerText = todays_quote.quote;
author.innerText = todays_quote.author;