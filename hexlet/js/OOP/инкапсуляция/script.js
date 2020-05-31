const makeUser = ({
  id = null,
  friends = []
} = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends;
  },
});
const users = [
  makeUser({
    id: 2
  }),
  makeUser({
    id: 8
  }),
  makeUser({
    id: 7
  }),
  makeUser({
    id: 100
  }),
];
const user1 = makeUser({
  friends: [users[0], users[1], users[3]]
});
const user2 = makeUser({
  friends: [users[0], makeUser({
    id: 100
  }), users[2]]
});
console.log(user1);
// деструктуктизация
// user({id: "qwe", friends: ["213", "23"]})

const getMutualFriends = (user1, user2) => {
    const friends1 = user1.getFriends();
    const friends2 = user2.getFriends();
    // the esiest way to do it is using intersection function from lodash
    const mutualFriends = friends1.filter((friend1) =>
      friends2.some((friend2) => friend2.id === friend1.id));
    return mutualFriends;
  };
console.log(getMutualFriends(user1, user2));
