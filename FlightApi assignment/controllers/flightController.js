let flights = [
    { flightNumber: 1, name: "Indigo", source: "Delhi", destination: "Mumbai", Date: "14-02-2024", TicketPrice: 7000 },
    { flightNumber: 2, name: "Vistara", source: "Kolkata", destination: "Bangalore", Date: "15-02-2024", TicketPrice: 6500 },
    { flightNumber: 3, name: "Air Asia", source: "Bangalore", destination: "Hyderabad", Date: "15-02-2024", TicketPrice: 4500 },
  ];
  
  const GetFlights = (req, res) =>{
    res.status(200).send(flights);
  }

  const AddFlights = (req, res) => {
    flights.push(req.body);
    res.status(201).send({ status: 201, message: "Flight detail added successfully" });
  }

  const DeleteFlights = (req, res) => {
    flights = flights.filter((x) => x.flightNumber != req.params.flightNumber);
    res
      .status(200)
      .send({ status: 200, message: "Flight detail deleted successfully" });
  }

  const modifyFlight = (req, res) => {
    let data = flights.find((x) => x.flightNumber == req.params.flightNumber);
    flights.splice(flights.indexOf(data), 1, req.body);
    res.status(201).send({ status: 201, message: "Flight detail modified successfully" });
  }

  const searchFlight = (req, res) => {
    let data = {};
    flights.forEach((item)=>{
        if(item.source === req.query.source && item.destination === req.query.dest){
            data = item;
        }
    })
    res.status(200).send(data);
  }

  const searchFlightNo = (req, res) => {
    let data = flights.find((x) => x.flightNumber == req.params.flightNumber);
    res.status(200).send(data);
  }

  const searchOnDate = (req, res) => {
    let data = flights.find((x) => x.Date == req.params.date);
    res.status(200).send(data);
  }
  
  module.exports = { GetFlights, AddFlights,  DeleteFlights, modifyFlight, searchFlight, searchFlightNo, searchOnDate };
  