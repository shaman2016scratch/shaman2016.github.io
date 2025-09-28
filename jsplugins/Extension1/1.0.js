function pimport(i) {
  importName = i
  if importName == "math" {
    imp1 = (true)
  }
}
function print(t) {
  console.log(t)
}
function m(z1,z2,z3) {
  if imp1 == (true) {
    if z2 == "+" {
      preturn = z1 + z3
      return preturn
    }
    if z2 == "-" {
      preturn = z1 - z3
      return preturn
    }
    if z2 == "*" {
      preturn = z1 * z3
      return preturn
    }
    if z2 == "/" {
      preturn = z1 / z3
      return preturn
    }
  } else {
    console.error("the library for mathematics has not been imported")
  }
}
