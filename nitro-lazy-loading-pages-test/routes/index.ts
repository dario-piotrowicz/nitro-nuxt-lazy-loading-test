export default eventHandler(async () => {
  const str = await import('../helloWorld').then(m => m.helloWorld);
  return { str }
})
