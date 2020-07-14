const cube = {
    name: "cube",
    sides: 6,
    weight: 100,
    color: "black"
};

const copyCube = {};

const copy = (key) => {

    for (key in cube) {
        copyCube[key] = cube[key];
    }
    return copyCube;
};

const compareObjects = () => {

    if (cube !== copyCube) {
        console.log("It's different objects");
    }
    copy();
};
compareObjects();

const checkObjLength = (objLength) => {

    objLength = Object.keys(copyCube).length
    return objLength;
};

const ObjAmountStr = strAmount => {

    for (key in copyCube) {
        if (typeof copyCube[key] === "string") {
            strAmount++;
        }
    }
    return strAmount;
};

const ObjectStrLength = strSum => {

    for (key in copyCube) {
        if (typeof copyCube[key] === "string") {
            strSum = strSum + copyCube[key].length;
        }
    }
    return strSum;
};

const ConsoleLogOutput = () => {

    console.log("String length sum = " + ObjectStrLength(0));
    console.log("Total string = " + ObjAmountStr(0));
    console.log("Object length = " + checkObjLength());
};
ConsoleLogOutput();