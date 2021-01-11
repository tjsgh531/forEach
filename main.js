const userList = [
 { id: 1, name: '곰', address: '서울' },
 { id: 2, name: '여우', address: '대전' },
 { id: 3, name: '사자', address: '부산' }
];
printUserList();
function printUserList(){
  const mainContent = document.getElementById('mainContent');
  userList.forEach(element => {
    mainContent.innerHTML +=`
      <div class='user'>
        <h1>${element.name}</h1>
        <p>지역 : ${element.address}</p>
      `
  });
}