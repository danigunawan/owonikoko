import React from "react";
import { DisplayAccounts } from "../container/DisplayAccounts";
import "../styles/SavedAccounts.css";

export const SavedAccounts = () => {
  return (
    <DisplayAccounts title="Saved Accounts" myAccount={false} accType="Saved" />
  );
};
