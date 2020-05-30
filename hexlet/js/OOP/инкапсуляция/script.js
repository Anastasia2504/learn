const user = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends;
  },
});
console.log(users)

user({id: "qwe", friends: ["213", "23"]})

