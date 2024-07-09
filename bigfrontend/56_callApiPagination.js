/*
Have you ever met some APIs with pagination, and needed to recursively fetch them based on response of previous request ?

Suppose we have a /list API, which returns an array items.

// fetchList is provided for you
const fetchList = (since?: number) => 
  Promise<{items: Array<{id: number}>}>
for initial request, we just fetch fetchList. and get the last item id from response.
for next page, we need to call fetchList(lastItemId).
repeat above process.
The /list API only gives us 5 items at a time, with server-side filtering, it might be less than 5. But if none returned, it means nothing to fetch any more and we should stop.

You are asked to create a function that could return arbitrary amount of items.

const fetchListWithAmount = (amount: number = 5) { }
note

You can achieve this by regular loop, even fancier solutions with async iterators or async generators. You should try them all.
*/
const fetchListWithAmount = async (amount = 5) => {
  // your code here

  let result = [];

  while(result.length <= amount) {
    const lastItem = result[result.length - 1];
    const res = await fetchList(lastItem ? lastItem.id : undefined);
    result.push(...res.items);

    if (!res.items.length) {
      break;
    }
  }

  return result.slice(0, amount);
}