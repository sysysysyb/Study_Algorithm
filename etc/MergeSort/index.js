/*
 * 영상을 보고 merge sort를 순수함수로 완성해주세요.
 * (영상에 나온 코드는 비순수함수)
 *
 * 순수함수란 외부 상태에 의존하지도 않고 외부 상태를 변경하지도 않는 함수입니다.
 *
 * 즉, 같은 파라미터 값을 넣으면 항상 같은 값을 반환하는 함수이면서
 * 외부 값을 바꾸지 않는 함수입니다.
 *
 * e.g. 배열의 slice 메소드 -> 순수함수, splice 메소드 -> 비순수함수
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const merge = (arr1, arr2) => {
  //your code here!
  // console.log('\nmerge start!');

  // 빈 배열 체크
  if (arr1.length === 0) return arr2;
  else if (arr2.length === 0) return arr1;
  else if (arr1.length === 0 && arr2.length === 0) return [];

  // arr1과 arr2의 길이가 다를 때 비교
  // 길이가 짧은 배열에 Infinity를 요소로 추가
  let hasInfinity = false;
  if (arr1.length < arr2.length) {
    arr1.push(Infinity);
    hasInfinity = true;
  } else if (arr1.length > arr2.length) {
    arr2.push(Infinity);
    hasInfinity = true;
  }
  // console.log('arr1 : ', arr1);
  // console.log('arr2 : ', arr2);

  // 정렬
  const answer = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    // console.log('i : ', i, 'j : ', j);
    if (arr1[i] <= arr2[j]) {
      answer.push(arr1[i]);
      i++;
    } else {
      answer.push(arr2[j]);
      j++;
    }
    // console.log('answer : ', answer);
  }

  // 남은 요소 모두 추가
  if (i < j) {
    for (let k = i; k < arr1.length; k++) {
      answer.push(arr1[k]);
    }
  } else if (j < i) {
    for (let k = j; k < arr2.length; k++) {
      answer.push(arr2[k]);
    }
  }
  // console.log('마지막 추가 - answer : ', answer);

  // Infinity를 추가했다면 필터링하고 반환, 그렇지 않다면 그대로 반환
  if (hasInfinity) {
    const filteredAnswer = answer.filter((el) => el !== Infinity);
    // console.log('리턴 answer : ', filteredAnswer);
    return filteredAnswer;
  } else {
    // console.log('리턴 answer : ', answer);
    return answer;
  }
};

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
const mergeSort = (arr) => {
  //your code here!
  // console.log('\nmergeSort start!');
  if (arr.length < 2) return arr;

  const m = arr.length / 2;
  const leftArr = mergeSort(arr.slice(0, m));
  const rightArr = mergeSort(arr.slice(m));
  return merge(leftArr, rightArr);
};

// *************** 아래 코드는 건들면 안됩니다! ***************
// 테스트용 assert 함수
const assertArraysEqual = (actual, expected, testName) => {
  const isEqual =
    actual.length === expected.length &&
    actual.every((v, i) => v === expected[i]);
  if (isEqual) {
    console.log(`✅ ${testName}`);
  } else {
    console.error(
      `❌ ${testName}\n   Expected: [${expected}]\n   Actual:   [${actual}]`
    );
  }
};

// 테스트 실행 함수
const runTests = () => {
  // merge 함수 테스트
  assertArraysEqual(
    merge([1, 3, 5], [2, 4, 6]),
    [1, 2, 3, 4, 5, 6],
    'merge: two sorted arrays'
  );
  assertArraysEqual(merge([], [1, 2]), [1, 2], 'merge: one empty array');
  assertArraysEqual(merge([], []), [], 'merge: both arrays empty');

  // 기본 케이스
  assertArraysEqual(
    mergeSort([4, 2, 7, 1]),
    [1, 2, 4, 7],
    'mergeSort: 기본 정렬'
  );

  // 엣지 케이스
  assertArraysEqual(mergeSort([]), [], 'mergeSort: 빈 배열');
  assertArraysEqual(mergeSort([5]), [5], 'mergeSort: 원소 하나');

  // 이미 정렬된 배열
  assertArraysEqual(
    mergeSort([1, 2, 3, 4, 5]),
    [1, 2, 3, 4, 5],
    'mergeSort: 정렬된 배열'
  );

  // 역순 배열
  assertArraysEqual(
    mergeSort([5, 4, 3, 2, 1]),
    [1, 2, 3, 4, 5],
    'mergeSort: 역정렬 배열'
  );

  // 중복 원소
  assertArraysEqual(
    mergeSort([4, 2, 2, 1, 4]),
    [1, 2, 2, 4, 4],
    'mergeSort: 중복 포함'
  );

  // 음수 포함
  assertArraysEqual(
    mergeSort([3, -1, 0, -5, 2]),
    [-5, -1, 0, 2, 3],
    'mergeSort: 음수 포함'
  );

  // 짝수 개수
  assertArraysEqual(
    mergeSort([8, 4, 6, 2]),
    [2, 4, 6, 8],
    'mergeSort: 짝수 개수 원소'
  );

  // 홀수 개수
  assertArraysEqual(
    mergeSort([7, 3, 5]),
    [3, 5, 7],
    'mergeSort: 홀수 개수 원소'
  );

  // 큰 배열
  const input = [9, 4, 6, 1, 7, 3, 8, 2, 5, 0];
  const expected = [...input].sort((a, b) => a - b);
  assertArraysEqual(mergeSort(input), expected, 'mergeSort: 10개 원소 배열');
};

runTests();
