module.exports = recurse

function recurse(processor, form, callback) {
  var content = form.content
  var remaining = content.length
  var yielded = { content: [ ] }
  if (form.hasOwnProperty('conspicuous')) {
    yielded.conspicuous = form.conspicuous }
  var calledBack = false

  function next(index, error, result) {
    if (calledBack) {
      return }
    else if (error) {
      callback(error)
      calledBack = true }
    else {
      yielded.content[index] = result
      remaining--
      if (remaining === 0) {
        callback(error) } } }

  content.forEach(function(element, index) {
    if (element.hasOwnProperty('form')) {
      recurse(processor, element.form, function(error, results) {
         } }
    processor(next.bind(undefined, index)) }) }
