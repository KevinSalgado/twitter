const user = require("./../../app/models/user");

describe("Unit Tests for User class", () => {
  test("Create an Iser object", () => {
    const user1 = new user(
      1,
      "carlogilmar",
      "Carlo",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );

    expect(user1.id).toBe(1);
    expect(user1.username).toBe("carlogilmar");
    expect(user1.name).toBe("Carlo");
    expect(user1.bio).toBe("Bio");
    expect(user1.dateCreated).toBe("dateCreated");
    expect(user1.lastUpdated).toBe("lastUpdated");
  });
});
