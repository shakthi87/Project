const express = require("express");
const insertUser = require("../mysql/insert");
const selectUser = require("../mysql/select");
const selectIDUser = require("../mysql/selectid");
const deleteUser = require("../mysql/delete");
const updateUser = require("../mysql/update");
async function create(req, res) {
  const { name, email, address, city, state } = req.body;
  try {
    await insertUser(name, email, address, city, state, (error, result) => {
      if (error) {
        console.error("Error executing query", error);
        res.status(500).json({ message: "Error inserting data" });
        return;
      }
      res.status(200).json({ message: "New user created" });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "server error" });
  }
}

async function readall(req, res) {
  await selectUser((error, result) => {
    if (error) {
      console.error("Error executing query: ", error);
      res.status(500).send("Error fetching data");
      return;
    }
    res.status(200).json({ message: "All User", result });
  });
}
async function readByID(req, res) {
  const { id } = req.params;
  await selectIDUser(id, (error, result) => {
    if (error) {
      console.log("Error executing query:", error);
      res.status(500).send("Error fetching data");
      return;
    }
    res.status(200).json({ message: "User Account", result });
  });
}
async function updateByID(req, res) {
  const { id } = req.params;
  const { name, email, address, city, state } = req.body;
  await updateUser(id, name, email, address, city, state, (error, result) => {
    if (error) {
      console.log("Error executing query:", error);
      res.status(500).send("Error fetching data");
      return;
    }
    res.status(200).json({ message: "User updated" });
  });
}
async function deleteByID(req, res) {
  const { id } = req.params;
  await deleteUser(id, (error, result) => {
    if (error) {
      console.log("Error executing query:", error);
      res.status(500).send("Error fetching data");
      return;
    }
    res.status(200).json({ message: "User Deleted" });
  });
}
module.exports = { create, readall, readByID, updateByID, deleteByID };
