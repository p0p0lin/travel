let data=[];

axios.get('https://raw.githubusercontent.com/p0p0lin/travel/main/travel.json')
.then(function(response) {
data=response.data.data;
init();
})

// let data = [
//     {
//       "id": 0,
//       "name": "肥宅心碎賞櫻3日",
//       "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//       "area": "高雄",
//       "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//       "group": "最後87組",
//       "price": "1,400",
//       "rate": 10
//     },
//     {
//       "id": 1,
//       "name": "貓空纜車雙程票",
//       "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//       "area": "台北",
//       "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//       "group": "最後99組",
//       "price": 240,
//       "rate": 2
//     },
//     {
//       "id": 2,
//       "name": "台中谷關溫泉會1日",
//       "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//       "area": "台中",
//       "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//       "group": "最後20組",
//       "price": "1,765",
//       "rate": 7
//     },
//     {
//         "id": 3,
//         "name": "綠島自由行套裝行程",
//         "imgUrl": "https://raw.githubusercontent.com/p0p0lin/travel/main/img/photo-1477894387642-00a731c511b3%402x.png",
//         "area": "台北",
//         "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
//         "group": "最後8組",
//         "price": "1,280",
//         "rate": 8.6
//     },
//     {
//         "id": 4,
//         "name": "清境高空觀景步道二日遊",
//         "imgUrl": "https://raw.githubusercontent.com/p0p0lin/travel/main/img/photo-1526772662000-3f88f10405ff%402x.png",
//         "area": "台北",
//         "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
//         "group": "最後12組",
//         "price": "2,580",
//         "rate": 8.2
//     },
//     {
//         "id": 5,
//         "name": "南庄度假村露營車二日遊",
//         "imgUrl": "https://raw.githubusercontent.com/p0p0lin/travel/main/img/photo-1598954467835-3b0b6fe3be70%402x.png",
//         "area": "台中",
//         "description": "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
//         "group": "最後2組",
//         "price": "2,480",
//         "rate": 9.2
//     },
//     {
//         "id": 6,
//         "name": "山林悠遊雙人套票",
//         "imgUrl": "https://raw.githubusercontent.com/p0p0lin/travel/main/img/photo-1517760444937-f6397edcbbcd%402x.png",
//         "area": "台中",
//         "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
//         "group": "限時搶購",
//         "price": "880",
//         "rate": 9.3
//     },
//     {
//         "id": 7,
//         "name": "漁樂碼頭釣魚體驗套票",
//         "imgUrl": "https://raw.githubusercontent.com/p0p0lin/travel/main/img/photo-1490556505947-f833c3a09659%402x.png",
//         "area": "台中",
//         "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
//         "group": "最後5組",
//         "price": "1,280",
//         "rate": 8.2
//     },
//     {
//         "id": 8,
//         "name": "熊森公園親子二日遊套票",
//         "imgUrl": "https://raw.githubusercontent.com/p0p0lin/travel/main/img/photo-1535726858289-9ffe2dff6f52%402x.png",
//         "area": "高雄",
//         "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
//         "group": "最後3組",
//         "price": "2,480",
//         "rate": 8.6
//     }
//   ];

const showArea=document.querySelector('.showArea');

//初始化
function init(){
    let str='';
    data.forEach(function(item){
      str+=`<div class="ticketCard">
      <a href="#" onclick="return false"><img src='${item.imgUrl}' alt=""></a>
      <div class="ticketCard-tag">
          <p class="ticketCard-area">${item.area}</p>
          <p class="ticketCard-rate">${item.rate}</p>
      </div>
      <h2>${item.name}</h2>
      <div class="ticketCard-content">
        <p class="ticketCard-state">${item.description}</p>
        <div class="cardValue">
          <div class="valueCount">
              <span class="material-icons">error</span>
              <p>${item.group}</p>
          </div>
          <div class="valuePrice">
              <p>TWD</p>
              <p>$${item.price}</p>
          </div>   
        </div>
      </div>
    </div>`
    })
showArea.innerHTML=str;
}

//新增套票
const addTicket_form = document.querySelector('.addTicket-form');
const ticketName = document.querySelector('.ticketName input');
const imgUrl = document.querySelector('.imgUrl input');
const ticketArea = document.querySelector('.ticketArea select');
const ticketState = document.querySelector('.ticketState textarea');
const ticketCount = document.querySelector('.ticketCount input');
const ticketPrice = document.querySelector('.ticketPrice input');
const ticketRate = document.querySelector('.ticketRate input');

addTicket_form.addEventListener('click',function(e){
    let obj={};
    const addRule = ticketName.value!=='' && imgUrl.value!=='' && ticketArea.value!=="" && parseInt(ticketPrice.value)>=100
    && parseInt(ticketCount.value)>=1 && ticketRate.value>=1 && ticketRate.value<=10 && ticketState.value!=="";
    
    if(e.target.value==="新增套票"){
        e.preventDefault();

        if(addRule===true){
        obj.id=data.length;
        obj.name=ticketName.value;
        obj.imgUrl=imgUrl.value;
        obj.area=ticketArea.value;
        obj.description=ticketState.value;
        obj.group=`最後 ${ticketCount.value} 組`;
        obj.price=ticketPrice.value;
        obj.rate=ticketRate.value;
        data.push(obj);
        alert('資料輸入成功');
        init();
        }
        else{
        alert('尚有資料輸入不完整')
        }

        addTicket_form.reset();
        e.preventDefault();
    }
})


//搜尋地區
const regionSelect = document.querySelector('.regionSelect select');
const searchStatus = document.querySelector('.regionSelect p')



regionSelect.addEventListener('change',function(e){
    let str=''
    let searchNum=0;

    if(e.target.value=="全部地區"){
        init();
        searchStatus.textContent=`本次搜尋共${data.length}筆資料`
    }

    let newData=data.filter(function(item){
        return item.area===e.target.value;
    })

    newData.forEach(function(item){
        if(e.target.value==item.area){
            str+=`<div class="ticketCard">
            <a href="#" onclick="return false"><img src='${item.imgUrl}' alt=""></a>
            <div class="ticketCard-tag">
                <p class="ticketCard-area">${item.area}</p>
                <p class="ticketCard-rate">${item.rate}</p>
            </div>
            <h2>${item.name}</h2>
            <div class="ticketCard-content">
              <p class="ticketCard-state">${item.description}</p>
              <div class="cardValue">
                <div class="valueCount">
                    <span class="material-icons">error</span>
                    <p>${item.group}</p>
                </div>
                <div class="valuePrice">
                    <p>TWD</p>
                    <p>$${item.price}</p>
                </div>   
              </div>
            </div>
            </div>`
            searchNum++;
        }
        showArea.innerHTML=str;
        searchStatus.textContent=`本次搜尋共${searchNum}筆資料`
    })
    
})

