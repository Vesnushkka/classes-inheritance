import {
  Bowman,
  Daemon,
  Magician,
  Swordsman,
  Undead,
  Zombie,
} from "../index.js";

test("checkBowman", () => {
  const result = new Bowman("Bowman");
  expect(result).toEqual({
    name: "Bowman",
    type: "Bowman",
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});

test("checkDaemon", () => {
  const result = new Daemon("Daemon");
  expect(result).toEqual({
    name: "Daemon",
    type: "Daemon",
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});

test("checkMagician", () => {
    const result = new Magician("Magician");
    expect(result).toEqual({
      name: "Magician",
      type: "Magician",
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
    });
  });

  test("checkSwordsman", () => {
    const result = new Swordsman("Swordsman");
    expect(result).toEqual({
      name: "Swordsman",
      type: "Swordsman",
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
    });
  });

  test("checkUndead", () => {
    const result = new Undead("Undead");
    expect(result).toEqual({
      name: "Undead",
      type: "Undead",
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
    });
  });


  test("checkZombie", () => {
    const result = new Zombie("Zombie");
    expect(result).toEqual({
      name: "Zombie",
      type: "Zombie",
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
    });
  });