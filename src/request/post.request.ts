
export async function postRequest<T> (body: T) {
  try{
    const data = await fetch('/api/scraping', {
      method: 'POST',
      body: JSON.stringify(body),
    })
    return data.json();
  }
  catch(e)
  {
    return null
  }
}
