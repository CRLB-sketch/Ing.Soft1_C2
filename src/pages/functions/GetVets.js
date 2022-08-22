const GetVets = () => {
  return fetch('http://localhost:8000/api/vets')
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      if (result.success) {
        return { data: result.data, success: true }
      } else {
        return { error: 'Error: ' + result.data, success: false }
      }
    })
    .catch((error) => {
      console.log('Error inesperado con los vets: ' + error)
    })
}

export default GetVets
