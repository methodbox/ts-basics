interface VsCode {
  projectName: string;
  extensions: Array<string>;
  vsCodeVersion: number;
  tsVersion: number;
  usingTypeScript: boolean;
}

class LearnTypeScript implements VsCode {
  projectName = 'Learn TypeScript';
  extensions: Array<string> = [];
  vsCodeVersion = 1.36;
  tsVersion = 3.5;
  usingTypeScript = true;

  constructor(ext: Array<string>) {
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

const badMath = (x: number, y: number): number => {
  return x * y;
};
badMath(myNumber, myString);
