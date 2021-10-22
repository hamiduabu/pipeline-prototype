console.log('hello world');

/*
POPULATE INVESTORS LIST
 */
const list = document.querySelector('#investors-list');
// console.log(list);
// const listHolder = document.createElement('section');

const listData = db.map((item) => {
  return {
    name: item['Project Title'],
    description: item['Project Description'],
    status: item['Status'],
  };
});

/* <button type="button" class="btn btn-info" data-toggle="modal" data-target="#addInvestment">
        Add New
      </button> */

for (const listDataItem of listData) {
  // let listItem = document.createElement('li');
  // listItem.classList.add('col-sm-6');
  let listItemSection = document.createElement('section');
  listItemSection.classList.add('col-sm-6');
  listItemSection.classList.add('module');
  // listItemSection.dataset.toggle = 'modal';
  // listItemSection.dataset.target = '#addInvestment';
  let listItemHeading = document.createElement('h4');
  let listItemDescription = document.createElement('p');
  let listItemStatus = document.createElement('p');
  let viewBtn = document.createElement('button');
  viewBtn.classList.add('btn');
  viewBtn.classList.add('btn-primary');
  viewBtn.classList.add('mbtn');
  viewBtn.dataset.toggle = 'modal';
  viewBtn.dataset.target = '#viewInvestment';
  viewBtn.innerText = 'View';
  let updateBtn = document.createElement('button');
  updateBtn.innerText = 'Update';
  updateBtn.classList.add('btn');
  updateBtn.classList.add('btn-success');
  updateBtn.classList.add('mbtn');
  updateBtn.dataset.toggle = 'modal';
  updateBtn.dataset.target = '#updateInvestment';
  listItemHeading.innerHTML = '<strong>Name: </strong>' + listDataItem['name'];
  listItemDescription.innerHTML =
    '<strong>Description: </strong>' + listDataItem['description'];
  listItemStatus.innerHTML =
    '<strong>Status: </strong>' + listDataItem['status'];
  listItemSection.append(
    listItemHeading,
    listItemDescription,
    listItemStatus,
    viewBtn,
    updateBtn
  );
  // listItem.appendChild(listItemSection);
  list.appendChild(listItemSection);
}
// list.appendChild(listHolder);
