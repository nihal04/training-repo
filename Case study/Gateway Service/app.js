import express from "express";
import httpProxy from "http-proxy";
import Consul from "consul";
import "dotenv/config";
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
const proxy = httpProxy.createProxyServer();

app.all("/wishlist/*", async (req, res) => {
  const consul = new Consul();
  let result = await consul.catalog.service
    .nodes("WishlistService")
    .catch((err) => {
      console.log(err);
    });
  const serviceNode = result[0];
  const serviceUrl = `http://${serviceNode.ServiceAddress}:${serviceNode.ServicePort}`;
proxy.web(req, res, { target: serviceUrl });
});

app.all("/movielist/*", async (req, res) => {
  const consul = new Consul();
  let result = await consul.catalog.service
    .nodes("MovieService")
    .catch((err) => {
      console.log(err);
    });
  const serviceNode = result[0];
  const serviceUrl = `http://${serviceNode.ServiceAddress}:${serviceNode.ServicePort}`;
proxy.web(req, res, { target: serviceUrl });
});


app.all("/movie/*", async (req, res) => {
  const consul = new Consul();
  let result = await consul.catalog.service
    .nodes("UserProfile Service")
    .catch((err) => {
      console.log(err);
    });
  const serviceNode = result[0];
  const serviceUrl = `http://${serviceNode.ServiceAddress}:${serviceNode.ServicePort}`;
proxy.web(req, res, { target: serviceUrl });
});

app.all("/*", async (req, res) => {
    const consul = new Consul();
    let result = await consul.catalog.service
      .nodes("Auth Service")
      .catch((err) => {
        console.log(err);
      });
    const serviceNode = result[0];
    const serviceUrl = `http://${serviceNode.ServiceAddress}:${serviceNode.ServicePort}`;
  proxy.web(req, res, { target: serviceUrl });
});


app.listen(process.env.HOST_PORT, () => {
  console.log(`Server running on port ${process.env.HOST_PORT}`);
});
