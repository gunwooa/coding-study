'use strict';

// 📖 해시 테이블 스터디 📖

// 직접 주소 테이블
class DirectAddressTable {
  constructor () {
    this.table = [];
  }
  setValue (value = -1) { // 인자 안받으면 -1로 할당
    this.table[value] = value;
  }

  getValue (value = -1) {
    return this.table[value];
  }
  getTable () {
    return this.table;
  }
}

const myTable = new DirectAddressTable();

myTable.setValue(3);
myTable.setValue(10);
myTable.setValue(90);

console.log(myTable.getTable().length);

console.log(myTable.getValue(3));
console.log(myTable.getValue(10));
console.log(myTable.getValue(90));


// 리얼 해시 테이블
console.clear();
class hashTable {
  constructor(size) {
    this.storage = [];
    if (size) {
      this.size = size;
    }
    else {
      this.size = 100; // 디펄트
    }
  }

  // 해시 함수
  hash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) { // key(문자열) 길이만큼 루핑
      hash += key.charCodeAt(i); // 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0 ~ 65535 사이의 정수 반환
    }
    return hash % this.size; // size는 100 이기 때문에 0 ~ 99 리턴 (정수는 0으로 리턴)
  }

  // 저장소 확인
  getTable() {
    return this.storage;
  }

  // 저장(삽입)
  insert = (key, value) => {
    let index = this.hash(key);

    if (this.storage[index] === undefined) { // 해당 인덱스의 배열이 비어있으면
      this.storage[index] = [[key, value]]; // key, valu 할당 !
    }
    else {
      let storageFlag = false;
      for (let i = 0; i < this.storage[index].length; i++) { // 해당 인덱스의 배열 길이만큼 루핑
        if (this.storage[index][i][0] === key) { // 중복된 key가 존재하면
          this.storage[index][i][1] = value; // 해당 배열을 새로 들어온 value로 업데이트
          storageFlag = true; // 중복된 key 업데이트 했다고 알림
        }
      }

      if (!storageFlag) { // 중복되는 key가 없으면
        this.storage[index].push([key, value]); // 해당 배열에 push
      }
    }
  }

  // 삭제
  delete = (key) => {
    let index = this.hash(key);
    if (this.storage[index] === undefined) { // 해당 인덱스의 배열이 비어있으면
      return false;
    }
    else if ( (this.storage[index].length === 1) && (this.storage[index][0][0] === key) ) { // 해당 배열에 저장된 아이템이 1개면서 중복된 key가 존재하면
      this.storage.splice(index, 1); // 지워버린다.(지우려는 인덱스가 빈공간이면 안됨)
      return true;
    }
    else {
      for (let i = 0; i < this.storage[index].length; i++) { // 해당 인덱스의 배열 길이만큼 루핑
        if (this.storage[index][i][0] === key) { // 중복된 key가 존재하면
          this.storage[index].splice(i, 1); // 지워버린다.
          return true;
        }
      }
    }
    return false;
  }

  // 검색
  search = (key) => {
    let index = this.hash(key);
    if (this.storage[index] === undefined) { // 해당 인덱스의 배열이 비어있으면
      return false;
    }
    else if ( (this.storage[index].length === 1) && (this.storage[index][0][0] === key) ) { // 해당 배열에 저장된 아이템이 1개면서 중복된 key가 존재하면
      return this.storage[index][0][1]; // value 리턴
    }
    else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) { // 중복된 key가 존재하면
          return this.storage[index][i][1]; // value 리턴
        }
      }
    }
    return false;
  }
}

let hashData = new hashTable(100);
hashData.insert(`장건우`, { address: `경기도 이천`, age: 28.9, phoneNumber: `010-4432-1991`, familyNumber: 5 });
hashData.insert(`이희빈`, { address: `경기도 인천`, age: 26.9, phoneNumber: `010-1234-1991`, familyNumber: 15 });
hashData.insert(`심경보`, { address: `경기도 성남`, age: 26.9, phoneNumber: `010-2468-1991`, familyNumber: 115 });
hashData.insert(`장인범`, { address: `경기도 안양`, age: 26.9, phoneNumber: `010-1357-1991`, familyNumber: 1115 });
console.log(hashData.search(`장건우`));
console.log(hashData.search(`이희빈`));
console.log(hashData.search(`심경보`));
console.log(hashData.search(`장인범`));
// hashData.delete(1);
// hashData.delete(213);

console.log(hashData.getTable());