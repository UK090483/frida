const logInfo = string => {
  FgMagenta = "\x1b[35m"
  Reset = "\x1b[0m"
  console.log(FgMagenta, "___" + string, Reset)
}

const logSuccses = string => {
  FgGreen = "\x1b[32m"
  Reset = "\x1b[0m"
  console.log(FgGreen, "___" + string, Reset)
}
const logError = (string, file) => {
  FgRed = "\x1b[31m"
  Reset = "\x1b[0m"
  console.log(
    FgRed,
    `${"___" + string} ${file ? "___________file: " + file : ""}`,
    Reset
  )
}

const logStart = string => {
  FgMagenta = "\x1b[35m"
  Reset = "\x1b[0m"
  console.log(FgMagenta, string, Reset)
}

exports.logSuccses = logSuccses
exports.logInfo = logInfo
exports.logError = logError
exports.logStart = logStart
