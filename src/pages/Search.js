
import React, { useState, useEffect } from 'react'
import CardComponent from './components/CardComponent'
import Pagination from './components/Pagination'
import Popup from './Popup'
import '../styles/search.css'

import {
  Heading,
  Button,
  Input,
  FormControl,
  Select,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import GetVets from './functions/GetVets'

function Search() {
  const [posts, setPosts] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedVet, setSelectedVet] = useState({})
  const [seePopup, setSeePopup] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const [value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)

  useEffect(() => {
    getVets()
  }, [])

  const idxOfLastPost = currentPage * postsPerPage
  const idxOfFirstPost = idxOfLastPost - postsPerPage
  const currentPosts = posts.slice(idxOfFirstPost, idxOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const styles = {
    modalBtn: {
      width: '110px',
      height: '40px',
      borderRadius: '10px',
      padding: '3px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '17px',
    },
    pagination: {
      listStyle: 'none'
    }
  }

  const getVets = () => {
    ;(async () => {
        const data = await GetVets()
        if (!data['success']) {
          alert(data['error'])
        } else {
          console.log(data)
          setPosts(data['data'])
        }
    })()
  }

  const filterVet = () => {
    alert("FILTER VET :)")
    // fetch('http://127.0.0.1:8000/name_filter', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     search_vet: value,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log('VERIFICAR: ' + result.data)
    //     setPosts(result.data)
    //   })
  }

  const updateData = (the_emergency, the_vet, selected_service, the_time) => {
    alert("UPDATE DATA")
    // fetch('http://127.0.0.1:8000/apply_changues', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     emergency: the_emergency,
    //     vet_type: the_vet,
    //     selected_service: selected_service,
    //     time: the_time,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('VERIFICAR: ' + data)
    //     setPosts(data)
    //   })
  }

  class FilterFrom extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        emerg: true,
        kind: 'Nada',
        services: '',
        the_time: '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.applyFilters = this.applyFilters.bind(this)
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value })
    }

    applyFilters(event) {
      updateData(
        this.state.emerg,
        this.state.kind,
        this.state.services,
        this.state.the_time
      )
    }

    render() {
      return (
        <>
          <form>
            <div className="SearchOuterContainer2">
              <FormControl>
                <label>Emergencia</label>
                <Select
                  focusBorderColor={'rgb(174 213 142)'}
                  name="emerg"
                  value={this.state.emerg}
                  onChange={this.handleChange}
                >
                  <option
                    value="true"
                    onClick={() => console.log('PRUEBA TRUE')}
                  >
                    {'Si'}
                  </option>
                  <option
                    value="false"
                    onClick={() => console.log('PRUEBA FALSE')}
                  >
                    {'No'}
                  </option>
                </Select>
              </FormControl>
            </div>

            <div className="SearchOuterContainer2">
              <FormControl>
                <label>Hora Disponibilidad</label>
                <br />
                <input
                  type="time"
                  name="the_time"
                  value={this.state.the_time}
                  onChange={this.handleChange}
                />
              </FormControl>
            </div>

            <div className="SearchOuterContainer2">
              <FormControl>
                <label>Tipo Veterinaria</label>
                <Select
                  focusBorderColor={'rgb(174 213 142)'}
                  value={this.state.kind}
                  onChange={this.handleChange}
                  name="kind"
                >
                  <option value="Nada">{'Cualquiera'}</option>
                  <option value="Normal">{'Normal'}</option>
                  <option value="Petshop">{'Petshop'}</option>
                  <option value="Clinica">{'Clinica'}</option>
                  <option value="Hospital">{'Hospital'}</option>
                </Select>
              </FormControl>
            </div>

            <div className="SearchOuterContainer2">
              <FormControl>
                <label>Servicios</label>
                <Select
                  focusBorderColor={'rgb(174 213 142)'}
                  value={this.state.services}
                  onChange={this.handleChange}
                  name="services"
                >
                  <option value="">{'Cualquiera'}</option>
                  <option value="Rayos X">{'Rayos X'}</option>
                  <option value="Hospedaje">{'Hospedaje'}</option>
                  <option value="Groominge">{'Groominge'}</option>
                  <option value="Vacunacion">{'Vacunacion'}</option>
                  <option value="Desparacitacion">{'Desparacitacion'}</option>
                  <option value="Castraciones">{'Castraciones'}</option>
                  <option value="Operacion">{'Operacion'}</option>
                  <option value="Emergencias">{'Emergencias'}</option>
                </Select>
              </FormControl>
            </div>
            <Button
              color="white"
              background={'orange'}
              onClick={() => this.applyFilters()}
            >
              Aplicar filtros
            </Button>
          </form>
        </>
      )
    }
  }

  const SeeSearch = () => {
    return (
      <div className="SearchBackgorund">
        <div className="SearchOuterContainer container">
          <div className="SearchInfoContainer">
            <div className="titleContainer">
              <Heading className="title">Filtros</Heading>
            </div>
            <FilterFrom />
          </div>
        </div>
        <div className="SearchOuterContainer3 container">
          <div className="SearchInfoContainer">
            <div className="titleContainer">
              <Heading className="title">Búsqueda de veterinarias</Heading>
            </div>
          </div>

          <div className="SearchGridContainer">
            <div className="modalBtnDiv">
              <Button
                className="modalBtn"
                style={styles.modalBtn}
                onClick={onOpen}
              >
                Filtros
              </Button>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                <div className="modalForm">
                  <ModalHeader>Filtros</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FilterFrom />
                  </ModalBody>
                </div>
              </ModalContent>
            </Modal>
          </div>

          <div className="CardsContainer">
            {currentPosts.map((vet) => {
              return (
                <div>
                  <CardComponent
                    vet={vet}
                    role="option"
                    image="https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg"
                    setSeePopup={setSeePopup}
                    setSelectedVet={setSelectedVet}
                  />
                </div>
              )
            })}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
      </div>
    )
  }

  return (
    <>
      {!seePopup && (
        <>
          <div className="searchWrap">
            <Input
              value={value}
              onChange={handleChange}
              focusBorderColor="rgb(174 213 142)"
              placeholder="Ingrese su búsqueda"
            />
            <Button
              className="buttonS"
              backgroundColor="#ea9a64"
              _hover="rgb(174 213 142)"
              _active={{
                bg: 'rgb(174 213 142)',
                borderColor: 'rgb(174, 213, 142)',
              }}
              color="#fff"
              grid-column="8"
              onClick={filterVet}
            >
              {' '}
              &#x1F50D;{' '}
            </Button>
          </div>
        </> 
      )}
      {!seePopup && <SeeSearch />}
      {seePopup && <Popup vet={selectedVet} regretOriginal={setSeePopup} />}
    </>
  )
}

export default Search