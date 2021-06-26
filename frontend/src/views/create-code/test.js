let r = "set_char".replace(/_([a-z])/g, function (a, b) {
    return b.toUpperCase();
  }).replace(/(^[a-z])/g, function (a, b) {
    return b.toUpperCase();
  })

  console.log(r);