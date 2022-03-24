function Calculator() {
    this.res = 0;
  
    this.init = function(x) {
      this.res = x;
      return this;
    }
    this.add = function(x) {
      this.res += x;
      return this;
    }
    this.mul = function(x) {
      this.res *= x;
      return this;
    }
    this.div = function(x) {
      this.res /= x;
      return this;
    }
    this.sub = function(x) {
      this.res -= x;
      return this;
    }
    this.alert = function() {
      return setTimeout(() => alert(this.res), 5000);
    }
  }


