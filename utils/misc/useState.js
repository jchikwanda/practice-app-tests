function useState(initialValue) {
    let value = initialValue;
  
    function getValue() {
      return value;
    }
  
    function setValue(newValue) {
      value = newValue;
    }
  
    return [getValue, setValue];
}

module.exports = useState;