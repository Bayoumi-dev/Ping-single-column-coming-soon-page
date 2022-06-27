/**
 * Global Variable
 */
 const form = document.getElementById('notify')
 const thankMessage = document.getElementById('thank')
 const close = document.getElementById('close')
 
 /**
  * Email Validation
  * @param {string} Email
  * @returns {boolean | string} Is email validation
  */
 const isValidEmail = email =>
    !email
       ? 'Field is empty'
       : !testEmail(email)
       ? 'Please provide a valid email address'
       : true
 
 // Test the email address
 const testEmail = emailStr =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(emailStr)
 
 /**
  * Handling form submission
  */
 const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email,
       subBtn = e.target.button,
       errorMessage = e.target.children.error,
       checkEmail = isValidEmail(email.value)
 
    if (typeof checkEmail === 'string') {
       errorMessage.textContent = checkEmail
       errorMessage.removeAttribute('hidden')
       email.focus()
       email.classList.add('error')
       shakeBtn(subBtn)
    } else {
       errorMessage.textContent = ''
       errorMessage.setAttribute('hidden', '')
       email.value = ''
       email.classList.remove('error')
       thankMessage.removeAttribute('hidden')
    }
 }
 form.addEventListener('submit', handleSubmit)
 
 /**
  * Shake The button
  */
 const shakeBtn = btn => {
    btn.classList.remove('anim-rubber')
    btn.classList.add('anim-shake')
    btn.classList.contains('anim-shake') &&
       setTimeout(_ => {
          btn.classList.remove('anim-shake')
       }, 500)
 }
 /**
  * Close The Thank Message
  */
 close.addEventListener('click', _ => thankMessage.setAttribute('hidden', ''))
 