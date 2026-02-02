// reveal.js — observe elements with .reveal and toggle .in-view
export function initReveal(){
  if (typeof window === 'undefined') return
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('in-view')
    })
  },{threshold:0.18})

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))
}
