class Bank {
  roi() {
    return 0;
  }
}

class AXIS extends Bank {
  roi() {
    return 9.5;
  }
}

class SBI extends Bank {
  roi() {
    return 12.5;
  }
}

const sbiob = new SBI();
console.log(sbiob.roi());

const axixob = new AXIS();
console.log(axixob.roi());
