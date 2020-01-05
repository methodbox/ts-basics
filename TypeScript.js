class LearnTypeScript {
    constructor(ext) {
        this.projectName = 'Learn TypeScript';
        this.extensions = [];
        this.vsCodeVersion = 1.36;
        this.tsVersion = 3.5;
        this.usingTypeScript = true;
        this.extensions = ext;
    }
    getVersions() {
        return `The Vs Code Version is ${this.vsCodeVersion} and the TypeScript version is ${this.tsVersion}`;
    }
    isUsingTypeScript() {
        return this.usingTypeScript;
    }
}
let myNumber = 10;
let myString = 'this is a string';
const badMath = (x, y) => {
    return x * y;
};
badMath(myNumber, myString);
//# sourceMappingURL=TypeScript.js.map