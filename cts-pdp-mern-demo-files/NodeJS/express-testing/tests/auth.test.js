import { Register } from "../controllers/UserController";
import User from "../models/User";

jest.mock("../models/User");

const request = {
  body: {
    name: "Test user",
    email: "test@gmail.com",
    password: "123456",
  },
};

const response = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
};

it("Should send a status code of 400 when user exists", async () => {
  User.findOne.mockResolvedValueOnce({
    name: "Test User",
    email: "Test@gmail.com",
    password: "123456",
  });
  await Register(request, response);
  expect(response.status).toHaveBeenCalledWith(400);
  expect(response.send).toHaveBeenCalledWith("User already exists");
});

it("Should send a status code of 201 when user registered successfully", async () => {
  User.findOne.mockResolvedValueOnce(undefined);
  await Register(request, response);
  expect(response.status).toHaveBeenCalledWith(201);
  expect(response.send).toHaveBeenCalledWith("User registered successfully");
});
