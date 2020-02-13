const { isEqual } = require("lodash");
const pickenv = require("./index");

process.env.PICK_ENV_TEST1 = "ABCD";
process.env.PICK_ENV_TEST2 = "EFGH";

const expected = {
    PICK_ENV_TEST1: "ABCD",
    PICK_ENV_TEST2: "EFGH",
};

const actual = pickenv(["PICK_ENV.*"]);

const result = isEqual(expected, actual)

process.exit(~~!result);
