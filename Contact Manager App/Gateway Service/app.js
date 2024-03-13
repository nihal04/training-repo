import express from "express";
import httpProxy from "http-proxy";
import Consul from "consul";
const app = express();

const proxy = httpProxy.createProxyServer();

app.all("/contact/*", async (req, res) => {
    const consul = new Consul();
    let result = await consul.catalog.service
      .nodes("AuthService")
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
      .nodes("ContactService")
      .catch((err) => {
        console.log(err);
      });
    const serviceNode = result[0];
    const serviceUrl = `http://${serviceNode.ServiceAddress}:${serviceNode.ServicePort}`;
  proxy.web(req, res, { target: serviceUrl });
});

app.listen(9000, () => {
  console.log("Server running on port 9000");
});
